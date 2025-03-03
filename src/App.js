import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import { store } from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
    </Provider>
  );
}

export default App;
