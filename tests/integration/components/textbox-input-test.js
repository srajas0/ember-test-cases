import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | textbox-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);
    await render(hbs`{{textbox-input label="First Name"}}`)

    assert.equal(this.element.querySelector('label').textContent.trim(), 'First Name:');

  });
});
