import React from 'react'
import {connect} from 'react-redux'
import { useEffect } from 'react'
import {fetchUsers} from "../redux"

function UserContainer({userData, fetchUser}) {

  useEffect(()=>{
    fetchUsers()
  }, [])
  return (
    <div>
      <h2>List of Users</h2>
      {userData.loading && <div>Loading...</div>}
      {!userData.loading && userData.error ? <div>Error: {userData.error}</div> : null}
      {!userData.loading && userData.users.length ? (
        <ul>
          {userData.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}


const mapStateToProps = state =>{
  return{
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchUser: fetchUsers(dispatch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)