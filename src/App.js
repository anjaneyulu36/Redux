
import { Provider } from 'react-redux';
import './App.css';
import Todolist from './Todolist';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
    <Todolist></Todolist>
    </Provider>
  );
}

export default App;
