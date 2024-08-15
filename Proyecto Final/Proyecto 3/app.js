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

        const crearNodoProducto = (producto) => {
            const li = document.createElement('li');
            li.textContent = `ID: ${producto.id} - Nombre: ${producto.nombre} - Descripción: ${producto.descripcion} - Precio: $${producto.precio.toFixed(2)} - Cantidad: ${producto.cantidad}`;
            return li;
        };

        const mostrarProductoEnDOM = (producto) => {
            const listaProductos = document.getElementById('lista-productos');
            const nodoProducto = crearNodoProducto(producto);
            listaProductos.appendChild(nodoProducto);
        };

        let nuevosProductos = agregarProductoFarmaceutico(productosFarmaceuticos, 'Ibuprofeno', 'Medicamento antiinflamatorio', 5.99, 100);
        nuevosProductos = agregarProductoFarmaceutico(nuevosProductos, 'Acetaminofen', 'Medicamento para fiebre', 8, 100);
        nuevosProductos = agregarProductoFarmaceutico(nuevosProductos, 'Trimetroprin', 'Medicamento para infecciones', 12, 100);
        nuevosProductos = agregarProductoFarmaceutico(nuevosProductos, 'Tabcin', 'Tabletas para dolor', 25, 75);

        // Mostrar productos en el DOM
        nuevosProductos.forEach(mostrarProductoEnDOM);



const proveedores = [];

        const agregarProveedor = (proveedores, nombreP, direccion, telefono, email) => {
            const proveedor = {
                id: proveedores.length + 1,
                nombreP: nombreP,
                direccion: direccion,
                telefono: telefono,
                email: email
            };
            
            return [...proveedores, proveedor];
        };

        const crearNodoProveedor = (proveedor) => {
            const li = document.createElement('li');
            li.textContent = `ID: ${proveedor.id} - Nombre: ${proveedor.nombreP} - Direccion: ${proveedor.direccion} -  Telefono: ${proveedor.telefono} -  Email: ${proveedor.email}`;
            return li;
        };

        const mostrarProveedorEnDOM = (proveedor) => {
            const listaProveedores = document.getElementById('lista-proveedores');
            const nodoProveedor = crearNodoProveedor(proveedor);
            listaProveedores.appendChild(nodoProveedor);
        };

        let nuevosProveedores = agregarProveedor(proveedores, 'PharmaCorp', '123 Calle Principal, Ciudad', '555-1234', 'contacto@pharmacorp.com');
        nuevosProveedores = agregarProveedor(nuevosProveedores, 'PharmaOne', '321 Calle Principal, Ciudad', '123-1234', 'contacto@pharmaone.com');

        // Mostrar productos en el DOM
        nuevosProveedores.forEach(mostrarProveedorEnDOM);



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

        const crearNodoCliente = (cliente) => {
            const li = document.createElement('li');
            li.textContent = `ID: ${cliente.id} - Nombre: ${cliente.nombre} - Direccion: ${cliente.direccion} -  Telefono: ${cliente.telefono} -  Email: ${cliente.email}`;
            return li;
        };

        const mostrarClienteEnDOM = (cliente) => {
            const listaClientes = document.getElementById('lista-clientes');
            const nodoCliente = crearNodoCliente(cliente);
            listaClientes.appendChild(nodoCliente);
        };

        let nuevosClientes = agregarCliente(clientes, 'Juan Pérez', '456 Calle Secundaria, Ciudad', '555-5678', 'juan.perez@email.com');
        nuevosClientes = agregarCliente(nuevosClientes, 'Luis Lopez', '456 Calle Secundaria, Ciudad', '123-5678', 'luis.lopez@email.com');
    nuevosClientes = agregarCliente(nuevosClientes, 'Carlos Gomez', '456 Calle Secundaria, Ciudad', '432-5678', 'carlos.gomez@email.com');

        // Mostrar clientes en el DOM
        nuevosClientes.forEach(mostrarClienteEnDOM);
