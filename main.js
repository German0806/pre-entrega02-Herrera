

function Empleado(nombre, departamento, salario) {
    this.nombre = nombre;
    this.departamento = departamento;
    this.salario = salario;
  }

  
  const empleados = [];
  
  function agregarEmpleado() {
    const nombre = prompt('Ingrese el nombre del empleado:');
    const departamento = prompt('Ingrese el departamento del empleado:');
    const salario = parseFloat(prompt('Ingrese el salario del empleado:'));
  
    const empleado = new Empleado(nombre, departamento, salario);
    empleados.push(empleado);
  
    console.log('¡Empleado agregado con éxito!');
  }
  
  function mostrarEmpleados() {
    console.log('Lista de empleados:');
    empleados.forEach(empleado => {
      console.log(`Nombre: ${empleado.nombre}, Departamento: ${empleado.departamento}, Salario: $${empleado.salario}`);
    });
  }
  
  function buscarPorDepartamento() {
    const departamento = prompt('Ingrese el departamento para buscar:');
    const empleadosDepartamento = empleados.filter(empleado => empleado.departamento === departamento);
  
    console.log(`Empleados en el departamento de ${departamento}:`);
    
    empleadosDepartamento.forEach(empleado => {
      console.log(`Nombre: ${empleado.nombre}, Salario: $${empleado.salario}`);
    });
  }
  
  function calcularSalarioTotal() {
    const salarioTotal = empleados.reduce((total, empleado) => total + empleado.salario,0);
    console.log(`El salario total de la empresa es: $${salarioTotal}`);
  }
  
  while (true) {
    const opcion = prompt('Seleccione una opción:\n1. Agregar empleado\n2. Mostrar empleados\n3. Buscar por departamento\n4. Calcular salario total\n5. Salir');
  
    switch (opcion) {
      case '1':
        agregarEmpleado();
        break;
      case '2':
        mostrarEmpleados();
        break;
      case '3':
        buscarPorDepartamento();
        break;
      case '4':
        calcularSalarioTotal();
        break;
      case '5':
        console.log('¡Hasta luego!');
        exit;
      default:
        console.log('Opción no válida. Por favor, seleccione una opción válida.');
    }
  }
  