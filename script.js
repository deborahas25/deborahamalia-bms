// Tulis JS DOM manipulation kamu di sini!

// === Quest 1 ===

// 1. Ambil logo (class="logo")
const logo = document.querySelector('.logo');
// 2. Klik logo → alert (contoh: alert('Selamat datang!'))
logo.addEventListener('click', function(){
    alert('Selamat datang!');
})
// === Quest 2 ===

// 3. Ambil semua kartu (.card)
const cards = document.querySelectorAll('.card');
// 4. Klik kartu → alert isi kartunya (hint: card.querySelector('p').textContent)
cards.forEach(function(card){
    card.addEventListener('click', function(){
        alert(card.querySelector('p').textContent);
    })
})