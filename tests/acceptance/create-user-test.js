import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
  import { setupApplicationTest } from 'ember-qunit';
  import { setupMirage } from 'ember-cli-mirage/test-support';
  import "qunit-dom";

module('Acceptance | create user', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  

  test('visiting /create-user', async function(assert) {
    assert.expect(1);
    await visit('/create-user');

    assert.equal(currentURL(), '/create-user');
  });

  test('test goBback page action ', async function(assert) {
    assert.expect(1);
    await visit('/create-user');
    await click('.grey-btn');

    assert.equal(currentURL(), '/users-list', 'When user clicks on goback user, It redirects to users-list page successfully');
  });

  test('Test user is created', async function(assert) {
    assert.expect(2);
    await visit('/create-user');

    // fill all the fields
    await fillIn(this.element.querySelectorAll("input")[0], "user 1 first name");
    await fillIn(this.element.querySelectorAll("input")[1], "user 1 last name");
    await fillIn(this.element.querySelectorAll("input")[2], "22");
    // click create user button
    await click('.green-btn');
    assert.equal(currentURL(), '/users-list', 'Redirects to users-list page');
    const usersList = this.element.querySelectorAll('li');
    assert.equal(usersList.length, 5, 'New use 1 has been added into server');
  });
});
