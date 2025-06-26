<script setup lang="ts">

const skills = [
  'C#',
  'JavaScript',
  'Python',
  'Playwright',
  'Testes Manuais',
  'Testes Automatizados', 
  'Selenium WebDriver',
  'Postman',
  'Azure DevOps',
  'Git',
  'GitHub',
  'GitHub Copilot'
]

function GetIconBySkill(skill: string) {
  const iconMap: Record<string, string> = {
    'Testes Manuais': '/assets/computing-keyboard.svg',
    'Testes Automatizados': '/assets/auto-bug.svg',
    'Selenium WebDriver': '/assets/selenium.svg',
    'C#': '/assets/csharp-lang.svg',
    'JavaScript': '/assets/language-js.svg',
    'Python': '/assets/python.svg',
    'Postman': '/assets/postman.svg',
    'Playwright': '/assets/playwright.svg',
    'GitHub Copilot': '/assets/githubcopilot.svg',
    'Azure DevOps': '/assets/azure-devops.svg',
    'GitHub': '/assets/github.svg',
    'Git': '/assets/logo-git.svg',
  };
  return iconMap[skill] || '/assets/none.svg';
}

</script>

<template>
<section class="py-20 bg-gray-900 border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4 text-white">Habilidades Técnicas</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          <div 
            v-for="skill in skills" 
            :key="skill"
            class="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <img 
                :src="GetIconBySkill(skill)" 
                alt="Foto de José Davi Fernandes Sobreira" 
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">{{ skill }}</h3>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="text-lg font-bold text-gray-900 mb-4">🧪 Testes & Qualidade</h3>
            <ul class="space-y-2">
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Testes Manuais e Automatizados
              </li>
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Testes de API REST
              </li>
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Selenium WebDriver (C#)
              </li>
            </ul>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="text-lg font-bold text-gray-900 mb-4">⚙️ Ferramentas</h3>
            <ul class="space-y-2">
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Postman / Newman
              </li>
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Azure DevOps
              </li>
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                GitHub Actions
              </li>
            </ul>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="text-lg font-bold text-gray-900 mb-4">📋 Metodologias</h3>
            <ul class="space-y-2">
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Metodologias Ágeis (Scrum)
              </li>
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                CI/CD Pipelines
              </li>
              <li class="text-gray-700 flex items-center">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Planejamento de Testes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
</style>
  