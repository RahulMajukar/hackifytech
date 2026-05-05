# Product Requirements Document (PRD)

# HackifyTech Academy – EdTech Training & Placement Platform

---

# 1. Executive Summary

## Product Name

HackifyTech Academy

## Product Vision

HackifyTech Academy is a modern EdTech and placement platform designed to provide industry-focused software training, practical project experience, career preparation, and placement assistance for students and job seekers.

The platform aims to bridge the gap between academic learning and real-world industry requirements by delivering structured learning programs, hands-on assignments, mock assessments, mentorship, and placement support.

The system will support both commercial and CSR-sponsored training programs through scalable role-based learning management features.

---

# 2. Product Objectives

## Primary Objectives

* Deliver high-quality software training programs
* Provide project-based practical learning
* Track student learning progress and performance
* Enable trainers to manage batches and assignments efficiently
* Help students become placement-ready
* Support internship and placement workflows
* Generate verifiable course completion certificates
* Enable CSR and NGO reporting capabilities
* Build a scalable learning management ecosystem

---

# 3. Key Features Overview

## Student Learning Features

* Live and recorded training sessions
* Course enrollment and learning dashboards
* Assignment submission system
* Mock tests and coding assessments
* Attendance management
* Downloadable study materials
* Internship and placement tracking
* Course completion certificates

## Administrative Features

* Role-based access control
* User and batch management
* Course and curriculum management
* Placement management
* Student analytics and reporting
* Fee and payment tracking
* Notification management
* CSR reporting and analytics

## Communication Features

* Email notifications
* Course completion emails
* Certificate emails
* Attendance alerts
* Assignment reminders
* Payment receipts and reminders
* Placement and interview notifications

---

# 4. Technology Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS
* React Query / Server Actions

## Backend & CMS

* Payload CMS

## Database

* PostgreSQL

## Authentication & Authorization

* Payload Authentication
* JWT-based authentication
* Role-Based Access Control (RBAC)

## Payments

* Razorpay Integration

## File & Media Handling

* Payload Media Collections
* Cloud Storage Compatible Architecture

## Email & Notifications

* Nodemailer / Transactional Email Service
* Template-based notification system

---

# 5. User Roles & Permissions

## 5.1 Super Admin

### Responsibilities

* Complete platform administration
* User and role management
* Revenue and analytics monitoring
* Platform configuration
* Certificate and placement oversight
* NGO and CSR reporting access

### Permissions

* Full CRUD access across all modules
* Manage access permissions
* Manage system-wide configurations
* Access dashboards and reports

---

## 5.2 Trainer

### Responsibilities

* Conduct training sessions
* Manage assignments and assessments
* Track student performance
* Mark attendance
* Upload course materials

### Permissions

* Access assigned batches only
* Create and manage assignments
* Conduct mock tests
* Upload videos, PDFs, and notes
* Review student submissions

---

## 5.3 Student

### Responsibilities

* Attend classes and complete coursework
* Submit assignments and assessments
* Participate in placement preparation activities

### Permissions

* Access enrolled courses only
* View attendance and progress
* Download certificates
* Access placement updates
* Submit assignments and projects

---

## 5.4 Placement Team

### Responsibilities

* Coordinate placements and internships
* Manage interview schedules
* Track student hiring progress

### Permissions

* Access placement dashboard
* Manage resumes and interview schedules
* Update placement statuses
* Manage company hiring records

---

# 6. Functional Modules

# 6.1 Public Website Module

## Features

* Responsive landing pages
* About Us page
* Courses listing and details
* Trainer profiles
* Placement success stories
* Student testimonials
* Blog and SEO pages
* Webinar and demo registration forms
* Contact and inquiry forms
* CSR and NGO partnership pages
* Legal pages management
* Terms & Conditions page
* Privacy Policy page
* Refund Policy page

## Legal & SEO Content Management

The platform must allow administrators to manage legal and SEO-related pages directly from the admin panel.

