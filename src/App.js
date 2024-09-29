import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthProvider from './componenet/authcontext/AuthProvider';
import router from "../src/componenet/utlis/router"

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
