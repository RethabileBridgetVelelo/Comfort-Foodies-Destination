// ── CraveMate Bloemfontein · app.js ──────────────────────────

const API_BASE = "http://localhost:3000";

// Fallback data — rich images + real Bloem prices (2026)
const FALLBACK_FOODS = [
  {
    id: 1,
    name: "Chicken Shawarma",
    price: 49,
    location: "Westdene, Bloemfontein",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80",
    rating: 4.5,
    category: "street food",
    description: "Marinated chicken strips, garlic sauce, pickled cucumber & fresh tomato wrapped tight in warm pita bread. A Westdene staple.",
    delivery: 1
  },
  {
    id: 2,
    name: "Smash Beef Burger",
    price: 75,
    location: "UFS Area, Bloemfontein",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    rating: 4.8,
    category: "burgers",
    description: "Double smash patty, aged cheddar, caramelised onions, house pickles & secret sauce on a toasted brioche bun. Student favourite.",
    delivery: 0
  },
  {
    id: 3,
    name: "Margherita Pizza Slice",
    price: 28,
    location: "CBD, Bloemfontein",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
    rating: 4.2,
    category: "pizza",
    description: "Crispy stone-baked base with San Marzano tomato, fresh mozzarella and torn basil. Simple, cheap, and hits right.",
    delivery: 1
  },
  {
    id: 4,
    name: "Gatsby Roll",
    price: 38,
    location: "Brandwag, Bloemfontein",
    image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=800&q=80",
    rating: 4.6,
    category: "street food",
    description: "A legendary long roll stuffed with masala steak, chips, lettuce and a drizzle of peri-peri. Feeds two if you're lucky.",
    delivery: 0
  },
  {
    id: 5,
    name: "Boerewors Roll",
    price: 32,
    location: "Naval Hill, Bloemfontein",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    rating: 4.7,
    category: "street food",
    description: "Flame-grilled coiled boerewors in a soft white roll with caramelised onions and a squeeze of Mrs Ball's chutney. Braai in your hand.",
    delivery: 0
  },
  {
    id: 6,
    name: "Bunny Chow",
    price: 45,
    location: "Mangaung, Bloemfontein",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80",
    rating: 4.9,
    category: "curry",
    description: "A quarter loaf hollowed and filled with rich lamb or bean curry. Born in Durban, perfected in every township kitchen. Iconic.",
    delivery: 1
  },
  {
    id: 7,
    name: "Kotas",
    price: 22,
    location: "Bram Fischer, Bloemfontein",
    image: "https://images.unsplash.com/photo-1606755962773-d324e2a6f9d4?w=800&q=80",
    rating: 4.3,
    category: "street food",
    description: "Quarter loaf loaded with chips, polony, atchar, russian sausage & fried egg. The township street food king. Under R25 and fully loaded.",
    delivery: 0
  },
  {
    id: 8,
    name: "Loaded Nachos",
    price: 59,
    location: "Loch Logan, Bloemfontein",
    image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=800&q=80",
    rating: 4.4,
    category: "snacks",
    description: "Crispy tortilla chips piled with jalapeños, melted cheese sauce, sour cream, guacamole and pico de gallo. Share if you must.",
    delivery: 1
  },
  {
    id: 9,
    name: "Chicken Tikka Wrap",
    price: 42,
    location: "Mimosa Mall, Bloemfontein",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
    rating: 4.4,
    category: "street food",
    description: "Grilled tikka-spiced chicken, cool raita, crunchy slaw and mango chutney folded into a toasted flour wrap. Lunch sorted.",
    delivery: 1
  },
  {
    id: 10,
    name: "Pepperoni Pizza",
    price: 89,
    location: "Westdene, Bloemfontein",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
    rating: 4.6,
    category: "pizza",
    description: "Whole 30cm pizza with generous pepperoni, extra mozzarella and oregano. Best split between two hungry students after a long lecture.",
    delivery: 1
  },
  {
    id: 11,
    name: "Lamb Curry & Rice",
    price: 65,
    location: "Mangaung, Bloemfontein",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    rating: 4.7,
    category: "curry",
    description: "Slow-cooked lamb in a rich Cape Malay curry sauce served with basmati rice, sambals and a roti on the side. Pure comfort.",
    delivery: 1
  },
  {
    id: 12,
    name: "Cheese & Bacon Burger",
    price: 68,
    location: "UFS Area, Bloemfontein",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80",
    rating: 4.5,
    category: "burgers",
    description: "Thick beef patty topped with crispy streaky bacon, melted gouda, lettuce, tomato and a smoky mayo. No-nonsense and absolutely satisfying.",
    delivery: 0
  }
];