### Admin Managed Pages

* Terms & Conditions
* Privacy Policy
* Refund Policy
* Cookie Policy (future-ready)
* Disclaimer Page

### Features

* Rich text editor support
* SEO meta title management
* SEO meta descriptions
* SEO keywords support
* Open Graph metadata
* Slug management
* Draft and publish workflow
* Search engine indexing controls
* Dynamic page rendering
* Sitemap inclusion support

## Production Requirements

* SEO-friendly structure
* Optimized image delivery
* Mobile responsiveness
* Form validation
* Spam protection
* Analytics integration
* Accessible UI components
* Reusable modal system
* Responsive navigation architecture
* Structured admin navigation system

---

# 6.2 Authentication & Authorization Module

## Features

* Secure login and registration
* Forgot password and reset flow
* JWT session handling
* Role-based route protection
* Session management
* Secure logout functionality

## Security Requirements

* Password hashing
* Token expiration handling
* API authorization middleware
* Protected admin routes
* Login attempt protection

---

# 6.3 User Management Module

## Features

* Student onboarding
* Trainer onboarding
* Role assignment
* Profile management
* Batch allocation
* Enrollment management

## Student Information

* Full name
* Email address
* Phone number
* College details
* Course enrollment
* Batch information
* Attendance records
* Resume links
* GitHub profile
* LinkedIn profile
* Payment status

---

# 6.4 Course Management Module

## Features

* Create and manage courses
* Modular curriculum structure
* Course pricing and duration
* Trainer assignment
* Course thumbnails and media
* Learning outcomes management
* Syllabus uploads

## Sample Courses

* Java Full Stack Development
* Spring Boot Development
* React Development
* PostgreSQL
* DevOps Fundamentals
* AI Tools for Developers
* Cloud Computing Fundamentals

---

# 6.5 Batch Management Module

## Features

* Create and manage batches
* Batch scheduling
* Trainer assignment
* Student assignment
* Batch capacity management
* Batch lifecycle tracking

---

# 6.6 Attendance Management Module

## Features

* Daily attendance tracking
* Present, absent, and late marking
* Attendance analytics
* Monthly attendance reports
* Trainer attendance dashboard
* Student attendance history

## Production Features

* Attendance audit logs
* Attendance export reports
* Attendance percentage calculations

---

# 6.7 Assignment Management Module

## Features

* Assignment creation and scheduling
* Deadline management
* File upload submissions
* GitHub repository submissions
* Trainer reviews and grading
* Feedback system

## Production Features

* File validation
* Assignment status tracking
* Submission timestamps
* Retry and resubmission support

---

# 6.8 Mock Test & Assessment Module

## Features

* MCQ assessments
* Coding challenges
* Timer-based examinations
* Auto-evaluation support
* Leaderboards and rankings
* Result analytics
* Performance history

## Production Features

* Anti-cheating restrictions
* Timed submission locking
* Result export functionality
* Assessment analytics

---

# 6.9 Certificate Management Module

## Features

* Automated certificate generation
* PDF certificate downloads
* Internship certificates
* Completion certificates
* Verification ID generation

## Certificate Eligibility Rules

* Minimum attendance percentage
* Assignment completion
* Mock test completion
* Trainer approval

## Production Features

* QR-based verification
* Unique certificate IDs
* Tamper-resistant certificate validation

---

# 6.10 Placement Management Module

## Features

* Resume management
* Resume review workflows
* Interview scheduling
* Placement tracking
* Company hiring records
* Student placement dashboards
* Offer letter uploads

## Placement Data

* Company name
* Job role
* Salary package
* Interview rounds
* Placement status
* Offer letter information

## Production Features

* Placement analytics
* Placement reports
* Company-wise hiring statistics

---

# 6.11 Payment Management Module

## Features

* Razorpay integration
* Online fee collection
* Installment management
* Payment receipt generation
* Scholarship tracking
* CSR-sponsored student tracking

## Production Features

