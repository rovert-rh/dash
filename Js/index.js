var jsonUrls = ['datos.json', 'mexico.json'];
    var activeChart = 0;

    // Inicializar la gráfica con el primer conjunto de datos
    cargarDatos(jsonUrls[activeChart]);

    // Función para cargar y renderizar la gráfica
    function cargarDatos(jsonUrl) {
      // Mostrar el cargador
      mostrarCargador();

      // Ocultar la gráfica actual
      ocultarGrafica();

      // Realizar la solicitud para obtener el JSON
      fetch(jsonUrl)
        .then(response => response.json())
        .then(jsonData => {
          // Configuración del gráfico
          var options = {
            series: obtenerSeries(jsonData.Data),
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: obtenerCategorias(jsonData.Data)
            },
            yaxis: {
              title: {
                text: '$ (Dolares)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val.toFixed(2);
                }
              }
            }
          };

          // Crear la instancia de la gráfica y renderizarla en el contenedor
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();

          // Mostrar la gráfica
          mostrarGrafica();

          // Ocultar el cargador después de cargar los datos
          ocultarCargador();
        })
        .catch(error => {
          console.error('Error al cargar el archivo JSON:', error);

          // Ocultar el cargador en caso de error
          ocultarCargador();
        });
    }

    // Función para mostrar el cargador
    function mostrarCargador() {
      document.getElementById('loader').style.display = 'block';
    }

    // Función para ocultar el cargador
    function ocultarCargador() {
      document.getElementById('loader').style.display = 'none';
    }

    // Funciones para obtener las series y categorías del gráfico
    function obtenerSeries(data) {
      return Object.keys(data).map(entity => {
        return {
          name: entity,
          data: data[entity].map(item => item.y)
        };
      });
    }

    function obtenerCategorias(data) {
      var entities = Object.keys(data);
      return data[entities[0]].map(item => item.label);
    }

    // Función para ocultar la gráfica
    function ocultarGrafica() {
      document.getElementById('chart').style.display = 'none';
    }

    // Función para mostrar la gráfica
    function mostrarGrafica() {
      document.getElementById('chart').style.display = 'block';
    }

    // Asignar eventos a los botones para cambiar los datos al hacer clic
    document.getElementById('botonDatos1').addEventListener('click', function() {
  activeChart = 0;
  cargarDatos(jsonUrls[activeChart]);
  document.getElementById('botonDatos1').classList.add('active');
  document.getElementById('botonDatos2').classList.remove('active');
  document.getElementById('botonDatos1').style.backgroundColor = '#007bff';
  document.getElementById('botonDatos1').style.color = '#fff';
  document.getElementById('botonDatos2').style.backgroundColor = '';
  document.getElementById('botonDatos2').style.color = '';
});

document.getElementById('botonDatos2').addEventListener('click', function() {
  activeChart = 1;
  cargarDatos(jsonUrls[activeChart]);
  document.getElementById('botonDatos1').classList.remove('active');
  document.getElementById('botonDatos2').classList.add('active');
  document.getElementById('botonDatos1').style.backgroundColor = '';
  document.getElementById('botonDatos1').style.color = '';
  document.getElementById('botonDatos2').style.backgroundColor = '#007bff';
  document.getElementById('botonDatos2').style.color = '#fff';
});