<script>
import { usersStore } from '../store/user.js'
import { mapActions } from "pinia"
    export default {
        data(){
            return {
            name: '',
            email: '',
            contact: '',
            password: '',
            }
        },
        methods: {
            clickHandler() {
                const data = {
                    name: this.name,
                    email: this.email,
                    contact: this.contact,
                    password: this.password,
                }
                this.AddUser(data)
            },
            ...mapActions(usersStore, ['AddUser'])
        }
    }
</script>

<template>
    <div class="card">
        <form class="form">
            <div class="input-content">
                    <h1 class="title">Add Client</h1>

                    <label for="name" class="label">Name</label>
                    <input type="text" name="name" id="name" class="input-text" v-model="name" placeholder="Insert your name">
                    
                    <label for="email" class="label">Email</label>
                    <input type="text" name="email" id="email" class="input-text" v-model="email" placeholder="Insert your email">
                    
                    <label for="contact" class="label">Contact</label>
                    <input type="text" name="contact" id="contact" class="input-text" v-model="contact" placeholder="Insert your contact">
                    
                    <label for="password" class="label">Password</label>
                    <input type="text" name="password" id="password" class="input-text" v-model="password" placeholder="Insert your password">

                    <button class="btn-submit" type="submit" @click.prevent="clickHandler">Submit</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .form {
        display: flex;
    }
    .input-content {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        padding: 1em;
        background-color: salmon;
        width: 15em;
        border-radius: 0.5em;
    }
    .title {
        font-size: 2em;
        font-weight: bold;
        color: #242424;
        margin-bottom: 0.5em;
    }
    .label {
        font-size: 1em;
        font-weight: bold;
        color:rgb(255, 255, 255);
        margin-bottom: 0.5em;
    }
    .input-text {
        padding: 0.5em;
        border-radius: 0.5em;
        border-style: none;
        border-color: rgb(255, 255, 255);
        font-size: 0.85em;
        color: rgb(255, 255, 255);
        margin-bottom: 0.5em;
        width: 85%;
        background-color: #242424;
    }
    .btn-submit {
        background-color: #242424;
        margin-top: 1em;
        padding: 0.5em;
        border-radius: 0.5em;
        border-color: rgb(79, 79, 79);
        font-size: 0.85em;
        font-weight: bold;
        color: rgb(255, 255, 255);
    }
</style>