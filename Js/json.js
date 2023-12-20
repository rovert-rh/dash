// Definir la URL de los archivos JSON
var jsonUrl1 = 'datos.json';
var jsonUrl2 = 'mexico.json';

// Función para cargar y renderizar la gráfica
function cargarDatos(jsonUrl) {
  // Mostrar el cargador
  mostrarCargador();

<<<<<<< HEAD
    // Configuración del gráfico
    var options = {
      series: seriesData,
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: 'Totales de cuentas por pagar por mes',
        align: 'center',
        margin: 10,
        floating: false,
        style: {
          fontSize:  '28px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
=======
  // Realizar la solicitud para obtener el JSON
  fetch(jsonUrl)
    .then(response => response.json())
    .then(jsonData => {
      // Obtén las entidades y los datos para las series del gráfico de manera dinámica
      var entities = Object.keys(jsonData.Data);
      var seriesData = entities.map(function(entity) {
        return {
          name: entity,
          data: jsonData.Data[entity].map(function(item) {
            return item.y;
          })
        };
      });

      // Configuración del gráfico
      var options = {
        series: seriesData,
        chart: {
          type: 'bar',
          height: 350
>>>>>>> 88020c165233f975106d575283df0ac4e09cdadc
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
          categories: jsonData.Data[entities[0]].map(function(item) {
            return item.label;
          }),
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

      // Crear la instancia de la gráfica y renderizarla en el contenedor con ID "chart"
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();

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

// Asignar eventos a los botones para cambiar los datos al hacer clic
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('botonDatos1').addEventListener('click', function() {
    cargarDatos(jsonUrl1);
  });

  document.getElementById('botonDatos2').addEventListener('click', function() {
    cargarDatos(jsonUrl2);
  });
});

// Inicializar la gráfica con el primer conjunto de datos
cargarDatos(jsonUrl1);
