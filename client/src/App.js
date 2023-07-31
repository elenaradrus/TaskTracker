import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import User from './pages/User/User';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='/user' element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

