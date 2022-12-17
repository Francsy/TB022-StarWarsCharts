// // Ejercicio - Gráficas con Star Wars ⚔️ 🔫

// // Practicaremos cómo crear gráficas con las librerías vistas en clase
// // Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
// // En el eje X el nombre de la película
// // En el eje Y año de publicación
// // API ENDPOINT --> https://swapi.dev/api/films/

async function makeSWFilmsChart() {
  let resultado = await fetch("https://swapi.dev/api/films/");
  let dataBase = await resultado.json();
  const filmList = dataBase.results;
  const arrFilms = filmList.map(element => element.title);
  const arrAnios = filmList.map(element => element.release_date.substring(0, 4))


  var data = {
    labels: arrFilms,
    series: [arrAnios]
  };
  var options = {
    showPoint: true,
    showArea: true,
    lineSmooth: true,
    axisX: {
      offset:80
    },
    axisY: {
      offset: 80,
      labelInterpolationFnc: function (value) {
        return '' + value + '';
      }
    }
  };
  new Chartist.Line('#SWFilms', data, options);
}
makeSWFilmsChart();

// // Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver
// // En el eje X el nombre del personaje
// // En el eje Y el número de películas en las que ha participado.
// // API ENDPOINT --> https://swapi.dev/api/people/
// // Para pintar todo esto usaremos Chartist Link a la docu: 


async function getCharacters() {
  let results = await fetch("https://swapi.dev/api/people/");
  let charactersData = await results.json();
  const charactersList = charactersData.results;
  let arrNames = charactersList.map(element => element = element.name);
  let arrNumFilms = charactersList.map(element => element.films.length);
  
  new Chartist.Bar('#SWCharacters', {
    labels: arrNames,
    series: [arrNumFilms]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value) + '';
      }
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });
}
getCharacters()