import React from 'react';

const CategoryPage = ({ category }) => {
  return (
    <div style={{ fontFamily: 'Mullish, sans-serif', color: '#11142D' }}>

      <h1 style={{ paddingLeft: '120px',paddingTop: '50px' }}>{category} News</h1>
      <p style={{ paddingLeft: '120px' }}>
        Welcome to the {category} section. Here you will find the latest news and updates related to {category.toLowerCase()}.
      </p>
 
    </div>
  );
};

export default CategoryPage;
