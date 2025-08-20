const startYear = 2025; // change to the year your site/project started
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = 
    startYear === currentYear ? currentYear : `${startYear}–${currentYear}`;