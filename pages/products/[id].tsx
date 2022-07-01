import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react'

type ProductProps = {
    product: any;
}

const ProductDetail = ({ product }: ProductProps) => {
  if (!product) return null;
  return (
    <div>{product.name}</div>
  )
}


export const getStaticPaths: GetStaticPaths = async (context: GetStaticPathsContext) => {
    const data = await (await fetch(`http://localhost:3001/products`)).json();
    const paths = data.map(product => (
        {params: {id: product.id}}
    ))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  const product = await (await fetch(`http://localhost:3001/products/${context.params.id}`)).json();
  return {
    props: { product },
    revalidate: 60
  }
}
export default ProductDetail