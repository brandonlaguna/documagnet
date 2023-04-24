import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PersonasView from '../view/Personas';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute Component={<div>Hello World!</div>}/>,
  },
  {
    path: "/personas",
    element: <PrivateRoute Component={<PersonasView />}/>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute Component={<div>Hello dashboard!</div>}/>,
  },
]);

export default routes;