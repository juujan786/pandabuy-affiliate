import React, { useEffect, useState } from "react";
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

  const [products, setProducts] = useState([]);

  const handleChange = (e, field) => {
    setItem((prevItem) => ({
      ...prevItem,
      [field]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const valRef = collection(firebaseDB, "items");
    await addDoc(valRef, item);
    alert("Data added successfully");
  };

  const getData = async () => {
    const valRef = collection(firebaseDB, "items");
    const data = await getDocs(valRef);
    const allData = data.docs.map((val) => ({ ...val.data(), id: val.id }));
    setProducts(allData);
  };

  useEffect(() => {
    console.log(products); // Log the products state when it changes
  }, [products]);

  return (
    <div className="min-h-screen text-stone-300 w-[80%] mx-auto">
      <form className="flex flex-col gap-4" action="" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Item title"
          value={item.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <input
          type="number"
          placeholder="Item Price"
          value={item.price || ""}
          onChange={(e) => handleChange(e, "price")}
        />
        <input
          type="text"
          placeholder="Item Image URL"
          value={item.image}
          onChange={(e) => handleChange(e, "image")}
        />
        <input
          type="text"
          placeholder="Item Purchase URL"
          value={item.buy}
          onChange={(e) => handleChange(e, "buy")}
        />
        <input
          type="text"
          placeholder="Item QC URL"
          value={item.qc}
          onChange={(e) => handleChange(e, "qc")}
        />
        <button type="submit">Submit</button>
      </form>

      <button
        className="bg-stone-800 text-stone-300 border border-stone-500 px-4 py-2 outline-none"
        onClick={getData}
      >
        Get Data
      </button>
    </div>
  );
};

export default AddItem;
