<script>
    import FormShell from '../layouts/FormShell.vue'
    import UserForm from './UserForm.vue'
    import UserList from './UserList.vue'
    
    export default {
        components: {
            FormShell,
            UserForm,
            UserList,
        },
    }
</script>

<template>
    <div class="main">
        <UserForm></UserForm>
        <UserList></UserList>
    </div>
</template>

<style scoped>
    .main {
        margin: 5dvh;
    }
</style>