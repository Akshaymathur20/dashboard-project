
import React, { useState } from 'react';

const AddWidget = ({ categories, onAddWidget, onClose }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleAddWidget = () => {
    if (widgetName && widgetText) {
      const newWidget = {
        id: Math.random(), 
        name: widgetName,
        text: widgetText,
      };
      onAddWidget(category, newWidget);
      onClose(); 
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add New Widget</h2>
        
        <label className="block mb-2">
          Category:
          <select
            className="block w-full p-2 mt-1 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        
        <label className="block mb-2">
          Widget Name:
          <input 
            className="block w-full p-2 mt-1 border rounded"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
        </label>

        <label className="block mb-2">
          Widget Text:
          <textarea 
            className="block w-full p-2 mt-1 border rounded"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
          />
        </label>

        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={handleAddWidget}
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
