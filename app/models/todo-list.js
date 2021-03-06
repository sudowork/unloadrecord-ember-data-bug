import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  todos: hasMany('todo', { async: false }),
});
