# Eventime - Sistema de Gestión de Eventos

Este proyecto es una aplicación web full-stack para la gestión de eventos donde los usuarios pueden registrarse, iniciar sesión y realizar operaciones CRUD completas (crear, leer, actualizar y eliminar) sobre sus eventos. 

El proyecto ha sido completamente migrado a **TypeScript** y utiliza **Prisma ORM** para interactuar con la base de datos de forma segura y automatizada.

---

## 🚀 Tecnologías Utilizadas

### Backend
* **Node.js** & **Express** con **TypeScript**
* **Prisma ORM** (para migraciones y consultas a la base de datos)
* **PostgreSQL** como base de datos relacional
* **JSON Web Token (JWT)** almacenado en cookies seguras (`httpOnly`, `secure`, `sameSite`)
* **Zod** para la validación de esquemas y tipos de datos

### Frontend
* **React** con **Vite** y **TypeScript**
* **Tailwind CSS** para un diseño moderno y responsivo
* **Axios** para peticiones HTTP
* **React Router Dom** para la navegación y rutas protegidas

### Despliegue e Infraestructura
* **Render** para hospedar la API del Backend y la base de datos PostgreSQL
* **Vercel** para hospedar el Frontend de React

---

## 📁 Estructura del Proyecto

El proyecto está organizado como una estructura de monorepositorio sencilla:
* `src/` — Código fuente de la API (Backend). Configurado en [src/config.ts](file:///c:/Users/Pc/Documents/P.A.R.A.%20Method/PROJECTS(Projectos%20en%20marcha)/Eventime/eventime/src/config.ts).
* `prisma/` — Esquema de base de datos de Prisma [schema.prisma](file:///c:/Users/Pc/Documents/P.A.R.A.%20Method/PROJECTS(Projectos%20en%20marcha)/Eventime/eventime/prisma/schema.prisma).
* `frontend/` — Código de la aplicación cliente (React + Vite).

---

## 🛠️ Configuración y Ejecución Local

### Requisitos Previos
* **Node.js** (v20 o superior recomendado)
* **pnpm** (administrador de paquetes recomendado)
* Una instancia activa de **PostgreSQL** (local o en la nube)

### Paso 1: Clonar el repositorio e instalar dependencias
Instala las dependencias en la raíz del proyecto (backend):
```bash
pnpm install
```
E instala las dependencias del frontend:
```bash
cd frontend
pnpm install
cd ..
```

### Paso 2: Configurar las variables de entorno
Crea un archivo `.env` en la raíz del proyecto con la siguiente estructura:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/eventime?schema=public"
JWT_SECRET="una_clave_secreta_muy_segura"
PORT=3000
ORIGIN="http://localhost:5173"
```

Crea un archivo `.env.local` dentro de la carpeta `frontend/` si necesitas configurar la URL de la API:
```env
VITE_API_URL="http://localhost:3000/api"
```

### Paso 3: Sincronizar la Base de Datos
Genera el cliente de Prisma y crea automáticamente las tablas de la base de datos:
```bash
npx prisma generate
npx prisma db push
```

### Paso 4: Ejecución en Desarrollo

1. **Iniciar el Backend**:
   Desde la raíz del proyecto ejecuta:
   ```bash
   pnpm run dev
   ```
   La API se iniciará en `http://localhost:3000`.

2. **Iniciar el Frontend**:
   Abre otra pestaña de la terminal, ve a la carpeta `frontend/` y ejecuta:
   ```bash
   pnpm run dev
   ```
   La aplicación web estará disponible en `http://localhost:5173`.

---

## 🌍 Despliegue en Producción

### Backend (Render)
1. Conecta tu repositorio de GitHub a un **Web Service** en Render.
2. Configura el **Build Command**:
   ```bash
   pnpm install --frozen-lockfile && pnpm run build
   ```
3. Configura el **Start Command**:
   ```bash
   node dist/index.js
   ```
4. Agrega las siguientes **Variables de Entorno**:
   * `DATABASE_URL`: Tu URL interna o externa de la base de datos PostgreSQL.
   * `JWT_SECRET`: Una firma segura para tus tokens JWT.
   * `ORIGIN`: La URL de producción de tu frontend (ej: `https://eventime.vercel.app`).
   * `NODE_ENV`: `production` (esto habilita las cookies seguras `httpOnly`).

### Frontend (Vercel)
1. Conecta tu repositorio de GitHub a un nuevo proyecto en Vercel.
2. Configura el directorio raíz como `frontend`.
3. Vercel detectará automáticamente que es un proyecto de Vite y configurará los comandos de construcción.
4. Agrega la variable de entorno:
   * `VITE_API_URL`: La URL pública de tu API del backend en Render (ej: `https://eventime.onrender.com/api`).
