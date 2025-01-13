'use client'
import { getProductsLimit } from '@/api/api';
import Loading from '@/components/loading/Loading';
import ProductCard from '@/components/Card/ProductCard'
import React, { useEffect, useState } from 'react'

export default function Card() {

    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const fetchProducts = async (page: number) => {
        try {
            setLoading(true);
            const response = await getProductsLimit(page);
            setProducts(prevProducts => [...prevProducts, ...response.products]); 
            setLoading(false);
        } catch (error) {
            setError('Error fetching products');
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProducts(page);
    }, [page]);


    // useEffect para agregar el listener de scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    // Función para manejar el evento de desplazamiento (scroll)
    const handleScroll = () => {
        const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
        if (bottom && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    };



    if (loading && page === 1) return <Loading />
    if (error) return <div>{error}</div>;

    return (
        <div className='p-6'>
            <h2 className="text-2xl text-center font-semibold mb-6">Tarjetas de Productos</h2>
            <div className="flex flex-wrap gap-6 justify-center mt-10">
                {products && products.length > 0 ? (
                    products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                ) : (
                    <div>No products available</div>
                )}
            </div>
            {loading && <Loading size='w-14 h-14' />}
        </div>
    )
}
