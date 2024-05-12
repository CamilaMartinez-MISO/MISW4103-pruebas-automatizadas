const fs = require('fs');
const path = require('path');

// Constants
const PATH_GHOST_V5 = "../Ghost_v5/cypress/cypress/screenshots";
const PATH_GHOST_V3 = "../Ghost_v3/cypress/cypress/screenshots";
const PATH_BIT_MAPS_REFERENCE = "backstop_data/bitmaps_reference";

const ID_CONFIG = "1";
const LABEL_DEFAULT = "default";

// =============================================
// Methods for backstop
// =============================================

function createScenarios() {
    let scenarios = [];

    let scenarioFoldersV5 = getFoldersArray(PATH_GHOST_V5)
    let scenarioFoldersV3 = getFoldersArray(PATH_GHOST_V3)

    let availableScenarios = scenarioFoldersV5.filter(element => scenarioFoldersV3.includes(element));

    for (let i = 0; i < availableScenarios.length; i++) {

        let scenarioId = availableScenarios[i];

        let imagesV5 = getFilesInPath(PATH_GHOST_V5 + '/' + scenarioId);
        let imagesV3 = getFilesInPath(PATH_GHOST_V3 + '/' + scenarioId);

        let availableImages = imagesV5.filter(element => imagesV3.includes(element));
        console.log('availableImages',availableImages);

        for (let j = 0; j < availableImages.length; j++) {
            let originalNameFile = availableImages[j];
            let nameFile = `${ID_CONFIG}_${scenarioId}_${j+1}_0_document_0_${LABEL_DEFAULT}.png`;
            console.log(nameFile);
            copyAndPasteFile(`${PATH_GHOST_V5}/${scenarioId}/${originalNameFile}`, `${PATH_BIT_MAPS_REFERENCE}`, nameFile);
            scenarios.push( createScenario(scenarioId, originalNameFile, j+1) );
        }
    }

    return scenarios;
}

function getFoldersArray(path) {
    try {
        const folderContent = fs.readdirSync(path, { withFileTypes: true });
        const folders = folderContent.filter(item => item.isDirectory()).map(item => item.name);
        return folders;
    } catch (error) {
        console.error('Error in get folders:', error);
        return [];
    }
}

function getFilesInPath(path) {
    try {
        const folderContent = fs.readdirSync(path, { withFileTypes: true });
        const files = folderContent.filter(item => item.isFile()).map(item => item.name);
        return files;
    } catch (error) {
        console.error('Error in get files:', error);
        return [];
    }
}

function copyAndPasteFile(origin, destination, newNameFile) {
    try {
        // Lee el contenido del archivo de origen
        const fileContent = fs.readFileSync(origin);

        // Crea la ruta completa para el destino con el nuevo nombre
        const pathDestination = path.join(destination, newNameFile).toString();

        // Escribe el contenido en el nuevo archivo
        fs.writeFileSync(pathDestination, fileContent);

        console.log(`Archivo copiado exitosamente a ${pathDestination}`);
    } catch (error) {
        console.error('Error al copiar el archivo:', error);
    }
}


function createScenario(scenarioId, imageName, index) {

    console.log('url',PATH_GHOST_V3 + "/" + scenarioId +"/" + imageName,)
    console.log("referenceUrl", scenarioId + "/" + imageName);

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
        "misMatchThreshold" : 0.1,
        "requireSameDimensions": true
    }
}

function createConfigWithScenarios( scenarios ) {
    return {
        "id": ID_CONFIG,
        "viewports": [
            {
                "label": LABEL_DEFAULT,
                "width": 800,
                "height": 600
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
