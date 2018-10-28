import React, { Component } from 'react';

class UsersList extends Component {
    
    createUser = (user) => {
        
        return(<li key={use.key} onClick={()=> {this.deleteUser(userDel)}}>{user.userName}</li>);
        
    }

    deleteUser = (userDel) => {

        let userDel = delete(<li>{user.userName}</li>);

    }

    render() {
        let usersList = this.props.usersList;
        let usersLi = usersList.map( this.createUser );

      return (
        
        <ul className="the-list">
           {usersLi}
        </ul>

      );
    }
  }
  
  export default UsersList;
  