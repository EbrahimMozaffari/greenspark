import apiClient from "./axios-interceptor";
import { Widget } from "../stores/index";
// fetchWidgets service
export async function fetchWidgets():Promise<Widget[]> {
  return apiClient.get("/product-widgets");
}

// Create a new widget
export async function createWidget(data: Widget) {
  return apiClient.post("/product-widgets", data);
}

// Update an existing widget
export async function updateWidget(id: number, data: any) {
  return apiClient.put(`/product-widgets/${id}`, data);
}

// Delete a widget
export async function deleteWidget(id: number) {
  return apiClient.delete(`/product-widgets/${id}`);
}
