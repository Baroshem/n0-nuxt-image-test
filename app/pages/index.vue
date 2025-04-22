<template>
  <div>
    <HeroBanner />
    
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            v-for="service in services" 
            :key="service.id" 
            :service="service" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'TechCorp - Innovative Technology Solutions',
  meta: [
    { name: 'description', content: 'TechCorp provides cutting-edge technology solutions for businesses of all sizes.' }
  ]
});

const { products } = useProducts();
const { services } = useServices();
</script>
