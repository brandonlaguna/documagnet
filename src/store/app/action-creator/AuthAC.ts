import { AppThunk } from '..'
import { setLoading } from '../apps/common'

export const setValidateEmailAC =
  (email: string): AppThunk =>
  dispatch => {
    dispatch(setLoading(true))
  }
