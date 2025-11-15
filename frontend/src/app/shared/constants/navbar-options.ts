export default [
  {
    routeLink: 'home',
    icon: 'fa fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'pedidos',
    icon: 'fa fa-shopping-cart',
    label: 'Ventas B2B'
  },
  {
    routeLink: 'almacen',
    icon: 'fa fa-warehouse',
    label: 'Operaciones'
  },
  {
    routeLink: 'control',
    icon: 'fa fa-industry',
    label: 'Producción'
  },
  {
    routeLink: 'seguimiento',
    icon: 'fa fa-truck',
    label: 'Distribución',
    items: [
      {
        routeLink: 'vehiculos',
        label: 'Vehículos'
      },
      {
        routeLink: 'rutas',
        label: 'Rutas'
      },
      {
        routeLink: 'transportistas',
        label: 'Conductores'
      }
    ]
  },
  {
    routeLink: 'reclamos',
    icon: 'fa fa-comment-alt',
    label: 'Servicio al Cliente'
  },
  {
    routeLink: 'reportes',
    icon: 'fa fa-chart-line',
    label: 'Análisis S&OP'
  },
];
