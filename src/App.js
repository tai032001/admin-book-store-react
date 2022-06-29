import './App.css';
import {Book} from './Book';
import {BrowserRouter} from 'react-router-dom';
// import Create from './components/create';
// import Read from './components/read/read';
import Search from './components/search';
function App() {

  
  return (
    <BrowserRouter>
    <div className="App Container">
      <h3 className='d-flex justify-content-center m-3'>Admin Book Store Page</h3>
      {/* <Search/> */}
      <Book/>
      {/* <Create/> */}
      
  </div>
  </BrowserRouter>
  );
  
}

export default App;
