import React from "react";

function Modal({ header, body, footer, onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          {header || "header"} <span className="close-button" onClick={onClose}>&times;</span>{" "}
        </div>
        <div className="modal-body">{body || "body"}</div>
        <div className="modal-footer">{footer || "footer"}</div>
      </div>
    </div>
  );
}

export default Modal;
