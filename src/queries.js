import { collection, getDocs, query, where } from "firebase/firestore";
import firebaseDB from "./firebase";

export const getData = async ({
  title = undefined,
  category = undefined,
  brand = undefined,
}) => {
  let valRef = collection(firebaseDB, "items");
  if (title) {
    valRef = query(valRef, where("title", ">=", title));
  }
  if (category) {
    valRef = query(valRef, where("category", "==", category));
  }
  if (brand) {
    valRef = query(valRef, where("brand", "==", brand));
  }

  const data = await getDocs(valRef);
  const allData = data.docs.map((val) => ({ ...val.data(), id: val.id }));
  return allData;
};
