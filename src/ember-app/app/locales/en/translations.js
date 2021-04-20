import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMoreMoreTestАгрегаторLForm from './forms/i-i-s-more-more-test-агрегатор-l';
import IISMoreMoreTestМастерАгрегаторLForm from './forms/i-i-s-more-more-test-мастер-агрегатор-l';
import IISMoreMoreTestМастерДетейл1LForm from './forms/i-i-s-more-more-test-мастер-детейл1-l';
import IISMoreMoreTestАгрегаторEForm from './forms/i-i-s-more-more-test-агрегатор-e';
import IISMoreMoreTestМастерАгрегаторEForm from './forms/i-i-s-more-more-test-мастер-агрегатор-e';
import IISMoreMoreTestМастерДетейл1EForm from './forms/i-i-s-more-more-test-мастер-детейл1-e';
import IISMoreMoreTestАгрегаторModel from './models/i-i-s-more-more-test-агрегатор';
import IISMoreMoreTestДетейл1Model from './models/i-i-s-more-more-test-детейл1';
import IISMoreMoreTestДетейл2Model from './models/i-i-s-more-more-test-детейл2';
import IISMoreMoreTestМастерАгрегатModel from './models/i-i-s-more-more-test-мастер-агрегат';
import IISMoreMoreTestМастерДетейл1Model from './models/i-i-s-more-more-test-мастер-детейл1';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-more-more-test-агрегатор': IISMoreMoreTestАгрегаторModel,
    'i-i-s-more-more-test-детейл1': IISMoreMoreTestДетейл1Model,
    'i-i-s-more-more-test-детейл2': IISMoreMoreTestДетейл2Model,
    'i-i-s-more-more-test-мастер-агрегат': IISMoreMoreTestМастерАгрегатModel,
    'i-i-s-more-more-test-мастер-детейл1': IISMoreMoreTestМастерДетейл1Model
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'more-more-test': {
          caption: 'more-more-test',
          title: 'more-more-test',
          'i-i-s-more-more-test-агрегатор-l': {
            caption: 'i-i-s-more-more-test-агрегатор-l',
            title: 'i-i-s-more-more-test-агрегатор-l'
          },
          'i-i-s-more-more-test-мастер-агрегатор-l': {
            caption: 'i-i-s-more-more-test-мастер-агрегатор-l',
            title: 'i-i-s-more-more-test-мастер-агрегатор-l'
          },
          'i-i-s-more-more-test-мастер-детейл1-l': {
            caption: 'i-i-s-more-more-test-мастер-детейл1-l',
            title: 'i-i-s-more-more-test-мастер-детейл1-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-more-more-test-агрегатор-l': IISMoreMoreTestАгрегаторLForm,
    'i-i-s-more-more-test-мастер-агрегатор-l': IISMoreMoreTestМастерАгрегаторLForm,
    'i-i-s-more-more-test-мастер-детейл1-l': IISMoreMoreTestМастерДетейл1LForm,
    'i-i-s-more-more-test-агрегатор-e': IISMoreMoreTestАгрегаторEForm,
    'i-i-s-more-more-test-мастер-агрегатор-e': IISMoreMoreTestМастерАгрегаторEForm,
    'i-i-s-more-more-test-мастер-детейл1-e': IISMoreMoreTestМастерДетейл1EForm
  },

});

export default translations;
