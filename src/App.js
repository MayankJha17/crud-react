import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import EmpTable from './components/EmpTable';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <div className="container my-5">
        <EmpTable/>
      </div>
    </>
  );
}

export default App;
