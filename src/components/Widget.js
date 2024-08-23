import React from 'react';


const Widget = ({ widget, category, onRemoveWidget }) => {
  return (
    <div className="px-6 py-4">
      <h3 className="font-bold text-xl mb-2">{widget.name}</h3>
      <p className="mb-4">{widget.text}</p>
      <button 
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        onClick={() => onRemoveWidget(category, widget.id)}
      >
        &#10005;
      </button>
    </div>
  );
};

export default Widget;
