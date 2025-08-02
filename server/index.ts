import express from "express";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configure SendGrid
const apiKey = process.env.SENDGRID_API_KEY || "";
if (!apiKey.startsWith("SG.")) {
  console.warn("Warning: SendGrid API key format appears invalid");
}
sgMail.setApiKey(apiKey);

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Join beta endpoint
app.post("/api/join-beta", async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address",
      });
    }

    // Check if SendGrid API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY environment variable is not set");
      return res.status(500).json({
        success: false,
        error: "Email service is not configured",
      });
    }

    // Prepare welcome email
    const msg = {
      to: email,
      from: "scopecraftapp@getmyappcostestimator.com",
      subject: "👋 Welcome to the AppCostEstimator Beta!",
      text: `Hey there!

Thanks for signing up for the AppCostEstimator beta — we're excited to have you on board.

As part of the beta program, you'll get early access, help shape our pricing, and lock in potential future discounts.

Feel free to explore the estimator tool and share your thoughts with us — your feedback really matters.

Cheers,  
Naim  
Founder, AppCostEstimator  
https://getmyappcostestimator.com`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Welcome to the AppCostEstimator Beta 🎉</h2>
          <p>Hey there!</p>
          <p>Thanks for signing up for the beta — we're excited to have you on board.</p>
          <p>As part of the beta program, you'll get:</p>
          <ul>
            <li>✅ Early access to new features</li>
            <li>✅ A say in how we price the product</li>
            <li>✅ Locked-in future discounts</li>
          </ul>
          <p>Feel free to explore the <a href="https://appcostestimator.com/">estimator tool</a> and share your thoughts with us.</p>
          <p>Cheers,<br/>Naim<br/>Founder, AppCostEstimator</p>
        </div>
      `,
    };

    // Send email via SendGrid
    await sgMail.send(msg);

    console.log(`Welcome email sent to: ${email}`);
    res.json({ success: true, message: "Welcome email sent successfully!" });
  } catch (error: unknown) {
    console.error("Error sending welcome email:", error);

    // Handle specific SendGrid errors
    if (error && typeof error === "object" && "response" in error) {
      const sendGridError = error as {
        response?: { body?: { errors?: Array<{ message: string }> } };
      };
      if (sendGridError.response?.body?.errors) {
        const errorMessage = sendGridError.response.body.errors[0];
        return res.status(400).json({
          success: false,
          error: `Email error: ${errorMessage.message}`,
        });
      }
    }

    res.status(500).json({
      success: false,
      error: "Failed to send welcome email. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`SendGrid configured: ${!!process.env.SENDGRID_API_KEY}`);
});
