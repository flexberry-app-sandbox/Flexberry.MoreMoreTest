import { Serializer as МастерАгрегатSerializer } from
  '../mixins/regenerated/serializers/i-i-s-more-more-test-мастер-агрегат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МастерАгрегатSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
