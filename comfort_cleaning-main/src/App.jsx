import { ToastContainer } from 'react-toastify';
import './App.css';
import './index.css';
import Home from './routes/Home';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* The actual app content */}
      <ToastContainer />
      <Home />
    </>
  );
}

export default App;

