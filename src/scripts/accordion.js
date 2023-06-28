const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  const image = header.querySelector('img');

  header.addEventListener('click', () => {
    const isActive = header.classList.contains('active');
    const accordionContent = header.parentElement.querySelector('.accordion-content');
    
    accordionHeaders.forEach(otherHeader => {
      otherHeader.classList.remove('active');
      otherHeader.style.fontWeight = 'normal';
      const otherAccordionContent = otherHeader.parentElement.querySelector('.accordion-content');
      otherAccordionContent.style.display = 'none';
    });
    
    if (!isActive) {
      header.classList.add('active');
      header.style.fontWeight = 'bold';
      accordionContent.style.display = 'block';
      image.style.transform = 'scaleY(-1)';
    } else {
      header.classList.remove('active');
      header.style.fontWeight = 'normal';
      accordionContent.style.display = 'none';
      image.style.transform = 'none';
    }
  });
});


const pattern = document.getElementById('pattern');
const woman = document.getElementById('woman');

function checkScreenWidth() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth <1120) {
    pattern.src = "./src/assets/bg-pattern-mobile.svg";
    pattern.alt = "pattern-mobile";
    woman.src = "./src/assets/illustration-woman-online-mobile.svg";
    woman.alt = "woman-mobile"
  } else {
    pattern.src = "./src/assets/bg-pattern-desktop.svg";
    pattern.alt = "pattern-desktop"
    woman.src = "./src/assets/illustration-woman-online-desktop.svg";
    woman.alt = "woman-desktop"
  }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
