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
        <div class="container-skill-icons">  
            <img src="../assets/csharp-lang.svg" alt="csharp" width="80px" height="80px" />
            <img src="../assets/language-js.svg" alt="javascript" width="80px" height="80px" />
            <img src="../assets/logo-git.svg" alt="git" width="80px" height="80px" />
            <img src="../assets/logo-github.svg" alt="github" width="80px" height="80px" />
            <img src="../assets/style-css.svg" alt="css" width="80px" height="80px" />
            <img src="../assets/logo-react.svg" alt="react" width="80px" height="80px" />
        </div>
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

    .container-skill-icons {
        display: flex;
        margin-top: 100px;
    }

    .container-skill-icons img {
        margin: 0 30px;
        transition: transform 0.2s;
    }
</style>
