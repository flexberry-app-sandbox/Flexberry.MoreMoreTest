import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-more-more-test-агрегатор-l');
  this.route('i-i-s-more-more-test-агрегатор-e',
  { path: 'i-i-s-more-more-test-агрегатор-e/:id' });
  this.route('i-i-s-more-more-test-агрегатор-e.new',
  { path: 'i-i-s-more-more-test-агрегатор-e/new' });
  this.route('i-i-s-more-more-test-мастер-агрегатор-l');
  this.route('i-i-s-more-more-test-мастер-агрегатор-e',
  { path: 'i-i-s-more-more-test-мастер-агрегатор-e/:id' });
  this.route('i-i-s-more-more-test-мастер-агрегатор-e.new',
  { path: 'i-i-s-more-more-test-мастер-агрегатор-e/new' });
  this.route('i-i-s-more-more-test-мастер-детейл1-l');
  this.route('i-i-s-more-more-test-мастер-детейл1-e',
  { path: 'i-i-s-more-more-test-мастер-детейл1-e/:id' });
  this.route('i-i-s-more-more-test-мастер-детейл1-e.new',
  { path: 'i-i-s-more-more-test-мастер-детейл1-e/new' });
});

export default Router;