* Invoice generation
* Refund handling
* Payment audit logs
* Transaction history
* Failed payment handling

---

# 6.12 Blog & Content Management Module

## Features

* Technical blog publishing
* SEO optimization
* Category and tag management
* Interview preparation blogs
* Placement preparation content
* Markdown content support
* Code syntax highlighting
* Mermaid diagram rendering support
* Technical documentation support

## Mermaid Viewer Support

The platform must support Mermaid.js diagram rendering within blogs, documentation pages, and learning materials.

### Supported Diagram Types

* Flowcharts
* Sequence diagrams
* ER diagrams
* State diagrams
* Mind maps
* System architecture diagrams
* API flow diagrams

### Example Use Cases

* Spring Boot authentication flow diagrams
* Database schema visualizations
* Microservice architecture documentation
* DevOps workflow documentation
* System design preparation blogs

## Production Features

* Rich text editor
* Markdown editor support
* SEO metadata support
* Slug generation
* Sitemap support
* Server-side rendering support
* Syntax-highlighted code blocks
* Lazy-loaded diagrams
* Optimized content rendering

---

# 6.13 Media Management Module

## Features

* Video uploads
* PDF uploads
* Image management
* Assignment attachments
* Certificate storage

## Production Features

* File size restrictions
* Media optimization
* Secure file access
* Media categorization

---

# 6.14 Notification Module

## Features

* Email notifications
* Assignment reminders
* Batch reminders
* Payment reminders
* Course completion emails
* Certificate notifications
* Placement alerts

## Production Features

* Email templates
* Queue-based notifications
* Retry mechanisms
* Notification logs

---

# 6.15 CSR & NGO Reporting Module

## Features

* CSR student tracking
* Attendance analytics
* Placement analytics
* NGO dashboards
* Downloadable reports
* Batch-wise reports

## Production Features

* CSV/PDF report export
* Filter-based analytics
* CSR impact metrics
* Organization-specific dashboards

---

# 7. Database Collections

## Core Collections

* Users
* Students
* Trainers
* Courses
* CourseModules
* Batches
* Assignments
* AssignmentSubmissions
* Attendance
* MockTests
* TestResults
* Certificates
* Placements
* Companies
* Payments
* Blogs
* Notifications
* CSRReports
* Media

---

# 8. Dashboard Requirements

# 8.1 Admin Dashboard

## Dashboard Widgets

* Total students
* Active batches
* Revenue analytics
* Placement statistics
* Attendance overview
* New leads
* Trainer performance
* Payment statistics
* CSR analytics

## Admin Navigation Requirements

The admin panel must support a scalable drill-down sidebar navigation system to efficiently manage large volumes of platform content and modules.

### Sidebar Features

* Expandable navigation groups
* Nested menu support
* Role-based sidebar visibility
* Collapsible sections
* Active route highlighting
* Searchable navigation
* Mobile responsive sidebar
* Persistent sidebar state
* Quick access shortcuts

### Example Navigation Structure

* Dashboard
* Users

  * Students
  * Trainers
  * Placement Team
* Courses

  * Categories
  * Modules
  * Batches
* Assessments

  * Assignments
  * Mock Tests
* Placements
* Payments
* Blogs
* Media
* Notifications
* CSR Reports
* Settings

  * SEO Settings
  * Legal Pages
  * Email Templates

## Production Features

* Dynamic navigation rendering
* Permission-based navigation access
* Optimized route loading
* Breadcrumb navigation support

---

# 8.2 Student Dashboard

## Features

* My enrolled courses
* Attendance records
* Assignment tracking
* Mock test history
* Certificates
* Placement updates
* Recorded sessions
* Notes and downloads

---

# 8.3 Trainer Dashboard

## Features

* Assigned batches
* Student progress tracking
* Attendance management
* Assignment review system
* Test creation tools
* Learning material uploads

---

# 9. SEO & Marketing Requirements

## Features

