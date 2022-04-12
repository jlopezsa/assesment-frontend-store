import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
