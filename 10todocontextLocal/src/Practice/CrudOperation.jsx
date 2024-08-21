// import React, { useState } from 'react';

// const CrudApp = () => {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddItem = () => {
//     if (inputValue.trim() !== '') {
//       const newItem = {
//         id: new Date().getTime().toString(),
//         value: inputValue.trim()
//       };

//       setItems([...items, newItem]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteItem = (itemId) => {
//     setItems(items.filter(item => item.id !== itemId));
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleAddItem}>Add Item</button>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.value}
//             <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CrudApp;

import React, { useState } from "react";

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: new Date().getTime().toString(),
        value: inputValue.trim(),
      };

      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const handleEditItem = (itemId, itemValue) => {
    setEditingItemId(itemId);
    setEditingValue(itemValue);
  };

  const handleUpdateItem = () => {
    if (editingValue.trim() !== "") {
      const updatedItems = items.map((item) => {
        if (item.id === editingItemId) {
          return {
            ...item,
            value: editingValue.trim(),
          };
        }
        return item;
      });

      setItems(updatedItems);
      setEditingItemId(null);
      setEditingValue("");
    }
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingItemId === item.id ? (
              <input
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              />
            ) : (
              item.value
            )}
            {editingItemId === item.id ? (
              <button onClick={handleUpdateItem}>Update</button>
            ) : (
              <button onClick={() => handleEditItem(item.id, item.value)}>
                Edit
              </button>
            )}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
