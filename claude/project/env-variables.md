# Environment Variables

Create `.env.local` at project root:

```env
# Database
DATABASE_URI=postgresql://user:password@localhost:5432/hackifytech

# Payload CMS
PAYLOAD_SECRET=your-long-random-secret-here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=your-razorpay-secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxx

# Email (Nodemailer SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@hackifytech.com

# JWT (Payload handles JWT, but keep this for custom endpoints)
JWT_SECRET=your-jwt-secret-here
```

## How to Get Each Value
- PAYLOAD_SECRET: Any long random string (use `openssl rand -base64 32`)
- DATABASE_URI: Your PostgreSQL connection string (local or Neon/Supabase)
- Razorpay: Get from razorpay.com dashboard (use test keys in dev)
- SMTP_PASS: Gmail → App Passwords (not your real Gmail password)
