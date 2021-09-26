export interface InfoProducto {
    titulo?: string;
    email?: string;
    productos_disponibles?: ProductosDisponible[];
}

interface ProductosDisponible {
    id_prod?: string;
    nombre?: string;
    categoria?: string;
    precio?: string;
    link?: string;
    disponible?: string;
}