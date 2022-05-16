import React, { createContext } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {

    const productList = [
        {id: 1, name: 'Egg', minutes: 0, seconds: 5},
        {id: 2, name: 'Pasta', minutes: 5, seconds: 20},
        {id: 3, name: 'Rice', minutes: 1, seconds: 40}
    ];

    return (
        <ProductsContext.Provider value={{productList}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;