# Render.com Deployment Guide

## Deployment Steps

### 1. Create a New Static Site on Render.com

1. Go to [Render.com Dashboard](https://dashboard.render.com)
2. Click "New +" button
3. Select "Static Site"
4. Connect your GitHub repository: `abhayd95/static-web-smart-city-insights`

### 2. Configure Build Settings

**Build Command:**
```bash
npm install && npm run build
```

**Publish Directory:**
```
dist
```

**Environment:**
- Node Version: 18.x or higher (Render will auto-detect)

### 3. Important Settings

- **Auto-Deploy:** Yes (deploys on every push to main branch)
- **Branch:** main
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

### 4. After Deployment

The site will be available at: `https://static-web-smart-city-insights.onrender.com`

## Troubleshooting

### If the site shows blank page:

1. **Check Build Logs:** Ensure build completed successfully
2. **Verify Publish Directory:** Make sure it's set to `dist`
3. **Check Console:** Open browser console for JavaScript errors
4. **Verify Routes:** All routes should serve `index.html` (SPA routing)

### Common Issues:

1. **Module Type Warning:** Fixed by adding `"type": "module"` to package.json
2. **Routing Issues:** Fixed with `_redirects` file in public folder
3. **Build Failures:** Check Node version (should be 18+)

## Manual Configuration (if render.yaml doesn't work)

If the `render.yaml` file doesn't work automatically, configure manually in Render dashboard:

1. Go to your service settings
2. Set **Environment** to `Static Site`
3. Set **Build Command** to `npm install && npm run build`
4. Set **Publish Directory** to `dist`
5. Save and redeploy

## Verification

After deployment, verify:
- ✅ Site loads at the Render URL
- ✅ All routes work (no 404 errors)
- ✅ Assets load correctly
- ✅ No console errors
- ✅ Mobile responsive

