<script>
import { mapState } from "pinia";
import { usersStore } from "../store/user.js";

    export default {
        computed: {
            ...mapState(usersStore, ['UserList'])
        },
    }
</script>

<template>
    <h1>Client List</h1>
    <div class="table">
        <div class="table-head">
            <label for="ID" class="label">ID</label>
            <label for="name" class="label">NAME</label>
            <label for="email" class="label">EMAIL</label>
            <label for="contact" class="label">CONTACT</label>
            <label for="password" class="label">PASSWORD</label>
        </div>
        <div class="table-body">
            <div class="table-row" v-for="user in UserList" :key="user.id">
                <!--label for="ID" class="table-label">{{ user.id }}</label> -->
                <label for="name" class="table-label">{{ user.name }}</label>
                <label for="email" class="table-label">{{ user.email }}</label>
                <label for="contact" class="table-label">{{ user.contact }}</label>
                <label for="password" class="table-label">{{ user.password }}</label>
            </div>
        </div>
    </div> 
</template>

<style scoped>
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
        width: 50em;
        height: 3em;
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
        justify-content: center;
        align-items: center;
        gap: 1em;
        width: 50em;
        height: 1.5em;
        background-color: rgb(219, 151, 143);
        border-radius: 0.5em;
    }
    .label{
        font-size: 1em;
        font-weight: bold;
        color:rgb(255, 255, 255);
    }
    .table-label{
        font-size: 1em;
        color:black;
    }
    h1{
        margin-top: 1em;
        color: salmon;
    }
</style>