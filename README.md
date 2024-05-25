
# Estrategia de pruebas | Ghost v5.14.1

Elaborada por los siguientes ingenieros Sr en automatización de pruebas

| Nombre                 | Email                          |
| ---------------------- | ------------------------------ |
| Héctor Oswaldo Franco  | h.franco@uniandes.edu.co       |
| Manuel Felipe Bejarano | mf.bejaranob1@uniandes.edu.co  |
| Juan Sebastián Vargas  | js.vargasq1@uniandes.edu.co    |
| María Camila Martínez  | mc.martinezm12@uniandes.edu.co |

# 1. Ambiente de pruebas

El equipo de automatización dispone del siguiente ambiente de pruebas para la ejecución de la estrategia. 

| Versión | URL Despliegue                   |
| ------- | -------------------------------- |
| 5.14.1  | https://ghost-fcj4.onrender.com/ |

El usuario dispuesto para hacer las pruebas es el siguiente:

  - Usuario: `h.franco@uniandes.edu.co`
  - Contraseña: `miso20244103`

# 2. Estructura de carpetas

A continuación se resume la estructura de carpetas contenidas en el repositorio para la ejecución de la estrategia de pruebas.

```
🗂️ E2E
  🗂️ cypress
  🗂️ kraken

🗂️ Reconocimiento
  🗂️ cypress
    🗂️ e2e
      🗂️ monkey
        📄 smart-monkey.cy.js

🗂️ VRT
  🗂️ BackStopJS
  🗂️ ResembleJS
  🗂️ Ghost_v3
    🗂️ cypress

🗂️ ValidacionDatos
  🗂️ cypress
  🗂️ kraken
  🗂️ data
```

# 3. Especificaciones técnicas de los ambientes a usar:

- SO: Windows 11+ y MacOS Sonoma 14.1.1
- Node Versión: v20.12.0
- NPM Versión: v10.5.0
- GIT: Versión más reciente o predefinida en sistemas UNIX
- Visual Studio Code

## 3.1 Instalación Node JS o NVM

