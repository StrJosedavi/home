<script setup lang="ts">
// Recomendações vindas do LinkedIn (adicione manualmente ou via API)
const linkedinRecommendations = [
  {
    author: 'Ravi Silva',
    text: 'Tive a oportunidade de trabalhar com o Davi na equipe de qualidade de software da empresa Fitbank. No tempo em que trabalhamos juntos, pude observar um profissional competente, dedicado, resiliente, resolutivo e que busca constantemente evoluir e trazer inovação para os processos da empresa.'
  },
  {
    author: 'Júnior Veras',
    text: 'Davi é um profissional extremamente competente, sempre buscando novos aprendizados e aperfeiçoando suas habilidades. Tive a oportunidade de trabalhar ao seu lado em projetos desafiadores, e sua capacidade analítica e atenção aos detalhes sempre garantiram entregas eficientes e de alta qualidade. Além de ser um ótimo colega de equipe, ele demonstra proatividade e comprometimento em tudo o que faz. Sem dúvidas, uma excelente adição a qualquer time. Recomendo muito!'
  },
  {
    author: 'Pedro Henrique',
    text: 'José Davi é um profissional dedicado e altamente competente em QA Automation. Ele domina ferramentas como Selenium WebDriver e aplica boas práticas para garantir testes eficientes e bem estruturados. Além disso, sua proatividade e espírito colaborativo fazem dele um grande aliado no time.'
  }
];

const linkedinUrl = 'https://www.linkedin.com/in/jdavifs/details/recommendations/';

</script>

<template>
     <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-30">
      
      <div class="max-w-6xl mx-auto px-4 text-center">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-white mb-4">Recomendações</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div v-for="(rec, idx) in linkedinRecommendations" :key="idx" class="bg-gray-50 rounded-xl p-8 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-[1.01]">
            <div class="space-y-3">
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <span class="text-gray-700">"{{ rec.text }}"</span>
                </li>
              </ul>
              <div class="text-right text-blue-600 font-semibold mt-2">- {{ rec.author }}</div>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <a :href="linkedinUrl" target="_blank" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Ver mais recomendações no LinkedIn</a>
        </div>
      </div>
    </section>
</template>

<style scoped>
</style>
  