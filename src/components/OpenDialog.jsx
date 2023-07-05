import Modal from "../components/Modal";
import { useState } from "react";

import "./OpenDialog.css";

export default function OpenDialog({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenDialog() {
    setModalIsOpen(true);
  }

  function handleCloseDialog() {
    setModalIsOpen(false);
  }

  return (
    <>
      <button
        onClick={handleOpenDialog}
        className="btn open-dialog"
        title="more info on this app">
        <i className="fa-solid fa-question"></i>
      </button>
      <Modal isOpen={modalIsOpen} hasClosed={handleCloseDialog}>
        {children}
      </Modal>
    </>
  );
}
