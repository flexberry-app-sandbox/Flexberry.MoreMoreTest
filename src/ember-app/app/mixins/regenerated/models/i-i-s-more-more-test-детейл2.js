import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  а: DS.attr('string'),
  детейл1: DS.belongsTo('i-i-s-more-more-test-детейл1', { inverse: 'детейл2', async: false })
});

export let ValidationRules = {
  а: {
    descriptionKey: 'models.i-i-s-more-more-test-детейл2.validations.а.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  детейл1: {
    descriptionKey: 'models.i-i-s-more-more-test-детейл2.validations.детейл1.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Детейл2E', 'i-i-s-more-more-test-детейл2', {
    а: attr('А', { index: 0 })
  });
};
