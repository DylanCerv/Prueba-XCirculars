import React from 'react'
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, ArcElement } from 'chart.js'; // Importar componentes necesarios


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, ArcElement);

interface GraphProps {
    chartData: any;
    chartType: 'bar' | 'pie';
}

export default function Graph({ chartData, chartType }: GraphProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            {chartData && (
                <>
                    {chartType === 'bar' && (
                        <Bar
                            data={chartData}
                            options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Productos por Marca, Master Brand, Variety y Descripción',
                                        font: { size: 20, weight: 'bold' },
                                        color: '#333',
                                    },
                                    legend: {
                                        position: 'top',
                                        labels: { font: { size: 14, weight: 'bold' }, color: '#333' },
                                    },
                                },
                                scales: {
                                    x: { ticks: { font: { size: 12, weight: 'bold' }, color: '#333' } },
                                    y: { ticks: { font: { size: 12, weight: 'bold' }, color: '#333' } },
                                },
                                animation: { duration: 1000, easing: 'easeOutBounce' },
                            }}
                        />
                    )}
                    {chartType === 'pie' && (
                        <Pie
                            data={chartData}
                            options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Productos por Marca, Master Brand, Variety y Descripción',
                                        font: { size: 20, weight: 'bold' },
                                        color: '#333',
                                    },
                                    legend: {
                                        position: 'top',
                                        labels: { font: { size: 14, weight: 'bold' }, color: '#333' },
                                    },
                                },
                                animation: { duration: 1000, easing: 'easeOutBounce' },
                            }}
                        />
                    )}
                </>
            )}
        </div>
    );
}
