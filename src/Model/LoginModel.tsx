import { useCallback, useState } from 'react'
import { login_check, createUser,  checkUser, userList, postUser } from './Api/Login'

export default function LoginModel() {
  const [userData, setUserData] = useState<checkUser | null>();

  const getUserList = useCallback(async () => {
    //const users = await login_check();
    //setUserData(users);
  }, []);

  const login = useCallback(async (checkUser: checkUser) => {
    if (Array.isArray(checkUser)) {
      const response = await login_check(checkUser)
    }
  }, [userData]);

  const createUser = useCallback(async (createData: createUser) => {
    if (Array.isArray(userData)) {
      const response = await postUser(createData)

      if (response !== null) {
        //setUserData([...userData, { id: response.id, name: response.name }])
      }
    }
  }, [userData]);

  return {
    users: userData,
    createUser,
    getUserList,
    login
  }

}
