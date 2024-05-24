const { getFoldersArray, getFilesInPath, createFolderIfNotExists, copyAndPasteFile } = require('./scripts/file')

// Constants
const PATH_GHOST_V5 = "../Ghost_v5/cypress/cypress/screenshots";
const PATH_GHOST_V3 = "../Ghost_v3/cypress/cypress/screenshots";
const PATH_BIT_MAPS_REFERENCE = "backstop_data/bitmaps_reference";

const ID_CONFIG = "1";
const LABEL_DEFAULT = "default";

// =============================================
// Methods for backstop
// =============================================

createFolderIfNotExists("./backstop_data", "bitmaps_reference")

function createScenarios() {
    let scenarios = [];
    let usedImages = [];

    let scenarioFoldersV5 = getFoldersArray(PATH_GHOST_V5)
    let scenarioFoldersV3 = getFoldersArray(PATH_GHOST_V3)

    let availableScenarios = scenarioFoldersV5.filter(element => scenarioFoldersV3.includes(element));

    for (let i = 0; i < availableScenarios.length; i++) {

        let scenarioId = availableScenarios[i];

        let imagesV5 = getFilesInPath(PATH_GHOST_V5 + '/' + scenarioId);
        let imagesV3 = getFilesInPath(PATH_GHOST_V3 + '/' + scenarioId);

        let availableImages = imagesV5.filter(element => imagesV3.includes(element));

        for (let j = 0; j < availableImages.length; j++) {
            let originalNameFile = availableImages[j];

            if( !usedImages.includes( originalNameFile ) ) {
                let nameFile = `${ID_CONFIG}_${scenarioId}_${j+1}_0_document_0_${LABEL_DEFAULT}.png`;
                copyAndPasteFile(`${PATH_GHOST_V5}/${scenarioId}/${originalNameFile}`, `${PATH_BIT_MAPS_REFERENCE}`, nameFile);
                scenarios.push( createScenario(scenarioId, originalNameFile, j+1) );
                usedImages.push(originalNameFile);
            }
        }
    }

    return scenarios;
}

function createScenario(scenarioId, imageName, index) {
    return {
        "label": scenarioId + '_' + index,
        "url": PATH_GHOST_V3 + "/" + scenarioId +"/" + imageName,
        "referenceUrl": scenarioId + "/" + imageName,
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
        "misMatchThreshold" : 8,
        "requireSameDimensions": true
    }
}

function createConfigWithScenarios( scenarios ) {
    return {
        "id": ID_CONFIG,
        "viewports": [
            {
                "label": LABEL_DEFAULT,
                "width": 1000,
                "height": 660
            }
        ],
        "onBeforeScript": "puppet/onBefore.js",
        "onReadyScript": "puppet/onReady.js",
        "scenarios": scenarios,
        "paths": {
            "bitmaps_reference": "backstop_data/bitmaps_reference",
            "bitmaps_test":      "backstop_data/bitmaps_test",
            "engine_scripts":    "backstop_data/engine_scripts",
            "html_report":       "backstop_data/html_report",
            "ci_report":         "backstop_data/ci_report"
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

module.exports = backstopConfig;
