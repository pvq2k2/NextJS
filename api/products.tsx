import instance from "./instance";

export const getProduct = (id) => instance.get(`/products/${id}`);
export const addProduct = (product) =>  instance.post("/products", product);
export const updateProduct = (product) => instance.put(`/products/${product.id}`, product);
export const removeProduct = (id) => instance.delete(`/products/${id}`);
