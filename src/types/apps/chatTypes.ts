// ** Types
import { Dispatch } from 'redux'

export type StatusType = 'busy' | 'away' | 'online' | 'offline'

export type ProfileUserType = {
  id: number
  role: string
  about: string
  avatar: string
  fullName: string
  status: StatusType
  settings: {
    isNotificationsOn: boolean
    isTwoStepAuthVerificationEnabled: boolean
  }
}

export type MsgFeedbackType = {
  isSent: boolean
  isSeen: boolean
  isDelivered: boolean
}

export type ChatType = {
  message: string
  senderId: number
  time: Date | string
  feedback: MsgFeedbackType
}

export type ChatsObj = {
  id: number
  userId: number
  chat: ChatType[]
  unseenMsgs: number
  lastMessage?: ChatType
}

export type ContactType = {
  id: number
  role: string
  about: string
  avatar?: string
  fullName: string
  status: StatusType
}

export type ChatsArrType = {
  id: number
  role: string
  about: string
  chat: ChatsObj
  avatar?: string
  fullName: string
  status: StatusType
}

export type SelectedChatType = null | {
  chat: ChatsObj
  contact: ChatsArrType
}

export type ChatStoreType = {
  chats: ChatsArrType[] | null
  contacts: ContactType[] | null
  userProfile: ProfileUserType | null
  selectedChat: SelectedChatType
}

export type SendMsgParamsType = {
  chat?: ChatsObj
  message: string
  contact?: ChatsArrType
}

export type ChatContentType = {
  hidden: boolean
  mdAbove: boolean
  store: ChatStoreType
  sidebarWidth: number
  dispatch: Dispatch<any>
  userProfileRightOpen: boolean
  handleLeftSidebarToggle: () => void
  getInitials: (val: string) => string
  sendMsg: (params: SendMsgParamsType) => void
  handleUserProfileRightSidebarToggle: () => void
}

export type ChatSidebarLeftType = {
  hidden: boolean
  mdAbove: boolean
  store: ChatStoreType
  sidebarWidth: number
  userStatus: StatusType
  dispatch: Dispatch<any>
  leftSidebarOpen: boolean
  userProfileLeftOpen: boolean
  removeSelectedChat: () => void
  selectChat: (id: number) => void
  handleLeftSidebarToggle: () => void
  getInitials: (val: string) => string
  setUserStatus: (status: StatusType) => void
  handleUserProfileLeftSidebarToggle: () => void
  formatDateToMonthShort: (value: string, toTimeForCurrentDay: boolean) => void
}

export type UserProfileLeftType = {
  hidden: boolean
  store: ChatStoreType
  sidebarWidth: number
  userStatus: StatusType
  userProfileLeftOpen: boolean
  setUserStatus: (status: StatusType) => void
  handleUserProfileLeftSidebarToggle: () => void
}

export type UserProfileRightType = {
  hidden: boolean
  store: ChatStoreType
  sidebarWidth: number
  userProfileRightOpen: boolean
  getInitials: (val: string) => string
  handleUserProfileRightSidebarToggle: () => void
}

export type SendMsgComponentType = {
  store: ChatStoreType
  dispatch: Dispatch<any>
  sendMsg: (params: SendMsgParamsType) => void
}

export type ChatLogType = {
  hidden: boolean
  data: {
    chat: ChatsObj
    contact: ContactType
    userContact: ProfileUserType
  }
}

export type MessageType = {
  time: string | Date
  message: string
  senderId: number
  feedback: MsgFeedbackType
}

export type ChatLogChatType = {
  msg: string
  time: string | Date
  feedback: MsgFeedbackType
}

export type FormattedChatsType = {
  senderId: number
  messages: ChatLogChatType[]
}

export type MessageGroupType = {
  senderId: number
  messages: ChatLogChatType[]
}
