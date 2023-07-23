document.addEventListener('DOMContentLoaded', function () {
    const openPagesBtn = document.getElementById('openPagesBtn');
    const inputPage1 = document.getElementById('inputPage1');
    const inputPage2 = document.getElementById('inputPage2');
    const inputPage3 = document.getElementById('inputPage3');
    const inputPage4 = document.getElementById('inputPage4');
  
    const savedPage1 = localStorage.getItem('page1');
    const savedPage2 = localStorage.getItem('page2');
    const savedPage3 = localStorage.getItem('page3');
    const savedPage4 = localStorage.getItem('page4');

    if (savedPage1) {
      inputPage1.value = savedPage1;
    }
  
    if (savedPage2) {
      inputPage2.value = savedPage2;
    }

    if (savedPage3) {
        inputPage3.value = savedPage3;
      }
    
    if (savedPage4) {
        inputPage4.value = savedPage4;
    }
    
  
    openPagesBtn.addEventListener('click', function () {
      const page1URL = inputPage1.value;
      const page2URL = inputPage2.value;
      const page3URL = inputPage3.value;
      const page4URL = inputPage4.value;
  
      if (page1URL && page2URL && page3URL && page4URL) {
        localStorage.setItem('page1', page1URL);
        localStorage.setItem('page2', page2URL);
        localStorage.setItem('page3', page3URL);
        localStorage.setItem('page4', page4URL);
  
        chrome.tabs.create({ url: page1URL });
        chrome.tabs.create({ url: page2URL });
        chrome.tabs.create({ url: page3URL });
        chrome.tabs.create({ url: page4URL });
      }
    });
  });
  