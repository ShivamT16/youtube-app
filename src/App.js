import './App.css';
import Body from './components/AppBody';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
