<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">About Us</h3>
          <p class="text-gray-300">TechCorp is a leading technology company providing innovative solutions for businesses worldwide.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-300 hover:text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-white">Products</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-gray-300 hover:text-white">Services</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-300 hover:text-white">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-2 text-gray-300">
            <li>123 Tech Street</li>
            <li>San Francisco, CA 94107</li>
            <li>info@techcorp.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="LinkedIn" class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733566.png" alt="Instagram" class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2024 TechCorp. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
