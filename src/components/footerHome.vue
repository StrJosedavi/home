<template>
<footer class="bg-gray-900 text-white border-t border-gray-800 pt-8 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Vamos Conversar?</h2>
          <p class="text-gray-300 text-lg">Entre em contato para discutir oportunidades</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div class="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span class="text-white">📧</span>
            </div>
            <h3 class="font-semibold mb-2">Email</h3>
            <a 
              href="mailto:josedavi100@gmail.com"
              class="text-blue-400 hover:text-blue-300"
            >
              josedavi100@gmail.com
            </a>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span class="text-white">📱</span>
            </div>
            <h3 class="font-semibold mb-2">Telefone</h3>
            <a 
              href="tel:(85) 99106-1737"
              class="text-green-400 hover:text-green-300"
            >
              (85) 99106-1737
            </a>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span class="text-white">🔗</span>
            </div>
            <h3 class="font-semibold mb-2">Redes Sociais</h3>
            <div class="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/jdavifs/" 
                target="_blank"
                class="text-blue-400 hover:text-blue-300"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/StrJosedavi" 
                target="_blank"
                class="text-gray-400 hover:text-gray-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-gray-500">
            © {{ year }} José Davi Fernandes Sobreira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
</template>

<script setup lang="ts">
    const year = new Date().getFullYear();
</script>

<style scoped>

</style>
