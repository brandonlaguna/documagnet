// ** Toolkit imports
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

// ** Reducers
import rootReducer, * as rootReducerType from './rootReducer'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk = ThunkAction<void, rootReducerType.RootState, unknown, Action>
