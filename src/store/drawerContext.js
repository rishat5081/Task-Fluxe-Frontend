import { useState, useCallback, createContext } from "react";

export const DrawerContext = createContext(null);

const Provider = ({ children }) => {
  const [isDrawerShown, setIsDrawerShown] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);

  const showDrawer = useCallback(({ content }) => {
    setIsDrawerShown(true);
    setDrawerContent(content);
  }, []);

  const hideDrawer = () => {
    setIsDrawerShown(false);
  };

  return (
    <DrawerContext.Provider
      value={{
        isShown: isDrawerShown,
        onShow: showDrawer,
        onHide: hideDrawer,
        content: drawerContent,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default Provider;