const FALLBACK_ACTIVITIES = [
  {
    id: 1,
    name: "Naval Hill Sunset Hike",
    location: "Naval Hill Nature Reserve",
    description: "Bloemfontein's most iconic hike with 360° city views — best done at golden hour when the Free State sky turns amber. Free entry, worth every step.",
    category: "outdoor",
    price_range: "Free"
  },
  {
    id: 2,
    name: "Loch Logan Waterfront",
    location: "Loch Logan, CBD",
    description: "The city's go-to waterfront strip. Good food court options, Nu Metro cinema, lakeside walks and student-friendly coffee shops all in one spot.",
    category: "lifestyle",
    price_range: "R0–R200"
  },
  {
    id: 3,
    name: "Franklin Game Reserve",
    location: "Naval Hill",
    description: "A game reserve inside the city. Spot white rhinos, zebras, wildebeest and giraffe on a self-guided drive or walk. Genuinely underrated by students.",
    category: "outdoor",
    price_range: "R50"
  },
  {
    id: 4,
    name: "UFS Arts & Culture Festival",
    location: "UFS Main Campus",
    description: "The annual campus festival featuring student theatre, live music, visual art exhibitions and food stalls. A proper cultural experience, mostly free entry.",
    category: "culture",
    price_range: "R0–R80"
  },
  {
    id: 5,
    name: "Windmill Casino & Entertainment",
    location: "Windmill Casino Complex",
    description: "Live music events, comedy nights, restaurants and gaming. Great for a Friday night out — go for the entertainment, not just the casino floor.",
    category: "nightlife",
    price_range: "R100+"
  },
  {
    id: 6,
    name: "National Museum",
    location: "Charles Street, CBD",
    description: "Dinosaur fossils, San rock art, Free State history and rotating exhibitions. One of the best kept secrets in Bloem — only R30 and genuinely fascinating.",
    category: "culture",
    price_range: "R30"
  },
  {
    id: 7,
    name: "Botanical Garden Picnic",
    location: "Bloemfontein Botanical Garden",
    description: "Free entry to beautifully maintained gardens. Bring a blanket, some kotas, and your friends. It's the ultimate low-budget Bloem afternoon.",
    category: "outdoor",
    price_range: "Free"
  },
  {
    id: 8,
    name: "Mimosa Mall Food Court Hangout",
    location: "Mimosa Mall",
    description: "The go-to student hangout. Steers, Nando's, Spur, Debonairs and more under one roof. Perfect for group outings or between-class meals.",
    category: "lifestyle",
    price_range: "R0–R150"
  }
];

// ── State ────────────────────────────────────────────────────
let allFoods = [];
let activeCategory = "all";

// ── Utils ────────────────────────────────────────────────────
function stars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function tagClass(category) {
  const map = {
    "street food": "tag-street",
    "burgers":     "tag-burgers",
    "pizza":       "tag-pizza",
    "curry":       "tag-curry",
    "snacks":      "tag-snacks"
  };
  return map[category] || "tag-street";
}

function actCatClass(category) {
  const map = {
    "outdoor":   "cat-outdoor",
    "culture":   "cat-culture",
    "lifestyle": "cat-lifestyle",
    "nightlife": "cat-nightlife"
  };
  return map[category] || "cat-outdoor";
}

function staggerDelay(index) {
  return `animation-delay: ${index * 60}ms`;
}

// ── Fetch Helpers ─────────────────────────────────────────────
async function fetchFoods() {
  try {
    const res = await fetch(`${API_BASE}/foods`);
    if (!res.ok) throw new Error("Server not available");
    return await res.json();
  } catch {
    console.warn("Using fallback food data (server not running)");
    return FALLBACK_FOODS;
  }
}

async function fetchActivities() {
  try {
    const res = await fetch(`${API_BASE}/activities`);
    if (!res.ok) throw new Error("Server not available");
    return await res.json();
  } catch {
    console.warn("Using fallback activity data (server not running)");
    return FALLBACK_ACTIVITIES;
  }
}

