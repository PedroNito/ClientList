<template>
    <nav>
        <a href="https://github.com/PedroNito" target="_blank">Pedro Nito</a>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>        
    </nav>
</template>

<style scoped>
    nav {
        margin: 0;
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5dvh;
        background-color: #333;
        color: white;
    }
    a{
        text-decoration: none;
        color: salmon;
        font-size: 1.25em;
        font-weight: bold;
        padding: 0.25em;

    }
    ul{
        margin: 0;
        padding: 0 1em 0 0;
        display: flex;
        list-style: none;
        gap: 1em;
        align-items: center;
    }
    li{
        padding: 0.25em;
    }
</style>