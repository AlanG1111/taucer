export const handleScrollToForm = (pageId: string) => {
  // Get the form container element by its ID
  const formContainer = document.getElementById(pageId);

  // Check if the form container exists
  if (formContainer) {
    const formHeight = 538; // Height of the form in pixels

    // Get the position of the form container relative to the top of the document
    const formPosition = formContainer.getBoundingClientRect().top + window.scrollY;

    // Scroll to the form with smooth animation, adjusting the scroll position to center the form
    window.scrollTo({
      top: formPosition - (window.innerHeight / 2 - formHeight / 2), // Center the form with an offset
      behavior: 'smooth', // Smooth scrolling
    });
  }
};
