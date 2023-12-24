import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Social from './Component/Social/Social';
import Profile from './Component/Profile/Profile';
import Home from './Component/Home/Home';
import Register from './Component/Register/Register';
import Login from './Component/Register/Login';
import BasicExample from './Component/Nav/BasicExample';
import TripHistory from './Component/Trips/TripHistory';
import UserConnection from './Component/Social/UserConnection';
import Welcome from './Component/Home/Welcome';
<<<<<<< HEAD
import ShowMap from './Component/MapFeature/ShowMap';
import TrendingTrip from './Component/Trending Trip/TrendingTrip';
=======
>>>>>>> f782cef3077d033773fd00779dd815dfdcdedd1f
function App() {
//Send invitation enable,add comment,follow request,upload image in profile, adding searchbar for searching user
  return (
   <>
  
   <BrowserRouter>
   <BasicExample/>
   <Routes>
<<<<<<< HEAD
    <Route path='/' element={<Welcome/>}/>
=======
          <Route path='/' element={<Welcome/>}/>
>>>>>>> f782cef3077d033773fd00779dd815dfdcdedd1f
         <Route path='/network' element={<Social/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/triphistory' element={<TripHistory/>}/>
         <Route path='/myconnection' element={<UserConnection/>}/>
         <Route path='/trendingtrip' element={<TrendingTrip/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
