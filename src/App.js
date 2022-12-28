
import './App.css';
import AllRoutes from './routes/AllRoutes';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <AllRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
