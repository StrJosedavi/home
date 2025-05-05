<script setup lang="ts">

</script>

<template>
    <div class="bg-black flex items-center justify-center">
        <nav id="navbarNav">
            <ul class="grid grid-cols-4 gap-10">
                <li>
                    <router-link to="/">Sobre</router-link>
                </li>
                <li>
                    <router-link to="/project">Projetos</router-link>
                </li>
                <li>
                    <router-link to="/skill">Conhecimentos</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contatos</router-link>
                </li>
            </ul>   
        </nav>
    </div>
</template>

<style scoped>

ul li{
    color: #ffffff;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
}

</style>
