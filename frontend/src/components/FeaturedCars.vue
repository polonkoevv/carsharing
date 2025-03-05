<template>
    <section id="featured-cars" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold">Популярные автомобили</h2>
          <span class="text-blue-600 hover:text-blue-700 cursor-pointer">Смотреть все</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CarCard v-for="car in cars" :key="car.id" :car="car" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import CarCard from './CarCard.vue';
  
  const cars = [
    {
      id: 1,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c4b52603b8-09ccfa4a84fbb23da760.png',
      name: 'Mercedes-Benz S-Class',
      price: 'от 15 000 ₽/день',
      rating: 4.9
    },
    // Остальные автомобили
  ];
  </script>