const cantidadProductos = () => {
	let cantidad = Number(prompt('Ingrese cantidad de productos hasta 10'));

	while (cantidad <= 0 || cantidad > 10) {
		alert(
			':( Ha introducido un valor para cantidad incorrecto, por favor introduzca un valor válido entre 1 y 100.'
		);
		cantidad = Number(prompt('Ingrese la cantidad de productos hasta 100'));
	}

	ingresarPrecio(cantidad);
};

const ingresarPrecio = (cantidad) => {
	let gastoTotal = 0;
	let precioProducto = 0;
	// let contador = 0;

	for (let i = 1; i <= cantidad; i++) {
		precioProducto = Number(prompt('Ingrese el precio del producto' + i + ':'));

		if (precioProducto > 0) {
			gastoTotal = calcularTotal(gastoTotal, precioProducto);
		} else {
			while (precioProducto <= 0 || isNaN(precioProducto)) {
				alert(
					'Ha introducido un valor erroneo para el precio del producto. Por favor ingrese un valor superior a cero (0)'
				);
				precioProducto = Number(
					prompt('Ingrese el precio del producto' + i + ':')
				);
			}
			gastoTotal = calcularTotal(gastoTotal, precioProducto);
		}
	}

	mostrarTotal(gastoTotal, cantidad);
};

const calcularTotal = (gastoTotal, precioProducto) =>
	gastoTotal + precioProducto;

const mostrarTotal = (gastoTotal, cantidad) => {
	console.log('Cantidad de productos: ' + cantidad);
	console.log('El precio total es $' + gastoTotal);
};

cantidadProductos();