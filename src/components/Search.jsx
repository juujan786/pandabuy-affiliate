import React, { useRef } from "react";
import Modal from "./Modal";
import { stagger, useAnimate } from "framer-motion";

const Search = ({ onDone }) => {
  const search = useRef();
  const [scope, animate] = useAnimate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchItem = search.current.value;

    if (!searchItem.title.trim()) {
      animate(
        "input",
        { x: [-10, 0, 10, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.05) }
      );
      return;
    }

    onDone();
  };
  return (
    <div>
      <Modal title="New Challenge" onClose={onDone}>
        <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
          <p className="new-challenge-actions">
            <button type="button" onClick={onDone}>
              Cancel
            </button>
            <button>Search</button>
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default Search;
