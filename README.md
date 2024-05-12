# Pruebas de Regresión Visual | Ghost v5 y Ghost v3

Nombre | Email Uniandes
-- | --
Héctor Oswaldo Franco   | h.franco@uniandes.edu.co 
Manuel Felipe Bejarano | mf.bejaranob1@uniandes.edu.co
Juan Sebastián Vargas     | js.vargasq1@uniandes.edu.co
María Camila Martínez  | mc.martinezm12@uniandes.edu.co

# 1. Consideraciones iniciales

Este repositorio ya contiene los `screenshots` de ambas versiones de Ghost guardados y el `reporte html` de las herramientas ResembleJS y BackstopJS. Te invitamos primero a revisar ambos insumos antes de seguir con este documento.

## 1.1 Reportes de HTML
Para los reportes HTML de de las dos herramientas se hizo el despliegue de ambos en Github Pages y puede ser consultado en los siguientes enlaces:

Herramienta | Enlace Github Pages
-- | --
ResembleJS | https://camilamartinez-miso.github.io/MISW4103-pruebas-automatizadas/ResembleJS/results/report.html
BackstopJS | https://camilamartinez-miso.github.io/MISW4103-pruebas-automatizadas/BackStopJS/backstop_data/html_report/

De igual manera se indica la ruta de cada uno de ellos dentro del repositorio a continuación:

Herramienta | Ruta
-- | --
ResembleJS | ResembleJS/results/report.html
BackstopJS | BackStopJS/backstop_data/html_report/index.html


## 1.2 Carpeta de Screenshots

Para ver los screenshots por favor busca las carpetas `screenshots` dentro de las siguientes rutas: 

Versión Ghost | Herramienta | Ruta
-- | -- | --
5.14.1 | Kraken | Ghost_v5/kraken/screenshots
5.14.1 | Cypress | Ghost_5/cypress/cypress/screenshots
3.42.0 | Cypress | Ghost_3/cypress/cypress/screenshots


## 1.3 Continuación del proceso

Ahora, el proceso que se explicará a lo largo de este README está enfocado en ejecutar todo el paso a paso de las pruebas VRT, empezando por la instalación del ambiente global, local, la ejecución inicial del ambiente de Pruebas E2E en las dos versiones de Ghost y posteriormente la ejecución de los scripts de BackstopJS y ResembleJS para las pruebas VRT `siguelo para volver a generar los Screenshots y los reportes HTML de las dos herramientas en cuestión.`

