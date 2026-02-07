import {ProductCard} from "../components/ProductCard";
import { products } from "../data/Products";
import  style from "./ProductList.module.css";

function ProductList() {
    return (
        <div className={style.Container }>
        <header className={style.Header}>
            <h1 className={style.Title}>Produtos informaticos</h1>
            <p className={style.subtitle}>
                Encuentra los mejores productos informaticos al mejor precio
            </p>
        </header>

        <div className={style.grid}>
            {products.map((product) => (
                <ProductCard
                key={product.id}
                name={product.name}
                categoty={product.category}
                price={product.price}
                image={product.image}
                descripcion={product.descripcion}
                />
            ))}
        </div>
        </div>
    );
}   