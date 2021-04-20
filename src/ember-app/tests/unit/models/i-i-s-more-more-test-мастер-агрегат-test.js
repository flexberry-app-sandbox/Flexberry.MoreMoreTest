import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-more-more-test-мастер-агрегат', 'Unit | Model | i-i-s-more-more-test-мастер-агрегат', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-more-more-test-агрегатор',
    'model:i-i-s-more-more-test-детейл1',
    'model:i-i-s-more-more-test-детейл2',
    'model:i-i-s-more-more-test-мастер-агрегат',
    'model:i-i-s-more-more-test-мастер-детейл1',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
