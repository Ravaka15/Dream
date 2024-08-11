import React, { useCallback, useEffect, useState } from 'react'
import LoginViewModel from '../../ViewModel/LoginViewModel'

export default function LoginController() {
const [userName, setUserName] = useState('');
  const { users, createUser, getUserList } = LoginViewModel()

  const oncreateUserClick = useCallback(async () => {
    await createUser({ name: userName })
  }, [createUser, userName])

//   const navigateToArticle = useCallback((articleId: number) => {
//     history.push(`${ROOM_SCREEN}/${articleId}`)
//   }, [history])

  useEffect(() => {
    getUserList()
  }, [getUserList])

  return {
    userName,
    users,
    oncreateUserClick,
    onuserNameChange: setUserName
  }
}
