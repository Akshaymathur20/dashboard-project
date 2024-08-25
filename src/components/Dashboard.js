import React, { useState } from 'react';
import Category from './Category';
import AddWidget from './AddWidget';
import SearchBar from './SearchBar';

const initialData = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text for Widget 1" },
        { id: 2, name: "Widget 2", text: "Random text for Widget 2" },
      ],
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        { id: 3, name: "Widget 3", text: "Random text for Widget 3" },
      ],
    },
  ],
};

const Dashboard = () => {
  const [categories, setCategories] = useState(initialData.categories);
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState("");

  const addWidget = (categoryName, widget) => {
    setCategories(categories.map(category => {
      if (category.name === categoryName) {
        return { ...category, widgets: [...category.widgets, widget] };
      }
      return category;
    }));
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(categories.map(category => {
      if (category.name === categoryName) {
        return { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) };
      }
      return category;
    }));
  };

  const openAddWidgetModal = (categoryName) => {
    setSelectedCategory(categoryName); 
    setIsAddWidgetOpen(true);
  };

  const filteredCategories = categories.map((category) => {
    return {
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    };
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="flex items-center space-x-3">
          <button
            className="mt-3 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={() => openAddWidgetModal('')}  // Opens the modal to choose the category
          >
            + Add Widget
          </button>

          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/menu-vertical.png"
            alt="menu"
            className="cursor-pointer"
          />
        </div>
      </div>

      {filteredCategories.map(category => (
        <Category 
          key={category.name} 
          category={category} 
          onRemoveWidget={removeWidget} 
          onAddWidget={openAddWidgetModal} 
        />
      ))}

      {isAddWidgetOpen && (
        <AddWidget 
          categories={categories.map(cat => cat.name)} 
          selectedCategory={selectedCategory}
          onAddWidget={addWidget} 
          onClose={() => setIsAddWidgetOpen(false)} 
        />
      )}
    </div>
  );
};

export default Dashboard;
