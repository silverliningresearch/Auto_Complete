var airportsList;
var item_found;

function load_airports_list() {
  airportsList = JSON.parse(airport_list);

  for (i = 0; i < airportsList.length; i++) {
    airportsList[i].Show = airportsList[i].airport;
  }

  init_search_list(airportsList);
  console.log("load_airport_code done!");
}

function save_airport(info) {

  console.log("save_airport done!");
}