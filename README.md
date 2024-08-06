# Proyecto MERN FullStack

Este es un proyecto FullStack que utiliza el stack MERN (MongoDB, Express, React, Node.js). La aplicación está dividida en dos carpetas principales: `client` y `server`. El frontend está construido con React y Vite, mientras que el backend está desarrollado con Node.js, Express, y MongoDB.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Licencia](#licencia)

## Introducción

Este proyecto es una aplicación web MERN que permite hacer un CRUD a una base de datos en MongoDB y alojado en Vercel. El frontend está optimizado para un rendimiento rápido y eficiente utilizando Vite, mientras que el backend se encarga de manejar las API y la conexión con la base de datos MongoDB.

## Tecnologías

Las principales tecnologías y bibliotecas utilizadas en este proyecto son:

- **Frontend:**
  - [React](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
  - [Vite](https://vitejs.dev/): Herramienta de desarrollo rápida para aplicaciones web modernas.
  - [React Router](https://reactrouter.com/): Enrutamiento declarativo para aplicaciones React.

- **Backend:**
  - [Node.js](https://nodejs.org/): Entorno de ejecución para JavaScript del lado del servidor.
  - [Express](https://expressjs.com/): Framework web para Node.js.
  - [MongoDB](https://www.mongodb.com/): Base de datos NoSQL orientada a documentos.
  - [Mongoose](https://mongoosejs.com/): ODM para MongoDB y Node.js.

## Estructura del Proyecto

La estructura de carpetas del proyecto es la siguiente:

/mern-vercel
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── ActualizarEquipo.jsx
│   │   │   ├── AgregarEquipo.jsx
│   │   │   ├── BuscarEquipo.jsx
│   │   │   ├── EliminarEquipo.jsx
│   │   │   └── Home.jsx
│   │   ├── styles
│   │   │   ├── AgregarEquipo.css
│   │   │   ├── App.css
│   │   │   └── BuscarEquipo.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── README.md
│   └── ...
│
├── server
│   ├── controllers
│   │   ├── apiExternaController.js
│   │   ├── createRigController.js
│   │   ├── deleteRigController.js
│   │   ├── getRigControler.js
│   │   ├── indexController.js
│   │   └── updateRigController.js
│   ├── db
│   │   └── db.js
│   ├── middleware
│   │   ├── checks.js
│   │   ├── validatechecks.js
│   │   ├── validateId.js
│   │   └── validateModel.js
│   ├── models
│   │   └── rig.model.js
│   ├── routes
│   │   ├── apiExterna.js
│   │   ├── createRig.js
│   │   ├── deleteRig.js
│   │   ├── getRig.js
│   │   ├── getRigByModel.js
│   │   ├── index.js
│   │   └── updateRig.js
│   ├── .gitignore
│   ├── app.js
│   ├── index.js
│   ├── package.json
│   ├── vercel.json
│   └── ...
│
└── README.md


- **client**: Contiene el código fuente del frontend construido con React y Vite.
- **server**: Contiene el código fuente del backend construido con Node.js y Express.

## Requisitos Previos

Antes de empezar, asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) como gestor de paquetes
- [MongoDB](https://www.mongodb.com/): Asegúrate de tener un servidor MongoDB en funcionamiento o utiliza un servicio en la nube como [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio:**

   ```
   git clone https://github.com/JSDRAKE/mern-vercel-project.git
   cd proyecto-mern-fullstack
   ```

2. **Configura el Backend:**

Navega a la carpeta server y ejecuta

   ```
   cd server
   npm install
   ```

Crea un archivo .env en la raíz de la carpeta server y añade tus variables de entorno:

PORT=3000
MONGODB_CNN = URL_DE_LA_BASE_DE_DATOS

3. **Configura el Frontend:**

Navega a la carpeta client y ejecuta

```
cd ../client
npm install
```
**Uso**

Para ejecutar la aplicación en modo desarrollo, sigue estos pasos:

1. **Inicia el servidor Backend:**

En la carpeta "server", ejecuta:

```
npm start
```

Esto iniciará el servidor en `http://localhost:3000`.

2. **Inicia el cliente Frontend:**

En la carpeta "cliente", ejecuta:

```
npm run dev
```

Esto iniciará la aplicación React en `http://localhost:5173`.

La aplicación estará disponible en `http://locahlhost:5173` y estará conectada al backen en `http://localhost:3000`.


