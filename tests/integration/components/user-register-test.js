import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration | Component | user-register', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
    this.router = this.owner.lookup('service:router');
    this.model = {
      firstName: 'raj',
      lastName: 's',
      age: '27'
    }
  })

  test('it renders', async function(assert) {
    assert.expect(1);
    await render(hbs`{{user-register model=model}}`);
    this.router.set('transitionTo', () => {});

    await click('.green-btn');

    let savedUser = this.store.peekRecord('user', 'raj');

    assert.equal(savedUser.get('firstName'), 'raja', 'The user saved successfully');

  });
});
