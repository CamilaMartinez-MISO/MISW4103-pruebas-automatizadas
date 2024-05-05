# Pruebas E2E | Ghost

Nombre | Email Uniandes
-- | --
Héctor Oswaldo Franco   | h.franco@uniandes.edu.co 
Manuel Felipe Bejarano | mf.bejaranob1@uniandes.edu.co
Juan Sebastián Vargas     | js.vargasq1@uniandes.edu.co
María Camila Martínez  | mc.martinezm12@uniandes.edu.co

# 1. Descripción del set de pruebas E2E
Las pruebas end-to-end se hacen para realizar pruebas sobre todos los caminos de los flujos de ejecución como usuario final, de principio a fin, imitando las condiciones de los usuarios. Verifican la interacción correcta de la aplicación y el intercambio de datos con otros componentes fuera y dentro del sistema como lo pueden ser bases de datos, APIs externas, almacenamiento, etc.

# 2. Instalación tecnologías globales
Primero es necesario instalar un conjunto de herramientas globales que servirán para instalar las herramientas de pruebas de escenarios E2E, **Kraken** y **Cypress**

## 2.1 Especificaciones técnicas del ambiente de pruebas usado:
* SO: Windows 11+ y MacOS Sonoma 14.1.1
* Node Versión: v20.12.0
* NPM Versión: v10.5.0
* GIT: Versión más reciente o predefinida en sistemas UNIX
* Visual Studio Code

## 2.2 Instalación Node JS o NVM
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

