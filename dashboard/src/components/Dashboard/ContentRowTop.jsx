
import React, { useEffect, useState } from "react";
import Alert from "../reutilice/Alert.jsx";

import imagenFondo from "../../assets/images/mandalorian.jpg";
import { ContentData } from "./ContentData";
import CategoryItem from "./CategoryItem.jsx";


function ContentRowTop({ data }) {
  const [metrics, setMetrics] = useState([]);
  const [categories, setcategories] = useState([]);
  const [lastProduct, setLastProduct] = useState({});
  const [loading, setLoading] = useState({
    metrics: true,
   categories: true,
    lastProduct: true
  });
  const [errors, setErrors] = useState({
    metrics: "",
    categories:"",
    lastProduct: ""
  });
  useEffect(() => {
    const getMetrics = async () => {
      try {
        const endpoint = "http://localhost:3030/api/metrics";
        const { ok = false, data = [] } = await fetch(endpoint, {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
        console.log(data);
        ok && setMetrics(data);

        setTimeout(() => {
          setLoading({
            ...loading,
            metrics: false,
          });
        }, 2000);
      } catch (error) {
        setErrors({
          ...errors,
          metrics: error.message,
        });
      }
    };

  
    const getCategories = async () => {
      try {
        const endpoint =
          "http://localhost:3030/api/query?q=SELECT name FROM categories";
        const { ok, data } = await fetch(endpoint, {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());

        ok && setcategories(data);

        setTimeout(() => {
          setLoading({
            ...loading,
            chefs: false,
          });
        }, 2000);
      } catch (error) {
        setErrors({
          ...errors,
          categories: error.message,
        });
      }
    };
    
  const getLastProduct = async () => {
    try {
      const endpoint =
        "http://localhost:3030/api/query?q=SELECT t0.*, t1.name AS image FROM products t0 INNER JOIN images t1 ON t1.id_product = t0.id WHERE t0.createdAt = (SELECT MAX(createdAt) FROM products) LIMIT 1";
      const {
        ok,
        data: [product],
      } = await fetch(endpoint, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      ok && setLastProduct(product);

      setTimeout(() => {
        setLoading({
          ...loading,
          lastProduct: false,
        });
      }, 2000);
    } catch (error) {
      console.log(error.message);
      setErrors({
        ...errors,
        lastProduct: error.message,
      });
    }
  };

  getCategories();
  getMetrics();
  getLastProduct();
}, []);

  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <div className="row">
          {/*<!-- Movies in Data Base -->*/}
          {/*<!-- Total awards -->*/}
          {/*<!-- Actors quantity -->*/}

          {!loading.metrics && (
            metrics.map((el, i) => {
              return <ContentData key={i} {...el} />;
            })
          ) 
          
          } 
        </div>
        {Object.values(errors).some((msg) => msg) &&
          Object.values(errors)
            .filter((msg) => msg)
            .map((msg) => {
              return <Alert message={msg} />;
            })}
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                 Ultimo producto : <strong>{lastProduct.name}</strong> 
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: 40 + "rem" }}
                    src={"http://localhost:3030/api/producto-detalle/image/" + lastProduct.image}
                    alt=" Star Wars - Mandalorian "
                  />
                </div>
                <p>
                {lastProduct.description}
              </p>
                  <a
                  className="btn btn-danger"
                  rel="nofollow"
                  // onClick={handleOpenModal}
                  href={"http://localhost:3030/producto-detalle/" + lastProduct.id}
                  target="_blank"
                >
                  Ver mas
                </a>
              </div>
            </div>
          </div>
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!-- Genres in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  categorias de productos 
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {categories.map(({ name }) => (
                    <CategoryItem key={name} name={name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
