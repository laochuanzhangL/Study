function createStore(reducer, defaultState) {
  let state = defaultState || {}
  let listeners = []
  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach((l) => l())
  }
  function subscribe(listener) {
    listeners.push(listener)
  }
}
function reducer(state = {}, action) {
  const { type, value } = action
  switch (type) {
    case "add":
      return {
        ...state,
        num: state.num + 1,
      }
    case "changeAge":
      return {
        ...state,
        age: value,
      }
    default:
      return state
  }
}
