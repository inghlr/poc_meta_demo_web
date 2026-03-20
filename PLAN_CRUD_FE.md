# Plan Frontend: CRUD + Formulario de Cita de Venta (React)

## 1) Objetivo
Construir el frontend en React para operar:
- CRUD de la entidad principal.
- Formulario para capturar datos del cliente y agendar cita de venta.

El FE consume solo el backend API.

## 2) Alcance funcional en UI
### 2.1 Modulo CRUD
- Listado
- Crear
- Detalle
- Editar
- Eliminar

### 2.2 Modulo Agenda de Cita
Nueva pantalla con formulario simple para agendar cita de venta de producto.

Campos minimos sugeridos:
- nombre completo
- telefono
- correo
- producto de interes
- fecha preferida
- hora preferida
- notas (opcional)

## 3) Stack recomendado
- React + Vite
- React Router
- TanStack Query
- React Hook Form + Zod
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
      SalesAppointmentPage.jsx
    components/
      EntityTable.jsx
      EntityForm.jsx
      SalesAppointmentForm.jsx
      ConfirmDialog.jsx
    services/
      apiClient.js
      entity.api.js
      salesAppointment.api.js
    hooks/
      useEntities.js
      useEntityMutations.js
      useSalesAppointments.js
    schemas/
      entity.schema.js
      salesAppointment.schema.js
    styles/
```

## 5) Integracion con API
- `VITE_API_BASE_URL`
- Endpoints CRUD existentes
- Nuevo endpoint:
  - `POST /api/v1/sales-appointments`
  - `GET /api/v1/sales-appointments` (para seguimiento interno)

Contrato esperado:
- respuesta estandar con `data`, `meta`, `error`

## 6) UX del formulario de cita
- Validaciones en cliente (campos obligatorios, email, telefono, fecha/hora)
- Estado loading durante envio
- Mensaje de exito al agendar
- Manejo de error con opcion de reintento
- Confirmacion visual de cita registrada

## 7) Fases de implementacion FE (por partes)
1. Ajustar documentacion y contrato FE-BE.
2. Crear ruta y pagina `SalesAppointmentPage`.
3. Implementar `SalesAppointmentForm` con React Hook Form + Zod.
4. Conectar formulario a `salesAppointment.api.js`.
5. Mostrar estados UX (loading, success, error).
6. Pruebas unitarias del formulario y flujo principal.
7. Integrar con navegacion general del CRUD.

## 8) Criterios de terminado FE
- CRUD funcionando contra API.
- Formulario de cita funcionando extremo a extremo.
- Validaciones de formulario claras.
- Feedback de usuario en envio exitoso/error.
- Pruebas de flujo principal implementadas.

## 9) Riesgos y mitigaciones
- Desalineacion con contrato API:
  - Mitigacion: DTOs y validacion de respuesta.
- Errores de UX en formulario:
  - Mitigacion: pruebas de interaccion y estados.
- Regresiones al integrar nuevo modulo con CRUD:
  - Mitigacion: pruebas de navegacion y smoke tests.

## 10) Entregables FE
- CRUD en React.
- Pantalla y formulario de agenda de cita de venta.
- Servicio API para citas.
- Pruebas basicas del nuevo flujo.
