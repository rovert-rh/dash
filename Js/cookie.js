// API a consultar información
var apiUrl = 'https://azurebi.iwsservices.com/api/DebsToPay/GetDataLineChart';

// Cuerpo del JSON para la solicitud POST
var postData = {
  "companies": null,
  "Year": [0, 0, 2023],
  "Months": [[], [], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
  "Currencies": null,
  "SelectedYear": [2023, 2],
  "SelectedMonth": null,
  "SelectedCompany": null,
  "SelectedCustomer": null
};

// Configuración de la solicitud POST
var requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'OpenIdConnect.nonce.ToW4bGkZRlwdFqoZwT96Fiwc%2FlPGORjLQxWzcX5SaQI%3D=RXVtZ2tEdzhFWVY5b1JtUE1HRU1famtTYkpRd3I0UnhWUnZCM3ItUjRpbVBPLUZaczlkdmtvWGZ1X29ZWjNPck1xZVdQVXZyWVQ5a3RLY1Q3dU5UT0VWdDRSR3BTX3k2MUgxejdQU2g0VEFTVkt3ZE1GR2pKS0xINlpHMEM5X0MwanIwRjRIYmhsSzZyNmQxMW1EYlE1aXA0Zk9VcHByam92TWtQd0wzTTFQWEtadnVpYUVxZFVULW1nZmp2djVFWXdhcWJxOVh3MjVkODRIWC14QnlSVHFvV1F2cEs5SGo5Y0QxOFBNSjdPNA%3D%3D; .AspNet.Cookies=JfomTvaYV4-GMd-bxsQYnGXTKjRYBPObITtmeH7aLUSW225L4jc4tQYK0Yuls7vXcwOa7xml-Mhf-y2q2JSj0UJ5DhqdGEQ68vQ4Spk5M_M9FzU6iOVYNwfFzyHwePRFrK9cD3p1CJr5Yi3RixTupbWD3lzEsXAMOdG_gx--gaw7ZPliZQIV2CwmPZ4SbMSkp0CFh6gO0ajr_StHfUBtEgdkWWhfO-6OkRdTOsxQVyUgTQUUerKSvVz_5rgVpDU594_tDyn1Bu2uV2Ox6RWy-muPx-fhKnRH-TjV04kaRsCAILPinYVFb55cDMqJXOOmhEdUT4L9IZUBIvyKnmkP0O5lY7E4O1NavJhZId_4S4YERKaqfP4tLUZk63iCF7uGhGWUl78nJ5aYAhP4Lz4dFbBd90_hJJ6t_k7c1RLTWBJi5vxVTrcsOC0gHOkIbVrCU0yWxMBj42XL4jkWaDBgBbVgs_DCFqer7iON77NmP6cCN5yXqkHWxaZpm0EM6uSrT9GIg7VXJF513NbLVm9_a1I0qh0gv49_21nRBMrKcQfdZSCYeZM277jMJy3N0my1dgMkVpKtqTUWBP9dNA04TlpDVZP6xLM4TF5vbdehmhJlq0kEWeAHCM0xE7nSGtuyE_-ZbCzXAIZwzGTUrQgYZApchz-IGHASXmRCQSwPPDtdmhamCGXxaqi-tmSYdIV7JSqfgPyk6s1frbxPKQZ6NlL_fRTZAoIOgjaaLI8anp3aID1XPrU-vOczKqVhaG4OOZ-7S4DS37I72T-pRE0NBev-ake0Mow66s5X6E_xnxIlaMMVLcXlaCT7gibJoQyrNUE1FcHAXh6CAfAxW07MEmmYIwn3QabqniFmaBV2P3bJSDe9ndnGY1AUPg8ybhvBpLnfbiwdWeIY60tK_EeSKK_ueIGfsYqUj8pjOxc-PmJE_8dj2pE8BOGwifaWzCHDL-09vGI_sLJcxLR89x9wJkKEsS3P4UYrzYATH6ATjfT3YxfZ9ROFaQxkGO4xq9P4sSMkqhQSdS3dhsv_1mkBEg4PyZ6Ghxy03KdNiaHkCV4ZLmg-v096ZfUIBLS4CfjgRVQRCVGTOPDYKanYioXM4oymPy3wNGjQ0OZJ4PswisbY-C0t-efBNuzuAAdHWMtnLusdVAy-5EhfXJ9XqxVvfbewBVUC31HX-NvhUAxlOv4PY_JJwMpnun0oqcYxImqWS_tPEww7dlk0sOTmtfkSBN-A87GnMwrJTWWn1QSLJxThP0r6jjIuafQVJcImMoftrAmMWsvooE6xANjoPuua_G3BHbOB2nT5mbWzR6zkN0Ocp60ikcVUqH8uNaRL7UzdmKgH4aBq90rqX5I2tVyGtj0EUnOYo66X9HgFBvD_towZqx2pXtYlubWVxeZs7_PMXVEKYHkt__egFQXuuVr8ilVJfomZIKEw40UrjrQxm55fr11eBjw-R73c9PvuUzDG'
  },
  body: JSON.stringify(postData)
};

// Realizar la solicitud para obtener el JSON
fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(jsonData => {
    // Verificar si jsonData.Data existe y es un objeto antes de intentar acceder a sus propiedades
    if (jsonData.Data && typeof jsonData.Data === 'object') {
      // Procesar y mostrar el gráfico
      renderizarGrafico(jsonData.Data);
    } else {
      console.error('Los datos recibidos no son válidos.');
    }
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });

// Función para renderizar el gráfico
function renderizarGrafico(data) {
  var entities = Object.keys(data);

  if (entities.length > 0) {
    var seriesData = entities.map(entity => {
      var entityData = data[entity];

      if (Array.isArray(entityData)) {
        return {
          name: entity,
          data: entityData.map(item => (item.y !== undefined ? item.y : null))
        };
      } else {
        console.error(`El formato de los datos para la entidad ${entity} no es el esperado.`);
        return null;
      }
    }).filter(Boolean);

    if (seriesData.length > 0) {
      // Configuración del gráfico
      var options = {
        series: seriesData,
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
      // Crear y renderizar el gráfico
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    } else {
      console.error('No hay datos válidos para mostrar en el gráfico.');
    }
  }
}
