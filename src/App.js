import HooksCakeContainer from './components/HooksCakeContainer'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import NewCakeContainer from './components/NewCakecontainer'
import UserContainer from './UserContainer'
import itemContainer from './components/itemContainer';
import './App.css';
import store from './redux/store'
console.log("commit")
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <itemContainer cake />
      <itemContainer/>
      <CakeContainer/>
      <HooksCakeContainer/>
      <NewCakeContainer/>
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
