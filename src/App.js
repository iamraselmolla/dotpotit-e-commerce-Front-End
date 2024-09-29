import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './component/utlis/router'; // Ensure the path is correct
import AuthProvider from './contexts/AuthContext'; // Import the AuthContext component

function App() {
  return (
    // Wrap the RouterProvider with AuthProvider
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
