const fs = require('fs');
const path = require('path');

// ==================================
// Create folder and copy files functions
// ==================================

function createFolderIfNotExists(path, folder) {
    const folderPath = `${path}/${folder}`;
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
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

// ==================================
// Get folders and files functions
// ==================================

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

module.exports = { createFolderIfNotExists, copyAndPasteFile, getFoldersArray, getFilesInPath };