## 2.3 Instalación navegador Google Chrome
Para la correcta ejecución de las dos herramientas es requerido instalar [Google Chrome](https://www.google.com/intl/es-419/chrome/). Por favor asegurarse que su versión de Chrome es la 124 o posterior tanto para UNIX como Windows

## 2.4 Instalación IDE 
Aunque usted mo vaya a tocar una línea de código del proyecto, le recomendamos qué por favor instale el IDE [Visual Studio Code](https://code.visualstudio.com/) el cual le permitirá ver el proyecto como un todo y explorar las distintas carpetas que este posee en orden de entender mejor ambas herramientas.

## 2.5 Instalar GIT
Para clonar los repositorios en donde se encuentran las herramientas, es necesario usar la herramienta GIT, la cual puede ser instalada siguiendo los pasos de su [página oficial](https://git-scm.com/downloads) en la sección downloads.

Una vez instaladas la herramientas, se puede comprobar su correcto funcionamiento con el siguiente comando. El resultado debe ser algo parecido a esto.

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

A continuación se muestra la estructura global del proyecto, más adelanta se mostrará la estructura independiente de las dos herramientas por separado

<img width="372" alt="Screenshot 2024-05-02 at 11 10 57 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/d688af51-e2eb-41b4-806a-a0007fa671f9">

## 3.3 Instalar las librerías locales del proyecto
Una vez se han instalado las herramientas globales en la máquina local y se ha descomprimido el proyecto, es indispensable instalar las dependencias propias de cada una de las herramientas, Kraken y Cypress. Para ello solo es necesario hacer dos pasos:
1. Abrir una terminal o consola de comandos (CMD) sobre la carpeta raíz del proyecto
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

<p align="center">
<img width="300" alt="Screenshot 2024-05-02 at 9 51 07 PM" src="https://ptimofeev.com/images/render.png">
<p align="center">render.com</p>


La instancia de Ghost sobre la cual se ejecutarán las pruebas E2E se encuentra en la plataforma render.com y puede ser accedida desde el siguiente enlace. [Instancia de Ghost](https://ghost-fcj4.onrender.com/ghost)


# 4. Ejecución de las pruebas
Es el momento de ejecutar los escenarios de pruebas disponibles en las dos herramientas. Se mostrará la forma de ejecutar Kraken y posteriormente Cypresss

## 4.1 Herramienta Kraken

<p align="center">
<img src="https://raw.githubusercontent.com/TheSoftwareDesignLab/KrakenMobile/master/reporter/assets/images/kraken.png" alt="kraken logo" width="140" height="193">
<p align="center">Kraken</p>
    
Dentro de la base de la carpeta raíz del proyecto **MISW4103-pruebas-automatizadas**, dirigirse a la carpeta kraken con la ayuda de la línea de comandos del computador o la terminal integrada en VS Code. El comando para ir a la carpeta kraken es el siguiente

```bash
> cd kraken
```
### 4.1.1 Estructura del proyecto:

La estructura del proyecto debe verse de la siguiente manera

<img width="256" alt="Screenshot 2024-05-02 at 9 51 07 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/e40dcf0b-4ea8-491e-a1ba-9b009f1a6c81">


*NOTA:* Cada *feature* y su respectivo archivo de *steps* están nombrados con la siguiente nomenclatura **FUXXX_Y**, la cual hace referencia a la funcionalidad sobre la que se está haciendo el escenario de prueba.

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
Una vez adentro de esa carpeta puede ejecutar el siguiente comando que dará inicio a la ejecución de los escenarios de prueba disponibles.
```bash
> npx kraken-node run
```
Cada prueba realiza el escenario descrito y al finalizar realiza un reporte en HTML que puede ser consultado en la carpeta **reports**

### 4.1.4 Posibles situaciones que se pueden presentar
Dependiendo del sistema operativo en el que se ejecuten las pruebas, estas pueden o no correr automáticamente una detrás de la otra.

Si se ejecuta la prueba en un Sistema Operativo tipo UNIX o Linux, deberían correr los escenarios uno detrás del otro automáticamente, si por el contrario se está en Windows, hay una probabilidad de que solo ejecute el primero en orden alfabético y al finalizar no siga con los demás.

Para remediar esto por favor en la carpeta de features solo dejar un escenario y ejecutar así cada uno de ellos.


## 4.2 Herramienta Cypress
<p align="center">
<img src="https://static-00.iconduck.com/assets.00/cypress-icon-2048x2045-rgul477b.png" alt="kraken logo" height="200">
<p align="center">Cypress</p>

Dentro de la base de la carpeta raíz del proyecto **MISW4103-pruebas-automatizadas**, dirigirse a la carpeta kraken con la ayuda de la línea de comandos del computador o la terminal integrada en VS Code. El comando para ir a la carpeta kraken es el siguiente

```bash
> cd cypress
```
La estructura del proyecto debe verse así:

<img width="322" alt="Screenshot 2024-05-02 at 11 23 38 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/15943a0e-c3a7-4b29-8487-ad76885c94b3">

### 4.2.1 Instalar Cypress v13.7.3
Abrir una línea de comandos o terminal de la máquina y escribir el siguiente comando.
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
Presionamos botón **Add project** de la vista principal de Cypress y seleccionamos la carpeta raíz del proyecto llamada **MISW4103-pruebas-automatizadas/cypress**.

<img width="1205" alt="Screenshot 2024-05-04 at 11 53 19 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/847aceee-48d8-464a-875d-a1ad05ec6799">

<img width="1206" alt="Screenshot 2024-05-04 at 11 55 03 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/709fbd2d-a8f3-4b24-b4a5-c72784c76b62">

*NOTA: Si a la primera vez que intentan abrir el proyecto desde Cypress este queda en una pantalla de loading que no avanza, por favor cerrar la venta del programa y volver a ejecutar y seleccionar la carpeta del proyecto de nuevo hasta que cargue completamente.*

### 4.2.4 Seleccionar la prueba E2E
Las pruebas de reconocimiento que se harán son del tipo E2E (Extremo a Extremo), Por ende procedemos a escoger el cuadro de texto que dice **E2E Testing**

<img width="1206" alt="Screenshot 2024-05-04 at 11 56 16 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/39b0713a-6567-4378-909c-085e189ae525">

### 4.2.5 Iniciar la prubeba E2E
Cypress nos abrirá una ventana donde selecciona por defecto el Navegador Chrome o Firefox, con un botón en color verde, el cual debemos presionar y que dice **Start E2E Testing in < Navegador >**,

<img width="1207" alt="Screenshot 2024-05-04 at 11 56 53 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/e7f2f7ff-3645-4b5b-92b3-a0b9e939bb24">

### 4.2.6 Ejecutar la prueba
Una vez presionado el botón de la sección anterior, se abrirá una ventana del navegador en donde aparece el proyecto mostrando el árbol de archivos de la carpeta **e2e**, debe lucir así:
```
🗂️ cypress/e2e
    🗂️ FUXX1
      📄 esc001.cy.js
      📄 esc002.cy.js
      📄 esc003.cy.js
    🗂️ FUXX2
      📄 esc001.cy.js
      📄 esc002.cy.js
```
<img width="1727" alt="Screenshot 2024-05-04 at 11 59 17 AM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/8c4de6ca-71e3-4213-9015-149f255e543c">

Damos click al archivo del escenario en específico que se quiere correr. El programa empezará a realizar el escenario de prueba y se mostrará el paso a paso en el log de la página web.

<img width="1728" alt="Screenshot 2024-05-04 at 12 00 55 PM" src="https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/assets/157188921/0fe6cd1a-c5ee-4289-b162-60c7f6362bf2">


## 5. Documentación extra
Puede ver las funcionalidades escogidas, la comparativa de pros y contras de ambas herrameintas y una comparativa final de las dos en la [Wiki](https://github.com/CamilaMartinez-MISO/MISW4103-pruebas-automatizadas/wiki) del proyecto 