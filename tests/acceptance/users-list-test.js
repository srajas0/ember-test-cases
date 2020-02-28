import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | users list', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting index page', async function(assert) {
    assert.expect(1);
    await visit('/');

    assert.equal(currentURL(), '/users-list', 'If user visit index route, it redirects to users-list route');
  });

  test('visiting /users-list', async function(assert) {
    assert.expect(1);
    await visit('/users-list');
    assert.equal(currentURL(), '/users-list', 'Route loads success fully');
  });

  test('test model loads', async function(assert) {
    assert.expect(2);
    await visit('/users-list');

    const usersList = this.element.querySelectorAll('li');
    assert.equal(usersList.length, 4, '4 user models loaded successfully');

    assert.equal(this.element.querySelector('li p').textContent.trim(), '- Alex Pandiyan', 'First user name is Alex Pandiyan');
  });

  test('test gotoNext action', async function(assert) {
    assert.expect(1);
    await visit('/users-list');
    await click('button.green-btn');
    
    assert.equal(currentURL(), '/create-user', 'When user clicks on create user, It redirects to create-user page success fully');
  });
});
