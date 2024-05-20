# Pruebas de validación de datos | Ghost v5.14.1

| Nombre                 | Email Uniandes                 |
| ---------------------- | ------------------------------ |
| Héctor Oswaldo Franco  | h.franco@uniandes.edu.co       |
| Manuel Felipe Bejarano | mf.bejaranob1@uniandes.edu.co  |
| Juan Sebastián Vargas  | js.vargasq1@uniandes.edu.co    |
| María Camila Martínez  | mc.martinezm12@uniandes.edu.co |

# 1. Descripción de las pruebas de Validación de Datos

Las pruebas de Software van más allá de hacer clicks y moverse entre las pantallas de la aplicación. En este set de pruebas que se va a realizar está enfocado en validar posibles fallos a la hora de realizar el input de los formularios de las aplicaciones web.

Aquí el equipo va a poner aprueba la versión de Ghost v5.14.1 para ver qué tan bueno es el sistema de validación de inputs de la aplicación.

| Versión | URL Despliegue                   |
| ------- | -------------------------------- |
| 5.14.1  | https://ghost-fcj4.onrender.com/ |

# 2. Setup de las pruebas

Primero es necesario instalar un conjunto de herramientas globales que servirán para instalar las herramientas de pruebas de validación de datos, **Kraken**, **Cypress** y **Faker**

## 2.1 Especificaciones técnicas del ambiente de pruebas usado:

- SO: Windows 11+ y MacOS Sonoma 14.1.1
- Node Versión: v20.12.0
- NPM Versión: v10.5.0
- GIT: Versión más reciente o predefinida en sistemas UNIX
- Visual Studio Code

## 2.2 Instalación Node JS o NVM

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

## 2.3 Instalación navegador Google Chrome

