# Favicon Setup Instructions

The HTML is now configured to use properly sized favicon files. You need to create these files from your logo.

## Required Files

Place these files in the `public/` folder:

1. **favicon.ico** - Multi-size ICO file (16x16, 32x32, 48x48)
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels
4. **apple-touch-icon.png** - 180x180 pixels (for iOS)
5. **android-chrome-192x192.png** - 192x192 pixels (for Android)
6. **android-chrome-512x512.png** - 512x512 pixels (for Android)

## How to Create Favicon Files

### Option 1: Use Online Generator (Recommended)

1. Go to https://realfavicongenerator.net/
2. Upload your `public/images/logos/Microwear.png` file
3. Adjust settings if needed
4. Download the generated package
5. Extract and place all files in the `public/` folder

### Option 2: Use Favicon.io

1. Go to https://favicon.io/favicon-converter/
2. Upload your logo
3. Download the generated files
4. Place them in the `public/` folder

### Option 3: Manual Creation

Use an image editor (Photoshop, GIMP, etc.) to:

1. Crop your logo to remove excess white space
2. Resize to each required dimension
3. Export as PNG (or ICO for favicon.ico)
4. Save to `public/` folder

## Important Notes

- **Remove white space**: Crop the logo tightly to avoid it appearing small in browser tabs
- **Square format**: Favicons work best when the logo is square or nearly square
- **Simple design**: Small sizes (16x16) need simple, recognizable designs
- **Test**: After adding files, clear browser cache and test in different browsers

## Current Temporary Solution

Until you create the proper favicon files, the site will use the current logo from `/images/logos/Microwear.png`, but it may not display optimally due to sizing issues.
