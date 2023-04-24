// ** Redux Imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type IAuthTypes = {
  token: string
  refreshToken: string
  tenant: string
  validatedEmail: boolean
  validatedUser: boolean
  group: string
}

const initialState: IAuthTypes = {
  token: '',
  refreshToken: '',
  tenant: '',
  validatedEmail: false,
  group: '',
  validatedUser: false,
}

export const appAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload
    },
    setRefreshToken: (state, { payload }: PayloadAction<string>) => {
      state.refreshToken = payload
    },
    setTenant: (state, { payload }: PayloadAction<string>) => {
      state.tenant = payload
    },
    setValidatedEmail: (state, { payload }: PayloadAction<boolean>) => {
      state.validatedEmail = payload
    },
    setGroup: (state, { payload }: PayloadAction<string>) => {
      state.group = payload
    },
    setValidateUser: (state, { payload }: PayloadAction<boolean>) => {
      state.validatedUser = payload
    },
  }
})
export const { setToken, setRefreshToken, setTenant, setValidatedEmail, setGroup, setValidateUser } =
  appAuthSlice.actions

export default appAuthSlice.reducer
