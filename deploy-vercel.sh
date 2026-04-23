#!/bin/bash

# Tank Battle - Vercel Deployment Script
echo "🚀 TANK BATTLE - VERCEL DEPLOYMENT"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Navigate to project directory
cd /Users/vuy7/Desktop/tank-battle

# Create vercel.json for configuration
cat > vercel.json << 'EOF'
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
EOF

echo ""
echo "✅ Vercel configuration created: vercel.json"
echo "📁 Project files prepared:"
ls -la *.html *.md

echo ""
echo "🚀 Starting deployment..."
echo ""

# Deploy to Vercel
vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo "🌐 Your live game will be available at the URL above"
echo "🔗 Share this link with friends and family!"
echo ""
echo "💡 Tips:"
echo "   - Game is fully playable online"
echo "   - Supports touch controls on mobile"
echo "   - No registration required"
echo "   - Completely free to play"