import React, { useState, useEffect } from "react";
import RegisterModal from "./register";
import LoginModal from "./loginModal";

interface ILoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalController = (props: ILoginPopupProps): JSX.Element => {
  const { isOpen, onClose } = props;

  const [currentModal, setCurrentModal] = useState<"login" | "register" | null>(
    null
  );

  useEffect(() => {
    setCurrentModal(isOpen ? "login" : null);
  }, [isOpen]);

  const toggleModal = (): void => {
    setCurrentModal((current) => (current === "login" ? "register" : "login"));
  };

  const closeModal = (): void => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <LoginModal toggleModal={toggleModal} closeModal={closeModal} />
      )}

      {currentModal === "register" && (
        <RegisterModal toggleModal={toggleModal} closeModal={closeModal} />
      )}
    </>
  );
};

export default ModalController;
