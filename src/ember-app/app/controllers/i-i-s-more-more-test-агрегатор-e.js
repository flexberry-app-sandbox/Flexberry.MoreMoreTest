import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-more-more-test-агрегатор-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-more-more-test-детейл1+мастерДетейл1':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'а',
            required: true,
            relationName: 'мастерДетейл1',
            projection: 'МастерДетейл1L',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
