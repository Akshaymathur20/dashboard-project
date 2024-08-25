
import React from 'react';
import Widget from './Widget';

const Category = ({ category, onRemoveWidget, onAddWidget }) => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Container for the entire section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-left">{category.name}</h2>

        {/* Container for cards and add button */}
        <div className="flex justify-center gap-6 flex-wrap">
          {category.widgets.length > 0 ? (
            category.widgets.map(widget => (
              <div
                key={widget.id}
                className=" relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" 
              >
                <Widget
                  widget={widget}
                  category={category.name}
                  onRemoveWidget={() => onRemoveWidget(category.name, widget.id)}
                />
              </div>
            ))
          ) : (
            <div
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
              style={{ width: '250px', height: '300px' }}
            >
              <p className="text-gray-500">No widgets found for this category.</p>
            </div>
          )}

          {/* Add Widget Card */}
          <div
            className="rounded overflow-hidden shadow-lg bg-white flex-shrink-0"
            style={{ width: '250px', height: '300px' }}
          >
            <div className="px-6 py-4 h-full flex items-center justify-center">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                onClick={() => onAddWidget(category.name)}
              >
                + Add Widget
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
