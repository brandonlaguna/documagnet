// ** Redux Imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITiposPersonasResponse } from '../../types/response/ITiposPersonasResponse'

type IAuthTypes = {
  tipos_personas: ITiposPersonasResponse[] | undefined
}

const initialState: IAuthTypes = {
  tipos_personas: [],
}

export const appAuthSlice = createSlice({
  name: 'parametros',
  initialState,
  reducers: {
    setTiposPersonas: (state, { payload }: PayloadAction<ITiposPersonasResponse[] | undefined>) => {
      state.tipos_personas = payload
    },
  }
})
export const { setTiposPersonas} = appAuthSlice.actions

export default appAuthSlice.reducer
