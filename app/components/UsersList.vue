<script setup lang="ts">
const { data: users, pending, error } = useFetch('/api/users');
</script>

<template>
  <div class="p-4 bg-gray-100 rounded-lg shadow-md">
    <h2 class="text-xl font-bold mb-4">User List</h2>
    
    <div v-if="pending">Loading users...</div>
    <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
    <ul v-else class="space-y-2">
      <li 
        v-for="user in users.data" 
        :key="user.id"
        class="p-2 bg-white rounded-md shadow-sm"
      >
        <p><strong>Name:</strong> {{ user.name || 'N/A' }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Role:</strong> {{ user.role }}</p>
      </li>
    </ul>
  </div>
</template>
