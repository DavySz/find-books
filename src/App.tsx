import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { BookDatails } from './pages/BookDatails';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route
          path='/book/datails/:id'
          element={
            <BookDatails />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
