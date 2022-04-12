import './App.scss';
import NavBar from './components/NavBar/NavBar';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <div>
      <NavBar />
      <h1>Hello world</h1>
      <MainRouter />
    </div>
  );
}

export default App;
