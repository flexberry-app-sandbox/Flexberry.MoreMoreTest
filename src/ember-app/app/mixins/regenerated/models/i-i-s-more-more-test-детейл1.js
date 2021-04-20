import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  а: DS.attr('string'),
  мастерДетейл1: DS.belongsTo('i-i-s-more-more-test-мастер-детейл1', { inverse: null, async: false }),
  агрегатор: DS.belongsTo('i-i-s-more-more-test-агрегатор', { inverse: 'детейл1', async: false }),
  детейл2: DS.hasMany('i-i-s-more-more-test-детейл2', { inverse: 'детейл1', async: false })
});

export let ValidationRules = {
  а: {
    descriptionKey: 'models.i-i-s-more-more-test-детейл1.validations.а.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  мастерДетейл1: {
    descriptionKey: 'models.i-i-s-more-more-test-детейл1.validations.мастерДетейл1.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  агрегатор: {
    descriptionKey: 'models.i-i-s-more-more-test-детейл1.validations.агрегатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  детейл2: {
    descriptionKey: 'models.i-i-s-more-more-test-детейл1.validations.детейл2.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Детейл1E', 'i-i-s-more-more-test-детейл1', {
    а: attr('А', { index: 0 }),
    мастерДетейл1: belongsTo('i-i-s-more-more-test-мастер-детейл1', 'Мастер детейл1', {
      а: attr('А', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'а' }),
    детейл2: hasMany('i-i-s-more-more-test-детейл2', 'Детейл2', {
      а: attr('А', { index: 0 })
    })
  });
};
