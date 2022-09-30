import {Routes , Route} from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';


// import RestaurantCard from '../Components/RestaurantCard';

function AllRoutes() {
  return <div>{/* Add Home, Login dashboard and restaurant pages */}
  <Routes>
    <Route path="/" element={<PrivateRoute><LandingPage/></PrivateRoute>}  ></Route>
    <Route path="/login" element={<Login/>}  ></Route>
    <Route path="/signup" element={<PrivateRoute><Signup/></PrivateRoute>}  ></Route>

    
    {/* <Route path="/dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>}  ></Route>
    <Route path="/restaurants/:id" element={<PrivateRoute><RestaurantPage/></PrivateRoute>}></Route> */}
    {/* <Route path="/restaurants/:id" element={<RestaurantPage/>}  ></Route> */}
  </Routes>
  </div>;
}

export default AllRoutes;
