// ** Types
import { Dispatch } from 'redux'

export type CalendarFiltersType = 'Personal' | 'Business' | 'Family' | 'Holiday' | 'ETC'

export type EventDateType = Date | null | undefined

export type EventType = {
  id: number
  url: string
  title: string
  allDay: boolean
  end: Date | string
  start: Date | string
  extendedProps: {
    location?: string
    calendar?: string
    description?: string
    guests?: string[] | string | undefined
  }
}

export type AddEventType = {
  url: string
  title: string
  display: string
  allDay: boolean
  end: Date | string
  start: Date | string
  extendedProps: {
    calendar: string
    description: string | undefined
    guests: string[] | string | undefined
  }
}

export type EventStateType = {
  url: string
  title: string
  allDay: boolean
  guests: string[]
  description: string
  endDate: Date | string
  startDate: Date | string
  calendar: CalendarFiltersType | string
}

export type CalendarStoreType = {
  events: EventType[]
  selectedEvent: null | EventType
  selectedCalendars: CalendarFiltersType[] | string[]
}

export type CalendarType = {
  calendarApi: any
  dispatch: Dispatch<any>
  store: CalendarStoreType
  direction: 'ltr' | 'rtl'
  setCalendarApi: (val: any) => void
  handleLeftSidebarToggle: () => void
  updateEvent: (event: EventType) => void
  handleAddEventSidebarToggle: () => void
  handleSelectEvent: (event: EventType) => void
}

export type SidebarLeftType = {
  mdAbove: boolean
  calendarApi: any
  dispatch: Dispatch<any>
  leftSidebarWidth: number
  leftSidebarOpen: boolean
  store: CalendarStoreType
  handleLeftSidebarToggle: () => void
  handleAddEventSidebarToggle: () => void
  handleAllCalendars: (val: boolean) => void
  handleSelectEvent: (event: null | EventType) => void
  handleCalendarsUpdate: (val: CalendarFiltersType) => void
}

export type AddEventSidebarType = {
  calendarApi: any
  drawerWidth: number
  dispatch: Dispatch<any>
  store: CalendarStoreType
  addEventSidebarOpen: boolean
  deleteEvent: (id: number) => void
  addEvent: (event: AddEventType) => void
  updateEvent: (event: EventType) => void
  handleAddEventSidebarToggle: () => void
  handleSelectEvent: (event: null | EventType) => void
}
