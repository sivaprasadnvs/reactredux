import{FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED,FETCH_USERS_FAILED} from './userTypes'
import axios from 'axios'


export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUESTED
    }
  }
  
  export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCEEDED,
      payload: users
    }
  }
  
 export const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILED,
      payload: error
    }
  }

 export const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchUsersRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data.map(user => user.id)
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }