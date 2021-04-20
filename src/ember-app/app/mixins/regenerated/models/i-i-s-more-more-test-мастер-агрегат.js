import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  а: DS.attr('string')
});

export let ValidationRules = {
  а: {
    descriptionKey: 'models.i-i-s-more-more-test-мастер-агрегат.validations.а.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МастерАгрегаторE', 'i-i-s-more-more-test-мастер-агрегат', {
    а: attr('А', { index: 0 })
  });

  modelClass.defineProjection('МастерАгрегаторL', 'i-i-s-more-more-test-мастер-агрегат', {
    а: attr('А', { index: 0 })
  });
};
