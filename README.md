# Pruebas E2E | Ghost

Nombre | Email Uniandes
-- | --
Héctor O. Franco   | h.franco@uniandes.edu.co 
Manuel F. Bejarano | mf.bejaranob1@uniandes.edu.co
Juan S. Vargas     | js.vargasq1@uniandes.edu.co
María C. Martínez  | mc.martinezm12@uniandes.edu.co

# 1. Descripción del set de pruebas E2E
Las pruebas end-to-end se hacen para realizar pruebas sobre todos los caminos de los flujos de trabajo de los usuarios, de principio a fin, imitando las condiciones de los usuarios. Verifican la interacción correcta de la aplicación y el intercambio de datos con otros componentes fuera y dentro del sistema.

# 2. Instalación tecnologías globales
Primero es necesario instalar un conjunto de herramientas globales que servirán para instalar las herramientas de pruebas de escenarios E2E, **Kraken** y **Cypress**

## 2.1 Especificaciones técnicas del ambiente de pruebas usado:
* SO: Windows 10+ y MacOS 10+
* Node Version: v20.12.0
* NPM Versión: v10.5.0
* GIT: Versión más reciente o predefinida en sistemas UNIX
* Visual Studio Code

## 2.2 Instalación Node JS o NVM
Para poder replicar bien este set de pruebas es requerido instalar en su máquina local la versión de [Node JS](https://nodejs.org/en) descrita en la sección 2.1, o mejor aun, instalar [NVM](https://github.com/nvm-sh/nvm), para poder alternar entre las diferentes versiones de Node disponibles.

Una vez instalado, se puede comprobar con el siguiente comando en la terminal o lìnea de comando de windows: 
Node: 
```bash
> node --version
v20.12.0
```
npm: 
```bash
> npm --version
10.5.0
```

## 2.3 Instalación naegador Google Chrome
Para la correcta ejecución de las dos herramientas es requerido instalar [Google Chrome](https://www.google.com/intl/es-419/chrome/). Por favor asegurarse que su versión de Chrome es la 124 o posterior tanto para UNIX como Windows

## 2.4 Instalación IDE 
Aunque usted mo vaya a tocar una línea de código del proyecto, le recomendamos qué por favor instale el IDE [Visual Studio Code](https://code.visualstudio.com/) el cual le permitirá ver el proyecto como un todo y explorar las distintas carpetas que este posee en orden de entender mejor ambas herramientas.

### 2.5 Instalar GIT
Para clonar los repositorios en donde se cuentran las herramientas, es necesario usar la herramienta GIT, la cual puede ser instalada siguiendo los pasos de su [página oficial](https://git-scm.com/downloads) en la sección downloads.

Una vez instalada la herramientas, se puede comprobar su correcto funcionamiento con el siguiente comando. El resultado debe ser algo parecido a esto.

```bash
> git --version
git version 2.39.3 (Apple Git-145)
```

# 3. Setup proyecto
Una vez se tiene el entorno inicial de pruebas preparado, procedemos a instalar las librerías propias del proyecto para que se ejecute de forma satisfactoria.

## 3.1 Descomprimir el proyecto
Si bien puede descargar el proyecto desde el apartado **release** de Github, también puede clonarlo, y descargarlo en su máquina local haciendo uso del siguiente comando:

```bash
> git clone https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas.git
```

## 3.2 Estructura del proyecto

A continuaciòn se muestra la estructura global del proyecto, más adelanta se mostrará la estructuta independiente de las dos herramientas por separado

```
MISW4103-pruebas-automatizadas
|cypress
|kraken
|_.gitignore
|_package-lock.json
|_package.json
|_README.md
```

## 3.3 Instalar las librerías locales del proyecto
Una vez se han instalado las herramientas globales en la máquina local y se ha descomprimido el proyecto, es indispensable instalar las dependencias propias de cada una de las herramientas, Kraken y Cypress. Para ello solo es necesario hacer dos pasos:
1. Abrir una terminal o consola de comandos (CMD) sobre la carpeta raiz del proyecto
2. Ejecutar el siguiente comando de Node:
```bash
> npm install
```
Esto descargará e instalará las dependencias necesarias para ambas herramientas, el listado de dependencias se muestra a continuación

```json
  "dependencies": {
    "@faker-js/faker": "^8.4.1",
    "android-platform-tools": "^3.0.2",
    "appium": "^2.5.4",
    "chai": "^5.1.0",
    "kraken-node": "^1.0.24"
  }
```
Si desea consultar más sobre esto, puede ver el archivo *package.json*


## 3.4 Servicio de Ghost
La instancia de Ghost sobre la cual se ejecutarán las pruebas E2E se encuentra en la plataforma render.com y puede ser accedida desde el siguiente enlace. [Instancia de Ghost](https://ghost-fcj4.onrender.com/ghost)

