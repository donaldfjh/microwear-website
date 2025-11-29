# Contact Form Setup Instructions

The contact form is configured to send emails to: **donaldfang@njytech.com.cn**

## Setup Steps

### 1. Get Web3Forms Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Click "Get Started for Free"
3. Enter your email: **donaldfang@njytech.com.cn**
4. Verify your email
5. Copy your Access Key

### 2. Configure Environment Variable

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace `your_access_key_here` with your actual Web3Forms access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key
   ```

### 3. Deploy to Vercel

Add the environment variable to Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add a new variable:

   - **Name**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: Your Web3Forms access key
   - **Environment**: Production, Preview, Development

4. Redeploy your site

## How It Works

When a user submits the contact form:

1. The form data is sent to Web3Forms API
2. Web3Forms forwards the email to **donaldfang@njytech.com.cn**
3. You receive an email with:
   - Sender's name
   - Sender's email (for reply)
   - Subject
   - Message content

## Testing

To test locally:

1. Make sure `.env` file has your access key
2. Run `npm run dev`
3. Go to `/contact` page
4. Fill out and submit the form
5. Check your email at donaldfang@njytech.com.cn

## Alternative: Formspree

If you prefer Formspree instead:

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form
3. Update the form action URL in `ContactForm.tsx`
