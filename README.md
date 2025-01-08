# EDJ-PRODUCT-CARD

  es es un paquete de pruebas de despliegue en npm

### erick de jesus

## Ejemplo

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductBotons } from 'edj-prodcut-card';
```
```
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
```