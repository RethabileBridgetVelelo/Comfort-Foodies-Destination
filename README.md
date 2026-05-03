# 🍜 CraveMate Bloemfontein

> **Find cheap student cravings, local food spots & things to do — all of Bloemfontein in one place.**

Built for students and workers in Bloemfontein who want real food at real prices, without digging through ten Google tabs. From R20 kotas to shawarmas — we've got you, Motswalle.

---

## 🌟 Features

| Feature | Description |
|---|---|
| 🍔 Food Listings | Local spots with images, prices & descriptions |
| 🔍 Smart Search | Search by name, description or area |
| 🏷 Category Filter | Street food, burgers, pizza, curry, snacks |
| 💰 Budget Mode | Filter meals under R50 instantly |
| 🛵 Delivery Tags | Know what delivers and what's pickup only |
| ⭐ Ratings | Student-rated spots on a 5-star scale |
| 🌆 Bloem Life | Activities, hangouts & events around the city |
| 📱 Fully Responsive | Works perfectly on mobile, tablet & desktop |

---

## 🧱 Tech Stack

**Frontend**
- HTML5 + CSS3 (custom 70s-modern design system)
- Vanilla JavaScript (ES6+)
- TypeScript source in `client/src/`
- Google Fonts: Playfair Display + DM Sans + Space Mono

**Backend**
- Node.js + Express.js
- SQLite3 (via `better-sqlite3` / `sqlite3`)
- RESTful API with CORS support

---

## 📁 Project Structure

```
cravemate/
│
├── client/                  # Frontend
│   ├── index.html           # Main page (all sections)
│   ├── style.css            # Full design system
│   ├── app.js               # Compiled/runtime JS
│   ├── tsconfig.json
│   ├── package.json
│   └── src/
│       └── app.ts           # TypeScript source
│
├── server/                  # Backend API
│   ├── server.js            # Express server
│   ├── database.js          # SQLite setup + seed data
│   ├── food.db              # Auto-generated database
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/cravemate-bloem.git
cd cravemate-bloem
```

### 2. Start the Backend
```bash
cd server
npm install
node server.js
# → Server running on http://localhost:3000
```

### 3. Open the Frontend
```bash
cd ../client
# Option A: just open index.html in your browser (works offline with fallback data)
# Option B: use live-server for hot reload
npm install
npm run dev
# → Opens at http://localhost:5500
```

> **Note:** The app includes fallback data, so the frontend works even without the server running.

---

## 🔌 API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/foods` | Get all food listings |
| GET | `/foods?search=shawarma` | Search food |
| GET | `/foods?category=burgers` | Filter by category |
| GET | `/foods?maxPrice=50` | Filter by price |
| POST | `/foods` | Add a new food item |
| GET | `/activities` | Get all Bloem activities |
| GET | `/reviews/:foodId` | Get reviews for a food item |
| POST | `/reviews` | Submit a review |

---

## 📍 Coverage Areas

- University of the Free State (UFS) campus
- Westdene
- Bloemfontein CBD
- Mangaung
- Brandwag
- Naval Hill
- Loch Logan
- Bram Fischer

---

## 🗺 Roadmap (2026)

- [ ] Google Maps pins for each food spot
- [ ] Vendor login & listing management
- [ ] AI "What should I eat?" recommendation
- [ ] Firebase real-time database upgrade
- [ ] React Native mobile app
- [ ] Delivery integration
- [ ] Student reviews & photo uploads
- [ ] Weekly specials / deals system

---

## 🤝 Contributing

Pull requests welcome! If you know a spot in Bloem that deserves a listing, open an issue or fork and add it.

---

## 👨‍💻 Author: Rethabile Velelo

Built with 💛 for Bloemfontein students & workers · 2026  
Open source — free to use, share, and improve.

---

*"Feed your cravings, Motswalle."* 🍜
