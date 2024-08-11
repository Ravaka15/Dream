import LoginModel from "../Model/LoginModel"

export default function LoginViewModel() {
  const { users, createUser, getUserList, login} = LoginModel();
  
  return {
    users,
    createUser,
    getUserList,
    login
  }
}
