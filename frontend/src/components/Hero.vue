<template>
    <section id="hero" class="pt-20 h-[800px] relative overflow-hidden">
      <img class="absolute inset-0 w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4fea123daf-2dbb95884c2304f3fca0.png" alt="luxury car parked in modern city at sunset, minimalist photography">
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div class="container mx-auto px-4 relative h-full flex items-center">
        <div class="max-w-2xl text-white">
          <h1 class="text-5xl font-bold mb-6">Аренда премиальных автомобилей</h1>
          <p class="text-xl mb-8">Откройте для себя новый уровень комфорта и свободы передвижения</p>
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="relative">
                <label class="text-gray-600 text-sm">Локация</label>
                <input type="text" class="w-full mt-1 p-2 border rounded" placeholder="Город">
              </div>
              <div class="relative">
                <label class="text-gray-600 text-sm">Дата начала</label>
                <input type="date" class="w-full mt-1 p-2 border rounded">
              </div>
              <div class="relative">
                <label class="text-gray-600 text-sm">Дата окончания</label>
                <input type="date" class="w-full mt-1 p-2 border rounded">
              </div>
              <button class="bg-orange-500 text-white h-full rounded-lg hover:bg-orange-600 mt-6">
                Найти автомобиль
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Логика компонента
  </script>