import { atom } from 'nanostores';

// Check if a previously saved theme exists in localStorage
const savedTheme = localStorage.getItem('isDarkMode') === 'true';

// Initialize the store with the saved value or a default
export const isDarkMode = atom(savedTheme);

// Save the theme to localStorage whenever it changes
isDarkMode.subscribe((newValue) => {
  localStorage.setItem('isDarkMode', newValue);
});