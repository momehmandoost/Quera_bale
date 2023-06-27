import { useReducer } from "react";
import "./App.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div className="container">
      <div className="pages">
        <div style={{ backgroundColor: state.count >= 0 ? 'rgb(70, 92, 216)' : 'gray' }}>1</div>
        <span style={{ backgroundColor: state.count >= 1 ? 'rgb(70, 92, 216)' : 'gray' }}></span>
        <div style={{ backgroundColor: state.count >= 1 ? 'rgb(70, 92, 216)' : 'gray' }}>2</div>
        <span style={{ backgroundColor: state.count >= 2 ? 'rgb(70, 92, 216)' : 'gray' }}></span>
        <div style={{ backgroundColor: state.count >= 2 ? 'rgb(70, 92, 216)' : 'gray' }}>3</div>
        <span style={{ backgroundColor: state.count >= 3 ? 'rgb(70, 92, 216)' : 'gray' }}></span>
        <div style={{ backgroundColor: state.count >= 3 ? 'rgb(70, 92, 216)' : 'gray' }}>4</div>
      </div>

      <div className="btns">
        <button onClick={handleIncrement}>Next</button>
        <button onClick={handleDecrement}>Previous</button>
      </div>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;