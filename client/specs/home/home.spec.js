module.exports = function(expect) {
  describe('pokelist home', () => {
    beforeEach(() => {
      browser.get('http://pokelist_backend_1/#!/home');
    });

    it('should have an oak', () => {
      expect($('.centered-character .oak').isPresent()).to.eventually.equal(true);
    });

    it('should have 2 dialogs', () => {
      expect($$('.oak-intro .border').count()).to.eventually.equal(2);
    });

    it('should have 20 pokemons inside dialog', () => {
      expect(element.all(by.repeater('pokemon in ctrl.pokemons')).count()).to.eventually.equal(20);
    });

    it('should redirect to pokemon info list', () => {
      $$('.pokemon-list li').first().click();
      browser.getCurrentUrl().then(data => expect(data.split('#!')[1]).to.equal('/list/1'));
    });
  });
};
