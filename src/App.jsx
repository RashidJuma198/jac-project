import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';

import Dashboard from './pages/Dashboard';
import EditorPage from './pages/EditorPage';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import AuthPage from './pages/AuthPage';

export default function App() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <AuthPage />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
