import { Serializer as АгрегаторSerializer } from
  '../mixins/regenerated/serializers/i-i-s-more-more-test-агрегатор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АгрегаторSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
