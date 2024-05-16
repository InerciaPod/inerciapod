document.addEventListener('DOMContentLoaded', function() {
    const podcastId = '1A1MiWqRXxpWnr7CmDuSCO'; // ID del podcast de Spotify
    const episodeList = document.getElementById('episodios-lista');
    const apiToken = 'YOUR_SPOTIFY_API_TOKEN'; // Reemplaza con tu token de acceso de Spotify

    fetch(`https://api.spotify.com/v1/shows/${podcastId}/episodes?limit=5`, {
        headers: {
            'Authorization': `Bearer ${apiToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const episodes = data.items;
        episodes.forEach(episode => {
            const episodeElement = document.createElement('div');
            episodeElement.classList.add('episodio');
            episodeElement.innerHTML = `
                <h3>${episode.name}</h3>
                <p>${episode.description}</p>
                <a href="${episode.external_urls.spotify}" class="btn">Escuchar Ahora</a>
            `;
            episodeList.appendChild(episodeElement);
        });
    })
    .catch(error => console.error('Error fetching episodes:', error));
});
