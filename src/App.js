import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ApplicationViews from './views/ApplicationViews';
import { Authorized } from './components/auth/Authorized';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



export default function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path='*' element={
              <Authorized>
                <ApplicationViews />
              </Authorized>
              } 
            />
          </Routes>
      </LocalizationProvider>
  );
}


