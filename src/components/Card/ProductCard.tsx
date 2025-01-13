import Image from 'next/image';
import React from 'react'

export default function ProductCard({ product }: any) {

    const {
        master_brand,
        brand,
        desc,
        price,
        variety,
        must_buy,
        with_card,
        addls,
        url_image,
    } = product;


    return (
        <>
            <div className="w-80 rounded-3xl border border-black/10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-52 bg-gray-100 p-5">
                    {url_image && (
                        <Image
                            src={url_image}
                            alt={brand}
                            className="w-auto h-40 rounded-lg mx-auto"
                            width={300}
                            height={600}
                        />
                    )}
                    <div className="absolute top-2 right-2 bg-red-500 text-xs py-1 px-3 rounded-full text-white font-semibold">{must_buy || 'Must Buy'}</div>
                </div>
                <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {master_brand || brand}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{desc}</p>
                    <hr className='py-2' />
                    {/* <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                    }`}
                            />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
                    </div> */}
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-500">Variety:</span>
                        <span className="text-sm text-gray-700">{variety}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">With Card:</span>
                        <div className="text-sm text-blue-500 border border-blue-500 rounded-full px-3">
                            {with_card ? `${with_card }% off` : '0% off'}
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Additional Info:</p>
                        <p className="text-sm text-gray-700">{addls || '----'}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">Price:</p>
                        <p className="text-2xl font-bold text-gray-900">${price}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
