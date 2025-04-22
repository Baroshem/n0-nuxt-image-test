<template>
  <header class="border-b border-gray-200 py-4">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img 
            src="https://placehold.co/200x60/4F46E5/FFFFFF?text=TechCorp" 
            alt="TechCorp Logo" 
            class="h-10"
          />
        </div>
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary-500">Home</NuxtLink>
          <NuxtLink to="/products" class="text-gray-700 hover:text-primary-500">Products</NuxtLink>
          <NuxtLink to="/services" class="text-gray-700 hover:text-primary-500">Services</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-primary-500">About</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-primary-500">Contact</NuxtLink>
        </nav>
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="User Avatar" 
              class="h-8 w-8 rounded-full"
            />
            <span class="ml-2 text-sm font-medium text-gray-700">Jane Doe</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
