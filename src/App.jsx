import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pizza from './components/Pizza';
import PizzaCard from './components/PizzaCard';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pizza />} />
          <Route path="/pizza/:id" element={<PizzaCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
