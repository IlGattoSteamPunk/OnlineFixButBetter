document.addEventListener('DOMContentLoaded', () => {
    const games = [
        {
            title: "Cyberpunk 2077",
            version: "v2.1",
            downloadUrl: "https://example.com/download/cyberpunk2077",
            image: "https://picsum.photos/400/300?random=1"
        },
        {
            title: "Elden Ring",
            version: "v1.10",
            downloadUrl: "https://example.com/download/eldenring",
            image: "https://picsum.photos/400/300?random=2"
        },
        {
            title: "Hogwarts Legacy",
            version: "v1.0.2",
            downloadUrl: "https://example.com/download/hogwartslegacy",
            image: "https://picsum.photos/400/300?random=3"
        },
        // Aggiungi altri giochi qui
    ];

    const grid = document.querySelector('.games-grid');
    
    // Genera le card
    games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-thumbnail">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-details">
                    <p>Version: ${game.version}</p>
                </div>
                <a href="${game.downloadUrl}" class="download-link" target="_blank">
                    <i class="fas fa-download"></i>
                    Download Now
                </a>
            </div>
        `;
        grid.appendChild(card);
    });

    // Funzionalità di ricerca
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.game-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.game-title').textContent.toLowerCase();
            card.style.display = title.includes(term) ? 'block' : 'none';
        });
    });
});