import React, { useState, useEffect } from 'react';
import GroceryItem from './GroceryItem';
import emojiMap from './EmojiMap';

const GroceryList = ({ list, index, deleteList }) => {
  const [items, setItems] = useState(list.items);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemValue, setItemValue] = useState('');
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.value * item.quantity, 0);
    setTotalValue(total);
  }, [items]);

  const addItem = () => {
    if (itemName && itemQuantity && itemValue) {
      const emoji = emojiMap[itemName.toLowerCase()] || emojiMap.generic;
      setItems([
        ...items,
        { name: itemName, quantity: Number(itemQuantity), value: parseFloat(itemValue), emoji },
      ]);
      setItemName('');
      setItemQuantity('');
      setItemValue('');
    }
  };

  return (
    <div className="list-container bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-green-700">{list.name}</h2>
        <button onClick={() => deleteList(index)} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-2">Total: €{totalValue.toFixed(2)}</p>

      <div className="my-4 space-y-2">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          className="p-2 w-full rounded-md border border-gray-300"
        />
        <input
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          placeholder="Quantity"
          className="p-2 w-full rounded-md border border-gray-300"
        />
        <input
          type="number"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
          placeholder="Price (€)"
          className="p-2 w-full rounded-md border border-gray-300"
        />
        <button
          onClick={addItem}
          className="w-full bg-green-600 text-white rounded-full py-2 hover:bg-green-700"
        >
          Add Item
        </button>
      </div>

      <GroceryItem items={items} setItems={setItems} />
    </div>
  );
};

export default GroceryList;
