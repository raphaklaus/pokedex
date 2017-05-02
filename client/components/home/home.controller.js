class HomeController {
  constructor($http) {
    this._$http = $http;
    this.comments = [];

    this._$http.get('/api/pokemon/list').then(response => {
      this.pokemons = [];
      response.data.results.map((item, index) => {
        let pokemonNumber = index + 1;
        this.pokemons.push({ label: `#${pokemonNumber} - ${item.name}`,
          number: pokemonNumber });
      });
    }).catch(error => console.log(error)); // todo handle this errors better
  }
}

HomeController.$inject = ['$http'];

export { HomeController };
