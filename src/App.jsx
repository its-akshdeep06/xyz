import Landing from './Landing';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
