async function getCompanies() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        if (!Array.isArray(data.companies)) {
            throw new Error('Data is not an array');
        }
        generateSpotlights(data.companies);
    } catch (error) {
        console.error('Error fetching companies:', error);
    }
}


function generateSpotlights(companies) {
    const goldSilverCompanies = companies.filter(company => company.info[0].membership_level === 'Gold' || company.info[0].membership_level === 'Silver');

    // Display the spotlighted companies
    const spotlights = document.querySelectorAll('.banner');
    goldSilverCompanies.forEach((company, index) => {
        const spotlightDiv = document.getElementById(`company-spotlight-${index + 1}`);
        if (spotlightDiv) {
            spotlightDiv.innerHTML = `
                <h3>${company.name}</h3>
                <img src="images/members/${company.info[0].image}" alt="${company.name} Image">
                <p>${company.info[0].additional_info}</p>
                <p>Address: ${company.info[0].address}</p>
                <p>Phone: ${company.info[0].phone}</p>
                <p>Website: <a href="${company.info[0].website}">${company.info[0].website}</a></p>
            `;
        }
    });
}


getCompanies();
