import { defineStore } from "pinia";

export const usersStore = defineStore ( "users", {
    state(){
        return {
            UserList: [],
        }
    },
    getters: {
        getUser:(state) => state.UserList,
    },
    actions: {
        AddUser(user){
            this.UserList.push(user)
        },
    },
})