// Helper function to hidden an element
export const hiddenElement = (element) => {
    element.classList.remove("flex");
    element.classList.add("hidden");
};

// Helper function to show an element
export const showElement = (element) => {
  element.classList.remove("hidden");
  element.classList.add("flex");
};
