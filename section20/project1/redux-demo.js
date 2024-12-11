const redux = require("redux");

const counterReducer = (prevState = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: prevState.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: prevState.counter - 1,
    };
  }

  return prevState;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
