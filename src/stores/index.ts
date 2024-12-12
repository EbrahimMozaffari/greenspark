import { createStore } from "vuex";
import { fetchWidgets } from "../services/api";

// Define Widget interface to structure the widget data
export interface Widget {
  id: number;
  type: "carbon" | "plastic bottles" | "trees"; // The type of widget
  amount: number; // The amount associated with the widget
  action: "collects" | "plants" | "offsets"; // Action performed by the widget
  active: boolean; // Whether the widget is active
  linked: boolean; // Whether the widget is linked
  selectedColor: "white" | "black" | "blue" | "green" | "beige"; // Color selected for the widget
}

// Define the interface for the Vuex state
interface State {
  widgets: Widget[]; // Array of widgets in the state
}

// Define the initial state of the store
const state: State = {
  widgets: [], // Empty array to store widgets initially
};

// Define Vuex getters for computed state access
const getters = {
  // Getter to return the widgets from the state
  getWidgets(state: State) {
    return state.widgets;
  },
};

// Define Vuex mutations to update the state
const mutations = {
  // Mutation to set widgets in the state
  setWidgets(state: State, widgets: Widget[]) {
    state.widgets = widgets;
  },
  // Mutation to update a specific widget in the state
  updateWidget(state: State, updatedWidget: Widget) {
    const index = state.widgets.findIndex(
      (widget) => widget.id === updatedWidget.id
    );
    if (index !== -1) {
      state.widgets.splice(index, 1, updatedWidget); // Replace the old widget with the updated one
    }
  },
};

// Define Vuex actions to handle asynchronous or complex operations
const actions = {
  // Action to fetch widgets from the API
  async fetchWidgets({ commit }: { commit: Function }) {
    try {
      const widgets = await fetchWidgets(); // Fetch data from the API
      commit("setWidgets", widgets); // Commit the data to the state
    } catch (error) {
      console.error("Failed to fetch widgets:", error); // Log an error if the fetch fails
    }
  },
  // Action to update the color of a specific widget
  updateWidgetColor(
    { commit }: { commit: Function },
    payload: { id: number; color: string }
  ) {
    const newWidgets = state.widgets.map((widget: Widget) => {
      if (widget.id === payload.id) {
        return {
          ...widget,
          selectedColor: payload.color, // Update the selected color
        };
      }
      return widget;
    });
    commit("setWidgets", newWidgets); // Commit the updated widgets to the state
  },
  // Action to toggle the active status of a widget and deactivate others
  toggleActiveWidget(
    { commit }: { commit: Function },
    selectedWidgetId: number
  ) {
    const newWidgets: Widget[] = [];

    state.widgets.forEach((widget: Widget) => {
      if (widget.id === selectedWidgetId) {
        newWidgets.push({ ...widget, active: !widget.active }); // Toggle active status
      } else {
        newWidgets.push({ ...widget, active: false }); // Deactivate other widgets
      }
    });
    commit("setWidgets", newWidgets); // Commit the updated widgets to the state
  },
  // Action to update the link status of a widget
  updateWidgetLink(
    { commit }: { commit: Function },
    payload: { id: number; isLinked: boolean }
  ) {
    const newWidgets = state.widgets.map((widget: Widget) => {
      if (widget.id === payload.id) {
        return {
          ...widget,
          isLinked: payload.isLinked, // Update the linked status
        };
      }
      return widget;
    });
    commit("setWidgets", newWidgets); // Commit the updated widgets to the state
  },
};

// Create and export the Vuex store
const store = createStore({
  state, // State of the store
  getters, // Getters for computed state access
  mutations, // Mutations for directly modifying the state
  actions, // Actions for handling complex or asynchronous operations
});

export default store;
