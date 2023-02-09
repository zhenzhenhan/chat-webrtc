import React, { memo, useEffect } from 'react'
import { ActiveUserListWrapper } from './style'
import ActiveUserListItem from '../ActiveUserListItem'
import { useAtom } from 'jotai'
import { activeUsersAtom } from '@/store'

const ActiveUserList = memo(() => {
  // const activeUserList = [
  //   {
  //     socketId: 123,
  //     username: '习维尼',
  //   },
  //   {
  //     socketId: 234,
  //     username: '蔡徐坤',
  //   },
  //   {
  //     socketId: 345,
  //     username: '王俊凯',
  //   },
  //   {
  //     socketId: 456,
  //     username: '王源带包烟',
  //   },
  //   {
  //     socketId: 567,
  //     username: '易烊千玺',
  //   },
  // ]
  const [activeUserList] = useAtom(activeUsersAtom)

  return (
    <ActiveUserListWrapper>
      <div className="active_user_list_container ">
        {activeUserList.map((activeUser, index) => (
          <ActiveUserListItem
            key={activeUser.socketId}
            activeUser={activeUser}
            index={index}
          />
        ))}
      </div>
    </ActiveUserListWrapper>
  )
})

export default ActiveUserList
