# Formspree Setup Guide

This document explains how to set up Formspree for the contact and job application forms on the Go Big Scale Up website.

## Step 1: Create a Formspree Account

1. Go to [Formspree.io](https://formspree.io/) and sign up for an account.
2. Verify your email address.

## Step 2: Create Forms

### Contact Form

1. Log in to your Formspree account.
2. Click "New Form" and give it a name (e.g., "GBSU Contact Form").
3. Choose the plan that fits your needs (Free plan allows 50 submissions per month).
4. Copy the form ID from the endpoint URL. It will look like `https://formspree.io/f/xrgwlkzb` where `xrgwlkzb` is the form ID.
5. Open `components/contact-form.tsx` in your code editor.
6. Replace the placeholder form ID with your actual form ID:
   \`\`\`javascript
   const FORMSPREE_FORM_ID = "your-form-id-here"
   \`\`\`

### Job Application Form

1. Create another form in your Formspree account named "GBSU Job Applications".
2. Copy the form ID.
3. Open `components/job-application-form.tsx` in your code editor.
4. Replace the placeholder form ID with your actual form ID:
   \`\`\`javascript
   const FORMSPREE_FORM_ID = "your-form-id-here"
   \`\`\`

## Step 3: Configure Form Settings

For each form in your Formspree dashboard:

1. Set up email notifications to receive submissions.
2. Configure auto-responses if desired.
3. Set up spam filtering.
4. Add any integrations you need (e.g., Slack, Discord).

## Step 4: Test Your Forms

1. Submit test entries through your website.
2. Verify that you receive the submissions in your Formspree dashboard and via email.

## Important Notes

### File Uploads

The free plan of Formspree does not support file uploads. For this reason, the job application form has been modified to:

1. Allow applicants to provide a link to their resume (stored on Google Drive, Dropbox, etc.)
2. Allow applicants to provide a text summary of their experience

If you need file upload functionality, you'll need to upgrade to a paid Formspree plan or consider alternative solutions like:

- Using a different form service that supports file uploads on free plans
- Setting up a dedicated file upload service like AWS S3 or Vercel Blob
- Creating a custom server endpoint to handle file uploads

### Custom Email Templates

You can customize the email templates in your Formspree dashboard to match your branding.

### Webhooks

If you need to integrate with other systems, Formspree provides webhook functionality on paid plans.

### AJAX Submissions

The forms are already set up to use AJAX submissions, which provides a better user experience by avoiding page reloads.
