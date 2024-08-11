import axios from '../../Service/AxiosInstance';
export interface userList{
    id:number
    name:string
}

export interface createUser{
    name:string
}

export interface checkUser{
    email:string
    password:string
}

const API_URL = 'example api';
//https://localhost:8000/users

export const login_check = async (chechData: checkUser): Promise<userList[] | null> => {
    return axios.post(`api/login_check`).then((res:any)=>{
      const result = JSON.parse(res.request.response);
      console.log(result);
      return result.data;
    }).catch((response:any) => 
       console.log("Authorisation refuse")
    );
  }
export const postUser = async (createData: createUser): Promise<userList | null> => {
    const response = await fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createData)
    })
    if (!response.ok) {
      throw new Error('Failed to create article')
    }
    const data = await response.json()
    return data
  }

  