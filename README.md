# Portfólio Pessoal

Este projeto é um portfólio pessoal desenvolvido em Vue 3 + Vite, com o objetivo de apresentar meus trabalhos, experiências profissionais, qualificações e recomendações de forma moderna e responsiva.

## Objetivo

Exibir minhas principais experiências, habilidades, projetos, recomendações do LinkedIn e formas de contato, servindo como cartão de visitas digital para recrutadores e parceiros.

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/StrJosedavi/home.git
   cd home
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   O site estará disponível normalmente em `http://localhost:5173`.

4. **Build para produção:**
   ```bash
   npm run build
   ```
   Os arquivos finais ficarão na pasta `dist/`.

## Tecnologias utilizadas

- Vue 3
- Vite
- Tailwind CSS
- TypeScript


## Testes Automatizados (E2E)

Este projeto utiliza o Playwright para testes automatizados de ponta a ponta.

### Como rodar os testes

1. Instale as dependências do projeto (caso ainda não tenha feito):
   ```bash
   npm install
   ```

2. Instale os browsers do Playwright:
   ```bash
   npx playwright install
   ```

3. Execute os testes:
   ```bash
   npx playwright test
   ```
   ou, se preferir, utilize os scripts:
   
   sem UI
   ```bash
   npm run test:e2e
   ```

   com UI
   ```bash
   npm run test:ui
   ```

Os relatórios dos testes serão gerados na pasta `playwright-report/`.

## Contato

Para saber mais, acesse meu [LinkedIn](https://www.linkedin.com/in/jdavifs/) ou entre em contato pelo e-mail disponível no site.
