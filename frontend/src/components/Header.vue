<template>
    <header id="header" class="fixed w-full bg-white shadow-sm z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-blue-600 cursor-pointer">AutoRent</span>
            <nav class="hidden md:flex ml-10 space-x-8">
              <span class="text-gray-600 hover:text-blue-600 cursor-pointer">Каталог</span>
              <span class="text-gray-600 hover:text-blue-600 cursor-pointer">О нас</span>
              <span class="text-gray-600 hover:text-blue-600 cursor-pointer">Условия</span>
              <span class="text-gray-600 hover:text-blue-600 cursor-pointer">Контакты</span>
            </nav>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-gray-600 hover:text-blue-600">
              <i class="text-xl" data-fa-i2svg=""><svg class="svg-inline--fa fa-user" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path></svg></i>
            </button>
            <button class="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Арендовать
            </button>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  // Логика компонента
  </script>