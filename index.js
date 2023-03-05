const searchInput = document.getElementById('searchInput');
const cryptoCards = document.getElementById('cryptoCards').children;

searchInput.addEventListener('keyup', function(event) {
  const searchText = event.target.value.toLowerCase();
  for (let i = 0; i < cryptoCards.length; i++) {
    const cryptoName = cryptoCards[i].querySelector('.card-title').textContent.toLowerCase();
    if (cryptoName.includes(searchText)) {
        cryptoCards[i].style.display = 'block';
      } else {
        cryptoCards[i].style.display = 'none';
      }
    }
  });