import { atom } from 'jotai'
import { randomUsername } from '../utils/username'

// 随机生成一个用户名
export const usernameAtom = atom(randomUsername())
export const activeUsersAtom = atom([])
export const localStreamAtom = atom(null)
export const snackbarAtom = atom(false)
export const alertMessageAtom = atom('')
export const alertSeverityAtom = atom('success')
