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
      name: "Security Dashboard",
      widgets: [
        { id: 3, name: "Widget 3", text: "Random text for Widget 3" },
      ],
    },
  ],
};

const Dashboard = () => {
  const [categories, setCategories] = useState(initialData.categories);
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  const openAddWidgetModal = (category) => {
    setSelectedCategory(category);
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
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredCategories.map(category => (
        <Category 
          key={category.name} 
          category={category} 
          onRemoveWidget={removeWidget} 
          onAddWidget={() => openAddWidgetModal(category.name)} 
        />
      ))}

      {isAddWidgetOpen && (
        <AddWidget 
          category={selectedCategory} 
          onAddWidget={addWidget} 
          onClose={() => setIsAddWidgetOpen(false)} 
        />
      )}
    </div>
  );
};

export default Dashboard;
