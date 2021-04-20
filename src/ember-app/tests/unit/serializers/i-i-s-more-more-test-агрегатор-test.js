import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-more-more-test-агрегатор', 'Unit | Serializer | i-i-s-more-more-test-агрегатор', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-more-more-test-агрегатор',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
