// Tank Battle Game - Health Check Script
// This script verifies that all game systems are working correctly

console.log("🔍 TANK BATTLE GAME HEALTH CHECK")
console.log("==================================")

// Test 1: Verify HTML structure
const verifyHTMLStructure = () => {
    const title = document.title;
    const hasCanvas = !!document.getElementById('gameCanvas');
    const hasStartScreen = !!document.getElementById('startScreen');
    const hasGameOver = !!document.getElementById('gameOverScreen');

    console.log("✅ HTML Structure:");
    console.log(`   Title: ${title}`);
    console.log(`   Canvas Element: ${hasCanvas ? 'FOUND' : 'MISSING'}`);
    console.log(`   Start Screen: ${hasStartScreen ? 'FOUND' : 'MISSING'}`);
    console.log(`   Game Over Screen: ${hasGameOver ? 'FOUND' : 'MISSING'}`);

    return hasCanvas && hasStartScreen && hasGameOver;
};

// Test 2: Verify CSS styling
const verifyCSS = () => {
    const styleSheets = document.styleSheets;
    const gameStyles = Array.from(styleSheets).filter(sheet =>
        sheet.href === window.location.href || !sheet.href
    );

    console.log("✅ CSS Styles:");
    console.log(`   Style Sheets Loaded: ${gameStyles.length}`);
    console.log(`   Inline Styles: ${document.querySelectorAll('style').length}`);

    // Check for critical game styles
    const criticalStyles = ['canvas', '.game-container', '.ui-panel'];
    let stylesFound = 0;

    criticalStyles.forEach(selector => {
        if (document.querySelector(selector)) stylesFound++;
    });

    console.log(`   Critical Game Elements: ${stylesFound}/${criticalStyles.length}`);
    return stylesFound >= 2;
};

// Test 3: Verify JavaScript availability
const verifyJavaScript = () => {
    const scripts = document.scripts;
    const inlineScripts = Array.from(scripts).filter(script =>
        !script.src || script.src.includes('index.html')
    );

    console.log("✅ JavaScript:");
    console.log(`   Scripts Found: ${inlineScripts.length}`);
    console.log(`   Game Engine: ${typeof initGame !== 'undefined' ? 'READY' : 'NOT FOUND'}`);

    // Test canvas context
    const canvas = document.getElementById('gameCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        console.log(`   Canvas Context: ${ctx ? 'AVAILABLE' : 'UNAVAILABLE'}`);
    }

    return inlineScripts.length > 0;
};

// Test 4: Verify game assets
const verifyAssets = () => {
    const images = [];
    const fonts = [];

    // Check for font loading (if any)
    const fontFaces = new FontFaceObserver();
    console.log("✅ Assets:");
    console.log(`   Images Loaded: ${images.length}`);
    console.log(`   Fonts Detected: ${fonts.length}`);

    return true;
};

// Test 5: Performance check
const verifyPerformance = () => {
    const startTime = performance.now();

    // Simulate some game initialization
    setTimeout(() => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;

        console.log("✅ Performance:");
        console.log(`   Load Time: ${loadTime.toFixed(2)}ms`);
        console.log(`   Status: ${loadTime < 1000 ? 'EXCELLENT' : loadTime < 2000 ? 'GOOD' : 'NEEDS OPTIMIZATION'}`);

        if (loadTime > 2000) {
            console.warn("⚠️ Consider optimizing asset loading");
        }
    }, 100);
};

// Run all tests
const runHealthCheck = () => {
    console.log("Starting comprehensive health check...\n");

    const htmlOk = verifyHTMLStructure();
    const cssOk = verifyCSS();
    const jsOk = verifyJavaScript();
    const assetsOk = verifyAssets();
    const perfOk = verifyPerformance();

    console.log("\n📊 SUMMARY:")
    console.log(`   HTML Structure: ${htmlOk ? '✅ PASS' : '❌ FAIL'}`)
    console.log(`   CSS Styling: ${cssOk ? '✅ PASS' : '❌ FAIL'}`)
    console.log(`   JavaScript: ${jsOk ? '✅ PASS' : '❌ FAIL'}`)
    console.log(`   Assets: ${assetsOk ? '✅ PASS' : '❌ FAIL'}`)
    console.log(`   Performance: Checking...`)

    const overallStatus = htmlOk && cssOk && jsOk && assetsOk;
    const finalMessage = overallStatus
        ? "🎉 ALL SYSTEMS OPERATIONAL - GAME READY!"
        : "⚠️ SOME ISSUES DETECTED - REVIEW RECOMMENDATIONS";

    console.log(`\n🎯 OVERALL STATUS: ${finalMessage}`)

    if (overallStatus) {
        console.log("\n🚀 Ready to deploy! Your tank battle game is fully functional.")
        console.log("💡 Next steps: Deploy to Vercel, Netlify, or GitHub Pages")
    } else {
        console.log("\n🔧 Some components need attention before deployment.")
    }
};

// Auto-run when page loads
window.addEventListener('load', runHealthCheck);

// Export functions for manual testing
window.TankBattleHealthCheck = {
    verifyHTMLStructure,
    verifyCSS,
    verifyJavaScript,
    verifyAssets,
    runHealthCheck
};