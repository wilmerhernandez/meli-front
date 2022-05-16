import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import detailService from "../../services/detailService";
import { GenericResponse } from "../../interfaces/interface";
/**
 * app render product details
 * instace useState with GenericResponse type
 * @returns GenericResponse
 */
function Details() {
  const searchParams = useParams();
  const [product, setProduct] = useState<GenericResponse>();

  useEffect(() => {
    let q = searchParams.id;
    if (!q) return;

    (async () => {
      const data = await detailService.detailService(q);
      setProduct(data);

    })();
  }, [searchParams]);
  
  return (
    <div className="details">
      { product &&
       <>
        <div className="details__product">
            <div className="details__productimg">
              <img src={product.item?.picture} alt={product.item?.title} />
            </div>
            <div className="details__productDet">
              <p>
                {product.item?.condition} - {product.item?.sold_quantity}{" "}
                vendidos
              </p>
              <h4>{product.item?.title}</h4>
              <h2> {`$ ${product.item?.price.amount}`}</h2>
              <a href="#" className="myButton">
                Comprar
              </a>
            </div>
          </div>
          <div className="descript">
            <h3>Descripción del producto</h3>
            <p>{product.item?.description}</p>
          </div>
       </>
      }
    </div>
  );
}
export default Details;
