import React from "react";
import PropTypes from "prop-types";

const CategoryItem = ({ name  }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-primary text-white shadow">
        <div className="card-body">{name}</div>
      
      </div>
    </div>
  );
};

CategoryItem.propTypes = {};

export default CategoryItem;

// import React from "react";
// import PropTypes from "prop-types";
// const [lastProduct] = useState({});
// const CategoryItem = ({ name, quantity }) => {
//   return (
//     <div className="col-lg-6 mb-4">
//       <div className="card bg-dark text-white shadow">
//         <div className="card-body">
//           {lastProduct && ( // Check if lastProduct is available
//             <>
//               {name} ({quantity} productos)
//             </>
//           )}
//           {!lastProduct && <p>Cargando producto...</p>} {/* Display a loading message if not available */}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CategoryItem;