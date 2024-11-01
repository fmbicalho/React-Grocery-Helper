import React, { useState } from 'react';
import GroceryList from './GroceryList';

const App = () => {
  const [groceryLists, setGroceryLists] = useState([]);
  const [newListName, setNewListName] = useState('');

  const addNewList = () => {
    if (newListName.trim() !== '') {
      setGroceryLists([...groceryLists, { name: newListName, items: [] }]);
      setNewListName('');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-green-700 text-center mb-8">GroceryHelper</h1>
      
      <div className="w-full max-w-md mb-8 p-4 bg-white rounded-lg shadow-md">
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="New List"
          className="p-3 border rounded-md w-full mb-4"
        />
        <button
          onClick={addNewList}
          className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 w-full"
        >
          Add List
        </button>
      </div>

      <div className="w-full max-w-md space-y-6">
        {groceryLists.map((list, index) => (
          <GroceryList key={index} list={list} index={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
