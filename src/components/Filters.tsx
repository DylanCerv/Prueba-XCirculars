// components/Filters.tsx
import React from 'react';

interface FiltersProps {
    filters: {
        brand: string;
        masterBrand: string;
        variety: string;
        desc: string;
    };
    brands: string[];
    masterBrands: string[];
    varieties: string[];
    descs: string[];
    onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>, filter: string) => void;
}


export default function Filters({ filters, brands, masterBrands, varieties, descs, onFilterChange }: FiltersProps) {

    return (
        <div className="mb-6">
            {['brand', 'masterBrand', 'variety', 'desc'].map((filter) => (
                <div key={filter} className="mb-4 flex-col">
                    <label htmlFor={filter} className="mr-2 text-lg font-medium capitalize">{filter}:</label>
                    <select
                        id={filter}
                        // value={filters[filter]}
                        onChange={(e) => onFilterChange(e, filter)}
                        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Todos</option>
                        {(filter === 'brand' ? brands : filter === 'masterBrand' ? masterBrands : filter === 'variety' ? varieties : descs).map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};
