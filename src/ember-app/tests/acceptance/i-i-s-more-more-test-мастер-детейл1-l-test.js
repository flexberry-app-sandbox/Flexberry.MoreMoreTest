import { test } from 'qunit';

import moduleForAcceptance from 'ember-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | i i s more more test мастер детейл1 l');

test('testing /i-i-s-more-more-test-мастер-детейл1-l', function(assert) {
  visit('/i-i-s-more-more-test-мастер-детейл1-l');

  andThen(() => {
    checkOlvConfig('[data-test-olv]', null, assert, [
      'refreshButton',
      'createNewButton',
      'colsConfigButton',
    ]);

    const controller = this.application.__container__.lookup('controller:' + currentRouteName());
    const newFormRoute = controller.get('editFormRoute') + '.new';
    goToNewForm('[data-test-olv]', null, assert, newFormRoute);
  });
});
