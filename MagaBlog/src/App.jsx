import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { useEffect } from 'react';
import { login } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        }
      })
      .catch((error) => {
        console.error('Error getting current user:', error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [dispatch]);


  return loading ? (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    </div>
) : (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
    </div>
)
}

export default App
