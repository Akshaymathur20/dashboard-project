import React, { useState } from 'react';

const AddWidget = ({ category, onAddWidget, onClose }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const newWidget = {
      id: Date.now(),
      name,
      text,
    };
    onAddWidget(category, newWidget);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Add Widget to {category}</h2>
        <input 
          type="text" 
          placeholder="Widget Name" 
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <textarea 
          placeholder="Widget Text" 
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <div className="flex justify-end">
          <button 
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Add
          </button>
          <button 
            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
