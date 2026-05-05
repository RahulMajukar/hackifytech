# Module 01: Authentication & Authorization

## Pages
- /login → Login form
- /register → Student self-registration (or admin-created)
- /forgot-password → Send reset email
- /reset-password?token=xxx → Set new password

## Payload Users Collection Fields
```typescript
{
  name: text (required)
  email: email (required, unique)
  password: text (Payload hashes automatically)
  role: select ['super-admin', 'trainer', 'student', 'placement']
  phone: text
  college: text (for students)
  githubUrl: text
  linkedinUrl: text
  resumeUrl: text
  profilePhoto: relationship (Media)
  isActive: checkbox (default: true)
  // Payload adds: createdAt, updatedAt automatically
}
```

## Key Files
- `payload/collections/Users.ts`
- `src/app/(auth)/login/page.tsx`
- `src/app/(auth)/register/page.tsx`
- `src/middleware.ts` (route protection)
- `src/features/auth/authService.ts`
- `src/store/authStore.ts`
- `src/hooks/useAuth.ts`

## Middleware Route Protection
```typescript
// src/middleware.ts
export { default } from 'next-auth/middleware'
// OR custom JWT check using Payload token cookie
```
