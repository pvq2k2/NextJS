import { addProduct, getProduct, removeProduct, updateProduct } from "@/api/products";
import useSWR from "swr";


const useProducts = () => {

    const { data, error, mutate } = useSWR("/products", { dedupingInterval: 5000});

    const read = async (id) => {
        const product = await getProduct(id);
        mutate(product);
    }
    const create = async (item) => {
        const product = await addProduct(item);
        mutate([...data, product]);
    }

    const update = async (product) => {
        updateProduct(product);
        mutate(data.map(item => item.id == product.id ? product : item));
    }

    const remove = async (id) => {
        removeProduct(id);
        mutate(data.filter(item => item.id !== id));
    }

    return {
        data, error, create, read, update, remove
    }
}

export default useProducts;