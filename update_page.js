const actsData = [
    {
      title: "The Joint Electricity Regulatory Commission for the UT of J&K and the UT of Ladakh (Guidelines for Load Forecasts, Resources Plans, and Power Procurement Process) Regulations, 2023",
      description: "The Joint Electricity Regulatory Commission issued regulations on load forecasts, resource plans, and power procurement processes on November 09, 2023."
    },
    {
      title: "Notification by Government of Andhra Pradesh for Aadhaar Authentication Services",
      description: "The Government of Andhra Pradesh issued a notification on February 11, 2023, regarding the use of Aadhaar authentication services for beneficiaries in online portals."
    },
    // Add other items in a similar format
    // ...
    {
      title: "Notification by the Central Pollution Control Board (CPCB) on E-Waste Rules",
      description: "The Central Pollution Control Board issued a notification on September 11, 2023, regarding producers and recyclers under the E-Waste (Management) Rules, 2022."
    }
  ];
  
  function createActCard(act) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const title = document.createElement("h2");
    title.textContent = act.title;
  
    const description = document.createElement("p");
    description.textContent = act.description;
  
    const button = document.createElement("button");
    button.textContent = "  __PDF__  ";
    button.classList.add("description-btn");
    button.onclick = function() {
      window.location.href = '#';
    };
  
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);
  
    return card;
  }
  
  
  
  
  
  
  
  function displayActs(acts) {
    const actsContainer = document.getElementById("actsContainer");
    actsContainer.innerHTML = "";
  
    acts.forEach(act => {
      const actCard = createActCard(act);
      actsContainer.appendChild(actCard);
    });
  }
  
  function searchActs(event) {
    const searchInput = event.target.value.toLowerCase();
    
    const matchingActs = actsData.filter(act => {
      return (
        act.title.toLowerCase().includes(searchInput) ||
        act.description.toLowerCase().includes(searchInput)
      );
    });
  
    displayActs(matchingActs);
  }
  
  window.addEventListener("load", () => {
    displayActs(actsData);
    document.getElementById("searchInput").addEventListener("input", searchActs);
  });
  