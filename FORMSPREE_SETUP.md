# Formspree Contact Form Setup

This portfolio uses Formspree to send messages from the React contact form to an email address.

## What is configured

- Formspree package: `@formspree/react`
- Form ID: `maeeayyz`
- Formspree endpoint: `https://formspree.io/f/maeeayyz`
- Contact page: `src/pages/Contact.tsx`
- Sender field name: `email`

The form is implemented with the `useForm` hook:

```tsx
const [state, handleSubmit, reset] = useForm("maeeayyz");
```

When the visitor submits the form, Formspree:

1. Receives the form data.
2. Sends the submission to the email address configured in Formspree.
3. Stores the submission in the Formspree dashboard.
4. Shows the visitor a success or error state.

## Confirm the notification email

Before using the form:

1. Sign in to https://formspree.io.
2. Open the form with ID `maeeayyz`.
3. Check that an email notification is enabled.
4. Verify that the destination is your email address.
5. Confirm any verification email Formspree sends.

Submissions will not be delivered reliably until Formspree's email verification is complete.

## Run locally

From the project directory:

```powershell
cd "C:\Users\Ms-Electronics\OneDrive\Documents\myportfolio240-main\myportfolio240-main"
npm.cmd install
npm.cmd run dev
```

Open the URL shown by Vite, usually:

```text
http://localhost:5173/contact
```

Complete the contact form and submit it. Then:

- Check the email address configured in Formspree.
- Check the spam or junk folder if the message is missing.
- Check the form's submissions in the Formspree dashboard.

## Build for deployment

Create a production build with:

```powershell
npm.cmd run build
```

Deploy the generated `dist` folder to your hosting provider. The form will also work after deployment because it sends directly to Formspree.

## Important field names

The React form includes fields with these names:

| Field | Name attribute | Purpose |
| --- | --- | --- |
| Name | `name` | Visitor's name |
| Email | `email` | Visitor's reply-to email |
| Subject | `subject` | Message subject |
| Message | `message` | Main message |

The `email` field should keep its current name. Formspree uses it for reply and notification information.

## Troubleshooting

### No email is received

- Confirm the notification email address in Formspree.
- Complete Formspree's email verification.
- Check the Formspree dashboard for the submission.
- Check spam and junk folders.
- Make sure email notifications are enabled for the form.

### The success message appears

The submission was accepted by Formspree. Wait briefly, then check the configured email address and dashboard.

### The form returns an error

Check the browser console, confirm the form is configured with ID `maeeayyz`, and verify that the visitor completed all required fields.

### Formspree says the form is inactive

Sign in to Formspree and reactivate or verify the form. A previously used submission limit may also need to be increased or reset.

## Security and privacy

- Do not put Formspree credentials or private API keys in React source code.
- The public Formspree form ID is safe to include in frontend code.
- Configure spam protection and submission limits in the Formspree dashboard if the form receives unwanted submissions.
