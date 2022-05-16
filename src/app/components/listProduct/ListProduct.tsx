import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import searchService from "../../services/searchService";
import { GenericResponse } from "../../interfaces/interface";
/**
 * app render list product search
 * instace useState with GenericResponse type
 * @returns GenericResponse
 */
const ListProduct = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<GenericResponse>();

  useEffect(() => {
    let q = searchParams.get("q") ? searchParams.get("q") : "cama";
    if (!q) return;
    (async () => {
      const data = await searchService.search(q);
      setProducts(data);
    })();
  }, [searchParams]);

  return (
    <div className="list-product">
      <div className="list-product__filters">
        {products?.categories?.length &&
          products.categories.map((product, index) => (
            <p key={index}>
              {product} <strong>{">"}</strong>{" "}
            </p>
          ))}
      </div>
      <div className="list-product__card">
        {products?.items?.length &&
          products.items.map((product) => (
            <div key={product.id}>
              <div className="product">
                <Link to={`/products/${product.id}`}>
                  <div className="product__imageProduct">
                    <img src={product.picture} alt={product.title} />
                  </div>
                  <div className="product__location">
                    <p>{product.address}</p>
                  </div>
                  <div className="product__details">
                    <p className="product__details--Price">
                      $ {product.price.amount}{" "}
                    </p>
                    <p className="product__details--Text">{product.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ListProduct;