Para la correcta ejecución de las dos herramientas es requerido instalar [Google Chrome](https://www.google.com/intl/es-419/chrome/). Por favor asegurarse que su versión de Chrome es la 124 o posterior tanto para UNIX como Windows

## 2.4 Instalación IDE

Aunque no se vaya a modificar una línea de código del proyecto, se recomienda instalar el IDE [Visual Studio Code](https://code.visualstudio.com/) el cual le permitirá ver el proyecto como un todo y explorar las distintas carpetas que este posee en orden de entender mejor ambas herramientas.

## 2.5 Instalar GIT

Para clonar los repositorios en donde se encuentran las herramientas, es necesario usar la herramienta GIT, la cual puede ser instalada siguiendo los pasos de su [página oficial](https://git-scm.com/downloads) en la sección downloads.

Una vez instaladas las herramientas, se puede comprobar su correcto funcionamiento con el siguiente comando. El resultado debe ser algo parecido a esto.

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

## 3.2 Estructura general del proyecto

A continuación se muestra la estructura global del proyecto. Este se divide en grandes grupos. **Ghost_v3** y **Ghost_v5**, **ResembleJS**, **BackstopJS**, y **GeneracionDatosGhost_v5**.

Para esta entrega, la carpeta que nos concierne es **GeneracionDatosGhost_v5**.

<img width="355" alt="Screenshot 2024-05-18 at 10 24 17 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/9633721d-6d83-4024-9c62-c992cbae4143">

## 3.3 Instalar las librerías locales del proyecto

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

## 3.4 Servicio de Ghost

<p align="center">
<img width="300" alt="Screenshot 2024-05-02 at 9 51 07 PM" src="https://ptimofeev.com/images/render.png">
<p align="center">render.com</p>

La instancia de Ghost sobre las que se ejecutarán las pruebas se encuentra en la plataforma render.com y puede ser accedida desde el siguiente enlace.

- [Ghost 5.14.1](https://ghost-fcj4.onrender.com/ghost)
  - Usuario: `h.franco@uniandes.edu.co`
  - Contraseña: `miso20244103`

# 4. Ejecución de las pruebas de Validación de datos

Ahora se procederá a ejecutar las pruebas End-2-End. Los escenarios de esta entrega contemplan unicamente pruebas que involucren el ingreso de la data mediante inputs y que puedan ser validados

## 4.1 Herramienta Kraken

<p align="center">
<img src="https://raw.githubusercontent.com/TheSoftwareDesignLab/KrakenMobile/master/reporter/assets/images/kraken.png" alt="kraken logo" width="140" height="193">
<p align="center">Kraken</p>
    

Dentro de la base de la carpeta raíz del proyecto **MISW4103-pruebas-automatizadas** realizar los siguientes comandos

```bash
> cd GeneracionDatosGhost_v5
> cd kraken
```

Por favor asegurarse de que está escribiendo Ghost con la G en mayúsculas para que el sistema de ficheros pueda dirigirse exitosamente a esa carpeta.

### 4.1.1 Estructura del proyecto:

La estructura del proyecto debe verse de la siguiente manera

<img width="317" alt="Screenshot 2024-05-05 at 9 48 05 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/93833525-cc94-4ccd-9d4d-74fef82dbf17">

_NOTA:_ Cada _feature_ está nombrado con la siguiente nomenclatura **FU00X_ESC00X**, la cual hace referencia a la funcionalidad sobre la que se está haciendo el escenario de prueba.

### 4.1.2 Nomenclatura de los escenarios

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

### 4.1.3 Ejecución de las pruebas

Una vez adentro de esa carpeta puede ejecutar el siguiente comando que iniciará la ejecución de los escenarios de prueba disponibles.

```bash
> npx kraken-node run
```

Cada prueba realiza el escenario descrito y al finalizar realiza un reporte en HTML que puede ser consultado en la carpeta **reports**

### 4.1.4 Posibles situaciones que se pueden presentar

Dependiendo del sistema operativo en el que se ejecuten las pruebas, estas pueden o no correr automáticamente una detrás de la otra.

Si se ejecuta la prueba en un Sistema Operativo tipo UNIX o Linux, deberían correr los escenarios uno detrás del otro automáticamente. Si por el contrario se está en Windows, hay una probabilidad de que solo ejecute el primero en orden alfabético y al finalizar no siga con los demás.

Para solucionar esto, por favor asegúrese de que en la carpeta de features solo haya un escenario. Luego, ejecute cada uno de ellos individualmente.

## 4.2 Herramienta Cypress

<p align="center">
<img src="https://static-00.iconduck.com/assets.00/cypress-icon-2048x2045-rgul477b.png" alt="kraken logo" height="200">
<p align="center">Cypress</p>

Dentro de la base de la carpeta raíz del proyecto **MISW4103-pruebas-automatizadas** realizar los siguientes comandos:

```bash
> cd GeneracionDatosGhost_v5
> cd cypress
```

Por favor asegurarse de que está escribiendo Ghost con la G en mayúsculas para que el sistema de ficheros pueda dirigirse exitosamente a esa carpeta.

La estructura del proyecto debe verse así:

<img width="303" alt="Screenshot 2024-05-05 at 11 37 22 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/64bb1f1d-3c6f-4753-8416-226590c81311">

### 4.2.1 Instalar Cypress v13.7.3

Abrir una línea de comandos o terminal de la máquina y escribir el siguiente comando:

```bash
> npm -g install cypress@13.7.3
```

Esto instalará Cypress de forma global en el PC para ser usado desde cualquier punto.

### 4.2.2 Correr instancia de Cypress

Después en una terminal o consola de comandos abierta corremos el siguiente comando:

```bash
> cypress open
```

Una vez ejecutado el comando, debe abrirse una ventana similar a esta.

<img width="1205" alt="Screenshot 2024-05-04 at 11 52 14 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/7967dd94-6d31-4cb7-9739-8ded0aa04524">

### 4.2.3 Seleccionar la carpeta del proyecto Cypress:

Presionamos botón **Add project** de la vista principal de Cypress y seleccionamos la carpeta raíz del proyecto llamada `MISW4103-pruebas-automatizadas/GeneracionDatosGhost_v5/cypress`.

<img width="1205" alt="Screenshot 2024-05-04 at 11 53 19 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/847aceee-48d8-464a-875d-a1ad05ec6799">

<img width="1206" alt="Screenshot 2024-05-04 at 11 55 03 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/709fbd2d-a8f3-4b24-b4a5-c72784c76b62">

_NOTA: Si a la primera vez que intentan abrir el proyecto desde Cypress este queda en una pantalla de loading que no avanza, por favor cerrar la venta del programa y volver a ejecutar y seleccionar la carpeta del proyecto de nuevo hasta que se cargue completamente._

### 4.2.4 Seleccionar la prueba E2E

Las pruebas de reconocimiento que se harán son del tipo E2E (Extremo a Extremo), Por ende procedemos a escoger el cuadro de texto que dice **E2E Testing**

<img width="1206" alt="Screenshot 2024-05-04 at 11 56 16 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/39b0713a-6567-4378-909c-085e189ae525">

### 4.2.5 Iniciar la prueba E2E

Cypress nos abrirá una ventana donde selecciona por defecto el Navegador Chrome o Firefox, con un botón en color verde, el cual debemos presionar y que dice **Start E2E Testing in < Navegador >**,

<img width="1207" alt="Screenshot 2024-05-04 at 11 56 53 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/e7f2f7ff-3645-4b5b-92b3-a0b9e939bb24">

### 4.2.6 Ejecutar la prueba

Una vez presionado el botón de la sección anterior, se abrirá una ventana del navegador en donde aparece el proyecto mostrando el árbol de archivos de la carpeta **e2e**, debe lucir así:

```
🗂️ cypress/e2e
    📄 allTests.cy.js
    📄 FU001.cy.js
    📄 FU002.cy.js
```

<img width="1728" alt="Screenshot 2024-05-05 at 11 40 38 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/efa22f41-32b4-4a71-807e-76fdffc9588a">

El archivo `allTests.cy.js` contiene todos los escenarios juntos para que se ejecuten uno tras del otro. Sin embargo, si le damos click al archivo de una funcionalidad en específico, esta correrá todos los escenarios que tiene adentro.

<img width="1728" alt="Screenshot 2024-05-05 at 12 28 07 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/3c4807c3-1590-47c5-9549-976f9f0c3af0">


# 5 Reporte de Issues

El reporte de los issues puede ser consultado en este mismo repositorio en el módulo de ISSUES que se encuentra en el siguiente enlace: [Herramienta de gestión de Issues de Github](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/issues)

Los issues para Pruebas de validación de datos tienen la siguiente nomenclatura: `GAD-00X - Nombre del issue encontrado`

# 6. Documentación extra

Puede ver las funcionalidades escogidas, y cómo se realizaron los escenarios con las tres técnicas de generación de datos, apriori, psuedo aleatorias y aleatorias en la [Wiki](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/wiki) del proyecto
