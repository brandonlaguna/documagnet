// ** Redux Imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type IAuthTypes = {
  isLoading: boolean
  businessCreatedSuccessfully: boolean
}

const initialState: IAuthTypes = {
  isLoading: false,
  businessCreatedSuccessfully: false
}

export const appAuthSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setBusinessCreatedSuccessfully: (state, { payload }: PayloadAction<boolean>) => {
      state.businessCreatedSuccessfully = payload
    }
  }
})
export const { setLoading, setBusinessCreatedSuccessfully } = appAuthSlice.actions

export default appAuthSlice.reducer
