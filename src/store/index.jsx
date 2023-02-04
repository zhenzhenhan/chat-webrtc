import { atom } from 'jotai'
import { randomUsername } from '../utils/username'

// 随机生成一个用户名
export const usernameAtom = atom(randomUsername())
