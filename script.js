// Event Details Data
const eventData = {
    pycraft: {
        title: "Py-Craft (Hack with Python)",
        details: `
            <strong>Faculty Coordinators:</strong><br>
            1. Dr. M. Thamarai <br>
            2. Dr. S. Kamesh <br>
            3. Dr. B. Murali Krishna <br><br>
            <strong>Event Date:</strong> 20th - 22nd March 2025<br>
            <strong>Description:</strong> Solve challenges using Python in a hackathon-style event.
        `
    },
    innoex: {
        title: "InnoEX (Project Expo)",
        details: `
            <strong>Faculty Coordinators:</strong><br>
            1. Dr. KNH Srinivas <br>
            2. Dr. TDNSS Sarveswara Rao <br>
            3. Sri M. Venkata Suman <br>
            4. Sri P.V.V. Rajesh <br>
            5. Sri V. Anil Kumar <br>
            6. Sri B. Chanti <br><br>
            <strong>Event Date:</strong> 20th - 22nd March 2025<br>
            <strong>Description:</strong> Showcase your innovative projects at this exhibition.
        `
    },
    circuiton: {
        title: "Circuiton (Circuit Innovation & Building)",
        details: `
            <strong>Faculty Coordinators:</strong><br>
            1. Dr. Purnima K Sharma <br>
            2. Sri T. Sreenivasu <br>
            3. Smt. M. Neelima <br>
            4. Dr. B. Ashok Kumar <br><br>
            <strong>Event Date:</strong> 20th - 22nd March 2025<br>
            <strong>Description:</strong> Build and innovate circuits in this hands-on event.
        `
    }
};

// Function to Open Modal
function openModal(eventId) {
    const modal = document.getElementById("event-modal");
    document.getElementById("event-title").innerHTML = eventData[eventId].title;
    document.getElementById("event-details").innerHTML = eventData[eventId].details;
    modal.style.display = "block";
}

// Function to Close Modal
function closeModal() {
    document.getElementById("event-modal").style.display = "none";
}

// Close Modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("event-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
