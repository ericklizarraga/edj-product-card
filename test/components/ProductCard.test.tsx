import React from "react";

import render from "react-test-renderer";
import { ProductCard } from '../../src/components';
import { product1 } from "./data/products";

const { act } = render;

describe('ProductCard', () => {

    test('debe de mostrar el componente correctamente', () => {


        const wrapper = render.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>hola mundo</h1>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de incrementar el contador', () => {

        const wrapper = render.create(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy }) => (
                       <>
                            <h1>Product card</h1>
                            <span>{count}</span>
                            <button onClick={()=>increaseBy(1)}>boton</button>
                       </>
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        // console.log({tree});
        expect(tree).toMatchSnapshot();

        act(()=>{
            (tree as any).children[2].props.onClick();
        });

        tree = wrapper.toJSON();

        expect( (tree as any ).children[1].children[0]).toBe('1');
        
    });

});