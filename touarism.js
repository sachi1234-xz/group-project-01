const data = {
    beach: [
        {
            name: "Mirissa Beach",
            description: "Mirissa is a crescent-shaped beach facing the Indian Ocean, perfect for:Swimming and sunbathing,Water sports like surfing and snorkeling,Whale and dolphin watching,Sunset strolls and relaxation,The town blends natural beauty with seaside cafés, restaurants, and nightlife, making it ideal for families, couples, and backpackers alike,Surfing,Swimming & Sunbathing,Parrot Rock,Coconut Tree Hill,Secret Beach,Food & Nightlife.",
            image: "https://assets.telegraphindia.com/telegraph/2023/Aug/1691497505_cms001.jpg",
            hotel: "Ocean View Hotel",
            email: "oceanview@gmail.com",
            phone: "+94 77 123 4567"
        }
    ],
    historical: [
        {
            name: "Sigiriya",
            description: "Ancient rock fortress and UNESCO heritage site.",
            image: "https://tse2.mm.bing.net/th/id/OIP.BEtFavWDiv7iNvt7g3JTfQHaFR?rs=1&pid=ImgDetMain&o=7&rm=3",
            hotel: "Sigiriya Resort",
            email: "sigresort@gmail.com",
            phone: "+94 66 555 7890"
        }
    ],
    forest: [
        {
            name: "Sinharaja Forest",
            description: "Rainforest with rich biodiversity.",
            image: "https://tse2.mm.bing.net/th/id/OIP.Zcf1ziOzWF4hbK54nKIFbAHaE5?rs=1&pid=ImgDetMain&o=7&rm=3",
            hotel: "Rainforest Lodge",
            email: "rainforest@gmail.com",
            phone: "+94 71 987 6543"
        }
    ]
};

function showCategory(category) {
    const container = document.getElementById("places");
    container.innerHTML = "";

    data[category].forEach(place => {
        container.innerHTML += `
            <div class="place-card">
                <img src="${place.image}">
                <div class="content">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                    <h4>Nearby Hotel</h4>
                    <p><b>${place.hotel}</b></p>
                    <p>Email: ${place.email}</p>
                    <p>Phone: ${place.phone}</p>
                </div>
            </div>
        `;
    });
}

