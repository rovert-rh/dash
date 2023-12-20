var data = {
    series: [
      {
        name: 'México',
        data: [44, 55, 41, 67, 22, 43, 13, 23, 20, 8, 13, 27, 11, 17, 15, 15, 21, 14, 21, 7, 25, 13, 22, 8]
      },
      {
        name: 'IWS Services Perú',
        data: [50975.64, 101344.04, 7952.23, 0, 0, 0, 0, 0, 0, 704.28, 725.7, 0]
      },
      {
        name: 'IWS Services Costa Rica',
        data: [51605.43, 79439.35, 81852.28, 165966.62, 20299.8, 79596.57, 132773.88, 143078.38, 227636.92, 214547.97, 103734.86, 0]
      },
      {
        name: 'Redinet Perú',
        data: [0, 692387.2, 0, 0, 0, 0, 133.08, 0, 223.49, 63.00, 836.20, 1568.58]
      },
      {
        name: 'IWS Services Honduras',
        data: [0, 1503.7, 0, 0, 0, 0, 380.01, 0, 0, 0, 0, 0]
      },
      {
        name: 'IWS Services Colombia',
        data: [0, 29404.91, 0, 23430.59, 0, 3062.28, 75686.32, 365.11, 38273.97, 27373.60, 31571.13, 1558.10]
      },
      {
        name: 'Redinet Costa Rica',
        data: [0, 0, 0, 2552.16, 3975.98, 0, 579.08, 0, 1885.21, 4467.6, 63090.35, 73762.19]
      },
      {
        name: 'IWS Services El Salvador',
        data: [0, 0, 0, 0, 0, 3975.14, 0, 901.16, 171.03, 0, 0, 2491.38]
      },
    ],
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    }
  };

  var tableContainer = document.getElementById("table-container");
  var tableHTML = "<table class='table table-bordered'><thead><tr><th class='mes'>Mes</th>";

  data.series.forEach(function (serie) {
    var countryClass = '';
    switch (serie.name) {
      case 'México':
        countryClass = 'mexico';
        break;
      case 'IWS Services Perú':
        countryClass = 'peru';
        break;
      case 'Redinet Perú':
        countryClass = 'peru';
        break;
      case 'IWS Services Costa Rica':
        countryClass = 'costarica';
        break;
      case 'Redinet Costa Rica':
        countryClass = 'costarica';
        break;
      case 'IWS Services Colombia':
        countryClass = 'colombia';
        break;
      case 'IWS Services Honduras':
        countryClass = 'honduras';
        break;
      case 'Redinet Chile':
        countryClass = 'chile';
        break;
      case 'IWS Services El Salvador':
        countryClass = 'elsalvador';
        break;
    }

    tableHTML += "<th class='" + countryClass + "'>" + serie.name + "</th>";
  });

  tableHTML += "<th class='totalporMes'>Total por Mes</th></tr></thead><tbody>";

  data.xaxis.categories.forEach(function (month, index) {
    tableHTML += "<tr><td>" + month + "</td>";

    var totalPorMes = 0;

    data.series.forEach(function (serie) {
      var valorEnDolares = serie.data[index].toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      tableHTML += "<td>" + valorEnDolares + "</td>";
      totalPorMes += serie.data[index];
    });

    var totalPorMesEnDolares = totalPorMes.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    tableHTML += "<td class='totalporMes'>" + totalPorMesEnDolares + "</td></tr>";
  });

  // Agregar la fila de sumatoria por columna
  tableHTML += "<tr><td>Total por Columna</td>";

  data.series.forEach(function (serie) {
    var totalPorColumna = serie.data.reduce(function (a, b) {
      return a + b;
    }, 0);

    var totalPorColumnaEnDolares = totalPorColumna.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    tableHTML += "<td>" + totalPorColumnaEnDolares + "</td>";
  });

  tableHTML += "<td></td></tr></tbody></table>";
  tableContainer.innerHTML = tableHTML;