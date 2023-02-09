import { atom } from 'jotai'
import { randomUsername } from '../utils/username'

export const loginAtom = atom('pending')
export const usernameAtom = atom(randomUsername())
export const activeUsersAtom = atom([])
export const localStreamAtom = atom(null)
export const remoteStreamAtom = atom(null)
export const snackbarAtom = atom(false)
export const alertMessageAtom = atom('')
export const alertSeverityAtom = atom('success')
export const callStateAtom = atom('CALL_UNAVAILABLE')
export const callingAtom = atom(false)
export const callRejectAtom = atom(false)
export const comingCallAtom = atom(false)
export const callUserNameAtom = atom('')
export const connectUserSocketIdAtom = atom('')
