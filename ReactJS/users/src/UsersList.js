import React, { Component } from 'react';

class UsersList extends Component {
    
    createUser = (user) => {
        
        // return(<li>{user.userName}</li>);
        return(<li key={user.key} onClick={()=> {this.removeUser(user.key)}}>{user.userName}<button>Usuń</button></li>);
    }

    removeUser = (userKey) => {
        this.props.removeUser(userKey);
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
  


  // // 
// import React, { Component } from 'react';

// class UsersList extends Component {
    
//     createUser = (user) => {
        
//         return(<li key={use.key} onClick={()=> {this.deleteUser(userDel)}}>{user.userName}</li>);
        
//     }

//     deleteUser = (userDel) => {

//         let userDel = delete(<li>{user.userName}</li>);

//     }

//     render() {
//         let usersList = this.props.usersList;
//         let usersLi = usersList.map( this.createUser );

//       return (
        
//         <ul className="the-list">
//            {usersLi}
//         </ul>

//       );
//     }
//   }
  
//   export default UsersList;
  