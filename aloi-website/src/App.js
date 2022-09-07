import { lazy, Suspense } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import {SpinnerCircular} from 'spinners-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('./routes/home'));
const Profile = lazy(() => import('./routes/profile'));


function App() {

  return (
  <>
      <Navbar />

      <Suspense fallback={ <div id='spinner'><SpinnerCircular color='#000080' size={.075 * window.innerWidth}/></div>}>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='profile' element={<Profile />}></Route>
        </Routes>
      </Suspense>
  </>

  );
}

export default App;
