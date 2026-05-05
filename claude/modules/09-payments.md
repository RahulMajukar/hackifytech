# Module 09: Payment Management

## Payload Collection: Payments
```typescript
{
  student: relationship (Users)
  batch: relationship (Batches)
  totalFee: number
  installments: array [{
    dueDate: date
    amount: number
    paidAt: date
    razorpayOrderId: text
    razorpayPaymentId: text
    razorpaySignature: text
    status: select ['pending', 'paid', 'failed', 'refunded']
    receiptUrl: text // link to PDF receipt
  }]
  scholarshipAmount: number (default: 0)
  isCSRSponsored: checkbox
  csrOrganization: text
  notes: textarea
}
```

## Razorpay Integration Flow
```
1. Student → "Pay ₹5000" button
2. POST /api/payments/create-order { paymentId, installmentIndex }
   → Backend creates Razorpay order → returns { orderId, amount, currency, keyId }
3. Frontend opens Razorpay checkout widget (Razorpay.open())
4. On payment success → POST /api/payments/verify {
     razorpayPaymentId, razorpayOrderId, razorpaySignature, paymentId, installmentIndex
   }
5. Backend: HMAC-SHA256 verify signature
6. If valid → mark installment as paid → generate PDF receipt → send email
7. If invalid → return 400 error
```

## Key Files
- `payload/collections/Payments.ts`
- `src/app/api/payments/create-order/route.ts`
- `src/app/api/payments/verify/route.ts`
- `src/features/payments/`
- `src/app/(dashboard)/admin/payments/`
- `src/app/(dashboard)/student/payments/` (student fee status)
