<template>
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <img class="w-full h-48 object-cover" :src="car.image" :alt="car.name">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">{{ car.name }}</h3>
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-600">{{ car.price }}</span>
          <div class="flex items-center">
            <i class="text-yellow-400" data-fa-i2svg=""><svg class="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
            <span class="ml-1">{{ car.rating }}</span>
          </div>
        </div>
        <button class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Забронировать
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    car: {
      type: Object,
      required: true
    }
  });
  </script>