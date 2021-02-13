import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <Router>
      <div id='wrapper'>
        <MainRouter />
      </div>
    </Router>
  );
}

export default App;
