import api from "./api";

export async function getOrder() {
  try {
    const response = await api.get("/order");
    return response.data;
  } catch (error) {
    console.error("Error API:", error);
  }
}
