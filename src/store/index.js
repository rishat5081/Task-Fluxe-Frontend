import CalenderEventProvider from "./calendarEventContext";
import DrawerProvider from "./drawerContext";
import ModalProvider from "./modalContext";

const ContextProviders = ({ children }) => {
  return (
    <DrawerProvider>
      <ModalProvider>
        <CalenderEventProvider>{children}</CalenderEventProvider>
      </ModalProvider>
    </DrawerProvider>
  );
};

export default ContextProviders;
