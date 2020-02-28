import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import "qunit-dom";

module('Integration | Component | calc', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);
    await render(hbs`
      <Calc />
    `);
    assert.dom(".calc-comp").exists("calc component is rendered");
  });

  test('test numberPressing', async function(assert) {
    assert.expect(1);
    await render(hbs`
      <Calc />
    `);
    await click(this.element.querySelectorAll("tr")[1].querySelectorAll("input")[1]);
    // press '+' operator
    await click(this.element.querySelectorAll("tr")[1].querySelectorAll("input")[3]);
    await click(this.element.querySelectorAll("tr")[2].querySelectorAll("input")[2]);
    assert.dom(".preview").hasText("2+6", "numberPressing action is working fine");
  });

  test('test clear', async function(assert) {
    assert.expect(2);
    await render(hbs`
      <Calc />
    `);
    await click(this.element.querySelectorAll("tr")[1].querySelectorAll("input")[1]);
    // press '+' operator
    await click(this.element.querySelectorAll("tr")[1].querySelectorAll("input")[3]);
    await click(this.element.querySelectorAll("tr")[2].querySelectorAll("input")[2]);
    // press 'c' button
    await click(this.element.querySelectorAll("tr")[4].querySelectorAll("input")[0]);
    assert.dom(".preview").hasText("", "preview has no text,So the clear action is working fine");
    assert.dom(".result").hasText("", "result has no text, So the clear action is working fine");
  });

  test('test calculate action', async function(assert) {
    assert.expect(2);
    await render(hbs`
      <Calc />
    `);
    await click(this.element.querySelectorAll("tr")[1].querySelectorAll("input")[1]);
    // press '+' operator
    await click(this.element.querySelectorAll("tr")[1].querySelectorAll("input")[3]);
    await click(this.element.querySelectorAll("tr")[2].querySelectorAll("input")[2]);
    // press '=' button
    await click(this.element.querySelectorAll("tr")[4].querySelectorAll("input")[2]);
    assert.dom(".preview").hasText("2+6", "calculate action is working fine");
    assert.dom(".result").hasText("8", "calculate action is working fine");
  });
});
