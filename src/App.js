import logo from './logo.svg';
import './App.css';

import reportWebVitals from './reportWebVitals';
import { Routes, Route} from 'react-router-dom';
import Muncipal from './Components/Muncipal';
import Homepage from './Components/Homepage';
import Person from './Components/Person';
import Example from './Components/Example';
import Header from './Components/Header';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path ='/' element = {<Homepage/>}/>
        <Route path='/user' element={<Person/>}/>
        <Route path='/muncipal' element={<Muncipal/>}/>
        <Route path='/ee' element={<Example/>}/>
      </Routes>
    </div>
  );
}

export default App;
