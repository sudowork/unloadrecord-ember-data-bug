import Ember from 'ember';

const DUMMY_TODO_LIST = {
  data: [{
    type: 'todo-list',
    id: '42',
    attributes: {},
    relationships: {
      todos: {
        data: [{
          id: '42-123',
          type: 'todo',
        }],
      },
    },
  }, {
    type: 'todo',
    id: '42-123',
    attributes: {
      name: 'Figure out this bug',
    },
  }],
};

export default Ember.Route.extend({
  model() {
    this.store.pushPayload(DUMMY_TODO_LIST);
    return this.store.peekRecord('todo-list', '42');
  },

  // Creating the record this way, however, works just fine
  // model() {
  //   return this.store.createRecord('todo', {
  //     id: '42',
  //     todos: [],
  //   });
  // },
  // afterModel(model) {
  //   const todos = model.get('todos');
  //   return todos.createRecord({ id: '42-123', name: 'this works though' });
  // },
});
