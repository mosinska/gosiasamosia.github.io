import React, { Component } from 'react';
import "./Users.css"



class UsersList extends Component {

        createUser = (user) => {
            return(
                <li key={user.key}>{user.userName} <button id="usun" onClick ={() => {this.deleteUser(user.key)}}>Remove User</button></li>

                )
        }

        deleteUser = (removeKey) => {
            // console.log (removeKey);
            if (window.confirm("Czy na pewno usunąć?")) {
                this.props.removeUsers(removeKey);
            } 
          
        }

        render () {

            let usersList = this.props.usersList;
            let usersLi = usersList.map(this.createUser);

            return(
                <ul className="the-list">
                   {usersLi}
                </ul>



            )

        }

}



export default UsersList;