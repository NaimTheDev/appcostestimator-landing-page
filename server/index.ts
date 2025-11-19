import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyMailer from "fastify-mailer";
import type { SentMessageInfo, Transporter } from "nodemailer";
import dotenv from "dotenv";

export interface FastifyMailerNamedInstance {
  [namespace: string]: Transporter<SentMessageInfo>;
}

export type FastifyMailer = FastifyMailerNamedInstance & Transporter<SentMessageInfo>;

declare module "fastify" {
  interface FastifyInstance {
    mailer: FastifyMailer;
  }
}

dotenv.config();

const app = Fastify();
const PORT = Number(process.env.PORT) || 3001;

type JoinBetaBody = {
  email?: string;
};

const subject = "👋 Welcome to the AppCostEstimator Beta!";
const text = `Hey there!

Thanks for signing up for the AppCostEstimator beta — we're excited to have you on board.

As part of the beta program, you'll get early access, help shape our pricing, and lock in potential future discounts.

Feel free to explore the estimator tool and share your thoughts with us — your feedback really matters.

Cheers,  
Naim  
Founder, AppCostEstimator  
https://getmyappcostestimator.com`;

const html = `
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
      `;

app.get("/api/health", async () => {
  return { status: "OK", message: "Server is running" };
});

app.post<{ Body: JoinBetaBody }>("/api/join-beta", async (request, reply) => {
  try {
    const { email } = request.body;

    if (!email || !email.includes("@")) {
      return reply.status(400).send({
        success: false,
        error: "Please provide a valid email address",
      });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      request.log.error("GMAIL_USER or GMAIL_PASS environment variables are not set");
      return reply.status(500).send({
        success: false,
        error: "Email service is not configured",
      });
    }

    await request.server.mailer.sendMail({
      from: gmailUser,
      to: email,
      subject,
      text,
      html,
    });

    request.log.info(`Welcome email sent to: ${email}`);
    return { success: true, message: "Welcome email sent successfully!" };
  } catch (error) {
    request.log.error({ err: error }, "Error sending welcome email");
    return reply.status(500).send({
      success: false,
      error: "Failed to send welcome email. Please try again.",
    });
  }
});

const start = async () => {
  try {
    await app.register(fastifyCors);
    await app.register(fastifyMailer, {
      transport: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      },
    });
    await app.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`Server running on port ${PORT}`);
    console.log(`Gmail credentials configured: ${!!(process.env.GMAIL_USER && process.env.GMAIL_PASS)}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
