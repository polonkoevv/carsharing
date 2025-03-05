<template>
  <div id="personal-info" class="bg-white rounded-lg shadow-sm p-6 mb-8">
    <h3 class="text-xl font-semibold mb-6">Личная информация</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Имя</label>
        <input type="text" value="Иван" class="w-full p-3 border border-gray-200 rounded-lg">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Фамилия</label>
        <input type="text" value="Петров" class="w-full p-3 border border-gray-200 rounded-lg">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input type="email" value="ivan@example.com" class="w-full p-3 border border-gray-200 rounded-lg">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
        <input type="tel" value="+7 (999) 123-45-67" class="w-full p-3 border border-gray-200 rounded-lg">
      </div>
    </div>
    <button class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Сохранить изменения</button>
  </div>
</template>