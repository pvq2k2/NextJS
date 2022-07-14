import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import useSWR from 'swr';


const Products = () => {
    const url = `http://localhost:3001/products`;
    const fetcher = async (url) => await (await fetch(url)).json();
    const { data, error } = useSWR(url, fetcher, { dedupingInterval: 5000});
    if(!data) return <div>Loading...</div>
    if(error) return <div>Failed</div>
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
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