import chat from './apps/chat'
import user from './apps/user'
import email from './apps/email'
import invoice from './apps/invoice'
import calendar from './apps/calendar'
import permissions from './apps/permissions'
import auth from './apps/auth'
import common from './apps/common'
import form from './apps/form'
import parametros from './apps/parametros'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  user,
  chat,
  email,
  invoice,
  calendar,
  permissions,
  auth,
  common,
  form,
  parametros
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
