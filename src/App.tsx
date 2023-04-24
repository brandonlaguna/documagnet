import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <ThemeProvider prefixes={{ btn: 'my-btn' }}>
      <div className='container-fluid' style={{ margin: 0, padding:0 }}>
        <RouterProvider router={routes} />
      </div>
    </ThemeProvider>
  );
}

export default App;
