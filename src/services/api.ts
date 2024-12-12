import apiClient from "./axios-interceptor";
import { Widget } from "../stores/index";
// fetchWidgets service
export async function fetchWidgets():Promise<Widget[]> {
  return apiClient.get("/product-widgets");
}

