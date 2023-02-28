import React from "react";
import { Product } from './Product'

export function Main (props) {
    const {products, onAdd} = props;
    return (
    <main>
        <h2 className="Products1">Catalog</h2>
        <div className="border">
            <i className="hearts">&hearts;</i>
                <p className="paragraph1">LEGO LAND</p>
                <p className="paragraph2">RED BRICK</p>
        </div>
        <div className="All">
            {products && products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))};
        </div>
    </main>
    ); 
};
