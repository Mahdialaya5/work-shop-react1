import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './Card';
import Navv from './Navbar';
import './app.css';

import obj from "./data";
import CardList from './CardList';

function App() {

  return (
    <div className="App">
      <Navv/>
      <div  className='prt'  >
    <CardList prop={obj} />
    
    
      </div>
    </div>
  );
}

export default App;
