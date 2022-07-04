import { GetStaticProps } from 'next';
import React from 'react'

type ProductProps = {
    products: any[];
}

const Products = ({ products }: ProductProps) => {
    if(!products) return null;
  return (
  <div>
    {products.map(product => (
        <div key={product.id}>{product.name}</div>
    ))}
  </div>

  )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (content) => {
    const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
    const data = await response.json();

    return {
        props: {
            products: data
        },
        revalidate: 5
    }

}

export default Products