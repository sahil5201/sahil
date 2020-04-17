import Axios from 'axios';
import { API_URL } from '../const';
import { notify } from '../../components/UI/Notifications';

//Start fetchData
// export const fetchData = (path="task") => {
//     return (useDispatch) => {
//         Axios.get(API_URL+path).then(response=>{
//             useDispatch(GET(response.data))
//         })
//     }
// } //END

//Start fetchData
export const fetchData = (path="task") => {
    return (useDispatch,useSelector) => {
    const user = useSelector();
    const id = { id: user ? user.User.user.googleId : null }
      Axios.post(API_URL+path,id).then(response=>{
          useDispatch(GET(response.data))
      })
  }
} //END

//Start insertData
export const insertData = (path="task/addTask",PostData,DataPath="task") => {
    return (useDispatch) => {
        Axios.post(API_URL+path,PostData)
          .then(function (response) {
            if(!response.data.error){
              notify({message:"Data Inserted Successfully."})
              setTimeout(() => {
                useDispatch(fetchData(DataPath))  
              }, 200);                
            }    
          })
          .catch(function (error) {
            console.log(error);
          });
    }
} //END


//Start deleteData
export const deleteData = (path="task/deleteTask",PostData,DataPath="task") => {
    return (useDispatch) => {
        Axios.post(API_URL+path,PostData)
          .then(function (response) {
            if(!response.data.error){
              notify({message:"Data Deleted.",type:"danger"})
              setTimeout(() => {
                useDispatch(fetchData(DataPath))  
              }, 200);                
            }    
          })
          .catch(function (error) {
            console.log(error);
          });
    }
} //END

export const GET = data => {
    return {
        type: 'GET',
        payload: data
    }
}

export const insert = () => {
    return {
        type: 'INSERT',
    }
}

export const update = () => {
    return {
        type: 'UPDATE',
    }
}

export const Delete = () => {
    return {
        type: 'DELETE',
    }
}

export const Check = () => {
    return {
        type: 'Check',
    }
}