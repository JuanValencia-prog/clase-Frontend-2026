import ProductForm from "../components/ProductForm";
import { useState } from "react";
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './ProductList.module.css';


function ProductList() {

  const [editingProduct, setEditingProduct] = useState(null);
  const handleEditStart = (product) => {
  setEditingProduct(product);
};

const handleEditCancel = () => {
  setEditingProduct(null);
};

const handleEditSubmit = (updatedProduct) => {
  setProductsState((prev) =>
    prev.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product,
    ),
  );

  setEditingProduct(null);
};

  const handleDeleteProduct = (id) => {
  setProductsState((prev) => prev.filter((product) => product.id !== id));
};

  const handleAddProduct = (product) => {
  setProductsState((prev) => {
    const maxId = prev.reduce((acc, item) => Math.max(acc, item.id), 0);
    const nextId = maxId + 1;

    return [...prev, { ...product, id: nextId }];
  });
};

const [productsState, setProductsState] = useState(products);


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Productos Informáticos</h1>
        <p className={styles.subtitle}>
          Encuentra los mejores productos de tecnología para tu setup
        </p>
      </header>

      <ProductForm onSubmit={handleAddProduct} />

      

      <div className={styles.grid}>
        {productsState.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            stock={product.stock}
            image={product.image}
            description={product.description}
            onDelete={() => handleDeleteProduct(product.id)}

            
            
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;