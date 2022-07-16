import useProducts from '@/hooks/useProducts';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import useSWR from 'swr';


const Products = () => {
    const { data, error, create } = useProducts();
    if(!data) return <div>Loading...</div>
    if(error) return <div>Failed</div>
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                    <button onClick={() => create({name: "Product B"})}>Add Product</button>
                </div>

                
            ))}
        </div>
    );
};


// export const getStaticProps: GetStaticProps<ProductProps> = async (content) => {
//     const response = await fetch(`http://localhost:3000/products`);
//     const data = await response.json();

//     return {
//         props: {
//             products: data
//         },
//         revalidate: 5
//     }
// }

export default Products