import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import searchService from "../../services/searchService";
import { GenericResponse } from "../../services/httpService";

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
              <div className="categories">
                <Link to={`/products/${product.id}`}>
                  <div className="categories__imageProduct">
                    <img src={product.picture} alt={product.title} />
                  </div>
                  <div className="categories__location">
                    <p>{product.address}</p>
                  </div>
                  <div className="categories__details">
                    <p className="categories__details--Price">
                      $ {product.price.amount}{" "}
                    </p>
                    <p className="categories__details--Text">{product.title}</p>
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
