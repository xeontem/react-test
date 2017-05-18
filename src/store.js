import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosReducer from './todos-reducer';
import { logger } from './logger-middleware';

const store = createStore(combineReducers({
  todos: todosReducer,
}), applyMiddleware(
  logger,
));

window.store = store;
Object.defineProperty(window, 'state', {
  get() {
    return store.getState();
  }
});

export default store;
