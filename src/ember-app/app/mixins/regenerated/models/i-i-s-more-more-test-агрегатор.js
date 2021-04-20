import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  а: DS.attr('string'),
  мастерАгрегат: DS.belongsTo('i-i-s-more-more-test-мастер-агрегат', { inverse: null, async: false }),
  детейл1: DS.hasMany('i-i-s-more-more-test-детейл1', { inverse: 'агрегатор', async: false })
});

export let ValidationRules = {
  а: {
    descriptionKey: 'models.i-i-s-more-more-test-агрегатор.validations.а.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  мастерАгрегат: {
    descriptionKey: 'models.i-i-s-more-more-test-агрегатор.validations.мастерАгрегат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  детейл1: {
    descriptionKey: 'models.i-i-s-more-more-test-агрегатор.validations.детейл1.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АгрегаторE', 'i-i-s-more-more-test-агрегатор', {
    а: attr('А', { index: 0 }),
    мастерАгрегат: belongsTo('i-i-s-more-more-test-мастер-агрегат', '', {

    }, { index: 1, displayMemberPath: 'а' }),
    детейл1: hasMany('i-i-s-more-more-test-детейл1', 'Детейл1', {
      а: attr('А', { index: 0 }),
      мастерДетейл1: belongsTo('i-i-s-more-more-test-мастер-детейл1', 'Мастер детейл1', {
        а: attr('А', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'а' }),
      детейл2: hasMany('i-i-s-more-more-test-детейл2', 'Детейл2', {
        а: attr('А', { index: 0 })
      })
    })
  });

  modelClass.defineProjection('АгрегаторL', 'i-i-s-more-more-test-агрегатор', {
    а: attr('А', { index: 0 }),
    мастерАгрегат: belongsTo('i-i-s-more-more-test-мастер-агрегат', 'МастерА', {
      а: attr('МастерА', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
