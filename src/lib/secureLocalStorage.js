import secureLocalStorage from "react-secure-storage";

// set access token
export const setAccessToken = (accessToken) => {
  secureLocalStorage.setItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY,
    accessToken
  );
};

// Function to clear all items in secure local storage
export const clearSecureLocalStorage = () => {
  // This will clear all items from the secure local storage
  secureLocalStorage.clear();
};

export const getAccessToken = () => {
  const accessToken = secureLocalStorage.getItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY
  );
  return accessToken;
};

// remove access token
export const removeAccessToken = () => {
  secureLocalStorage.removeItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY
  );
};
