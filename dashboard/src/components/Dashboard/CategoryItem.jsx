import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from '../../../public/css/Dashboard/CategoryItem.module.css';

const CategoryItem = ({nameCat, number}) => {
  return (
    <div className={`card ${styles.categories}`}>
    <div className='card-body'>{nameCat}:  <span className='pl-2'>{number}</span></div>
    </div>
  );
};

CategoryItem.propTypes = {};

export default CategoryItem