Para poder replicar bien este set de pruebas es requerido instalar en la máquina local la versión de [Node JS](https://nodejs.org/en) descrita en la sección 2.1, o mejor aún, instalar [NVM](https://github.com/nvm-sh/nvm), para poder alternar entre las diferentes versiones de Node disponibles.

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

## 3.2 Instalación navegador Google Chrome

Para la correcta ejecución de las dos herramientas es requerido instalar [Google Chrome](https://www.google.com/intl/es-419/chrome/). Por favor asegurarse que su versión de Chrome es la 124 o posterior tanto para UNIX como Windows

## 3.3 Instalación IDE

Aunque no se vaya a modificar una línea de código del proyecto, se recomienda instalar el IDE [Visual Studio Code](https://code.visualstudio.com/) el cual le permitirá ver el proyecto como un todo y explorar las distintas carpetas que este posee en orden de entender mejor ambas herramientas.

## 3.4 Instalar GIT

Para clonar los repositorios en donde se encuentran las herramientas, es necesario usar la herramienta GIT, la cual puede ser instalada siguiendo los pasos de su [página oficial](https://git-scm.com/downloads) en la sección downloads.

Una vez instaladas las herramientas, se puede comprobar su correcto funcionamiento con el siguiente comando. El resultado debe ser algo parecido a esto.

```bash
> git --version
git version 2.39.3 (Apple Git-145)
```

# 4. Setup proyecto

Una vez se tiene el entorno inicial de pruebas preparado, procedemos a instalar las librerías propias del proyecto para que se ejecute de forma satisfactoria.

## 4.1 Descomprimir el proyecto

Si bien se puede descargar la ultima versión del proyecto desde el apartado **release** de Github, también puede ser clonado directamente haciendo uso del siguiente comando:

```bash
> git clone https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas.git
```

## 4.2 Instalación de las librerías

Una vez se tenga las herramientas globales en la máquina local y se ha descomprimido el proyecto, es indispensable instalar las dependencias propias de cada una de las herramientas. Para ello es necesario hacer los dos siguientes pasos:

1. Abrir una terminal o consola de comandos (CMD) sobre la carpeta raíz del proyecto.
2. Ejecutar el siguiente comando de Node:

```bash
> npm install
```

Esto descargará e instalará las dependencias necesarias para todas las herramientas, el listado de dependencias se muestra a continuación.

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

Si se desea consultar más sobre esto, se puede ver el archivo `package.json`


# 5. Pruebas de reconocimiento
Para las pruebas de reconocimiento se utilizó como base el **Smart-Monkey** de la herramienta **Monkey-Cypress**. Se realizó una actualización para que funcione con la versión **13.10.0** de **Cypress**, modificando la estructura de carpetas y el archivo de configuración de cypress. Además, se realizaron ajustes en el código para que ya no se presenten errores con las acciones de scroll vertical y horizontal durante las pruebas y para que sean hechas con el viewport en vista móvil.

## 5.1 Instalación de las librerías
* Utilizando la consola de comandos o la terminal integrada en VS Code ingrese el siguiente comando para ubicarse dentro de la carpeta **Reconocimiento** desde la ruta raiz del proyecto:

```bash
> cd .\Reconocimiento\
```

* Ahora ejecute el siguiente comando para instalar las librerías del plugin de cypress:

```bash
> npm install
```

## 5.2 Ejecutar las pruebas
En la misma terminal ubicada en la carpeta **Reconocimiento** ejecute el siguiente comando para iniciar la ejecución de las pruebas:

```bash
> npx cypress run --spec "cypress/e2e/monkey/smart-monkey.cy.js"
```

Observará algo similar a la siguiente imagen dónde se muestra la información de las acciones aleatorias que ejecuta **Cypress** durante la prueba.
![reco#1](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/158099538/4a704fe7-e688-499e-985c-2a607556efc2)

## 5.3 Resultados
Al finalizar la ejecución de la prueba podra observar un cuadro con la información del resultado, similar a la siguiente imagen:
![reco#2](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/158099538/72b0b1da-09c5-4c7f-958c-1ef09fc891c4)

Además, encontrará dos archivos generados automáticamente con información de la ejecución, el archivo **monkey-execution.html** contiene la información de todos los eventos ejecutados durante la prueba y el archivo **smart-monkey.cy.js.mp4** que es un video de la ejecución en la interfaz de **Cypress**.

```
🗂️ E2E
  🗂️ cypress
  🗂️ kraken

🗂️ Reconocimiento
  🗂️ cypress
  🗂️ node_modules
  🗂️ results
    📄 monkey-execution.html
    🎥 smart-monkey.cy.js.mp4
```

# 6. Pruebas E2E
Las pruebas end-to-end se hacen para realizar pruebas sobre varios flujos de ejecución como usuario final, de principio a fin, imitando las condiciones de los usuarios. Se encargan de verificar la interacción correcta de la aplicación y el intercambio de datos con otros componentes fuera y dentro del sistema como lo pueden ser bases de datos, APIs externas, almacenamiento, etc.

La estrategia cuenta con pruebas E2E atraves de la herramienta de Kraken y Cypress. Estas se encuentran alojadas en la carpeta E2E.

## 6.1 Herramienta Kraken

Dentro de la carpeta base **E2E** se encuentra el directorio **kraken**, por ende hay que entrar a esta carpeta por medio de la consola de comandos o por medio de la terminal integrada en VS Code. El comando para ir a esta carpeta desde la ruta raiz del proyecto es el siguiente.

```bash
> cd ./E2E/kraken
```
### 6.1.1 Nomenclatura de los escenarios

Los escenarios cumplen la siguiente nomenclatura para trabajar de forma modular.
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

### 6.1.2 Ejecución de Kraken
Dentro de la carpeta kraken se puede ejecutar el siguiente comando que dará inicio a la ejecución de los escenarios de prueba disponibles.
```bash
> npx kraken-node run
```
Depues de correr el comando se abrira un navegador según la configuración dispuesta y se empezaran a ejecutar las pruebas paso tras  paso. Al finalizar realiza un reporte en HTML que puede ser consultado en la carpeta **reports**.


## 6.2 Herramienta Cypress

Dentro de la carpeta base **E2E** se encuentra el directorio **cypress**, por ende hay que entrar a esta carpeta por medio de la consola de comandos o por medio de la terminal integrada en VS Code. El comando para ir a esta carpeta desde la ruta raiz del proyecto es el siguiente.

```bash
> cd ./E2E/cypress
```

### 6.2.1 Ejecución de Cypress
Después en una terminal o consola de comandos abierta corremos el siguiente comando:
```bash
> cypress open
```
Una vez ejecutado el comando, debe abrirse una ventana similar a esta.

<img width="1205" alt="Screenshot 2024-05-04 at 11 52 14 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/7967dd94-6d31-4cb7-9739-8ded0aa04524">

### 6.2.2 Seleccionar la carpeta del proyecto Cypress:
Presionamos botón **Add project** de la vista principal de Cypress y seleccionamos la carpeta anteriormente mencionada alojada en **MISW4103-pruebas-automatizadas/E2E/cypress**.

<img width="1206" alt="Screenshot 2024-05-04 at 11 55 03 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/709fbd2d-a8f3-4b24-b4a5-c72784c76b62">

*NOTA: Si a la primera vez que intentan abrir el proyecto desde Cypress este queda en una pantalla de loading y no avanza, por favor cerrar la venta del programa, luego volver a ejecutar y seleccionar la carpeta del proyecto de nuevo hasta que se cargue completamente.*

### 6.2.3 Seleccionar la prueba E2E
Las pruebas a ejecutar son E2E (Extremo a Extremo), por ende procedemos a escoger la opción que dice **E2E Testing**.

<img width="1206" alt="Screenshot 2024-05-04 at 11 56 16 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/39b0713a-6567-4378-909c-085e189ae525">

### 6.2.4 Iniciar la prubeba E2E
Cypress nos abrirá una ventana donde selecciona por defecto el Navegador Chrome o Firefox, con un botón en color verde, el cual debemos presionar y que dice **Start E2E Testing in < Navegador >**,

<img width="1207" alt="Screenshot 2024-05-04 at 11 56 53 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/e7f2f7ff-3645-4b5b-92b3-a0b9e939bb24">

### 6.2.5 Ejecutar la prueba
Una vez presionado el botón de la sección anterior, se abrirá una ventana del navegador en donde aparece el proyecto mostrando el árbol de archivos de la carpeta **e2e**, que debe ser similar a la siguiete estructura.
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

El archivo `allTests.cy.js` contiene todos los escenarios dispuestos de tal forma que se ejecuten uno tras otro. Sin embargo si le damos click al archivo de una funcionalidad en específico, esta correrá todos los escenarios que contenga.

<img width="1728" alt="Screenshot 2024-05-05 at 12 28 07 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/3c4807c3-1590-47c5-9549-976f9f0c3af0">



# 7. Pruebas VRT

Para la ejecución de pruebas VRT se tiene dispuesto una serie de pruebas E2E compatibles con la versión **Ghost 3.42.0**. En este punto es necesario de un segundo ambiente de pruebas con dicha versión.

## 7.1 Carpeta de Screenshots

Las pruebas E2E ejecutadas en la sección anterior tienen la capacidad de almacenar screnshots por cada paso que se realice, al igual que las pruebas E2E para esta anterior versión de Ghost.

Para consultar los screenshots, se debe acceder a las carpetas `screenshots` dentro de las siguientes rutas: 

Versión Ghost | Herramienta | Ruta
-- | -- | --
5.14.1 | Kraken | E2E/Ghost_v5/kraken/screenshots
5.14.1 | Cypress | E2E/Ghost_5/cypress/cypress/screenshots
3.42.0 | Cypress | VRT/Ghost_3/cypress/cypress/screenshots


## 7.2 Correr instancia de Cypress

En este caso la prueba de regresión esta diseñada especificamente para Cypress en ambas versiones de Ghost-

### 7.2.1 Lanzar prueba E2E para Ghost v5.14.1

En caso de que no se hubiera ejecutado con anterioridad las pruebas E2E, procederemos a realizarlas para obtener los screenshots de esta versión. Para mas detalles se recomienda retomar la sección 5.2 (Herramienta Cypress) y seguir el paso a paso.

### 7.2.2 Lanzar prueba E2E para Ghost v3.42.0

En este punto es necesario repetir el proceso pero con la versión 3.42.0 de Ghost, para esto es necesario abrir una terminal e ir al directorio que almacena las pruebas E2E compatibles con dicha versión, esto se puede hacer por medio de los siguientes comandos ubicandonos en la raiz del proyecto.

```bash
> cd ./VRT/Ghost_v3/cypress
> cypress open
```
En este punto si se desconoce el procedimiento se recomienda retomar la sección 5.2 (Herramienta Cypress) apuntando a la ruta donde nos hemos ubicado por medio de la terminal.

## 7.3 Ejecución de las pruebas VRT
Una vez que ya se ejecutaron las pruebas End-2-End en Kraken y Cypress para Ghost v5.14.1 y Cypress para Ghost v3.42.0, se procede a realizar las pruebas VRT con las herramientas **ResembleJS** y **BackstopJS**, basándonos en los insumos (screenshots de cypress para cada escenario de las dos versiones de Ghost) proveídos de las secciones anteriores.

### 7.3.1 Herramienta BackstopJS

<p align="center">
<img src="https://www.drupal.org/files/project-images/backstop-lemur.png" alt="Backstop logo"  height="193">
<p align="center">BackstopJS</p>

#### 7.3.1.1 Estructura de carpetas BackstopJS

La estructura de BackstopJS se ve de la siguiente manera.
```
🗂️ BackStopJS
    📄 configBackstop.js
    🗂️ backstop_data
    🗂️ scripts
      📄 file.js
```

#### 7.3.1.2 Ejecución Backstopjs

Para realizar el reporte por medio de Backstopjs es necesario ubicarnos en la carpeta BackStopJS ubicada en la carpeta VRT en la raiz del proyecto.

```bash
> cd ./VRT/BackStopJs
```

Si no esta instalada la herramienta BackstopJS, es necesario ejecutar el siguiente comando.

```bash
> npm install -g backstopjs
```

Ya con la herramienta instalada se procedera a ejecutar el siguiente comando

```bash
> backstop test --config="configBackstop.js"
```

Luego de lanzar el comando aparecerán los logs de la ejecución, similar a la siguiente imagen.

![image](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/42383191/d946117c-b18b-4341-a49f-3ea72289f16f)

Al finalizar la ejecución se abrirá el reporte sobre el navegador teniendo una salida similar a la siguiente.

![image](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/42383191/482c3c7b-3ad7-45d2-bc19-cd2feff366e6)


#### 7.3.1.3 Funcionamiento de Backstopjs

La herramienta funciona por escenarios de prueba en donde se toma una imagen de referencia y otra a comparar, para esto se dispone el script configBackstop.js capaz de construir dinámicamente los escenarios según la estructura actual de carpetas comparando los screnshots de las rutas `E2E/cypress/cypress/screenshots` para Ghost v5.14.1 y la ruta `VRT/Ghost_v3/cypress/cypress/screenshots` para Ghost v3.42.0.
El script revisa que los screenshots existen en ambas rutas por cada escenario entre las dos versiones y descartando que se repitan para minimizar el reporte final. 


### 7.3.2 Herramienta ResembleJS

<p align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWZS1Cpv4rCriMHPEa3FeTo5KEbf7RYI6LbfC56ABJA&s" alt="Resemble logo"  height="193">
<p align="center">ResembleJS</p>

#### 7.3.2.1 Estructura de carpetas Backstopjs

La estructura de ResembleJS se ve de la siguiente manera.

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

#### 7.3.2.2 Ejecución ResembleJS

Para realizar las pruebas con ResembleJS es necesario ubicarnos en la carpeta ResembleJS ubicada en la carpeta VRT en la raiz del proyecto.

```bash
> cd ./VRT/ResembleJS
```

Una vez parados sobre esa ruta ejecutamos el siguiente comando de node.

```bash
> node resemble-report.js
```

Luego de lanzar el comando aparecerán los logs de la ejecución, similar a la siguiente imagen.

<img width="576" alt="Screenshot 2024-05-12 at 5 57 27 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/a212eb14-c733-42ea-837a-6c5eddc7b566">

Para poder visualizar el reporte es necesario dirigirnos a la ruta `ResembleJS/results` y abrir el archivo `report.html`.

Recomendamos tener instalada la extensión de Visual Studio Code, `Live Server` para poder desplegar el html generado de una manera más sencilla.

<img width="703" alt="Screenshot 2024-05-12 at 5 59 28 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/7cb20453-82f6-421a-92a1-8a11b17b7910">

Haciendo click derecho sobre el archivo report.html y oprimiendo el botón `Open with Live Server`.

<img width="418" alt="Screenshot 2024-05-12 at 6 00 53 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/adc37e0a-9445-46b8-a00f-367bb84c6ea6">

Esto desplegará el reporte generado por ResembleJS y debería lucir de la siguiente forma.

<img width="1713" alt="Screenshot 2024-05-12 at 6 03 37 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/1a6cb51e-ee75-4f9f-b281-3be712720cc9">

Ahí dentro podrá interactuar con cada uno de los escenarios testeados.

####  7.3.2.3 Funcionamiento de ResembleJS

El script hecho en Javascript inicia recorriendo la carpeta de screenshots de Ghost v3 (`VRT/Ghost_v3/cypress/cypress/screenshots`)  buscando las carpetas creadas por cypress para cada uno de los escenarios de prueba. Para cada una de esas carpetas de escenarios se valida que exista una carpeta de igual nombre dentro de la carpeta de screenshots de Ghost V5 (`E2E/cypress/cypress/screenshots`), si existe, recorre todos los screenshots dentro de la carpeta del escenario en Ghost V3. Luego, para cada uno de esos screenshots se valida la existencia de un screenshot de igual nombre dentro de la carpeta del escenario en Ghost V5, si existe, realiza la comparación de ambos screenshots utilizando la función **compareImages**. Los resultados de la comparación de los screenshots para todos los escenarios son añadidos a una lista que después es utilizada para generar dinámicamente items de un componente **accordion** de Bootstrap, que al desplegarse muestran un card, para cada uno de los screenshots del escenario, con el resultado de la comparación, los screenshots en las dos versiones de Ghost y la imagen con las diferencias generada por ResembleJS.

# 8. Validación de datos

Las pruebas de validación de datos se hacen por medio de las herramientas Kraken y Cypress generando datos por medio de diferentes estrategias para validar el ingreso de la dataen los inputs, asi identificando que manejen las validaciones necesarios para datos erroneos y permitan los datos correctos.

## 8.1 Herramienta Kraken

Dentro de la base de la carpeta raíz del proyecto **MISW4103-pruebas-automatizadas** ejecutaremos el siguiente comando.

```bash
> cd ./ValidacionDatos/kraken
```

### 8.1.1 Ejecución de las pruebas

Una vez adentro de la carpeta de kraken se debe ejecutar el siguiente comando.

```bash
> npx kraken-node run
```

Despues de ejecutar el comando se ejecutaran los escenarios creados y al finalizar se realizara un reporte en HTML que podra ser consultado en la carpeta **reports**.

## 8.2 Herramienta Cypress

Dentro de la base de la carpeta raíz del proyecto **MISW4103-pruebas-automatizadas** ejecutaremos el siguiente comando.

```bash
> cd ./ValidacionDatos/cypress
```
La estructura de la carpeta cypress debe verse así.

<img width="303" alt="Screenshot 2024-05-05 at 11 37 22 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/64bb1f1d-3c6f-4753-8416-226590c81311">

### 8.2.1 Correr instancia de Cypress

Después en una terminal o consola de comandos abierta corremos el siguiente comando.

```bash
> cypress open
```
En este punto se recomienda retomar la sección 5.2 (Herramienta Cypress) apuntando a este directorio y ejecutando todos los test por medio del archivo `allTests.cy.js`.

Al finalizar podremos ver el resultado por medio de la herramienta con un resultado similar a la siguiente imagen.

<img width="1728" alt="Screenshot 2024-05-05 at 12 28 07 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/3c4807c3-1590-47c5-9549-976f9f0c3af0">

# 9. Consideraciones

En el proceso de pruebas automatizas es posible que ocurran algunos incidentes al correr algunas herramientas, por ende se dispone este apartado para exponer dichos casos.

## 9.1 Error al ejecutar el comando "cd"
Es importante respetar las mayusculas según el nombre de los directorios para evitar problemas al realizar cambios de rutas.

## 9.2 Fallo con la ejecución de Kraken
Dependiendo del sistema operativo en el que se ejecuten las pruebas, estas pueden o no correr automáticamente una detrás de la otra.

Si se ejecuta la prueba en un Sistema Operativo tipo UNIX o Linux, deberían correr los escenarios uno detrás del otro automáticamente, si por el contrario se está en Windows, hay una probabilidad de que solo ejecute el primero en orden alfabético y al finalizar no siga con los demás.

Para remediar esto por favor en la carpeta de features sólo dejar un escenario y ejecutar así cada uno de ellos.



# 10. Reporte de Issues

El reporte de los issues puede ser consultado en este mismo repositorio sobre el módulo de ISSUES. Se agregan etiquetas a cada uno de los issues para ser encontrados con mayor facilidad. 
Enlace: [Herramienta de gestión de Issues de Github](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/issues)

## 10.1 Nomenclatura de los Issues

Se dispone de una nomenclatura para cada Issue según la prueba en la que fue detectada, a continuación se explica por cada tipo de prueba.  

 - **Pruebas de exploratorias manuales**: `PE-00X - Nombre del issue encontrado`
 - **Pruebas de reconocimiento**: `PR00X - Nombre del issue encontrado`
 - **Pruebas E2E**: `E2E00X - Nombre del issue encontrado`
 - **Pruebas de generación de datos (normales)**: `GD00X - Nombre del issue encontrado`
 - **Pruebas de generación de datos aleatorios**: `GDA00X - Nombre del issue encontrado`
