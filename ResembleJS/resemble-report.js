const fs = require('fs');
const path = require('path');
const compareImages = require("resemblejs/compareImages")


// Función principal
async function compareImagesInFolders(v3FolderPath, v5FolderPath) {
    try {

        // Obtener la lista de carpetas en la carpeta screenshots de ghost v3
        const v3Folders = fs.readdirSync(v3FolderPath, { withFileTypes: true });

        let resultInfo = []
        // Recorrer cada carpeta de cada escenario en la carpeta screenshots de ghost v3
        for (const v3Folder of v3Folders) {
            if (v3Folder.isDirectory()) {
                const folderName = v3Folder.name;
                const v3SubFolderPath = path.join(v3FolderPath, folderName);
                const v5SubFolderPath = path.join(v5FolderPath, folderName);

                // Verificar si existe la misma carpeta en la carpeta screenshots de ghost v5
                if (fs.existsSync(v5SubFolderPath)) {
                    // Obtener la lista de archivos de imágenes en la carpeta del escenario en ghost v3
                    const v3Images = fs.readdirSync(v3SubFolderPath).filter(file => /\.(jpg|jpeg|png)$/i.test(file));

                    let comparisons = []
                    // Recorrer cada imagen en la carpeta del escenario en ghost v3
                    for (const v3Image of v3Images) {
                        const v3ImagePath = path.join(v3SubFolderPath, v3Image);
                        const v5ImagePath = path.join(v5SubFolderPath, v3Image);

                        // Verificar si la imagen existe en la carpeta correspondiente en ghost v5
                        if (fs.existsSync(v5ImagePath)) {
                            // Comparar las imágenes
                            const image1 = fs.readFileSync(v3ImagePath);
                            const image2 = fs.readFileSync(v5ImagePath);
                            const options = {
                                output: {
                                    errorColor: {
                                        red: 255,
                                        green: 0,
                                        blue: 255
                                    },
                                    errorType: "movement",
                                    transparency: 0.3,
                                    largeImageThreshold: 1200,
                                    useCrossOrigin: false,
                                    outputDiff: true
                                },
                                scaleToSameSize: true,
                                ignore: "antialiasing"
                            };
                            const data = await compareImages(image1, image2, options);

                            comparisons.push({
                                v3ImagePath: v3ImagePath,
                                v5ImagePath: v5ImagePath,
                                v3Image: v3Image,
                                info: {
                                    isSameDimensions: data.isSameDimensions,
                                    dimensionDifference: data.dimensionDifference,
                                    rawMisMatchPercentage: data.rawMisMatchPercentage,
                                    misMatchPercentage: data.misMatchPercentage,
                                    diffBounds: data.diffBounds,
                                    analysisTime: data.analysisTime
                                }
                            });

                            // Crear la carpeta de resultados si no existe
                            if (!fs.existsSync(`./results/${folderName}`)) {
                                fs.mkdirSync(`./results/${folderName}`, { recursive: true });
                            }
                            // Guardar la imagen comparativa
                            fs.writeFileSync(`./results/${folderName}/compare-${v3Image}`, data.getBuffer());
                        }
                    }
                    resultInfo.push({
                        folderName: folderName,
                        comparisons: comparisons
                    });
                }
            }
        }
        fs.writeFileSync(`./results/report.html`, createReport(resultInfo));
        console.log('Comparación finalizada. Revisa el archivo ResembleJS/results/report.html');
    } catch (error) {
        console.error('Error al comparar imágenes:', error);
    }
}

// Carpetas de los screenshots de Ghost v3 y Ghost v5
const v3FolderPath = '../Ghost_v3/cypress/cypress/screenshots';
const v5FolderPath = '../Ghost_v5/cypress/cypress/screenshots';

console.log('Inciando comparación de Ghost v3 y Ghost v5...');
compareImagesInFolders(v3FolderPath, v5FolderPath);

function createReport(info) {
    return `<!doctype html>
    <html lang="es">
    
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Reporte en ResembleJS</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>
    
        <body>
            <div class="container">
                <div class="d-flex flex-column w-75 m-auto">
                    <div class="d-flex flex-column">
                        <h1>Reporte en ResembleJS</h1>
                        <p>En este reporte se muestra la comparación hecha con ResembleJS de los screenshots de los
                            escenarios ejecutados en las versiones v.3 y v.5 de Ghost.</p>
                    </div>
                    <div class="d-flex flex-column mt-2 mb-2">
                        ${info.map((s, index) => scenario(s, index)).join('')}
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                    crossorigin="anonymous"></script>
        </body>
    
    </html>`
}

function scenario(scenarios, index) {
    return `
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${`c_${index}`}" aria-expanded="true" aria-controls="${`c_${index}`}"
                    id="${`b_${index}`}">
                    <h4>${scenarios.folderName}</h4>
                </button>
            </h2>
            <div id="${`c_${index}`}" class="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${scenarios.comparisons.map(c => comparison(c, scenarios.folderName)).join('')}
                </div>
            </div>
        </div>
    </div>`
}

function comparison(comparison, folderName) {
    return `<div class="d-flex flex-column">
        <div class="card">
            <div class="card-header">
                <h5>${comparison.v3Image.replace(".png", "")}</h5>
            </div>
            <div class="card-body">
                <div class="d-flex flex-column mt-2">
                    <h5>
                        Resultado de la comparación:
                    </h5>
                    <p><pre>${JSON.stringify(comparison.info, null, 2)}</pre></p>
                </div>
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column w-50">
                        <h5 class="align-self-center">V3</h5>
                        <img class="align-self-center img-fluid" src="../${comparison.v3ImagePath}" 
                            label="V3" alt="image V3">
                    </div>
                    <div class="d-flex flex-column w-50">
                        <h5 class="align-self-center">V5</h5>
                        <img class="align-self-center img-fluid" src="../${comparison.v5ImagePath}" 
                            label="V5" alt="image V5">
                    </div>
                </div>
                <div class="d-flex flex-column mt-2">
                    <div class="d-flex flex-column">
                        <h5 class="align-self-center">Diferencias</h5>
                        <img class="align-self-center img-fluid"
                            src="./${folderName}/compare-${comparison.v3Image}" 
                            label="Diff" alt="diferencia">
                    </div>
                </div>
            </div>
        </div>
    </div>`
}