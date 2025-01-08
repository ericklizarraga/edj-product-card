import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductBotons } from '../.';


  const product = {
    id: '1',
    title: 'Coffe Mug mondongo',
    img: './coffee-mug.png'
  }

const App = () => {
  return (
    <ProductCard
        product={product}
        className="bg-dark"
        inicialValues={{
          count: 5,
          maxCount: 10
        }}
      >
        {
          ({
            count,
            maxCount,
            increaseBy,
            isMaxCountReached,
            product,
            reset
          }) => (
            <>
              <ProductImage />
              <ProductTitle  />
              <ProductBotons
                
              />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {
                !isMaxCountReached ? <button onClick={() => increaseBy(2)}>+2</button> : null
              }
              <span>count: {count}</span>
            </>
          )
        }
      </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
