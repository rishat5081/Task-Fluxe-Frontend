import { useState, createContext } from "react";

export const ModalContext = createContext(null);

const Provider = ({ children }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const showDrawer = ({ content, title }) => {
    setIsModalShown(true);
    setModalContent(content);
    setModalTitle(title);
  };

  const hideDrawer = () => {
    setIsModalShown(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isShown: isModalShown,
        onShow: showDrawer,
        onHide: hideDrawer,
        content: modalContent,
        title: modalTitle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default Provider;
