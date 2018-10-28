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
     
    addUser = (e) => {
        e.preventDefault();
         
        // // ES6
        let newUser = { 
            key: Date.now(),
            userName: this.inputName.value,
        } 
    
        console.log(prevState.usersList.concat(newUser));
        this.setState( (prevState) => {
            return({
                usersList: prevState.usersList.concat(newUser),
            })
        })
        this.inputName.value = "";
    }

    // newUser = (e) => {
    //      e.preventDefault();    
    // }

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
                    <UsersList usersList={this.state.usersList}/>
                </div>

            </div>
        );
    }
}

export default Users;