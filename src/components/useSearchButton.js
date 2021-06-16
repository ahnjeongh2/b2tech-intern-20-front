import { useState, useEffect } from 'react';

const useSearchButton = (searchModal, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const handleSearchModal = e => {
      if (
        searchModal.current !== null &&
        !searchModal.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', handleSearchModal);
    }

    return () => {
      window.removeEventListener('click', handleSearchModal);
    };
  }, [isActive, searchModal]);

  return [isActive, setIsActive];
};

export default useSearchButton;
