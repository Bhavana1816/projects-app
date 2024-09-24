import React, { useState } from 'react';

const CatSorting = () => {
  const [categories, setCategories] = useState([
    'Standard',
    'Private',
    'Protected',
    'Public',
    'Extended',
    'Actions',
    '.NET',
    'MSAA',
    'RTTI',
    'Debug Agent',
    'UI Automation',
    'Flex',
    'Silverlight',
    'Firefox',
    'Internet Explorer'
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const moveUp = () => {
    if (selectedCategory !== null && selectedCategory > 0) {
      const newCategories = [...categories];
      [newCategories[selectedCategory], newCategories[selectedCategory - 1]] = [
        newCategories[selectedCategory - 1],
        newCategories[selectedCategory]
      ];
      setCategories(newCategories);
      setSelectedCategory(selectedCategory - 1);
    }
  };

  const moveDown = () => {
    if (
      selectedCategory !== null &&
      selectedCategory >= 0 &&
      selectedCategory < categories.length - 1
    ) {
      const newCategories = [...categories];
      [newCategories[selectedCategory], newCategories[selectedCategory + 1]] = [
        newCategories[selectedCategory + 1],
        newCategories[selectedCategory]
      ];
      setCategories(newCategories);
      setSelectedCategory(selectedCategory + 1);
    }
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className="cat-sorting">
      <h1>Customize Categories Sorting</h1>
      <div className="category-list">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${
              selectedCategory === index ? 'selected' : ''
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={moveUp}>Move Up</button>
        <button onClick={moveDown}>Move Down</button>
      </div>
    </div>
  );
};

export default CatSorting;