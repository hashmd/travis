import { configureStore, createReducer, createAction } from 'redux-starter-kit'

const initTodo = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : []

export const addTodo = createAction('todos:add')
export const removeTodo = createAction('todos:remove')
export const toggleTodo = createAction('todos:toggle')

const sort = (a, b) => (a.done ? 1 : 0) - (b.done ? 1 : 0)

const todos = createReducer(initTodo, {
  [addTodo]: (todos, { payload: text }) => {
    todos.push({ text, done: false })
    todos.sort(sort)
  },
  [removeTodo]: (todos, { payload: idx }) => {
    todos.splice(idx, 1)
  },
  [toggleTodo]: (todos, { payload: idx }) => {
    todos[idx].done = !todos[idx].done
    todos.sort(sort)
  }
})

const store = configureStore({
  reducer: { todos }
})

store.subscribe(() => localStorage.setItem('todos', JSON.stringify(store.getState().todos)))

export default store
