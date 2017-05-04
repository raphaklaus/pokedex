describe('pokelist home', function() {
  beforeEach(() => {
    browser.get('http://pokelist_backend_1/#!/list/1');
  });

  it('should have pokemon image frame', () => {
    expect($('.centered-character .pokemon').isPresent()).toBe(true);
  });

  it('should have 5 dialogs', () => {
    expect($$('.pokemon-info .border').count()).toBe(5);
  });

  it('should post 2 comments and check if they were posted', () => {
    $('.comment-form form input').sendKeys('raphaklaus');
    $('.comment-form form textarea').sendKeys('amazing!!');
    $('.comment-form form button').click();

    $('.comment-form form input').sendKeys('anony');
    $('.comment-form form textarea').sendKeys('durrr this site is dummyyy11!');
    $('.comment-form form button').click();

    expect(element.all(by.repeater('comment in ctrl.comments')).count()).not.toBe(0);
  });
});
