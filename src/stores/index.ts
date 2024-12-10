import { createStore } from 'vuex';
import { fetchWidgets } from '../services/api';

// Define Widget interface
export interface Widget {
  id: number;
  type: 'carbon' | 'plastic bottles' | 'trees';
  amount: number;
  action: 'collects' | 'plants' | 'offsets';
  active: boolean;
  linked: boolean;
  selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige';
}

// Define state interface
interface State {
  widgets: Widget[];
}

// Define the state
const state: State = {
  widgets: [],
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
      commit('setWidgets', widgets);
    } catch (error) {
      console.error('Failed to fetch widgets:', error);
    }
  },
};

// Create store
const store = createStore({
  state,
  mutations,
  actions,
});

export default store;
