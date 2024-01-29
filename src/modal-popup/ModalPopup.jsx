import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

function ModalPopup() {
  const [modalOpen, setModalOpen] = useState(false);
  const onClose = () => {
    setModalOpen(false);
  };
  const body = <h1>Hello World</h1>;
  return (
    <div className="modal-popup-container">
      <button
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        Open Modal
      </button>
      {modalOpen && <Modal onClose={onClose} body={body} />}
    </div>
  );
}

export default ModalPopup;
