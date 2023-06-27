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

/*
<img id="myImage" src="imagem-original.jpg" alt="Imagem Original">

<script>
  // Seleciona a imagem pelo ID
  const image = document.getElementById('myImage');

  // Verifica a largura da página
  function checkScreenWidth() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    // Verifica se a largura é inferior a 1120 pixels
    if (screenWidth < 1120) {
      // Altera o atributo src da imagem
      image.src = 'nova-imagem.jpg';
      image.alt = 'Nova Imagem';
    } else {
      // Define o atributo src da imagem de volta para a imagem original
      image.src = 'imagem-original.jpg';
      image.alt = 'Imagem Original';
    }
  }

  // Executa a função quando a página é carregada e redimensionada
  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);
</script>
*/