import Immutable from 'immutable';
window.Immutable = Immutable;

const initialState = Immutable.List();
let todosCounter = 0;

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = createTodo(action.payload);
      return state.push(todo);
    }
    case 'DO_TODO_BY_ID': {
      const todoID = action.payload;
      const todoIndex = state.findIndex(todo => todo.get('id') === todoID);
      return state.updateIn([todoIndex], todo => {
        return todo.set('done', true);
      });
    }
    case 'UNDO_TODO_BY_ID': {
      const todoID = action.payload;
      const todoIndex = state.findIndex(todo => todo.get('id') === todoID);
      return state.updateIn([todoIndex], todo => {
        return todo.set('done', false);
      });
    }

    case 'REMOVE_BY_ID':
      return state.filter(todo => todo.get('id') !== action.payload);
    default:
      return state;
  }
}

function createTodo(text) {
  let map = Immutable.Map();

  map = map.set('id', todosCounter++);
  map = map.set('text', text);
  map = map.set('done', false);

  return map;
}
