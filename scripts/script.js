// // Ejercicio - Gráficas con Star Wars ⚔️ 🔫

// // Practicaremos cómo crear gráficas con las librerías vistas en clase
// // Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
// // En el eje X el nombre de la película
// // En el eje Y año de publicación
// // API ENDPOINT --> https://swapi.dev/api/films/


/// INSERTAR GRAFICA DESDE LA WEB DE CHARTIST.jS

// Our labels and three data series



///LOGICA PARA SACAR DATOS DE API, NO TOCAR, FUNCIONA


async function makeSWFilmsChart() {
    let resultado = await fetch("https://swapi.dev/api/films/");
    let dataBase = await resultado.json();
    const listaPelis = dataBase.results;
    
    const arrayPelis = []; 
    for (let i = 0; i < listaPelis.length; i++) {
        arrayPelis.push(listaPelis[i].title);
    }
    
    const arrayFechas = []; 
    for (let i = 0; i < listaPelis.length; i++) {
        arrayFechas.push(listaPelis[i].release_date);
    }
    
    // arrayFechas.filter(() => element.length - 6))
    // arrayFechas.map()).filter((element) => element.length - 6);

    // return console.log(arrayFechas);
    
    

    const anios = arrayFechas.map(string => string.substring(0, 4));
    

    var data = {
        labels: arrayPelis,
        series: [anios]
      };
      
      // We are setting a few options for our chart and override the defaults
      var options = {
        // Don't draw the line chart points
        showPoint: true,
        // Disable line smoothing
        lineSmooth: false,
        // X-Axis specific configuration
        axisX: {
          // We can disable the grid for this axis
          showGrid: true,
          // and also don't show the label
          showLabel: true
        },
        // Y-Axis specific configuration
        axisY: {
          // Lets offset the chart a bit from the labels
          offset: 60,
          // The label interpolation function enables you to modify the values
          // used for the labels on each axis. Here we are converting the
          // values into million pound.
          labelInterpolationFnc: function(value) {
            return '' + value + '';
          }
        }
      };
      
      // All you need to do is pass your configuration as third parameter to the chart function
      new Chartist.Line('.ct-chart', data, options);
}

makeSWFilmsChart()







// Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver
// En el eje X el nombre del personaje
// En el eje Y el número de películas en las que ha participado.
// API ENDPOINT --> https://swapi.dev/api/people/
// Para pintar todo esto usaremos Chartist Link a la docu: 


// https://swapi.dev/api/people/