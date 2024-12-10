<template>
    <div>
      <h1>Product Widgets</h1>
      <ul>
        <li v-for="widget in widgets" :key="widget.id">
          <div>
            <h2>{{ widget.type }}</h2>
            <p>Amount: {{ widget.amount }}</p>
            <p>Action: {{ widget.action }}</p>
            <p>Status: {{ widget.active ? 'Active' : 'Inactive' }}</p>
            <p>Linked: {{ widget.linked ? 'Yes' : 'No' }}</p>
            <p>Color: {{ widget.selectedColor }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { fetchWidgets } from '../services/api';
  import { Widget } from "../stores/index";
  const widgets = ref<Widget[]>([]); // State for widgets
  
  onMounted(async () => {
    try {
      widgets.value = await fetchWidgets(); // Fetch widgets on mount
    } catch (error) {
      console.error('Failed to fetch widgets:', error);
    }
  });
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    border: 1px solid #ddd;
    padding: 16px;
    margin-bottom: 8px;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  </style>
  