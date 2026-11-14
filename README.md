# myportfolio240

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-5dz4xkye)

## Fixing page refreshes on Vercel

This portfolio uses React Router to show pages such as `/about`, `/projects`, and `/contact`. When you navigate through the site, React Router handles those paths in the browser. But when you open one of those paths directly or refresh it, the hosting server must also know to serve the app.

Without that fallback, Vercel looks for a real file at the requested path (for example, `/contact`) and returns a 404 because that file does not exist. The `vercel.json` file fixes this by rewriting requests to `index.html`. React Router then reads the URL and displays the right page. This applies to all of the app's client-side routes.

### Publishing and checking the fix

1. Save and push the changes to the GitHub branch connected to your Vercel project.
2. Wait for Vercel to finish deploying the new build.
3. Open a page such as `https://your-site/contact` directly, then refresh it. The Contact page should still load instead of showing Vercel's 404 page.

The same fallback is also needed for any other client-side routes added to this portfolio.
