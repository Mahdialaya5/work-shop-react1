import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './Card';
import Navv from './Navbar';
import './app.css';
import Card2 from './Card2';
import Card3 from './Card3';


function App() {
  return (
    <div className="App">
      <Navv/>
      <div  className='prt'  >
      <Card1/>
      <Card2/>
      <Card3/>
    
      </div>
    </div>
  );
}

export default App;
