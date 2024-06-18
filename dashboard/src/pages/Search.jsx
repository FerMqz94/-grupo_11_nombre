// import { useState, useEffect, useRef } from 'react';

// function SearchProducts() {
//   const [search, setSearch] = useState([]);
//   const [keyword, setKeyword] = useState("");

//   const inputKeyword = useRef();

//   const changeKeyword = (e) => {
//     e.preventDefault();
//     setKeyword(inputKeyword.current.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3030/api/admin/products?q=${keyword}` // Updated endpoint and query param
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const products = await response.json();
//         setSearch(products); // Assuming the response contains an array of products
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     fetchData();
//   }, [keyword]);

//   return (
//     <div className="container-fluid">
//       <div className="row my-4">
//         <div className="col-12 col-md-6">
//           {/* Search Bar */}
//           <form method="GET" onSubmit={changeKeyword}>
//             <div className="form-group">
//               <label htmlFor="">Buscar productos:</label>
//               <input ref={inputKeyword} type="text" className="form-control" />
//             </div>
//             <button className="btn btn-info">Buscar</button>
//           </form>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-12">
//           <h2>Productos para la palabra: {keyword}</h2>
//         </div>
//         {search && search.length > 0 && (
//           <div className="row">
//             {/* List Products Here */}
//             {search.map((product, i) => (
//               <div className="col-sm-6 col-md-3 my-4" key={i}>
//                 {/* Modify this section to display product details */}
//                 <div className="card shadow mb-4">
//                   <div className="card-header py-3">
//                     <h5 className="m-0 font-weight-bold text-gray-800">
//                       {product.name} {/* Assuming a 'name' property exists */}
//                     </h5>
//                   </div>
//                   {/* Add product description, price, etc. if available */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//         {search && search.length === 0 && (
//           <div className="alert alert-warning text-center">
//             No se encontraron productos
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchProducts;

import React, { useState, useEffect } from 'react';

function CategoriesWithQuantities() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState({ categories: true });
  const [errors, setErrors] = useState({});

  const getCategories = async () => {
    try {
      const endpoint = 'http://localhost:3030/api/admin/products'; // API endpoint
      const { ok, data } = await fetch(endpoint).then((res) => res.json());

      if (ok) {
        // Process the fetched data to extract categories and quantities
        const processedCategories = data.reduce((acc, product) => {
          const category = product.category;
          if (acc[category]) {
            acc[category].quantity += 1;
          } else {
            acc[category] = { name: category, quantity: 1 };
          }
          return acc;
        }, {});

        setCategories(Object.values(processedCategories)); // Convert object to array
        setLoading({ ...loading, categories: false });
      } else {
        setErrors({
          ...errors,
          categories: `Error fetching categories: ${data.message || 'Unknown error'}`,
        });
      }
    } catch (error) {
      setErrors({
        ...errors,
        categories: error.message,
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const totalCategories = categories.length; // Calculate total categories

  return (
    <div>
      {loading.categories && <p>Cargando categorías...</p>}
      {!loading.categories && categories.length === 0 && <p>No hay categorías disponibles</p>}
      {!loading.categories && categories.length > 0 && (
        <div>
          <h2>Categorías y cantidades de productos ({totalCategories} categorías)</h2>
          <ul>
            {categories.map((category) => (
              <CategoryItem key={category.name} {...category} /> // Pass all category properties
            ))}
          </ul>
        </div>
      )}
      {errors.categories && <p className="error">{errors.categories}</p>}
    </div>
  );
}

export default CategoriesWithQuantities;


