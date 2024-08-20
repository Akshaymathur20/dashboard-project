import React from 'react';
import Widget from './Widget';

const Category = ({ category, onRemoveWidget, onAddWidget }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>

      {category.widgets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.widgets.map(widget => (
            <Widget 
              key={widget.id} 
              widget={widget} 
              category={category.name} 
              onRemoveWidget={onRemoveWidget} 
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No widgets found for this category.</p>
      )}

      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={onAddWidget}
      >
        + Add Widget
      </button>
    </div>
  );
};

export default Category;
