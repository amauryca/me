# GitHub Pages Deployment Guide

## Automatic Deployment Setup ✅

This project is now configured for automatic deployment to GitHub Pages using GitHub Actions.

## How It Works

1. **Push to main branch** → GitHub Actions automatically builds and deploys
2. **Production URL**: https://amauryca.github.io/me/
3. **Build artifacts** are stored in the `dist` folder and deployed to `gh-pages` branch

## Repository Settings Required

To complete the setup, configure these settings in your GitHub repository:

### 1. Enable GitHub Pages
- Go to **Settings** → **Pages**
- **Source**: Deploy from a branch
- **Branch**: Select `gh-pages` (will be created after first deployment)
- **Folder**: `/ (root)`

### 2. Enable GitHub Actions
- Go to **Settings** → **Actions** → **General**
- Ensure **Allow all actions and reusable workflows** is selected
- Under **Workflow permissions**, select **Read and write permissions**

## Manual Deployment (if needed)

If you need to deploy manually:

```bash
# Build the project
npm run build

# The built files will be in the 'dist' folder
# You can then manually upload these to your hosting service
```

## Troubleshooting

### Common Issues:

1. **Site shows blank page**
   - Check if GitHub Pages is enabled in repository settings
   - Verify the base path is set correctly to `/me/`
   - Wait a few minutes after deployment for changes to propagate

2. **Build fails in GitHub Actions**
   - Check the Actions tab in your repository for error logs
   - Ensure all dependencies are listed in package.json
   - Verify there are no TypeScript errors locally

3. **Routing doesn't work**
   - The 404.html file handles SPA routing for GitHub Pages
   - Make sure it's included in the build output

### Checking Deployment Status
- Go to **Actions** tab in your GitHub repository
- Look for the "Deploy to GitHub Pages" workflow
- Green checkmark = successful deployment
- Red X = failed deployment (click for error details)

## Next Steps After Setup

1. Push your code to the main branch
2. Check the Actions tab for deployment progress
3. Visit https://amauryca.github.io/me/ once deployment completes
4. Test all interactive features (terminal, animations, routing)