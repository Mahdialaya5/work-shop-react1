import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './Card';
import Navv from './Navbar';
import './app.css';

function App() {
  return (
    <div className="App">
      <Navv/>
      <div  className='prt'  >
      <Card1/>
      <Card1/>
      <Card1/>
      
      </div>
    </div>
  );
}

export default App;
