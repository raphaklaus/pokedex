import '../../components/home/home.view.html';

class HomeController {
  constructor($http) {
    this._$http = $http;
    this.pokemons = [];

    this.offset = 0;
    this.getList(this.offset);
  }

  getList(offset) {
    this.loadingPokemonList = true;

    this._$http.get(`/api/pokemon/list?offset=${offset || 0}`).then(response => {
      this.loadingPokemonList = false;

      response.data.results.map((item, index) => {
        let pokemonNumber = this.offset + index + 1;
        this.pokemons.push({ label: `#${pokemonNumber} - ${item.name}`,
          number: pokemonNumber });
      });
    });
  }

  paginate() {
    this.offset += 20;
    this.pokemons = [];
    this.getList(this.offset);
  }
}

HomeController.$inject = ['$http'];

export { HomeController };
