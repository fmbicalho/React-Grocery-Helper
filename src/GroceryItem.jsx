import React from 'react';

const GroceryItem = ({ items, setItems }) => {
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between items-center bg-green-100 p-2 rounded-md shadow-sm">
          <div>
            <span>{item.emoji} </span>
            {item.name} - {item.quantity}x - €{item.value}
          </div>
          <button onClick={() => deleteItem(index)} className="text-red-500 hover:text-red-700">
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GroceryItem;
