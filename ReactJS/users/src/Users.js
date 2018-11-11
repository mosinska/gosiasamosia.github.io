import React, { Component } from 'react';
import UsersList from "./UsersList";

class Users extends Component {

    constructor(props){
        super(props);        

        this.state = {
            usersList: [],
        }
        // <input onInput={this.filterUsers.bind(this)} />
        // <UsersList users={this.state.filteredUsers} />
    }
     
    addUser = (ev) => {
        ev.preventDefault(); // ev - event
         
        // validUser

        // // ES6
        let newUser = { 
            key: Date.now(),
            userName: this.inputName.value,
        } 
    
        console.log("this.inputName.value");
        this.setState( (prevState) => {
            return({
                usersList: prevState.usersList.concat(newUser),
            })
        })
        this.inputName.value = "";
    }

    valid = (item) => {
        if(item.value == null){ //.trim()
            console.log("ERROR! Uzupełnij pole!");
            // return false;
        
        }else{
        console.log(item);
        }
    }

    removeUser = (keyOfUser) => {
        let filteredUsers = this.state.usersList.filter( (user) => user.key!==keyOfUser);

        this.setState({
            usersList: filteredUsers,
        });
        console.log(keyOfUser);
    }

    render() {
        return (
            <div className="users">

                <h1>Users List</h1>
    
                <form onSubmit={this.addUser}>
                    <input ref={(data) => {this.inputName = data} } type="text" placeholder="Enter name" />
                    <button type="submit">Add user</button>
                </form>
                
                <div className="usersList">
                    <h2>Lista użytkowników:</h2>
                    <UsersList usersList={this.state.usersList} removeUser={this.removeUser} valid={this.item} />
                </div>

            </div>
        );
    }
}

export default Users;