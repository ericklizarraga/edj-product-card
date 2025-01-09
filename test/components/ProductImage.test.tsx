
import React from "react";

import render from "react-test-renderer";
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from "./data/products";


describe('ProductImage', () => {

    test('debe de mostrar el componente correctamente con la imagen perzonalizaado', () => {

        const wrapper = render.create(
            <ProductImage  img="./coffee-mug2.pn" />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('debe  de mostrar el componente con la imagen del  producto', () => {

        const wrapper = render.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });
});