import { AppThunk } from '..'
import { getAllTiposPersonas } from '../../../services/parametersServices'
import { setLoading } from '../apps/common'
import { setTiposPersonas } from '../apps/parametros'

export const getAllTiposPersonasAC = (): AppThunk =>
  dispatch => {
    dispatch(setLoading(true))
    getAllTiposPersonas().then((response) => {
      if (response.statusCode === 200){
        console.log("🚀 ~ file: TiposPersonasAC.tsx:11 ~ getAllTiposPersonas ~ response:", response);
        dispatch(setTiposPersonas(response.result));
      }
    }).catch((e) => console.error(e))
    .finally(() => dispatch(setLoading(false)))
  }
