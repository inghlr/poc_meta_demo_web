# Plan CRUD Frontend (React)

## 1) Objetivo
Construir el frontend en React para operar el CRUD consumiendo solo el backend API.

El FE no debe llamar Meta API directamente.

## 2) Alcance del CRUD en UI
Entidad objetivo: `meta-applications` (o la entidad final que exponga el API).

Vistas y flujos:
- Create: alta con formulario y validaciones.
- Read: listado y detalle.
- Update: edicion completa/parcial.
- Delete: eliminacion con confirmacion.

## 3) Stack recomendado
- React + Vite
- React Router
- TanStack Query
- React Hook Form + Zod
- Libreria UI (MUI/Ant/Chakra) o componentes propios
- Axios/fetch
- Vitest + Testing Library

## 4) Estructura sugerida
```txt
poc_meta_web/
  src/
    main.jsx
    App.jsx
    routes/
    pages/
      EntityListPage.jsx
      EntityDetailPage.jsx
      EntityCreatePage.jsx
      EntityEditPage.jsx
    components/
      EntityTable.jsx
      EntityForm.jsx
      ConfirmDialog.jsx
    services/
      apiClient.js
      entity.api.js
    hooks/
      useEntities.js
      useEntityMutations.js
    schemas/
      entity.schema.js
    styles/
  .env.example
  package.json
```

## 5) Integracion con API
- Variable de entorno: `VITE_API_BASE_URL`.
- Centralizar cliente HTTP en `services/apiClient.js`.
- Manejar errores HTTP en un solo punto.
- Contrato esperado desde BE: `data`, `meta`, `error`.

## 6) Estados UX minimos
- loading/skeleton
- empty state
- error state con reintento
- success feedback (toast/mensaje)

## 7) Fases de implementacion FE
1. Bootstrap React + rutas.
2. Cliente API + configuracion de entorno.
3. Pantalla de listado.
4. Pantalla/formulario de crear.
5. Pantalla de detalle.
6. Pantalla/formulario de editar.
7. Flujo de eliminar con confirmacion.
8. Pruebas de componentes y flujos criticos.
9. Mejoras UX y accesibilidad minima.

## 8) Criterios de terminado FE
- CRUD completo funcionando contra API.
- Validaciones claras en formularios.
- Navegacion estable entre pantallas.
- Manejo de errores consistente.
- Pruebas de los flujos principales.

## 9) Riesgos y mitigaciones
- Desalineacion de contrato con API:
  - Mitigacion: tipar DTOs y validar respuestas.
- Estados de red inconsistentes:
  - Mitigacion: estandarizar hooks con TanStack Query.
- Regresiones visuales:
  - Mitigacion: tests de componentes y revisiones de UX.

## 10) Entregables FE
- Proyecto React organizado por modulos.
- Pantallas CRUD funcionales.
- Configuracion por entorno (`VITE_API_BASE_URL`).
- Pruebas base de UI y flujo principal.
