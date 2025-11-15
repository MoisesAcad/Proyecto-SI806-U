/*
  DON MAMINO - ÁREAS Y CARGOS

  Áreas:
  ( 1, 'Ventas B2B', 'DON MAMINO', '2024-01-01'),
  ( 2, 'Operaciones', 'DON MAMINO', '2024-01-01'),
  ( 3, 'Producción', 'DON MAMINO', '2024-01-01'),
  ( 4, 'Distribución', 'DON MAMINO', '2024-01-01'),
  ( 5, 'Servicio al Cliente', 'DON MAMINO', '2024-01-01'),

  Cargos:
  ( 1, 'Gerente de Ventas'),
  ( 2, 'Ejecutivo Comercial'),
  ( 3, 'Jefe de Operaciones'),
  ( 4, 'Encargado de Inventarios'),
  ( 5, 'Supervisor de Producción'),
  ( 6, 'Panadero Maestro'),
  ( 7, 'Operario de Producción'),
  ( 8, 'Coordinador de Distribución'),
  ( 9, 'Conductor'),
  ( 10, 'Agente de Servicio al Cliente');
*/

export interface Access {
  modulo?: string;
  areas?: string[];
  users?: string[];
}

export const ACCESO_MODULO = {
  almacen:
  {
    area: ["operaciones", "produccion", "servicio al cliente"],
    users: ["jefe de operaciones", "encargado de inventarios", "supervisor de produccion"]
  },
  reportes:
  {
    area: ["ventas b2b", "operaciones", "produccion", "distribucion"],
    users: ["gerente de ventas", "jefe de operaciones", "supervisor de produccion"]
  },
  home:
  {
    area: ["ventas b2b", "operaciones", "produccion", "distribucion", "servicio al cliente"],
    users: []
  },
  seguimiento:
  {
    area: ["distribucion", "operaciones"],
    users: ["coordinador de distribucion", "conductor"]
  },
  control:
  {
    area: ["produccion", "operaciones"],
    users: ["supervisor de produccion", "panadero maestro", "operario de produccion"]
  },
  pedidos:
  {
    area: ["ventas b2b", "servicio al cliente", "operaciones"],
    users: ["gerente de ventas", "ejecutivo comercial", "agente de servicio al cliente"]
  },
  reclamos:
  {
    area: ["servicio al cliente", "operaciones", "produccion"],
    users: ["agente de servicio al cliente", "jefe de operaciones"]
  },
}

// export const ACCESO_MODULO: Access[] = [
//   {
//     modulo: "almacen",
//     areas: ["Almacen", "Atencion al cliente", "Produccion", "Mantenimiento"],
//     users: ["Supervisor de Almacén", "Asistente operativo"]
//   },
//   {
//     modulo: "reportes",
//     areas: [],
//     users: []
//   },
//   {
//     modulo: "home",
//     areas: ["Almacen", "Atencion al cliente", "Produccion", "Mantenimiento"],
//     users: []
//   },
//   {
//     modulo: "seguimiento",
//     areas: [],
//     users: []
//   },
//   {
//     modulo: "control",
//     areas: [],
//     users: []
//   },
//   {
//     modulo: "pedidos",
//     areas: [],
//     users: []
//   },
//   {
//     modulo: "reclamos",
//     areas: [],
//     users: []
//   }
// ]
