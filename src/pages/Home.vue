<script setup lang="ts">

</script>

<template>
    <div class="container-welcome">
        <h1 class="title-welcome">
            Olá 👋,
            <br />
            Meu nome é
            <br />
            José Davi
        </h1>
        <img class="myphoto" src="../assets/MyPhoto.png" alt="myphoto" width="200px" height="200px" />
    </div>

    <div class="container-skill">
        <h1 class="title-skill">Conhecimentos</h1>
        <span>Tecnologia utilizadas normalmente por mim</span>
    </div>

    <div class="container-projects">
        <h1 class="title-projects">Projetos</h1>
        <span>Alguns projetos utilizando as tecnologias citadas</span>
    </div>
</template>

<style scoped>
    .container-welcome {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }

    .container-skill {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        flex-direction: column;
    }

    .container-projects {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        flex-direction: column;
    }

    .title-welcome {
        font-family: 'DM Sans', sans-serif;
        font-size: 40px;
        color: #ffffff;
        margin-right: 120px;
    }

    .title-skill{
        font-family: 'DM Sans', sans-serif;
        color: #42446E;
        font-size: 40px;
        margin-top: 80px;
        display: flex;
        justify-content: center;
    }

    .title-projects{
        font-family: 'DM Sans', sans-serif;
        color: #42446E;
        font-size: 40px;
        margin-top: 80px;
        display: flex;
        justify-content: center;
    }

    .myphoto {
        display: flex;
        margin-left: 120px;
    }

    span {
        font-family: 'DM Sans', sans-serif;
        color: #ffffff;
        font-size: 15px;
    }
</style>
