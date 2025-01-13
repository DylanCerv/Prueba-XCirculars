# Prueba Técnica de XCirculars

Este repositorio contiene la prueba técnica para el proyecto de **XCirculars**. La prueba se divide en dos partes:

1. **Visualización de Gráficos**: Una prueba para mostrar gráficos interactivos utilizando datos filtrados de productos. Los gráficos son generados con la librería `chart.js`, y la aplicación se comunica con una API para obtener los datos necesarios.

2. **Visualización de Tarjetas de Productos**: Otra prueba para mostrar tarjetas de productos, que permiten ver detalles como nombre, precio y descripción de los productos disponibles.

A continuación, se detallan las instrucciones para ejecutar el proyecto en tu máquina local y los pasos necesarios para configurarlo correctamente.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas en tu PC:

- **Node.js**: Este proyecto requiere Node.js. Puedes descargarlo desde [aquí](https://nodejs.org/).
- **npm** (Node Package Manager): Viene incluido con Node.js, por lo que no es necesario instalarlo por separado.
- **Git**: Para clonar el repositorio, si no lo tienes instalado, puedes obtenerlo desde [aquí](https://git-scm.com/).

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio**:

   Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Instala las dependencias**:

    Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

    ```bash
    cd <NOMBRE_DEL_PROYECTO>
    npm install
    ```

3. **Configura las variables de entorno**:

    Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:
    ```bash
    NEXT_PUBLIC_APP_API_TOKEN=tu_token_aqui
    ```
    Asegúrate de reemplazar `tu_token_aqui` con el valor correcto de tu API Token.

## Ejecución del Proyecto
Una vez que hayas instalado las dependencias y configurado las variables de entorno, puedes ejecutar el proyecto localmente.

1. **Ejecuta el servidor de desarrollo**:

    En la terminal, dentro de la carpeta del proyecto, ejecuta el siguiente comando:
    ```bash
    npm run dev
    ```
2. **Accede a la aplicación**:

    Abre tu navegador web y navega a http://localhost:3000 para ver la aplicación en funcionamiento.


## Notas
Asegúrate de que tu token de API sea válido y esté correctamente configurado en el archivo `.env`.
Si tienes problemas con la ejecución o necesitas realizar alguna modificación, asegúrate de revisar los logs de la consola para obtener más detalles.