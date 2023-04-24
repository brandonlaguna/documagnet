// ** Redux Imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type IAuthTypes = {
  isLoading: boolean
  formData: any
}

const initialState: IAuthTypes = {
  isLoading: false,
  formData: undefined
}

export const appAuthSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setFormData: (state, { payload }: PayloadAction<any>) => {
      state.formData = payload
    }
  }
})
export const { setLoading, setFormData } = appAuthSlice.actions

export default appAuthSlice.reducer
