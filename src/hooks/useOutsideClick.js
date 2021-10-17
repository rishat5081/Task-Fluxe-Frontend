import { useRef, useEffect, useState } from "react";

const useOutsideClick = () => {
  const ref = useRef();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (isShown && !ref.current?.contains(e.target)) {
        setIsShown(false);
      }
    };

    document.addEventListener("mousedown", checkOutsideClick);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [isShown]);

  return { ref, isShown, setIsShown };
};

export default useOutsideClick;
