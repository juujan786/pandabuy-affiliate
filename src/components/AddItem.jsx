import React, { useState } from "react";
import firebaseDB from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const AddItem = () => {
  const [item, setItem] = useState({
    title: "",
    price: null,
    image: "",
    buy: "",
    qc: "",
  });
  const handleClick = async () => {
    const valRef = collection(firebaseDB, "items");
    await addDoc(valRef, item);
    alert("Data added successfully");
  };
  return (
    <div className="w-full min-h-screen">
      <form action="" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Item title"
          value={item.title}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="Item Price"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Item Image URL"
          value={item.image}
          onChange={(e) => setItem({ ...item, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Item Purchase URL"
          value={item.buy}
          onChange={(e) => setItem({ ...item, buy: e.target.value })}
        />
        <input
          type="text"
          placeholder="Item QC URL"
          value={item.qc}
          onChange={(e) => setItem({ ...item, qc: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
