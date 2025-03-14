// Seleciona todos os certificados e elementos do modal
const certificados = document.querySelectorAll('.certificado');
const pdfModal = document.getElementById('pdfModal');
const overlay = document.getElementById('overlay');
const iframe = pdfModal.querySelector('iframe');
const closeBtn = document.getElementById('closeBtn');

// Função para abrir o modal com o PDF selecionado
function openModal(pdfSrc) {
  iframe.src = pdfSrc;
  pdfModal.style.display = 'block';
  overlay.style.display = 'block';
}

// Função para fechar o modal e limpar o iframe
function closeModal() {
  pdfModal.style.display = 'none';
  overlay.style.display = 'none';
  iframe.src = "";
}

// Adiciona evento de clique para cada certificado
certificados.forEach(cert => {
  cert.addEventListener('click', () => {
    const pdfSrc = cert.getAttribute('data-pdf');
    openModal(pdfSrc);
  });
});

// Fecha o modal ao clicar no overlay ou no botão de fechar
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
