import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | calculator', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    assert.expect(1);
    let route = this.owner.lookup('route:calculator');
    assert.ok(route);
  });
});
