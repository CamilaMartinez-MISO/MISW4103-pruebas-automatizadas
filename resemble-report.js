const fs = require('fs');
const path = require('path');
const compareImages = require("resemblejs/compareImages")

// Función principal
async function compareImagesInFolders(v3FolderPath, v5FolderPath) {
    try {

        // Obtener la lista de carpetas en la carpeta screenshots de ghost v3
        const v3Folders = fs.readdirSync(v3FolderPath, { withFileTypes: true });

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

                            let resultInfo = {
                                isSameDimensions: data.isSameDimensions,
                                dimensionDifference: data.dimensionDifference,
                                rawMisMatchPercentage: data.rawMisMatchPercentage,
                                misMatchPercentage: data.misMatchPercentage,
                                diffBounds: data.diffBounds,
                                analysisTime: data.analysisTime
                            }
                            
                            // Crear la carpeta de resultados si no existe
                            if (!fs.existsSync(`./results/${folderName}`)) {
                                fs.mkdirSync(`./results/${folderName}`, { recursive: true });
                            }
                            // Guardar la imagen comparativa
                            fs.writeFileSync(`./results/${folderName}/compare-${v3Image}`, data.getBuffer());
                            console.log(`Comparando ${v3Image} en ${folderName}: ${data.misMatchPercentage}% de diferencia`);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error al comparar imágenes:', error);
    }
}

// Carpetas de los screenshots de Ghost v3 y Ghost v5
const v3FolderPath = './Ghost_v3/cypress/cypress/screenshots';
const v5FolderPath = './Ghost_v5/cypress/cypress/screenshots';

compareImagesInFolders(v3FolderPath, v5FolderPath);
