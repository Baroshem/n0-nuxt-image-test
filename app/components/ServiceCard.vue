<template>
  <div class="bg-gray-50 rounded-lg p-6">
    <div class="mb-4 h-40 overflow-hidden rounded-lg">
      <img 
        :src="service.image" 
        :alt="service.title" 
        class="w-full h-full object-cover"
      />
    </div>
    <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>
    <p class="text-gray-600 mb-4">{{ service.description }}</p>
    <NuxtLink :to="service.link" class="text-primary-600 font-medium hover:text-primary-500">
      Explore service →
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true
  }
});
</script>
