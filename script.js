const services = [
    { name: "National Emergency Number", en: "National Emergency", number: "999", category: "All", icon: "assets/emergency.png" },
    { name: "Police Helpline Number", en: "Police", number: "999", category: "Police", icon: "assets/police.png" },
    { name: "Fire Service Number", en: "Fire Service", number: "999", category: "Fire", icon: "assets/fire-service.png" },
    { name: "Ambulance Service", en: "Ambulance", number: "1994-999999", category: "Health", icon: "assets/ambulance.png" },
    { name: "Women & Child Helpline", en: "Women & Child Helpline", number: "109", category: "Help", icon: "assets/emergency.png" },
    { name: "Anti-Corruption Helpline", en: "Anti-Corruption", number: "106", category: "Govt.", icon: "assets/emergency.png" },
    { name: "Electricity Helpline", en: "Electricity Outage", number: "16216", category: "Electricity", icon: "assets/emergency.png" },
    { name: "Brac Helpline", en: "Brac", number: "16445", category: "NGO", icon: "assets/brac.png" },
    { name: "Bangladesh Railway Helpline", en: "Bangladesh Railway", number: "163", category: "Travel", icon: "assets/Bangladesh-Railway.png" },
];


// Counters
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM
const cardSection = document.getElementById("cardSection");
const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Render Cards
services.forEach(service => {
    const card = document.createElement("div");
    card.className = "card-custom shadow-md bg-white p-4 rounded-lg";

    card.innerHTML = `
  <div class="flex justify-between items-start">
    <img src="${service.icon}" alt="${service.name}" class="h-10 w-10 bg-red-100 rounded-md p-2"/>
    <button class="heartBtn text-gray-400 hover:text-red-500">♡</button>
  </div>
  <div class="mt-3">
    <h3 class="font-bold text-black">${service.name}</h3>
    <p class="text-xs text-gray-500">${service.en}</p>
    <p class="mt-2 font-bold text-lg text-black">${service.number}</p>
    <span class="badge border-0 p-3 bg-gray-100 mt-1 text-gray-600 text-xs">${service.category}</span>
  </div>
  <div class="flex gap-2 mt-4">
    <button class="btn btn-sm bg-white border-0 hover:bg-gray-100 shadow flex-1 py-2 copyBtn">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 8h2a2 2 0 012 2v8a2 2 0 01-2 2H10a2 2 0 01-2-2v-2" />
      </svg>
       Copy</button>
    <button class="btn btn-sm btn-success text-white flex-1 py-2 callBtn">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3l2 5-2 2c1 3 4 6 7 7l2-2 5 2v3a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z" />
      </svg>
       Call</button>
  </div>
`;

    


    cardSection.appendChild(card);

    // Heart
    card.querySelector(".heartBtn").addEventListener("click", () => {
        heartCount++;
        heartDisplay.textContent = heartCount;
    });

    // Copy
    card.querySelector(".copyBtn").addEventListener("click", () => {
        navigator.clipboard.writeText(service.number);
        copyCount++;
        copyDisplay.textContent = copyCount;
        alert(`Copied ${service.name} - ${service.number}`);
    });

    // Call
    card.querySelector(".callBtn").addEventListener("click", () => {
        if (coinCount < 20) {
            alert("Not enough coins to make a call!");
            return;
        }
        coinCount -= 20;
        coinDisplay.textContent = coinCount;
        alert(`Calling ${service.name} - ${service.number}`);

        const li = document.createElement("li");
        li.textContent = `${service.name} - ${service.number} (${new Date().toLocaleTimeString()})`;
        historyList.appendChild(li);
    });
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
});