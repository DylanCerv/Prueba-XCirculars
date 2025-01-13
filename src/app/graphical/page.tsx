'use client'
import { getProducts } from '@/api/api';
import Filters from '@/components/Filters'
import Graph from '@/components/Graph'
import Loading from '@/components/loading/Loading';
import React, { useEffect, useState } from 'react'

export default function Graphical() {

    const [chartData, setChartData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [filters, setFilters] = useState({
        brand: '',
        masterBrand: '',
        variety: '',
        desc: '',
    });
    const [brands, setBrands] = useState<any[]>([]);
    const [masterBrands, setMasterBrands] = useState<any[]>([]);
    const [varieties, setVarieties] = useState<any[]>([]);
    const [descs, setDescs] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');

    useEffect(() => {
        const fetchAndProcessData = async () => {
            try {
                const products = await getProducts();
                const groupedData = await groupProductsByFilters(products?.result);
                const { brandsSet, masterBrandsSet, varietiesSet, descSet } = await extractUniqueFilters(products?.result);

                setBrands(Array.from(brandsSet));
                setMasterBrands(Array.from(masterBrandsSet));
                setVarieties(Array.from(varietiesSet));
                setDescs(Array.from(descSet));
                setFilteredProducts(products?.result);

                setChartData(generateChartData(groupedData));
                setLoading(false);
            } catch (error) {
                console.error('Error processing data:', error);
                setLoading(false);
            }
        };

        fetchAndProcessData();
    }, []);

    // Función para agrupar los productos por filtros
    const groupProductsByFilters = (products: any[]) => {
        return products.reduce((acc: any, product: any) => {
            const key = `${product.brand} | ${product.master_brand} | ${product.variety.join(", ")} | ${product.desc}`;
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {});
    };

    // Función para extraer filtros únicos
    const extractUniqueFilters = (products: any[]) => {
        const brandsSet = new Set();
        const masterBrandsSet = new Set();
        const varietiesSet = new Set();
        const descSet = new Set();

        products.forEach((product: any) => {
            brandsSet.add(product.brand);
            masterBrandsSet.add(product.master_brand);
            varietiesSet.add(product.variety.join(", "));
            descSet.add(product.desc);
        });

        return { brandsSet, masterBrandsSet, varietiesSet, descSet };
    };

    // Función para generar un color aleatorio en formato rgba
    const generateRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.6)`;
    };

    // Función para generar datos para el gráfico
    const generateChartData = (groupedData: any) => {
        const labels = Object.keys(groupedData);
        const data = Object.values(groupedData);

        // Generar colores aleatorios para cada barra
        const backgroundColors = data.map(() => generateRandomColor());
        const borderColors = backgroundColors.map(color => color.replace('0.6', '1'));

        return {
            labels,
            datasets: [
                {
                    label: 'Cantidad de Productos',
                    data,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                },
            ],
        };
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>, filter: string) => {
        const newFilters = { ...filters, [filter]: e.target.value };
        setFilters(newFilters);

        // Filtrar productos según los filtros seleccionados
        const filtered = filteredProducts.filter((product: any) => {
            const matchesBrand = newFilters.brand ? product.brand === newFilters.brand : true;
            const matchesMasterBrand = newFilters.masterBrand ? product.master_brand === newFilters.masterBrand : true;
            const matchesVariety = newFilters.variety ? product.variety.join(", ") === newFilters.variety : true;
            const matchesDesc = newFilters.desc ? product.desc === newFilters.desc : true;
            return matchesBrand && matchesMasterBrand && matchesVariety && matchesDesc;
        });

        const groupedData = groupProductsByFilters(filtered);
        setChartData(generateChartData(groupedData));
    };

    if (loading) return <Loading />;

  return (

    <>
        <div className="p-6">
            <h2 className="text-2xl text-center font-semibold mb-6">Gráfico de Productos por Marca, Master Brand, Variety y Descripción</h2>

            <Filters
                filters={filters}
                brands={brands}
                masterBrands={masterBrands}
                varieties={varieties}
                descs={descs}
                onFilterChange={handleFilterChange}
            />

            <div className="mb-4 flex space-x-4">
                <button onClick={() => setChartType('bar')} className="px-4 py-2 bg-blue-500 text-white rounded-md">Bar</button>
                <button onClick={() => setChartType('pie')} className="px-4 py-2 bg-yellow-500 text-white rounded-md">Pie</button>
            </div>

            <Graph chartData={chartData} chartType={chartType} />
        </div>
    </>
  )
}
