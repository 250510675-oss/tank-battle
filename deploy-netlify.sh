#!/bin/bash

# Tank Battle - Netlify Deployment Script
echo "🌐 TANK BATTLE - NETLIFY DEPLOYMENT"
echo "==================================="

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "📦 Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Navigate to project directory
cd /Users/vuy7/Desktop/tank-battle

echo ""
echo "📁 Project files ready for deployment:"
ls -la *.html *.md *.sh

echo ""
echo "🚀 Starting Netlify deployment..."
echo ""

# Deploy to Netlify
netlify deploy --prod

echo ""
echo "🎉 Netlify deployment complete!"
echo "🌍 Your live game will be available at the URL above"
echo "🔗 Share this link with everyone!"
echo ""
echo "💡 Pro tips:"
echo "   - Netlify offers free SSL certificates"
echo "   - Automatic HTTPS enabled"
echo "   - Built-in CDN for global performance"
echo "   - Drag-and-drop interface alternative"