* SEO-friendly routing
* Meta title and description support
* Open Graph support
* Structured content support
* Lead capture forms
* YouTube integration
* Analytics tracking

---

# 10. Security, UX & Compliance Requirements

## UI & User Experience Requirements

### Confirmation Modal System

The platform must include reusable confirmation modal components for all critical actions to prevent accidental destructive operations.

### Confirmation Modal Use Cases

* Delete confirmations
* Batch removal confirmation
* Course deletion confirmation
* Assignment deletion confirmation
* Payment cancellation confirmation
* User status change confirmation
* Certificate revocation confirmation

### Modal Features

* Reusable modal component architecture
* Loading states
* Success and error feedback
* Keyboard accessibility
* Escape key close support
* Click outside handling
* Role-aware action validation
* Async operation handling

### Notification & Toast System

* Success notifications
* Error notifications
* Warning alerts
* Information alerts
* Action feedback messages

## Security Requirements

* JWT authentication
* Role-based access control
* Secure API middleware
* Rate limiting
* Secure file uploads
* Input sanitization
* CSRF protection
* Password encryption
* Activity logging
* Audit trails

## Compliance Requirements

* Privacy policy support
* Terms and conditions support
* User consent handling
* Secure payment handling

---

# 11. Non-Functional Requirements

## Performance

* Fast page loading
* Optimized API responses
* Efficient database indexing

## Scalability

* Modular architecture
* Reusable services
* Expandable collection structure

## Reliability

* Error handling
* Logging and monitoring
* Backup-ready architecture

## Maintainability

* Clean folder structure
* Type-safe codebase
* Reusable UI components

---

# 12. Future Enhancements

## Phase 2 Enhancements

* Live classes
* WhatsApp notifications
* Resume builder
* Mock interview platform
* Student discussion forums
* AI chatbot support

## Phase 3 Enhancements

* Mobile applications
* AI learning assistant
* Coding playground
* Internship portal
* Community platform
* Multi-language support

---

# 13. Development Roadmap

# Phase 1 – MVP

## Estimated Duration

1–2 Months

## Features

* Public website
* Authentication system
* Role-based access
* Course management
* Student management
* Batch management
* Blog system
* Contact and lead forms

---

# Phase 2 – Learning Management System

## Estimated Duration

2–3 Months

## Features

* Attendance system
* Assignment management
* Mock tests
* Certificate generation
* Payment management
* Placement tracking
* Notification system

---

# Phase 3 – Platform Expansion

## Estimated Duration

3–6 Months

## Features

* Advanced LMS capabilities
* AI integrations
* Mobile applications
* Live streaming support
* Advanced analytics
* CSR analytics dashboard

---

# 14. Business Goals

## Primary Business Goals

* Build a trusted EdTech brand
* Improve student placement outcomes
* Build CSR and NGO partnerships
* Scale online learning programs
* Expand into offline training centers
* Build a strong internship ecosystem

---

# 15. Success Metrics (KPIs)

## Platform Metrics

* Number of enrolled students
* Course completion rates
* Student engagement levels
* Placement success percentage
* Revenue growth
* Trainer performance metrics
* Website traffic growth
* YouTube channel growth
* CSR partnership growth

---

# 16. Initial Launch Strategy

## Step 1

Launch the Java Full Stack online training program.

## Step 2

Collect:

* Student testimonials
* Project portfolios
* Placement records
* Attendance reports
* Student success stories

## Step 3

Use collected data for:

* CSR proposals
* NGO collaborations
* College partnerships
* Marketing campaigns
* Brand building

---

# 17. Conclusion

HackifyTech Academy aims to become a scalable, industry-focused EdTech platform that combines:

* Practical software training
* Real-world project experience
* Placement preparation
* Internship support
* CSR-supported education programs
* Role-based learning management systems

The platform will be built using a scalable and production-ready modern architecture powered by:

* Next.js
* Payload CMS
* PostgreSQL
* Tailwind CSS
* TypeScript
* Google Cloud
