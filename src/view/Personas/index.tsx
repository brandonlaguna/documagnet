import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/app/rootReducer';
import { getAllTiposPersonasAC } from '../../store/app/action-creator/TiposPersonasAC';
import { AppDispatch } from '../../store/app/index';
const PersonasView = () => {

  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>()
  const { tipos_personas } = store.parametros;

  useEffect(() => {
    dispatch(getAllTiposPersonasAC());
  }, []);
  return (
    <Container>
      <p>Pagina de personas {JSON.stringify(tipos_personas)}</p>
    </Container>
  );
};

export default PersonasView;