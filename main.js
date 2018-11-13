//ACTION
const createAddItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item: item
  }
}

const createRemoveItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index: index
  }
}

// REDUCER
const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.item
      const newState = state.concat([newItem])
      return newState;
    }
    case 'REMOVE_ITEM': {
      const index = action.index
      const newState = [...state]
      newState.splice(index, 1)
      return newState;
    }
    default:
      return state;
  }
}

// STORE
const { createStore } = Redux;
const store = createStore(toDoReducer);
store.dispatch(createAddItem('Apprendre NodeJS'))
store.dispatch(createAddItem('Apprendre SQL'))
store.dispatch(createAddItem('Apprendre PHP'))
store.dispatch(createRemoveItem(2))
console.log(store.getState())

// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
  renderStore.innerHTML = store.getState()
    .map(item => '<li>' + item + '</li>')
    .join('');
}

store.subscribe(render);
render();

const formAddItem = document.getElementById('add-item');
formAddItem.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('item');
  store.dispatch(createAddItem(input.value));
  input.value = ''
});

// const remove = document.getElementById('remove');
// remove.addEventListener('click', () => {
//   store.dispatch(removeAction)
// });

// const addTen = document.getElementById('addTen');
// addTen.addEventListener('click', () => {
//   store.dispatch(addTenAction)
// });

// const removeTen = document.getElementById('removeTen');
// removeTen.addEventListener('click', () => {
//   store.dispatch(removeTenAction)
// });

// const reset = document.getElementById('reset');
// reset.addEventListener('click', () => {
//   store.dispatch(resetAction)
// });