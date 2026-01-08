const cardContainer = document.getElementById('card-container');

// 10 ta xizmat ma'lumotlari
const cardData = [
    { title: "Dasturlash", desc: "Veb va mobil ilovalar yaratish xizmati.", img: "valve.png" },
    { title: "Grafik Dizayn", desc: "Brending va logotip yaratish.", img: "electrical-energy.png" },
    { title: "Marketing", desc: "Ijtimoiy tarmoqlarda reklama yuritish.", img: "gas-cylinder.png" },
    { title: "Kiberxavfsizlik", desc: "Tizimlarni tashqi hujumlardan himoya qilish.", img: "policeman.png" },
    { title: "SMM", desc: "Targeting va kreativ kontent yaratish.", img: "surgery-room.png" },
    { title: "Data Science", desc: "Ma'lumotlarni tahlil qilish va prognozlash.", img: "truck.png" }
];

// Cardlarni yaratish funksiyasi
function createCards() {
    cardData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-img">
                <img src="img/${item.img}" alt="${item.title}">
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        
        cardContainer.appendChild(card);
    });
}

// Sahifa yuklanganda ishga tushadi
createCards();