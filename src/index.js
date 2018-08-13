import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import { addTodo, toggleTodo, setVisibilityFilter } from './actions'
import App from './components/App'

let store = createStore(todo)

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))
store.dispatch(toggleTodo(0))

console.log(store.getState()) // => Object {todos: Array[0], visibilityFilter: "SHOW_ALL"}
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
console.log(store.getState()) // => Object {todos: Array[0], visibilityFilter: "SHOW_COMPLETED"}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)