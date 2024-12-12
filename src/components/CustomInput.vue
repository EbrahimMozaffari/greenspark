<template>
  <label
    class="relative flex items-center cursor-pointer hover:bg-slate-500 customHover rounded-full"
  >
    <!-- Hidden Checkbox -->
    <input
      type="checkbox"
      class="sr-only"
      :value="inputValue"
      v-model="isChecked"
      @change="handlechange"
    />
    <!-- Styled Checkbox -->
    <div
      class="w-[18px] h-[18px] rounded-[2px] border-2 border-gray-400 flex items-center justify-center transition-colors"
      :class="isChecked ? 'bg-checkbox border-checkbox' : 'border-gray-400'"
    >
      <!-- Check Icon -->
      <svg
        v-if="isChecked"
        class="text-white w-5 h-5"
        fill="white"
        viewBox="3 0 18 25"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
      >
        <path
          d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"
        />
      </svg>
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isChecked = ref(false);
defineProps({
  inputValue: String,
});
// Emits definition for edit events
const emits = defineEmits(["checked"]);

const handlechange = (event: Event) => {
  emits("checked", event);
};
</script>
<style scoped>
/* Custom Colors */
.bg-checkbox {
  background-color: #3b755f; /* Green background for checked state */
}

.border-checkbox {
  border-color: #3b755f; /* Green border for checked state */
}
.customHover {
  transition: 0.3s;
}
.customHover:hover {
  box-shadow: 0px 0px 1px 8px rgba(175, 198, 189, 0.5);
}
</style>
