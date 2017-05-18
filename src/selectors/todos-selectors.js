import { createSelector } from 'reselect';

export function todosSelector(state) {
  return state.todos;
}

export const completedTodosCountSelector = createSelector([
  todosSelector,
], (todos) => {
  return todos.filter(todo => todo.get('done')).size;
});
