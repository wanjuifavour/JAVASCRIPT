fetchWithRetry('http://localhost:3000/events');

function fetchWithRetry(url, retries = 3) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(eventList => {
            events = eventList;
            renderEvents(events);
        })
        .catch(error => {
            if (retries > 1) {
                return fetchWithRetry(url, retries - 1);
            } else {
                displayError('Failed after 3 retries: ' + error.message);
            }
        });
}

let events = [];

// Rendering events
function renderEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    const fragment = document.createDocumentFragment();
    events.forEach(event => {
        const eventCard = createEventCard(event);
        fragment.appendChild(eventCard);
    });
    eventsContainer.innerHTML = '';
    eventsContainer.appendChild(fragment);
}

// Create individual event card
function createEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');

    const eventImage = document.createElement('img');
    eventImage.src = event.imageUrl;
    eventImage.alt = event.title;
    eventImage.loading = 'lazy';

    const eventInfo = document.createElement('div');
    eventInfo.classList.add('event-info');

    const eventTitle = document.createElement('h3');
    eventTitle.textContent = event.title;

    const eventDate = document.createElement('p');
    eventDate.textContent = `Date: ${event.date}`;

    const eventLocation = document.createElement('p');
    eventLocation.textContent = `Location: ${event.location}`;

    const eventCompany = document.createElement('p');
    eventCompany.textContent = `Company: ${event.company}`;

    const eventPrice = document.createElement('p');
    eventPrice.classList.add('price');
    eventPrice.textContent = `Price: Ksh ${event.price}`;

    const favoriteBtn = document.createElement('button');
    favoriteBtn.textContent = 'Add to Favorites';
    favoriteBtn.addEventListener('click', () => addToFavorites(event));

    eventInfo.appendChild(eventTitle);
    eventInfo.appendChild(eventDate);
    eventInfo.appendChild(eventLocation);
    eventInfo.appendChild(eventCompany);
    eventInfo.appendChild(eventPrice);
    eventInfo.appendChild(favoriteBtn);

    eventCard.appendChild(eventImage);
    eventCard.appendChild(eventInfo);

    return eventCard;
}

// Filter and sort
document.getElementById('filter-btn').addEventListener('click', () => {
    const priceFilter = document.getElementById('price-filter').value;
    const locationFilter = document.getElementById('location-filter').value.toLowerCase();

    let filteredEvents = events;

    if (priceFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event =>
            priceFilter === 'low' ? event.price < 30 : event.price >= 30);
    }

    if (locationFilter) {
        filteredEvents = filteredEvents.filter(event =>
            event.location.toLowerCase().includes(locationFilter));
    }

    renderEvents(filteredEvents);
});

document.getElementById('sort-price').addEventListener('click', () => {
    const sortedByPrice = [...events].sort((a, b) => a.price - b.price);
    renderEvents(sortedByPrice);
});

document.getElementById('sort-date').addEventListener('click', () => {
    const sortedByDate = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    renderEvents(sortedByDate);
});

// Handle favorites
function addToFavorites(event) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.find(fav => fav.id === event.id)) {
        favorites.push(event);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavorites(favorites);
        //alert(`${event.title} has been added to favorites!`);
    } else {
       // alert(`${event.title} is already in favorites!`);
    }
}

// Render favorites
function renderFavorites(favorites) {
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = ''; // Clear previous content

    favorites.forEach(fav => {
        const favCard = createEventCard(fav);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove from Favorites';
        removeBtn.addEventListener('click', () => {
            removeFromFavorites(fav.id);
        });
        favCard.querySelector('.event-info').appendChild(removeBtn);
        favoritesContainer.appendChild(favCard);
    });
}

// Remove from favorites
function removeFromFavorites(eventId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(event => event.id !== eventId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites(favorites);
}

// Display errors
function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}
