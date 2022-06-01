import {Routes, Route} from 'react-router-dom'
import { Home } from './components/home';
import { Navbar } from './components/Navbar';
import { Profile } from './components/profile';

function App() {
  return (

  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='profile' element={<Profile />}></Route>
    </Routes>
  </>

  );
}

export default App;
