import BasicNavBar from '../components/NavBar/BasicNavBar';

interface IPrivateRoute {
  Component: any
}
const PrivateRoute = ({ Component }: IPrivateRoute) => {
  return (
    <div className='container-fluid' style={{ margin:0, padding:0 }}>
      <BasicNavBar />
      {Component}
    </div>
  );
}

export default PrivateRoute;