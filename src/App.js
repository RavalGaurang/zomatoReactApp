import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import About from './Pages/About';
import Collection from './Pages/Collection';
import Popular from './Pages/Popular';
import GetApp from './Pages/GetApp';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/getapp" element={<GetApp />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
