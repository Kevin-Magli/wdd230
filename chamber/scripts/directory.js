const linksURL = "https://kevin-magli.github.io/wdd230/chamber/data/members.json";


async function getMembers() {
  const response = await fetch(linksURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayMembers(data);
  } else {
    console.error('Error: ' + response.statusText);
  }
}

function displayMembers(data) {
  
    const membersContainer = document.getElementById('members');

    data.companies.forEach(company => {
        const companyDiv = document.createElement('div');

        const nameElement = document.createElement('h3');
        nameElement.textContent = company.name;
        companyDiv.appendChild(nameElement);

        company.info.forEach(info => {
            
            const imageElement = document.createElement('img');
            imageElement.id = 'member-image';
            imageElement.src = `images/members/${info.image}`;
            companyDiv.appendChild(imageElement);
            
            const addressElement = document.createElement('p');
            addressElement.textContent = `Address: ${info.address}`;
            companyDiv.appendChild(addressElement);

            const phoneElement = document.createElement('p');
            phoneElement.textContent = `Phone: ${info.phone}`;
            companyDiv.appendChild(phoneElement);

            const websiteElement = document.createElement('p');
            const websiteLink = document.createElement('a');
            websiteLink.href = info.website;
            websiteLink.textContent = info.website;
            websiteElement.appendChild(websiteLink);
            companyDiv.appendChild(websiteElement);

            

            const membershipElement = document.createElement('p');
            membershipElement.textContent = `Membership Level: ${info.membership_level}`;
            companyDiv.appendChild(membershipElement);

            const additionalInfoElement = document.createElement('p');
            additionalInfoElement.textContent = `Additional Info: ${info.additional_info}`;
            companyDiv.appendChild(additionalInfoElement);
        });

        membersContainer.appendChild(companyDiv);       
    });
}



function checkView() {
    const viewSwitcher = document.getElementById('view-switcher');

    if (window.innerWidth > 500) {
        viewSwitcher.textContent = '▤';
    } else {
        viewSwitcher.style.display = 'none';
    } 
    
}

function switchView() {
    const viewSwitcher = document.getElementById('view-switcher');
    const membersContainer = document.getElementById('members');
    const childDivs = membersContainer.querySelectorAll('div');
    
    if (viewSwitcher.classList.contains('active')) {
        viewSwitcher.textContent = '◫';
        membersContainer.style.flexDirection = 'row';
        // childDivs.div.style.maxWidth = "48%";
        childDivs.forEach(div => {
            div.style.maxWidth = "48%";
        })
    }
    
    viewSwitcher.classList.toggle('active');

    if (viewSwitcher.classList.contains('active')) {
        viewSwitcher.textContent = '▤';
        membersContainer.style.flexDirection = 'row';
        // childDivs.div.style.maxWidth = "48%";
        childDivs.forEach(div => {
            div.style.maxWidth = "48%";
        })
    } else {
        viewSwitcher.textContent = '◫';
        membersContainer.style.flexDirection = 'column';
        // childDivs.div.style.maxWidth = "80%";
        childDivs.forEach(div => {
            div.style.maxWidth = "80%";
        })
    }
}

checkView();
getMembers();

// hamburger menu icone"