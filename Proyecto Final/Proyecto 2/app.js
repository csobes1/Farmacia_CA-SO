/* Historia 1*/

const productosFarmaceuticos = [];

const agregarProductoFarmaceutico = (productos, nombre, descripcion, precio, cantidad) => {
    const producto = {
        id: productos.length + 1,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad
    };
    
    return [...productos, producto];
};

let nuevosProductos = agregarProductoFarmaceutico(productosFarmaceuticos, 'Ibuprofeno', 'Medicamento antiinflamatorio', 5.99, 100);
nuevosProductos = agregarProductoFarmaceutico(nuevosProductos, 'Acetaminofen', 'Medicamento para fiebre', 8, 100);
nuevosProductos = agregarProductoFarmaceutico(nuevosProductos, 'Trimetroprin', 'Medicamento para infecciones', 12, 100);

console.log(nuevosProductos);

/* Historia 2*/

const proveedores = [];

const agregarProveedor = (proveedores, nombre, direccion, telefono, email) => {
    const proveedor = {
        id: proveedores.length + 1,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email
    };
    
    return [...proveedores, proveedor];
};

let nuevosProveedores = agregarProveedor(proveedores, 'PharmaCorp', '123 Calle Principal, Ciudad', '555-1234', 'contacto@pharmacorp.com');
nuevosProveedores = agregarProveedor(nuevosProveedores, 'PharmaOne', '321 Calle Principal, Ciudad', '123-1234', 'contacto@pharmaone.com');

console.log(nuevosProveedores);

/* Historia 3*/

const clientes = [];

const agregarCliente = (clientes, nombre, direccion, telefono, email) => {
    const cliente = {
        id: clientes.length + 1,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email
    };
    
    return [...clientes, cliente];
};

let nuevosClientes = agregarCliente(clientes, 'Juan Pérez', '456 Calle Secundaria, Ciudad', '555-5678', 'juan.perez@email.com');
nuevosClientes = agregarCliente(nuevosClientes, 'Luis Lopez', '456 Calle Secundaria, Ciudad', '123-5678', 'luis.lopez@email.com');
nuevosClientes = agregarCliente(nuevosClientes, 'Carlos Gomez', '456 Calle Secundaria, Ciudad', '432-5678', 'carlos.gomez@email.com');

console.log(nuevosClientes);

/* Historia 4*/

const calcularVentaConProductosExistentes = (productos, productosVendidos) => {
    return productosVendidos.reduce((total, productoVendido) => {
        const producto = productos.find(p => p.id === productoVendido.productoId);
        
        if (!producto) {
            console.log(`Producto con ID ${productoVendido.productoId} no encontrado.`);
            return total;
        }
        
        const subtotal = producto.precio * productoVendido.cantidad;
        console.log(`${productoVendido.cantidad} unidades de ${producto.nombre} a $${producto.precio.toFixed(2)} cada uno: Subtotal $${subtotal.toFixed(2)}`);
        
        return total + subtotal;
    }, 0);
};

const productosVendidos = [
    { productoId: 1, cantidad: 3 },
    { productoId: 2, cantidad: 2 }
];

const totalVenta = calcularVentaConProductosExistentes(nuevosProductos, productosVendidos);
console.log(`Total de la venta: $${totalVenta.toFixed(2)}`);