Si por el contrario deseas realizar la ejecución de los Scripts de ResembleJS y BackstopJS unicamente ve a la sección [7. Ejecución de las pruebas VRT](#7-ejecución-de-las-pruebas-vrt) no sin antes ejecutar el comando `npm install` en ruta raìz del proyecto.

# 2. Descripción del set de pruebas VRT
Las Pruebas de Regresión Visual o Visual Rregression Testing en Inglés, son ampliamente usadas para detectar cambios en versiones `x + 1` de las aplicaciones y comprobar que estos cambios no afectan la experiencia del cliente y no se introdujeron bugs o fallos en el proceso de propagación de cambios.

En esta entrega se realizarán Pruebas de Regresión Visual en la ABP, Ghost. Las versiones utilizadas para este propósito se listan a continuación

Versión | URL Despliegue | ¿Es línea base?
-- | -- | --
5.14.1 | https://ghost-fcj4.onrender.com/   | Sí
3.42.0 | https://ghost-3-42-0.onrender.com/ | No

# 3. Setup de las pruebas VRT
Primero es necesario instalar un conjunto de herramientas globales que servirán para instalar las herramientas de pruebas de regresión visual VTT, **Kraken**, **Cypress**, **Resemble.js** y **Backstop**

## 3.1 Especificaciones técnicas del ambiente de pruebas usado:
* SO: Windows 11+ y MacOS Sonoma 14.1.1
* Node Versión: v20.12.0
* NPM Versión: v10.5.0
* GIT: Versión más reciente o predefinida en sistemas UNIX
* Visual Studio Code

## 3.2 Instalación Node JS o NVM
Para poder replicar bien este set de pruebas es requerido instalar en su máquina local la versión de [Node JS](https://nodejs.org/en) descrita en la sección 2.1, o mejor aún, instalar [NVM](https://github.com/nvm-sh/nvm), para poder alternar entre las diferentes versiones de Node disponibles.

Una vez instalado, se puede comprobar con el siguiente comando en la terminal o línea de comando de windows: 
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

## 3.3 Instalación navegador Google Chrome
Para la correcta ejecución de las dos herramientas es requerido instalar [Google Chrome](https://www.google.com/intl/es-419/chrome/). Por favor asegurarse que su versión de Chrome es la 124 o posterior tanto para UNIX como Windows

## 3.4 Instalación IDE 
Aunque usted no vaya a tocar una línea de código del proyecto, le recomendamos qué por favor instale el IDE [Visual Studio Code](https://code.visualstudio.com/) el cual le permitirá ver el proyecto como un todo y explorar las distintas carpetas que este posee en orden de entender mejor ambas herramientas.

## 3.5 Instalar GIT
Para clonar los repositorios en donde se encuentran las herramientas, es necesario usar la herramienta GIT, la cual puede ser instalada siguiendo los pasos de su [página oficial](https://git-scm.com/downloads) en la sección downloads.

Una vez instaladas las herramientas, se puede comprobar su correcto funcionamiento con el siguiente comando. El resultado debe ser algo parecido a esto.

```bash
> git --version
git version 2.39.3 (Apple Git-145)
```

# 4. Setup proyecto
Una vez se tiene el entorno inicial de pruebas preparado, procedemos a instalar las librerías propias del proyecto para que se ejecute de forma satisfactoria.

## 4.1 Descomprimir el proyecto
Si bien puede descargar el proyecto desde el apartado **release** de Github, también puede clonarlo, y descargarlo en su máquina local haciendo uso del siguiente comando:

```bash
> git clone https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas.git
```

## 4.2 Estructura general del proyecto

A continuación se muestra la estructura global del proyecto. Este se divide en cuatro grandes grupos. **Ghost_v3** y **Ghost_v5**, **ResembleJS** y **BackstopJS**, y las carpetas con las versiones de Ghost se dividen a su vez en 2 subgrupos, **Kraken** y **Cypress** para Ghost v5 y **Cypress** para Ghost 3.


<img width="356" alt="Screenshot 2024-05-12 at 4 58 21 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/8bb79bbb-d662-41fd-afe3-496a4f74bbea">

## 4.3 Instalar las librerías locales del proyecto
Una vez se han instalado las herramientas globales en la máquina local y se ha descomprimido el proyecto, es indispensable instalar las dependencias propias de cada una de las herramientas. Para ello solo es necesario hacer dos pasos:

1. Abrir una terminal o consola de comandos (CMD) sobre la carpeta raíz del proyecto
2. Ejecutar el siguiente comando de Node:
```bash
> npm install
```
Esto descargará e instalará las dependencias necesarias para ambas herramientas, el listado de dependencias se muestra a continuación.

```json
  "dependencies": {
    "@faker-js/faker": "^8.4.1",
    "android-platform-tools": "^3.0.2",
    "appium": "^2.5.4",
    "assert": "^2.1.0",
    "backstopjs": "^6.3.23",
    "chai": "4.4.1",
    "kraken-node": "^1.0.24",
    "resemblejs": "^5.0.0"
  }
```
Si desea consultar más sobre esto, puede ver el archivo `package.json`


## 4.4 Servicio de Ghost

<p align="center">
<img width="300" alt="Screenshot 2024-05-02 at 9 51 07 PM" src="https://ptimofeev.com/images/render.png">
<p align="center">render.com</p>


Las instancias de Ghost sobre las que se ejecutarán las pruebas VRT se encuentran en la plataforma render.com y pueden ser accedidas desde los siguientes enlaces. 

 * [Ghost 5.14.1](https://ghost-fcj4.onrender.com/ghost)
   * Usuario: `h.franco@uniandes.edu.co`
   * Contraseña: `miso20244103`

 * [Ghost 3.42.0](https://ghost-3-42-0.onrender.com/)
   * Usuario: `jsvargasq@hotmail.com`
   * Contraseña: `AdminR00t123!`


# 5. Ejecución de las pruebas E2E

Ahora se procederá a ejecutar las pruebas End-2-End modificadas de la entrega anterior. Las modificaciones hechas permiten la captura de screenshots o pantallazos durante la ejecución de las pruebas por cada escenario y funcionalidad probada.

## 5.1 Herramienta Kraken

<p align="center">
<img src="https://raw.githubusercontent.com/TheSoftwareDesignLab/KrakenMobile/master/reporter/assets/images/kraken.png" alt="kraken logo" width="140" height="193">
<p align="center">Kraken</p>
    
Ya que la estructura del proyecto ahora contempla las dos versiones de Ghost. Se debe realizar un paso extra para poder ejecutar las pruebas E2E de Kraken en la versión 5.14.1 de Ghost.

Dentro de la base de la carpeta raíz del proyecto **MISW4103-pruebas-automatizadas** realizar los siguientes comandos
```bash
> cd Ghost_v5
> cd kraken
```
Por favor asegurarse de que está escribiendo Ghost con la G en mayúsculas para que el sistema de ficheros pueda dirigirse exitosamente a esa carpeta.

### 5.1.1 Estructura del proyecto:

La estructura del proyecto debe verse de la siguiente manera

<img width="317" alt="Screenshot 2024-05-05 at 9 48 05 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/93833525-cc94-4ccd-9d4d-74fef82dbf17">


*NOTA:* Cada *feature* está nombrado con la siguiente nomenclatura **FU00X_ESC00X**, la cual hace referencia a la funcionalidad sobre la que se está haciendo el escenario de prueba.

### 5.1.2 Nomenclatura de los escenarios

Los escenarios cumplen la siguiente nomenclatura para diferenciar los unos de los otros y correr en instancias separadas.
```
🗂️ kraken
  🗂️ features
    🗂️ web
      🗂️ steps_definitions
        📄 steps.js

    📄 FU001_ESC001.cy.js
    📄 FU001_ESC002.cy.js
    📄 FU002_ESC002.cy.js
```


### 5.1.3 Modificación de los escenarios para captura de Screenshots

Para poder hacer la captura de screeshots en esta herramienta se realizó una modificación en el archivo `hooks.js` para poder colocar en un AfterStep el bloque de código necesario para la captura de screenshots.

Este bloque de código se ejecutará siempre después de cada paso y no hay necesidad que modificar los archivos *features* o *steps.js* de los escenarios ya creados. El siguiente bloque de código muesta la funcionalidad añadida

```javascript
AfterStep(async function() {
  this.indexStep++;

  if( this.indexStep > 2 && this.indexStep % 2 === 0 ) {
    const screenshotName = `screenshot-${this.screenshotCount}.png`;
    const screenshotPath = `./screenshots/${this.featureAndScenario}/${screenshotName}`;
    this.screenshotCount++;
    await this.driver.saveScreenshot(screenshotPath);
  }
})
```
Còmo se puede apreciar, en la parte del if se hace un salto de paso para que no tome captura de pantalla de los pasos que son de esperar una x cantidad de tiempo sino de los que sirven para ejecutar un proceso como tal.


### 5.1.4 Ejecución de las pruebas
Una vez adentro de esa carpeta puede ejecutar el siguiente comando que iniciará la ejecución de los escenarios de prueba disponibles.
```bash
> npx kraken-node run
```
Cada prueba realiza el escenario descrito y al finalizar realiza un reporte en HTML que puede ser consultado en la carpeta **reports**

De igual manera los screenshots tomados durante la ejecución de las pruebas pueden ser encontrados en carpeta **screenshots**. La estructura de esta carpeta por dentro debe lucir de la siguiente manera.

<img width="351" alt="Screenshot 2024-05-11 at 8 51 12 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/d5f7a422-020f-4390-ada1-87bdcf4cee9a">

Como se puede apreciar, dentro de la ruta `Ghost_5/Kraken/screenshots` se encuentran las carpetas que contienen los screenshots por cada escenario.


### 5.1.5 Posibles situaciones que se pueden presentar
Dependiendo del sistema operativo en el que se ejecuten las pruebas, estas pueden o no correr automáticamente una detrás de la otra.

Si se ejecuta la prueba en un Sistema Operativo tipo UNIX o Linux, deberían correr los escenarios uno detrás del otro automáticamente, si por el contrario se está en Windows, hay una probabilidad de que solo ejecute el primero en orden alfabético y al finalizar no siga con los demás.

Para remediar esto por favor en la carpeta de features sólo dejar un escenario y ejecutar así cada uno de ellos.

Por otro lado, ya que las pruebas toman un tiempo considerablemente mayor al hacer la toma de screenshots por cada paso ejecutado del escenario es posible que el computador se suspenda durante la prueba, lo que puede ocasionar que, las pruebas fallen automáticamente. Para no tener este inconveniente por favor asegurarse de que el computador tiene carga suficiente y en su configuración no se tiene la suspensión automática después de unos minutos de inactividad.


## 5.2 Herramienta Cypress

<p align="center">
<img src="https://static-00.iconduck.com/assets.00/cypress-icon-2048x2045-rgul477b.png" alt="kraken logo" height="200">
<p align="center">Cypress</p>

Dentro de la base de la carpeta raíz del proyecto **MISW4103-pruebas-automatizadas** realizar los siguientes comandos

```bash
> cd Ghost_v5
> cd cypress
```
Por favor asegurarse de que está escribiendo Ghost con la G en mayúsculas para que el sistema de ficheros pueda dirigirse exitosamente a esa carpeta.

La estructura del proyecto debe verse así:

<img width="303" alt="Screenshot 2024-05-05 at 11 37 22 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/64bb1f1d-3c6f-4753-8416-226590c81311">

### 5.2.1 Instalar Cypress v13.7.3
Abrir una línea de comandos o terminal de la máquina y escribir el siguiente comando.
```bash
> npm -g install cypress@13.7.3
```
Esto instalará Cypress de forma global en el PC para ser usado desde cualquier punto.


### 5.2.2 Modificación de los escenarios para captura de Screenshots

Para que Cypress pudiera capturar los screenshots después de cada paso ejecutado se hizo un archivo JavaScript adicional con el patrón Page Object que será invocado en cada paso luego de su ejecución. La clase `screenshotPage.js` puede ser encontrada en la ruta `cypress/e2e/pages`

Esta clase tiene dos métodos importantes, `configureScreenshotFolder(folderPath)` y `takeScreenshot(nameScreenshot)` los cuales se muestra su còdigo fuente a continuación

```javascript
    /**
     * Setup the Screenshot Folder 
     * @param {String} folderPath 
     */
    configureScreenshotFolder(folderPath) {
        this.elements.folderPath = folderPath;
        this.screenshotCount = 0;

        Cypress.Screenshot.defaults({
            overwrite: true,
            capture: 'viewport',
            disableTimersAndAnimations: false
        })
    }
```
El método configureScreenshotFolder tiene como funcionalidad definir la carpeta que será usada para albergar cada screenshot tomado durante la ejecución de los escenarios. Este método es llamado al incio de cada escenario de Cypress antes de iniciar con la ejecución de cada paso.

```javascript
    /**
     * Take the Screenshot of the view where is located
     * @param {String} nameScreenshot
     */
    async takeScreenshot(nameScreenshot = null) {
        // Incrementar el contador de capturas de pantalla
        this.screenshotCount++;
        // Definir el nombre del archivo con formato autoincrementado
        const filename = nameScreenshot === null ? `screenshot-${this.screenshotCount}` : nameScreenshot;
        // Tomar un screenshot y guardar en la carpeta personalizada
        await cy.screenshot(`${this.elements.folderPath}/${filename}`);
    }
```

El método asincronico takeScreenshot es llamado luego de cada paso y es invocado dentro de cada método del Page Object de donde se está ejecutando.

A continuación se muestran los ejemplos de la invoacación de los dos métodos.

* configureScreenshotFolder()

```javascript
    it('Scenario: FU002_ESC001: As an admin user, I want to create a post and publish it', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()

        // LLAMADO A configureScreenshotFolder()
        screenshotPage.configureScreenshotFolder('FU002_ESC001')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        .
        .
        .
```

Se muestra la invocación de este método dentro de la definción de los escenarios de Cypress, se pasa por argumento el nombre de la carpeta que tendrá los Screenshots a tomar, en este caso la **FU002_ESC001**

* takeScreenshot()

```javascript
    async signIn(email, password) {
        this.elements.identification().type(email)
        this.elements.password().type(password)
        this.elements.loginButton().wait(1000).click()

        // LLAMADO A takeScreenshot()
        await screenshotPage.takeScreenshot('signIn')
    }

    async singOut() {
        this.elements.signOutButton().wait(1000).click({ force: true })

        // LLAMADO A takeScreenshot()
        await screenshotPage.takeScreenshot('singOut')
    }
```
El método takeScreenshot() es tomado en cada método de los Page Object luego de que cada paso es ejecutado satisfactoriamente.


### 5.2.3 Correr instancia de Cypress
Después en una terminal o consola de comandos abierta corremos el siguiente comando:
```bash
> cypress open
```
Una vez ejecutado el comando, debe abrirse una ventana similar a esta.

<img width="1205" alt="Screenshot 2024-05-04 at 11 52 14 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/7967dd94-6d31-4cb7-9739-8ded0aa04524">

### 5.2.4 Seleccionar la carpeta del proyecto Cypress:
Presionamos botón **Add project** de la vista principal de Cypress y seleccionamos la carpeta raíz del proyecto llamada `MISW4103-pruebas-automatizadas/Ghost_v5/cypress`.

<img width="1205" alt="Screenshot 2024-05-04 at 11 53 19 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/847aceee-48d8-464a-875d-a1ad05ec6799">

<img width="1206" alt="Screenshot 2024-05-04 at 11 55 03 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/709fbd2d-a8f3-4b24-b4a5-c72784c76b62">

*NOTA: Si a la primera vez que intentan abrir el proyecto desde Cypress este queda en una pantalla de loading que no avanza, por favor cerrar la venta del programa y volver a ejecutar y seleccionar la carpeta del proyecto de nuevo hasta que se cargue completamente.*

### 5.2.5 Seleccionar la prueba E2E
Las pruebas de reconocimiento que se harán son del tipo E2E (Extremo a Extremo), Por ende procedemos a escoger el cuadro de texto que dice **E2E Testing**

<img width="1206" alt="Screenshot 2024-05-04 at 11 56 16 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/39b0713a-6567-4378-909c-085e189ae525">

### 5.2.6 Iniciar la prubeba E2E
Cypress nos abrirá una ventana donde selecciona por defecto el Navegador Chrome o Firefox, con un botón en color verde, el cual debemos presionar y que dice **Start E2E Testing in < Navegador >**,

<img width="1207" alt="Screenshot 2024-05-04 at 11 56 53 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/e7f2f7ff-3645-4b5b-92b3-a0b9e939bb24">

### 5.2.7 Ejecutar la prueba
Una vez presionado el botón de la sección anterior, se abrirá una ventana del navegador en donde aparece el proyecto mostrando el árbol de archivos de la carpeta **e2e**, debe lucir así:
```
🗂️ cypress/e2e
    🗂️ ALL_TESTS
      📄 allTests.cy.js
    🗂️ FU001
      📄 FU001.cy.js
    🗂️ FU002
      📄 FU002.cy.js
```
<img width="1728" alt="Screenshot 2024-05-05 at 11 40 38 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/efa22f41-32b4-4a71-807e-76fdffc9588a">

El archivo `allTests.cy.js` contiene todos los escenarios juntos para que se ejecuten uno tras del otro. Sin embargo si le damos click al archivo de una funcionalidad en específico, esta correrá todos los escenarios que tiene adentro.

<img width="1728" alt="Screenshot 2024-05-05 at 12 28 07 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/3c4807c3-1590-47c5-9549-976f9f0c3af0">


Los screenshots tomados durante la ejecución de las pruebas pueden ser encontrados en carpeta **screenshots**. La estructura de esta carpeta por dentro debe lucir de la siguiente manera.

<img width="236" alt="Screenshot 2024-05-11 at 9 17 12 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/19bbb9f0-31b0-4723-878d-9c4ac36574f7">

Como se puede apreciar, dentro de la ruta `Ghost_5/cypress/cypress/screenshots` se encuentran las carpetas que contienen los screenshots por cada escenario.

Los screenshots de estas carpetas llevan los nombres de los pasos realizados en Cypress para ser comparados posteriormente contra los screenshots de la versión 3.42.0 de Ghost con las herramientas de ResembleJS y BackstopJS

## 5.3 Ejecución pruebas E2E en Ghost 3.42.0
Ahora para ejecutar los nuevos escenarios construidos en Cypress para Ghost 3.42.0, se deben repetir los pasos descrito durante toda la sección 4, exceptuando la parte de la instalación global de Cypress de nuevo, ya que ya se tiene instalada por defecto. 

La estructura de carpetas es completamente la misma, salvaguardando que se debe modificar los comandos de ruta de carpeta por Ghost_v3, ejemplo:

Ubicándonos sobre la carpeta raíz del proyecto, **MISW4103-pruebas-automatizadas**, realizamos los siguientes comandos

```bash
> cd Ghost_v3
> cd cypress
```

Y repetimos los pasos ya mencionados anteriormente. 


# 6. Funcionalidades y escenarios extra

Para esta entrega se agregaron dos nuevas funcionalidades extra a las 20 ya existentes de entregas pasadas. Esto se hizo con el fin de poder cumplir el criterio de aceptación de la rúbrica de esta semana, de encontrar funcionalidades que estuvieran en ambas versiones de Ghost. Las funcionalidades extra se detallan a continuación.

Código | Funcionalidad | # Escenarios
-- | -- | --
FU021 | Crear etiquetas (tags)   | 4
FU022 | Borrar todo el contenido | 2

*NOTA: En total se tendrían 22 funcionalidades y 26 escenarios en total para esta entrega en Ghost v5, pero únicamente se escogieron 5 funcionalidades y 12 escenarios para ser replicados en Ghost v3*


# 7. Ejecución de las pruebas VRT
Una vez que ya se ejecutaron las pruebas End-2-End en Kraken y Cypress para Ghost v5.14.1 y Cypress para Ghost v3.42.0, se procede a realizar las pruebas VRT con las herramientas **ResembleJS** y **BackstopJS**, basándonos en los insumos (screenshots de cypress para cada escenario de las dos versiones de Ghost) proveídos de las secciones anteriores.

## 7.1 Herramienta BackstopJS

<p align="center">
<img src="https://www.drupal.org/files/project-images/backstop-lemur.png" alt="Backstop logo"  height="193">
<p align="center">BackstopJS</p>

### 7.1.1 Estructura de carpetas Backstopjs

La estructura de Backstopjs se ve de la siguiente manera
```
🗂️ BackStopJs
    📄 configBackstop.js
    🗂️ backstop_data
    🗂️ scripts
      📄 file.js
```

### 7.1.2 Ejecución Backstopjs

Para realizar las pruebas con Backstopjs es necesario ubicarnos en la carpeta BackStopJs ubicada en la raiz del proyecto

```bash
> cd BackStopJs
```

Si no tenemos instalada la herramienta Backstopjs, es necesario ejecutar el siguiente comando

```bash
> npm install -g backstopjs
```

Ya con la herramienta instalada solo tendremos que ejecutar el siguiente comando

```bash
> backstop test --config="configBackstop.js"
```

Luego de lanzar el comando aparecerán los logs de la ejecución, similar a la siguiente imagen

![image](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/42383191/d946117c-b18b-4341-a49f-3ea72289f16f)

Al finalizar la ejecución se abrirá el reporte sobre el navegador teniendo una salida similar a la siguiente

![image](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/42383191/482c3c7b-3ad7-45d2-bc19-cd2feff366e6)


### 7.1.3 Funcionamiento de Backstopjs

La herramienta funciona por escenarios de prueba en donde se toma una imagen de referencia y otra a comparar, para esto se dispone el script configBackstop.js capaz de construir dinamicamente los escenarios según la estructura actual de carpetas de Ghost_v3/screenshots y Ghost_v5/screenshots.
El script revisa los screenshots almacenados por cada escenario revisando que exista el mismo en la versión 3 y 5 de Ghost, luego de esto ignora aquellas que ya se han construido previamente eliminando pantallas repetidas para comparar. 


## 7.2 Herramienta ResembleJS

<p align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWZS1Cpv4rCriMHPEa3FeTo5KEbf7RYI6LbfC56ABJA&s" alt="Resemble logo"  height="193">
<p align="center">ResembleJS</p>

### 7.2.1 Estructura de carpetas Backstopjs

La estructura de ResembleJS se ve de la siguiente manera:

```
🗂️ ResembleJS
    🗂️ results
      🗂️ FU006_ESC001
      🗂️ FU006_ESC002
      🗂️ .
      🗂️ .
      🗂️ .
      📄 report.html
    📄 resemble-report.js  
```

### 7.2.2 Ejecución ResembleJS

Para realizar las pruebas con ResembleJS es necesario ubicarnos en la carpeta ResembleJS ubicada en la raiz del proyecto

```bash
> cd ResembleJS
```

Una vez parados sobre esa ruta ejecutamos el siguiente comando de node

```bash
> node resemble-report.js
```

Luego de lanzar el comando aparecerán los logs de la ejecución, similar a la siguiente imagen

<img width="576" alt="Screenshot 2024-05-12 at 5 57 27 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/a212eb14-c733-42ea-837a-6c5eddc7b566">

Para poder visualizar el reporte por favor dirigirse a la siguiente ruta: 

```bash
ResembleJS/results/report.html
```
Recomendamos tener instalada la extensión de Visual Studio Code, Live Server para poder desplegar el html generado de una forma más sencilla

<img width="703" alt="Screenshot 2024-05-12 at 5 59 28 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/7cb20453-82f6-421a-92a1-8a11b17b7910">

Haciendo click derecho sobre el archivo report.html y oprimiendo el botón `Open with Live Server`

<img width="418" alt="Screenshot 2024-05-12 at 6 00 53 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/adc37e0a-9445-46b8-a00f-367bb84c6ea6">

Esto desplegará el reporte generado por ResembleJS y debería lucir de la siguiente forma

<img width="1713" alt="Screenshot 2024-05-12 at 6 03 37 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/1a6cb51e-ee75-4f9f-b281-3be712720cc9">

Ahí dentro podrá interactuar con cada uno de los escenarios testeados, que son 12 en total.



# 8 Reporte de Issues 

El reporte de los issues puede ser consultado en este mismo repositorio en el módulo de ISSUES que se encuentra en el siguiente enlace: [Herramienta de gestión de Issues de Github](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/issues)

Los issues para Pruebas de Regresión Visual tienen la siguiente nomenclatura: `VRT-00X - Nombre del issue encontrado`


# 9. Documentación extra
Puede ver las funcionalidades escogidas, la comparativa de pros y contras de ambas herramientas, una comparativa final de las dos y el video del proceso de la ejecución de pruebas VRT en la [Wiki](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/wiki) del proyecto 

