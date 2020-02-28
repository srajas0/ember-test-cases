import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | user', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:user');
    assert.ok(adapter);
  });

  // test namespace property
  test('test namespace property of adapter', function(assert) {
    let adapter = this.owner.lookup('adapter:user');
    assert.equal(adapter.namespace, "api/user", "namespce has been changed successsfully");
  });

  // test urlForFindAll method
  test('test urlForFindAll of adapter', function(assert) {
    let adapter = this.owner.lookup('adapter:user');
    let url = adapter.urlForFindAll();
    assert.equal(url, "/api/user/findAll", "urlForFindAll is working fine");
  });

  // test urlForFindAll method
  test('test urlForDeleteRecord of adapter', function(assert) {
    let adapter = this.owner.lookup('adapter:user');
    let url = adapter.urlForDeleteRecord();
    assert.equal(url, "/api/user/destroy", "urlForFindAll is working fine");
  });
});
