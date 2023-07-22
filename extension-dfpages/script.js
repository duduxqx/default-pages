document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('openPages');
  
    button.addEventListener('click', function() {
      const googleURL1 = 'https://discord.com/app';
      const googleURL2 = 'https://instagram.com';
      const googleURL3 = 'https://youtube.com';

  
      chrome.tabs.create({ url: googleURL1 });
      chrome.tabs.create({ url: googleURL2 });
      chrome.tabs.create({ url: googleURL3 });
    });
  });
  