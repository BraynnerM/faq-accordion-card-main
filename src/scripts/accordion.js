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