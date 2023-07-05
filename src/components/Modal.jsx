import { useEffect, useRef } from "react";
export default function Modal({ isOpen, children }) {
  const dialog = useRef(null);
  const closeBtn = useRef(null);

  function openModal(isOpen) {
    if (isOpen) dialog.current.showModal();
  }

  function closeModal(e) {
    e.preventDefault();
    dialog.current.close();
  }

  useEffect(() => {
    openModal(isOpen);
  }, [isOpen]);

  return (
    <dialog ref={dialog}>
      <form>
        <button onClick={(e) => closeModal(e)} ref={closeBtn}>
          Close
        </button>
        {children}
      </form>
    </dialog>
  );
}
