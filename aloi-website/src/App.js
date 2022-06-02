import { lazy, Suspense } from 'react';
import {Routes, Route} from 'react-router-dom'
// import { Home } from './routes/home';
import { Navbar } from './components/Navbar';
// import { Profile } from './routes/profile';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('./routes/home'));
const Profile = lazy(() => import('./routes/profile'));


function App() {

  return (
  <>
      <Navbar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='profile' element={<Profile />}></Route>
        </Routes>
      </Suspense>
  </>

  );
}

export default App;
