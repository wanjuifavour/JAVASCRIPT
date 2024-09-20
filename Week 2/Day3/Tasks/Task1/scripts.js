// Fetching event data from JSON server using fetch API
fetch('http://localhost:3000/events')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(eventList => {
        renderEvents(eventList);
    })
    .catch(error => {
        displayError('There was a problem with the fetch operation: ' + error.message);
    });

// Render events to the DOM using the data from the JSON server
function renderEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    events.forEach(event => {

        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        const eventImage = document.createElement('img');
        eventImage.src = event.imageUrl;
        eventImage.alt = event.title;

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

        eventInfo.appendChild(eventTitle);
        eventInfo.appendChild(eventDate);
        eventInfo.appendChild(eventLocation);
        eventInfo.appendChild(eventCompany);
        eventInfo.appendChild(eventPrice);

        eventCard.appendChild(eventImage);
        eventCard.appendChild(eventInfo);

        eventsContainer.appendChild(eventCard);
    });
}

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}
