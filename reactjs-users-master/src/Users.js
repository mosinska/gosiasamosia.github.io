import React, { Component } from 'react';
import UsersList from "./UsersList";
import "./Users.css";




class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMsg: "",
            usersList: [],
        }
        // this.textInput = React.createRef();
        
    }


    addUser = (e) => {
            e.preventDefault();
            
            if (this.validation(this.textInput)) {
                let newUser = {
                    key: Date.now(),
                    userName: this.textInput.value,
                }
    
                this.setState((prevState) => {
                    return({
                        usersList: prevState.usersList.concat(newUser),
                        errorMsg:"",
    
                    })
                }
                
                )
                // console.log(this.textInput.current.value);
                // console.log(newUser);
                    this.textInput.value = ""
            } else {
               this.setState({
                   errorMsg:"Uzupełnij Pole!",
               })
            }

    }


    removeUsers = (userKey) => {
            // console.log(userKey);
            let filteredUsers = this.state.usersList.filter((user) => user.key !== userKey);

            this.setState({
                usersList: filteredUsers,
            });

    }

    validation = (val) => {
       if (val.value.trim() === ""){

        return false;
    
       } else
       {
          return true;
       }
    }

    render () {
            return(

                <div className="users-main">
                    <h1>User's List</h1>
                    <form onSubmit={this.addUser}>
                        {/* <input type="text" ref={this.textInput} placeholder="Enter Name"></input> */}
                        <input type="text" ref={(data) => this.textInput = data} placeholder="Enter Name"></input>
                        <button type="submit">Add User</button>
                    </form>
                    <div>{this.state.errorMsg}</div>
                    <UsersList removeUsers={this.removeUsers} usersList={this.state.usersList} />
                </div>
            )

    }

    }

    export default Users;