document.addEventListener("DOMContentLoaded", () => {
  // Function to load content into a placeholder
  function loadContent(url, placeholderId) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        document.getElementById(placeholderId).innerHTML = html;
      })
      .catch((error) => {
        console.error(`Could not load ${url}:`, error);
      });
  }

  // Load the header
  loadContent("header.html", "header-placeholder");

  // Load the footer
  loadContent("footer.html", "footer-placeholder");
});
