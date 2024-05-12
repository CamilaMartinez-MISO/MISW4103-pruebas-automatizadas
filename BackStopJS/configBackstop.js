const fs = require('fs');

// Constants
const PATH_GHOST_V5 = "./Ghost_v5/cypress/cypress/screenshots";
const PATH_GHOST_V3 = "./Ghost_v3/cypress/cypress/screenshots";

// =============================================
// Methods for backstop
// =============================================

function createScenarios() {
    let scenarios = [];

    let scenarioFoldersV5 = getFoldersArray(PATH_GHOST_V5)
    let scenarioFoldersV3 = getFoldersArray(PATH_GHOST_V3)

    console.log('carpetasV5', scenarioFoldersV5);
    console.log('carpetasV3', scenarioFoldersV3);



    return scenarios;
}

function getFoldersArray(path) {
    try {
        // Lee el contenido del directorio
        const folderContent = fs.readdirSync(path, { withFileTypes: true });

        // Filtra solo las carpetas
        const folders = folderContent.filter(item => item.isDirectory()).map(item => item.name);

        return folders;
    } catch (error) {
        console.error('Error al obtener las carpetas:', error);
        return [];
    }
}


function createScenario(scenarioId, imageName) {
    return {
        "label": scenarioId,
        "referenceUrl": scenarioId + "/" + imageName,
        "url": PATH_GHOST_V5 + "/" + scenarioId +"/validate_description_site.png",
        "readyEvent": "",
        "readySelector": "",
        "delay": 0,
        "hideSelectors": [],
        "removeSelectors": [],
        "hoverSelector": "",
        "clickSelector": "",
        "postInteractionWait": 1,
        "selectors": [],
        "selectorExpansion": true,
        "expect": 0,
        "misMatchThreshold" : 0.1,
        "requireSameDimensions": true
    }
}

function createConfigWithScenarios( scenarios ) {
    return {
        "id": "1",
        "viewports": [
            {
                "label": "default",
                "width": 800,
                "height": 600
            }
        ],
        "onBeforeScript": "puppet/onBefore.js",
        "onReadyScript": "puppet/onReady.js",
        "scenarios": scenarios,
        "paths": {
            "bitmaps_reference": PATH_GHOST_V5,
            "bitmaps_test":   "BackStopJS/backstop_data/bitmaps_test",
            "engine_scripts": "BackStopJS/backstop_data/engine_scripts",
            "html_report":    "BackStopJS/backstop_data/html_report",
            "ci_report":      "BackStopJS/backstop_data/ci_report"
        },
        "report": ["browser"],
        "engine": "puppeteer",
        "engineOptions": {
            "args": ["--no-sandbox"]
        },
        "asyncCaptureLimit": 5,
        "asyncCompareLimit": 50,
        "debug": false,
        "debugWindow": false
    };
}

// Create dynamic config
const scenarios = createScenarios();
const backstopConfig = createConfigWithScenarios(scenarios);

// Execute backstop
//backstop('test', backstopConfig);

module.exports = backstopConfig;
