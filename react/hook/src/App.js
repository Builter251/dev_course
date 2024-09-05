import AccountForm from './components/AccountForm';
import AccountTable from './components/AccountTable';
import { useReducer } from 'react';
// import Kiosk from './components/Kiosk';
// import Counter from './components/Counter';
// import PracticeMemo from './components/PracticeMemo';
// import PracticeUseCallback from './components/PracticeUseCallback';
// import InputCalc from './components/InputCalc';
// import PreventRendering from './components/PreventRendering';
// import PracticeUseEffect2 from './components/PracticeUseEffect2';
// import PracticeUseRef from './components/PracticeUseRef';
// import StateAndRef from './components/StateAndRef';
// import InfinityRefresh from './components/InfinityRefresh';

const initialState = {
  accounts: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case 'DELETE_ACCOUNT':
      return {
        ...state,
        accounts: state.accounts.filter((_, index) => index !== action.index),
      };
    default:
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Total Accounts: {state.accounts.length}</h3>
      <AccountForm dispatch={dispatch} />
      <AccountTable accounts={state.accounts} dispatch={dispatch} />
    </div>
  );
}

export default App;
