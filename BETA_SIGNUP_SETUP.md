# Beta Signup Email Setup

This project includes a beta signup form with automatic welcome email sending via SendGrid.

## Prerequisites

1. **SendGrid Account**: Sign up at [sendgrid.com](https://sendgrid.com)
2. **Verified Sender**: Configure `scopecraftapp@getmyappcostestimator.com` as a verified sender in SendGrid
3. **API Key**: Generate an API key from [SendGrid Settings](https://app.sendgrid.com/settings/api_keys)

## Setup Instructions

1. **Environment Configuration:**
   ```bash
   cp .env.example .env
   ```
2. **Add your SendGrid API Key:**

   ```bash
   # Edit .env file
   SENDGRID_API_KEY=SG.your_actual_sendgrid_api_key_here
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start Development Servers:**

   ```bash
   # Start both frontend and backend
   npm run dev:full

   # Or start them separately:
   npm run dev          # Frontend (localhost:5173)
   npm run server:dev   # Backend (localhost:3001)
   ```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/join-beta` - Beta signup endpoint
  - Accepts: `{ "email": "user@example.com" }`
  - Returns: `{ "success": true, "message": "Welcome email sent successfully!" }`

## Email Template

The welcome email includes:

- Subject: "👋 Welcome to the AppCostEstimator Beta!"
- From: scopecraftapp@getmyappcostestimator.com
- Personalized welcome message with beta program benefits
- Both plain text and HTML versions

## Error Handling

- Email validation (must contain @)
- SendGrid API error handling
- Network connection error handling
- User-friendly error messages in the UI

## Production Deployment

1. Set `SENDGRID_API_KEY` environment variable
2. Ensure `scopecraftapp@getmyappcostestimator.com` is verified in SendGrid
3. Build and deploy both frontend and backend
4. Configure CORS settings for production domain
