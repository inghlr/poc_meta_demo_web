# Poc Meta Web Demo

Frontend en React + Vite para:
- UI de CRUD (siguiente fase)
- formulario de agenda de cita de venta

## Requisitos

- Node.js 20+ (recomendado 22.x)
- npm 10+
- API backend corriendo (ver `poc_meta_api_demo`)

## Ejecutar frontend (desarrollo)

1. Ir a la carpeta del proyecto:
   - `cd f:\Projects\EXTERNAL\poc_meta_web_demo`
2. Instalar dependencias:
   - `npm install`
3. Crear variables de entorno:
   - copiar `.env.example` a `.env`
4. Ejecutar:
   - `npm run dev`

Vite mostrara la URL local, normalmente:
- `http://localhost:5173`

## Puertos y donde configurarlos

Puerto por defecto del frontend:
- `5173`

Opciones para cambiar puerto del frontend:
- Por comando:
  - `npm run dev -- --port 5174`
- En [vite.config.js](f:\Projects\EXTERNAL\poc_meta_web_demo\vite.config.js):
  - `server.port = 5174`

Puerto esperado del backend:
- `5095` (HTTP)

Donde se configura el backend para el FE:
- Proxy local en [vite.config.js](f:\Projects\EXTERNAL\poc_meta_web_demo\vite.config.js):
  - `/api` -> `http://localhost:5095`
- Variable `VITE_API_BASE_URL` en `.env`

## Variables de entorno

Archivo de referencia:
- [.env.example](f:\Projects\EXTERNAL\poc_meta_web_demo\.env.example)

Comportamiento:
- Si `VITE_API_BASE_URL` esta vacia, el FE usa rutas relativas `/api/*` y Vite proxy en local.
- Si `VITE_API_BASE_URL` tiene valor, el FE llama ese host directamente.

Ejemplo para entorno remoto:
- `VITE_API_BASE_URL=https://mi-api-demo.com`

## Integracion con API

Endpoint usado por el formulario:
- `POST /api/v1/sales-appointments`

Campos enviados:
- `fullName`
- `phone`
- `email`
- `productName`
- `preferredDate`
- `preferredTime`
- `notes`

## Scripts disponibles

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

## Build produccion

- `npm run build`
- salida en carpeta `dist/`
