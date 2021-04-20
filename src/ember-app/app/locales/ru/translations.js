import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'More more test',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'More more test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'More more test',
          title: 'More more test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'more-more-test': {
          caption: 'MoreMoreTest',
          title: 'MoreMoreTest',
          'i-i-s-more-more-test-агрегатор-l': {
            caption: 'Агрегатор',
            title: ''
          },
          'i-i-s-more-more-test-мастер-агрегатор-l': {
            caption: 'Мастер агрегатор',
            title: ''
          },
          'i-i-s-more-more-test-мастер-детейл1-l': {
            caption: 'Мастер детейл1',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
