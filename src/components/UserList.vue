<script>
import { mapState } from "pinia";
import { usersStore } from "../store/user.js";
import uuID from "vue-uuid"

    export default {
        computed: {
            ...mapState(usersStore, ['UserList'])
        },
    }
</script>

<template>
    <div class="back-color">
        <h1>Client List</h1>
        <div class="table">
            <div class="table-head">
                <label for="ID" class="label">ID</label>
                <label for="img" class="label">PIC</label>
                <label for="name" class="label">NAME</label>
                <label for="email" class="label">EMAIL</label>
                <label for="contact" class="label">CONTACT</label>
                <label for="password" class="label">PASSWORD</label>
                <label for="password" class="label">ACTIONS</label>
            </div>
        </div>
        <div class="table-body">
            <div class="table-row" v-for="user in UserList" :key="user.id">
                <label for="ID" class="table-label">{{ uuID }}</label>
                <img src="" alt="">
                <label for="name" class="table-label">{{ user.name }}</label>
                <label for="email" class="table-label">{{ user.email }}</label>
                <label for="contact" class="table-label">{{ user.contact }}</label>
                <label for="password" class="table-label">{{ user.password }}</label>
                    <div class="btn-position">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-del">Delete</button>
                    </div>
            </div>
        </div>
    </div> 
</template>

<style scoped>
.back-color{
    background-color: #333;
}
    .table {
        display:flex ;
        flex-direction: column;
        align-items: center;
        margin-top: 1em;
    }
    .table-head {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 6em;
        background-color: rgb(227, 89, 74);
        border-radius: 0.5em;
        width: 70em;
        height: 4em;
        margin-bottom: 0.25em;
    }
    .table-body {
        display: flex;
        flex-direction: column;
        gap: 0.25em;
    }
    .table-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        width: 70em;
        height: 2em;
        background-color: rgb(219, 151, 143);
        border-radius: 0.5em;
    }
    .label{
        font-size: 1.1em;
        font-weight: bold;
        color:rgb(255, 255, 255);
    }
    .table-label{
        width: 70em;
        font-size: 1em;
        color:black;
    }
    h1{
        margin-top: 1em;
        color: salmon;
    }
    .btn-position{
        display: flex;
        flex-direction: row;
        gap: 1em;
        margin-right: 1em;
    }
    .btn-edit{
        width: 4em;
        height: 1.5em;
        border-radius: 0.5em;
        border-color: rgb(79, 79, 79);
        color: rgb(63, 56, 56);
        font-weight: bold;
        background-color: rgb(232, 232, 1);
    }
    .btn-del{
        width: 5em;
        height: 1.5em;
        border-radius: 0.5em;
        border-color: rgb(79, 79, 79);
        color: rgb(50, 42, 42);
        font-weight: bold;
        background-color: rgb(205, 2, 2);
    }   
</style>