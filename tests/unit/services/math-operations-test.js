import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | math-operations', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.service = this.owner.lookup('service:math-operations');
  });


  // Replace this with your real tests.
  test('it exists', function(assert) {
    assert.expect(1);
    let service = this.owner.lookup('service:math-operations');
    assert.ok(service);
  });

  // Test addition function
  test('Test addition', function(assert) {
    assert.expect(3);
    // check a value as isNan
    let addition = this.service.addition("b", "1");
    assert.equal(addition, undefined, "When the either input is not a number, the function will return undefind.");
    // check b value as isNan
    addition = this.service.addition("1", "b");
    assert.equal(addition, undefined, "When the either input is not a number, the function will return undefind.");
    
    // check with right value
    addition = this.service.addition(2, 2);
    assert.equal(addition, 4, "When the input a and b is valid, the function will return right value");
  });

  // Test subtraction function
  test('Test subtraction', function(assert) {
    assert.expect(3);
    // check a value as isNan
    let subtraction = this.service.subtraction("b", "1");
    assert.equal(subtraction, undefined, "When the either input is not a number, the function will return undefind.");
    // check b value as isNan
    subtraction = this.service.subtraction("1", "b");
    assert.equal(subtraction, undefined, "When the either input is not a number, the function will return undefind.");
    
    // check with right value
    subtraction = this.service.subtraction(4, 2);
    assert.equal(subtraction, 2, "When the input a and b is valid, the function will return right value");
  });

  // Test multiplication function
  test('Test multiplication', function(assert) {
    assert.expect(3);
    // check a value as isNan
    let multiplication = this.service.multiplication("b", "1");
    assert.equal(multiplication, undefined, "When the either input is not a number, the function will return undefind.");
    // check b value as isNan
    multiplication = this.service.multiplication("1", "b");
    assert.equal(multiplication, undefined, "When the either input is not a number, the function will return undefind.");
    
    // check with right value
    multiplication = this.service.multiplication(4, 2);
    assert.equal(multiplication, 8, "When the input a and b is valid, the function will return right value");
  });

  // Test division function
  test('Test division', function(assert) {
    assert.expect(3);
    // check a value as isNan
    let division = this.service.division("b", "1");
    assert.equal(division, undefined, "When the either input is not a number, the function will return undefind.");
    // check b value as isNan
    division = this.service.division("1", "b");
    assert.equal(division, undefined, "When the either input is not a number, the function will return undefind.");
    
    // check with right value
    division = this.service.division(4, 2);
    assert.equal(division, 2, "When the input a and b is valid, the function will return right value");
  });
});
