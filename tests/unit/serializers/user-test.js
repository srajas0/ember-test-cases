import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | user', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('user');

    assert.ok(serializer);
  });
  
  // test serilize method
  test('test serialize', function(assert) {
    assert.expect(5);
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('user', {
      firstName: "Raja",
      lastName: "S",
      age: 27
    });

    let serializedUserRecord = record.serialize();
    assert.equal(Object.keys(serializedUserRecord.data.attributes).length, 1, "Deleted fristName, lastName and age attribbbutes successfully");
    assert.equal(Object.keys(serializedUserRecord.data.attributes.userInfo).length, 3, "Serilized successfully");    
    assert.equal(serializedUserRecord.data.attributes.userInfo.firstName, 'Raja', "First Name added into userInfo successfully");
    assert.equal(serializedUserRecord.data.attributes.userInfo.lastName, 'S', "Last Name added into userInfo successfully");
    assert.equal(serializedUserRecord.data.attributes.userInfo.age, '27', "Age added into userInfo successfully");
  });

  // test shouldSerializeHasMany method
  test('test shouldSerializeHasMany', function(assert) {
    assert.expect(1);
    let userSerializer = this.owner.lookup('serializer:user');

    let isHasMany = userSerializer.shouldSerializeHasMany();
    assert.ok(isHasMany, "shouldSerializeHasMany return true successfully");
  });
});
