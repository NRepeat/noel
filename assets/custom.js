document.addEventListener('DOMContentLoaded', () => {
  const imageSearchButton = document.getElementById('search-bar-btn');
  imageSearchButton.style.display = 'flex';
  imageSearchButton.innerHTML = `
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 14.9277H17.5" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M15.0713 12.5V17.5" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M8.5 12.5C10.1569 12.5 11.5 11.1569 11.5 9.5C11.5 7.84315 10.1569 6.5 8.5 6.5C6.84315 6.5 5.5 7.84315 5.5 9.5C5.5 11.1569 6.84315 12.5 8.5 12.5Z" stroke="currentColor"></path>
    <path d="M2.5 1.5H5.5" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M10 15.5H3C1.61929 15.5 0.5 14.3807 0.5 13V6C0.5 4.61929 1.61929 3.5 3 3.5H14C15.3807 3.5 16.5 4.61929 16.5 6V11" stroke="currentColor"></path>
  </svg>`
  ;
})