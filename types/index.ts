export interface Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imageneUrl: string;
  idTienda: number;
  idRepartidor?: number;
}

export interface Usuario {
  idUsuario: number;
  nombre: string;
  email: string;
  telefono: string;
  rol: 'CLIENTE' | 'REPARTIDOR' | 'ADMIN';
}


export interface DetallePedido {
  idDetalle: number;
  idPedido: number;
  idProducto: number;
  cantidad: number;
  precioUnitario: number;
}

export interface Pedido {
  pedido: any;
  fecha: string | number | Date;
  id: string;
  numero: string;
  usuarioId: string;
  tiendaId: string;
  productos: ProductoPedido[];
  subtotal: number;
  impuestos: number;
  total: number;
  estado: EstadoPedido;
  metodoPago: string;
  direccionEntrega: DireccionEntrega;
  notas?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductoPedido {
  productoId: string;
  nombre: string;
  cantidad: number;
  precio: number;
  subtotal: number;
  imagen?: string;
}

export interface DireccionEntrega {
  calle: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
  pais: string;
  referencias?: string;
}

export type EstadoPedido = 
  | 'pendiente' 
  | 'confirmado' 
  | 'en_preparacion' 
  | 'en_camino' 
  | 'entregado' 
  | 'cancelado';

export interface FiltrosPedidos {
  estado?: EstadoPedido;
  tiendaId?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
}

export interface Tienda {
  id_tienda: number;
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  descripcion: string;
}


