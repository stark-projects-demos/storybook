# Storybook Addon Demo

This is a demo Storybook to see the Stark addon in action.

To test sending results to your [Stark dashboard](https://app.getstark.co), follow the instructions on [https://www.getstark.co/support/getting-started/using-storybook-addon/#main](our support page).

## Getting Started

```bash
# Install dependencies
npm install

# Run storybook to see tools
npm run storybook

# Run CLI to push results up to Stark (requires Stark token from Web app)
npx stark-scan-storybook --stark-token stark_yourtokenhere
```