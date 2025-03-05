<template>
    <footer id="footer" class="bg-gray-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 class="text-xl font-bold mb-6">AutoRent</h4>
            <p class="text-gray-400">Премиальная аренда автомобилей в России</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-6">Компания</h4>
            <ul class="space-y-3">
              <li><span class="text-gray-400 hover:text-white cursor-pointer">О нас</span></li>
              <li><span class="text-gray-400 hover:text-white cursor-pointer">Контакты</span></li>
              <li><span class="text-gray-400 hover:text-white cursor-pointer">Блог</span></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-6">Информация</h4>
            <ul class="space-y-3">
              <li><span class="text-gray-400 hover:text-white cursor-pointer">Условия аренды</span></li>
              <li><span class="text-gray-400 hover:text-white cursor-pointer">FAQ</span></li>
              <li><span class="text-gray-400 hover:text-white cursor-pointer">Правила</span></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-6">Контакты</h4>
            <ul class="space-y-3">
              <li class="text-gray-400">+7 (999) 123-45-67</li>
              <li class="text-gray-400">info@autorent.ru</li>
              <li class="flex space-x-4 mt-4">
                <a v-for="(icon, index) in socialIcons" 
                   :key="index" 
                   href="#" 
                   class="text-gray-400 hover:text-white">
                  <font-awesome-icon :icon="icon" class="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { FontAwesomeIcon } from '@/plugins/font-awesome'
  
  const socialIcons = [
    ['fab', 'facebook'],
    ['fab', 'instagram'],
    ['fab', 'telegram']
  ]
  </script>

=