import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Unit | Route | users-list', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it exists', function(assert) {
    assert.expect(1);
    const route = this.owner.lookup('route:users-list');
    assert.ok(route);
  });

  test('Test modal loaded', async function(assert) {
    assert.expect(1);
    const route = this.owner.lookup('route:users-list');
    const model = await route.model();

    // let userModel = route.store.peekAll('user');
    assert.equal(model.length, 4, 'The has been loaded successfully');
  });

  test('Test delete action', async function(assert) {
    assert.expect(3);
    const route = this.owner.lookup('route:users-list');
    const model = await route.model();

    assert.equal(model.get("firstObject").get('firstName'), 'Alex', 'The user alex fetched successfully');
    
    // call delete action
    route.send('delete', model.get("firstObject"));

    await visit('/users-list');

    const usersList = this.element.querySelectorAll('li');
    assert.notEqual(this.element.querySelector('li p').textContent.trim(), '- Alex Pandiyan', 'The user Alex has been deleted successfully');
    assert.equal(usersList.length, 3, 'The user Alex has been deleted successfully');

  });
});
