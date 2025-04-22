<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="h-48 overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.title" 
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
      <p class="text-gray-600 mb-4">{{ product.description }}</p>
      <NuxtLink :to="product.link" class="text-primary-600 font-medium hover:text-primary-500">
        Learn more →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>
