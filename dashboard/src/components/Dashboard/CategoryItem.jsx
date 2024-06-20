import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CategoryItem = ({nameCat, number}) => {
 
  return (
    <div className="card bg-dark text-white shadow">
    <div className='card-body'>{nameCat}:  <span className='pl-2'>{number}</span></div>
    </div>
  );
};

CategoryItem.propTypes = {};

export default CategoryItem