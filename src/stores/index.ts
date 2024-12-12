import { createStore } from "vuex";
import { fetchWidgets } from "../services/api";

// Define Widget interface
export interface Widget {
  id: number;
  type: "carbon" | "plastic bottles" | "trees";
  amount: number;
  action: "collects" | "plants" | "offsets";
  active: boolean;
  linked: boolean;
  selectedColor: "white" | "black" | "blue" | "green" | "beige";
}

// Define state interface
interface State {
  widgets: Widget[];
}

// Define the state
const state: State = {
  widgets: [],
};
//Define Getters
const getters = {
  getWidgets(state: State) {
    return state.widgets;
  },
};
// Define mutations
const mutations = {
  setWidgets(state: State, widgets: Widget[]) {
    state.widgets = widgets;
  },
  updateWidget(state: State, updatedWidget: Widget) {
    const index = state.widgets.findIndex(
      (widget) => widget.id === updatedWidget.id
    );
    if (index !== -1) {
      state.widgets.splice(index, 1, updatedWidget);
    }
  },
};

// Define actions
const actions = {
  async fetchWidgets({ commit }: { commit: Function }) {
    try {
      const widgets = await fetchWidgets();
      commit("setWidgets", widgets);
    } catch (error) {
      console.error("Failed to fetch widgets:", error);
    }
  },
  updateWidgetColor(
    { commit }: { commit: Function },
    payload: { id: number; color: string }
  ) {
    const newWidgets = state.widgets.map((widget: Widget) => {
      if (widget.id === payload.id) {
        return {
          ...widget,
          selectedColor: payload.color,
        };
      }
      return widget;
    });
    commit("setWidgets", newWidgets);
  },
  toggleActiveWidget(
    { commit }: { commit: Function },
    selectedWidgetId: number
  ) {
    const newWidgets: Widget[] = [];

    state.widgets.forEach((widget: Widget) => {
      if (widget.id === selectedWidgetId) {
        newWidgets.push({ ...widget, active: !widget.active });
      } else {
        newWidgets.push({ ...widget, active: false });
      }
    });
    commit("setWidgets", newWidgets);
  },
  updateWidgetLink(
    { commit }: { commit: Function },
    payload: { id: number; isLinked: boolean }
  ) {
    const newWidgets = state.widgets.map((widget: Widget) => {
      if (widget.id === payload.id) {
        return {
          ...widget,
          isLinked:payload.isLinked,
        };
      }
      return widget;
    });
    commit("setWidgets", newWidgets);
  },
};

// Create store
const store = createStore({
  state,
  getters,
  mutations,
  actions,
});

export default store;
