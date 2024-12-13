<template>
  <div class="px-5 md:px-0">
    <!-- Grid layout for widgets -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div class="" v-for="widget in widgets" :key="widget.id">
        <!-- section header -->
        <div
          :class="[
            'grid grid-cols-4 gap-1 p-3 rounded-md mb-4',
            `custom-bg-${widget.selectedColor}`,
          ]"
        >
          <div class="col-span-1 flex items-start">
            <customIcon
              :color="
                widget.selectedColor !== 'white' &&
                widget.selectedColor !== 'beige'
                  ? ''
                  : '#3B755F'
              "
            />
          </div>
          <div
            :class="[
              'col-span-3 flex flex-col justify-center',
              widget.selectedColor !== 'white' &&
              widget.selectedColor !== 'beige'
                ? 'text-white'
                : 'text-custom-green',
            ]"
          >
            <p class="text-xs">This product {{ widget.action }}</p>
            <p class="text-lg">{{ widget.amount }} {{ widget.type }}</p>
          </div>
        </div>

        <!-- body sections -->
        <div class="grid grid-cols-4 gap-4 items-center mb-4">
          <div class="col-span-3">
            <div class="flex items-center text-custom-green">
              <!-- text -->
              <span class="text-[14px] font-medium leading-none"
                >Link to Public Profile</span
              >
              <!-- icon -->
              <svg
                version="1.1"
                id="Layer_1"
                fill="#3B755F"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                enable-background="new 0 0 32 32"
                xml:space="preserve"
                class="w-[10px] h-[10px] ml-[1px] relative top-[-5px]"
              >
                <rect x="15" y="14" width="2" height="8" />
                <rect x="15" y="10" width="2" height="2" />
                <circle
                  fill="none"
                  stroke="#3B755F"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  cx="16"
                  cy="16"
                  r="12"
                />
              </svg>
            </div>
          </div>
          <div class="col-span-1 flex justify-end">
            <custom-input
              :input-value="widget.id"
              @checked="handleLinkToProfile"
            />
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 items-center mb-4">
          <div class="col-span-2 text-[14px] text-custom-green font-medium">
            Badge Colour
          </div>
          <div class="col-span-2 flex space-x-2 justify-end">
            <div class="flex gap-1">
              <div
                v-for="color in ['blue', 'green', 'beige', 'white', 'black']"
                :key="color"
                :class="[
                  'color-box',
                  { selected: widget.selectedColor === color },
                ]"
                :style="{ backgroundColor: color }"
                @click="updateWidgetColorById(widget.id, color)"
              ></div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 items-center">
          <div class="col-span-3 text-[14px] text-custom-green font-medium">
            Activate badge
          </div>
          <div class="col-span-1 flex justify-end">
            <label class="switch">
              <input
                type="checkbox"
                :checked="widget.active"
                @change="toggleActiveWidget(widget)"
              />
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { Widget } from "../stores/index";
import store from "../stores/index";
import CustomInput from "./CustomInput.vue";
import customIcon from "./icons/customIcon.vue";

// Fetch widgets from the store when the component is mounted
onMounted(async () => {
  await store.dispatch("fetchWidgets");
});

// Computed property to get widgets from the Vuex store
const widgets = computed(() => {
  return store.getters["getWidgets"];
});

// Update the color of a specific widget
function updateWidgetColorById(id: number, color: string) {
  store.dispatch("updateWidgetColor", { id, color });
}

// Toggle the active state of a widget, ensuring only one widget is active
function toggleActiveWidget(selectedWidget: Widget) {
  store.dispatch("toggleActiveWidget", selectedWidget.id);
}

// Handle linking to the profile
function handleLinkToProfile(event: Event) {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked; // Check if the checkbox is checked
  const widgetId = target.value; // Get the widget ID

  store.dispatch("updateWidgetLink", { id: widgetId, isChecked });
}
</script>

<style scoped>
/* Style for color picker boxes */
.color-box {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.color-box.selected{
  border-color: #b0b0b0;
}

/*border-color: #b0b0b0;*/
.color-box:hover {
  opacity: 0.7;
}
/* Style for toggle switch */
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 23px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
  outline: 1px solid rgba(175, 198, 189, 0.7);
  border-radius: 20px;
  transition: 0.4s;
}
/*
  border:solid 1px #AFC6BD;
    border:solid 1px #F2EBDB;

*/
.slider:before {
  position: absolute;
  content: "";
  height: 23px;
  width: 23px;
  left: -1px;
  bottom: 0px;
  background-color: white;
  outline: 1px solid rgba(242, 235, 219, 0.7);
  box-shadow: 1px 0px 0px 0px rgb(0 0 0 / 0.1);
  border-radius: 50%;
  transition: 0.4s;
}
.slider:hover::before {
  box-shadow: 0px 0px 1px 6px rgba(175, 198, 189, 0.5);
}
input:checked + .slider {
  background-color: #3b755f;
  outline: 1px solid #b0b0b0;
}

input:checked + .slider:before {
  outline: 1px solid #3b755f;
  transform: translateX(24px);
}
</style>
