import secureLocalStorage from "react-secure-storage";

// set access token
export const setAccessToken = (accessToken) => {
  secureLocalStorage.setItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY,
    accessToken
  );
};

// get access token
export const getAccessToken = () => {
  const accessToken = secureLocalStorage.getItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY
  );
  return accessToken;
};

// Function to remove access token from secure local storage
export const removeAccessToken = () => {
  const storageKey = import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY;

  // Remove the access token using the storage key
  secureLocalStorage.removeItem(storageKey);
};

// Function to clear all items in secure local storage
export const clearSecureLocalStorage = () => {
  // This will clear all items from the secure local storage
  secureLocalStorage.clear();
};
