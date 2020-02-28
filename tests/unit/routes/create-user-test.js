import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Unit | Route | create-user', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it exists', function(assert) {
    assert.expect(1);
    let route = this.owner.lookup('route:create-user');
    assert.ok(route);
  });

  test('Test submit action', async function(assert) {
    assert.expect(1);
    let route = this.owner.lookup('route:create-user');
    // mock transitionTo
    route.set('transitionTo', () => {});

    let model = {
      firstName: 'raj',
      lastName: 's',
      age: '27'
    }
    await route.send('submit', model);
    
    let savedUser = await route.store.peekRecord('user', 'raj');    

    assert.equal(savedUser.get('firstName'), 'raj', 'The user saved successfully');

  });
});
