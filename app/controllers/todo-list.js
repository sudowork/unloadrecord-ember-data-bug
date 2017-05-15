import Ember from 'ember';

const {
  computed,
  get,
} = Ember;

export default Ember.Controller.extend({
  todos: computed('model', 'model.todos.[]', function() {
    return get(this, 'model.todos');
  }),

  hasTodos: computed('todos.[]', function() {
    return get(this, 'todos').length > 0;
  }),

  actions: {
    addTodo(todo) {
      const todos = get(this, 'todos');
      todos.createRecord({
        name: todo,
      });
      return false;
    },

    removeTodo(todo) {
      const todos = get(this, 'todos');
      console.log('todos:beforeRemoveObject', todos.toArray());
      todos.removeObject(todo);
      console.log('todos:afterRemoveObject', todos.toArray());
      this.store.unloadRecord(todo);
      console.log('todos:afterUnloadRecord', todos.toArray());
      // Re-get todos to demonstrate the issue
      const newTodos = get(this, 'model.todos');
      // Should fail before we get here
      console.log('newTodos:afterUnloadRecord', newTodos.toArray());
      return false;
    },
  },
});
