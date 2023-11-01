import { defineStore } from "pinia";
import { uuid } from "vue-uuid";

export const usersStore = defineStore ( "users", {
    state(){
        return {
            UserList: [],
            EditUser: null,
        }
    },
    getters: {
        getUser:(state) => state.UserList,
    },
    actions: {
        AddUser(user){
            console.log(user)
            if(user.id){
                //edit mode
                const users = this.UserList.filter( u => u.id !== user.id)
                console.log(users)
                return
            }

            user.id = uuid.v4();
            // add user
            this.UserList.push(user)
        },
        EditUser(editUser){
            this.EditUser = editUser
        },
        DeleteUser(){
            
        }
    },
})