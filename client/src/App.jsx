import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header'; // Ensure this file exists
import Footer from './components/Footer'; // Ensure this file exists
import PrivateRoute from './components/PrivateRoute'; // Ensure this file exists
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'; // Ensure this file exists

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        {/* Admin-only protected route */}
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/projects" element={<Projects />} />
        </Route>

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
