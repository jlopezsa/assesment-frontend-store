import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
