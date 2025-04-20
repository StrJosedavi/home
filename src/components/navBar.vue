<script setup lang="ts">

</script>

<template>
<nav id="navbarNav">
    <div class="container-nav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Sobre</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/project" class="nav-link">Projetos</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/skill" class="nav-link">Conhecimentos</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contatos</router-link>
            </li>
        </ul>      
    </div>    
</nav>
</template>

<style scoped>

#navbarNav {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin-top: 30px;
}

ul.navbar-nav {
    display: flex;
}

li.nav-item {
    list-style: none;
    margin: 0 60px;
}

.nav-link {
    text-decoration: none;
    color: #ffffff;
    font-size: 17px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
}
</style>
