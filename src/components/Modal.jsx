import { useEffect, useRef } from "react";

import "./Modal.css";

export default function Modal({ isOpen, hasClosed, children }) {
  const dialog = useRef(null);
  const closeBtn = useRef(null);

  function openModal(isOpen) {
    if (isOpen) dialog.current.showModal();
  }

  function closeModal(e) {
    e.preventDefault();
    dialog.current.close();
    hasClosed();
  }

  useEffect(() => {
    openModal(isOpen);
  }, [isOpen]);

  return (
    <dialog ref={dialog} className="modal">
      <form>
        <button onClick={(e) => closeModal(e)} ref={closeBtn}>
          Close
        </button>
        {children}
      </form>
    </dialog>
  );
}
