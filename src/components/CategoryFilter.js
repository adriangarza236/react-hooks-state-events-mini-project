import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  function handleClick(event) {
    const selectedCategory = event.target.textContent;
    onSelectCategory(selectedCategory);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={handleClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
