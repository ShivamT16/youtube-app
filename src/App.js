import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