// ── Render Food Cards ─────────────────────────────────────────
function renderFoods(foods) {
  const grid = document.getElementById("foodGrid");

  if (!foods.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>🤷</p>
        <p><strong>No cravings found</strong></p>
        <p style="font-size:0.85rem;margin-top:6px">Try a different search or category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = foods.map((food, i) => `
    <div class="food-card" onclick="openModal(${food.id})" style="${staggerDelay(i)}">
      <div class="food-img-wrap">
        <img class="food-img" src="${food.image}" alt="${food.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600'">
        <span class="food-tag ${tagClass(food.category)}">${food.category}</span>
        ${food.delivery ? '<span class="delivery-badge">🛵 Delivery</span>' : ''}
      </div>
      <div class="food-body">
        <h3 class="food-name">${food.name}</h3>
        <p class="food-desc">${food.description}</p>
        <div class="food-meta">
          <div class="food-price">
            <span>price</span>
            R${food.price}
          </div>
          <div class="food-rating">
            <span class="stars">${stars(food.rating)}</span>
            ${food.rating}/5
          </div>
        </div>
        <div class="food-location">
          📍 ${food.location}
        </div>
      </div>
    </div>
  `).join("");
}

// ── Filter Logic ──────────────────────────────────────────────
function filterFoods() {
  const searchVal   = document.getElementById("searchInput").value.toLowerCase();
  const budgetOnly  = document.getElementById("budgetToggle").checked;

  let filtered = allFoods.filter(food => {
    const matchSearch = !searchVal || 
      food.name.toLowerCase().includes(searchVal) ||
      food.description.toLowerCase().includes(searchVal) ||
      food.location.toLowerCase().includes(searchVal);

    const matchCat = activeCategory === "all" || food.category === activeCategory;
    const matchBudget = !budgetOnly || food.price <= 50;

    return matchSearch && matchCat && matchBudget;
  });

  renderFoods(filtered);
}

// ── Category Chips ────────────────────────────────────────────
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    activeCategory = chip.dataset.cat;
    filterFoods();
  });
});

document.getElementById("searchInput").addEventListener("input", filterFoods);

// ── Modal ──────────────────────────────────────────────────────
function openModal(id) {
  const food = allFoods.find(f => f.id === id);
  if (!food) return;

  document.getElementById("modalContent").innerHTML = `
    <img class="modal-img" src="${food.image}" alt="${food.name}" onerror="this.src='https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600'">
    <div class="modal-body">
      <h2 class="modal-name">${food.name}</h2>
      <p class="modal-desc">${food.description}</p>
      <div class="modal-info-row">
        <span class="modal-info-pill pill-price">💰 R${food.price}</span>
        <span class="modal-info-pill pill-loc">📍 ${food.location}</span>
        ${food.delivery
          ? '<span class="modal-info-pill pill-del">🛵 Delivery available</span>'
          : '<span class="modal-info-pill pill-pickup">🏃 Pickup only</span>'}
      </div>
      <div class="modal-rating-row">
        <span class="modal-stars">${stars(food.rating)}</span>
        <span><strong>${food.rating}/5</strong> student rating</span>
      </div>
    </div>
  `;

  document.getElementById("modalOverlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// ── Render Activities ─────────────────────────────────────────
function renderActivities(activities) {
  const grid = document.getElementById("activityGrid");
  grid.innerHTML = activities.map((act, i) => `
    <div class="activity-card" style="${staggerDelay(i)}">
      <span class="activity-cat ${actCatClass(act.category)}">${act.category}</span>
      <h3 class="activity-name">${act.name}</h3>
      <p class="activity-desc">${act.description}</p>
      <div class="activity-footer">
        <span class="activity-loc">📍 ${act.location}</span>
        <span class="activity-price">${act.price_range}</span>
      </div>
    </div>
  `).join("");
}

// ── Navigation ────────────────────────────────────────────────
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById("heroSection").style.display = sectionId === "cravings" ? "flex" : "none";

  // Show target
  document.getElementById(sectionId).classList.remove("hidden");

  // Update nav buttons
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  const btns = document.querySelectorAll(".nav-btn");
  const sectionIndex = { cravings:0, activities:1, about:2 };
  if (btns[sectionIndex[sectionId]]) btns[sectionIndex[sectionId]].classList.add("active");

  // Scroll to section smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Mobile Menu ────────────────────────────────────────────────
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("open");
}

// ── Init ───────────────────────────────────────────────────────
async function init() {
  // Load foods
  allFoods = await fetchFoods();
  renderFoods(allFoods);
  document.getElementById("statFood").textContent = allFoods.length;

  // Load activities (preload for when tab is clicked)
  const activities = await fetchActivities();
  renderActivities(activities);
  document.getElementById("statActivities").textContent = activities.length;
}

init();