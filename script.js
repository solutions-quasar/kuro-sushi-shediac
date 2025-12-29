const CONFIG = {
    business: {
        name: "Kuro Sushi",
        category: "Japanese & Korean Restaurant",
        phone: "(506) 351-1155",
        phoneUrl: "tel:+15063511155",
        email: null, // To be added later
        address: "344 Main St, Shediac, NB, Canada",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=344%20Main%20St%2C%20Shediac%2C%20NB",
        hours: [
            { days: "Mon - Wed", time: "11:00 AM - 8:00 PM" },
            { days: "Thu - Fri", time: "11:00 AM - 9:00 PM" },
            { days: "Sat", time: "12:00 PM - 9:00 PM" },
            { days: "Sun", time: "Closed" }
        ],
        facebook: "https://www.facebook.com/KuroSushiShediac2017/",
        messenger: "https://m.me/KuroSushiShediac2017/",
        priceRange: "$$",
        logo: "assets/logo.png"
    },
    theme: {
        accent: "#FFB7C5",
        base: "#FFF9F5",
        text: "#3D3D3D",
        surface: "#FFFFFF"
    },
    hero: {
        h1: "Japanese & Korean cuisine in Shediac.",
        subhead: "Dine in, take out, or get delivery—fresh flavors, fast ordering.",
        cta: "Order Now",
        image: "assets/hero.jpg"
    },
    services: [
        {
            id: "dine-in",
            title: "Dine-In",
            icon: "dine-in",
            desc: "Experience authentic flavors in our cozy Shediac location.",
            details: "Waitstaff service, beautiful interior, group friendly."
        },
        {
            id: "take-out",
            title: "Take Out",
            icon: "take-out",
            desc: "Fresh sushi and Korean dishes ready for you to pick up.",
            details: "Quick preparation, eco-friendly packaging, easy pickup."
        },
        {
            id: "delivery",
            title: "Delivery",
            icon: "delivery",
            desc: "Get your favorites delivered straight to your door.",
            details: "Available via phone or partners, contactless options."
        }
    ],
    reviews: {
        trustCue: "Recommended by 100% (84 reviews)",
        source: "Facebook",
        sourceUrl: "https://www.facebook.com/KuroSushiShediac2017/reviews",
        items: [
            {
                text: "Very impressed for the first time visit. Will definitely come back. Service was fast and courteous. Portions were great.",
                author: "Facebook Reviewer"
            },
            {
                text: "Really enjoyed my time spent there! Will definitely be coming back ❤️",
                author: "Monica Collette"
            },
            {
                text: "I had a take out order the food was super delicious and the inside scenery was very beautiful they had all kinds of cool things 10/10",
                author: "Brady Walton"
            }
        ]
    },
    whyUs: [
        { title: "Fresh Ingredients", desc: "Sourced daily for the highest quality sushi." },
        { title: "Fast Takeout", desc: "Expertly prepared so you can enjoy sooner." },
        { title: "Friendly Service", desc: "A warm welcome every time you visit." },
        { title: "Great for Groups", desc: "Perfect for family dinners and celebrations." },
        { title: "Main St Location", desc: "Conveniently located in the heart of Shediac." },
        { title: "Authentic Recipes", desc: "Traditional Japanese and Korean flavors." }
    ],
    menu: {
        categories: [
            {
                name: "Soup & Salad",
                items: [
                    { name: "Miso Soup", price: "1.95", note: "Soybean paste broth" },
                    { name: "Spicy Miso Soup", price: "2.95" },
                    { name: "Wonton Soup", price: "6.95" },
                    { name: "Garden Salad", price: "4.95", glutenFree: true },
                    { name: "Seaweed Salad", price: "6.95", glutenFree: true },
                    { name: "Poke Salad", price: "11.95", note: "Avocado, raw fish, edamame, spring mix" }
                ]
            },
            {
                name: "Appetizers",
                items: [
                    { name: "Edamame", price: "5.95", glutenFree: true },
                    { name: "Gyoza", price: "6.95", note: "Chicken & Mushroom or Vegetable" },
                    { name: "Harumaki", price: "6.95", note: "Japanese Spring Roll" },
                    { name: "Shrimp Tempura", price: "10.95", note: "Crispy battered shrimp" },
                    { name: "Agedashi Tofu", price: "6.95" }
                ]
            },
            {
                name: "Special Rolls",
                items: [
                    { name: "Dynamite Roll", price: "11.95", note: "Shrimp tempura, crab meat, avocado, cucumber" },
                    { name: "Volcano Roll", price: "14.95", note: "Deep fried dynamite roll" },
                    { name: "Moncton Roll", price: "13.95", note: "Salmon, avocado, cream cheese, fish egg" },
                    { name: "Red Dragon Roll", price: "14.95", note: "Dynamite with raw salmon on top" }
                ]
            },
            {
                name: "Classic Rolls",
                items: [
                    { name: "California Roll", price: "6.95", note: "Avocado, crab meat, cucumber, fish egg" },
                    { name: "Spicy Salmon Roll", price: "9.95" },
                    { name: "Tempura Shrimp Roll", price: "7.95" },
                    { name: "Salmon & Avocado Roll", price: "9.95" },
                    { name: "Chicken Teriyaki Roll", price: "8.95" }
                ]
            },
            {
                name: "Sushi Pizza",
                items: [
                    { name: "Salmon Sushi Pizza", price: "12.95", note: "Deep fried rice base with salmon, avocado, mayo" },
                    { name: "Spicy Tuna Sushi Pizza", price: "13.95" },
                    { name: "Vegetarian Sushi Pizza", price: "10.95" }
                ]
            },
            {
                name: "Nigiri & Sashimi",
                items: [
                    { name: "Salmon Nigiri (2pcs)", price: "5.50" },
                    { name: "Tuna Nigiri (2pcs)", price: "6.50" },
                    { name: "Eel Nigiri (2pcs)", price: "6.50" },
                    { name: "Salmon Sashimi (3pcs)", price: "6.95" },
                    { name: "Tuna Sashimi (3pcs)", price: "7.95" }
                ]
            },
            {
                name: "Bento Boxes",
                items: [
                    { name: "Chicken Bento", price: "18.95", note: "Teriyaki chicken, tempura, gyoza, salad, rice" },
                    { name: "Salmon Bento", price: "20.95" },
                    { name: "Bulgogi Bento", price: "19.95" }
                ]
            },
            {
                name: "Korean & Hot Dishes",
                items: [
                    { name: "Kuro Bibimbap", price: "15.95", note: "Assorted veg, egg, choice of beef or tofu" },
                    { name: "Chicken Katsu Donburi", price: "17.95", note: "Breaded chicken with egg on rice" },
                    { name: "Japchae", price: "15.95", note: "Sweet potato glass noodles with vegetables" },
                    { name: "Bulgogi Dinner", price: "18.95", note: "Marinated thin sliced beef" },
                    { name: "Tofu Teriyaki", price: "15.95", note: "Grilled tofu with teriyaki sauce" }
                ]
            }
        ],
        fullMenuNote: "Prices and availability are subject to change. Please inform us of any allergies."
    },
    images: {
        hero: "assets/hero.jpg",
        services: "assets/services.png",
        texture: "assets/texture.png",
        contact: "assets/contact.png"
    }
};

let activeMenuCategory = "All";

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderContent();
    setupNavigation();
    setupMenuScroll();
    setupForm();
    injectLdJson();
}

function setupMenuScroll() {
    const filters = document.querySelector('#menu-filters');
    const leftBtn = document.querySelector('#filter-scroll-left');
    const rightBtn = document.querySelector('#filter-scroll-right');

    if (filters && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            filters.scrollBy({ left: -200, behavior: 'smooth' });
        });
        rightBtn.addEventListener('click', () => {
            filters.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }
}

function renderContent() {
    renderMenuFilters();
    renderMenu();
    // Inject Dynamic Header Info
    const phoneLinks = document.querySelectorAll('.dynamic-phone');
    phoneLinks.forEach(link => {
        link.href = CONFIG.business.phoneUrl;
        link.textContent = CONFIG.business.phone;
    });

    // Hero Section
    const heroTitle = document.querySelector('#hero-title');
    const heroSub = document.querySelector('#hero-sub');
    const heroCta = document.querySelector('#hero-cta');
    const heroImg = document.querySelector('#hero-image-container');

    if (heroTitle) heroTitle.textContent = CONFIG.hero.h1;
    if (heroSub) heroSub.textContent = CONFIG.hero.subhead;
    if (heroCta) {
        heroCta.innerHTML = `${CONFIG.hero.cta} <svg class="cta-heart" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    }
    if (heroImg) {
        heroImg.style.backgroundImage = `url(${CONFIG.hero.image})`;
        heroImg.style.backgroundSize = 'cover';
        heroImg.style.backgroundPosition = 'center';
    }

    // Services
    const servicesGrid = document.querySelector('#services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = CONFIG.services.map(s => `
            <div class="service-card">
                <div class="service-icon">${getIcon(s.icon)}</div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                <details>
                    <summary>Details</summary>
                    <p>${s.details}</p>
                </details>
            </div>
        `).join('');
    }

    // Reviews
    const reviewsCue = document.querySelector('#reviews-trust-cue');
    const reviewsGrid = document.querySelector('#reviews-grid');
    if (reviewsCue) reviewsCue.textContent = CONFIG.reviews.trustCue;
    if (reviewsGrid) {
        reviewsGrid.innerHTML = CONFIG.reviews.items.map(r => `
            <div class="review-card">
                <div class="quote-icon">“</div>
                <p>${r.text}</p>
                <cite>— ${r.author}</cite>
            </div>
        `).join('') + `
            <div class="review-cta-card">
                <p>Loved your experience?</p>
                <a href="${CONFIG.reviews.sourceUrl}" target="_blank" class="review-link">Write a Review on ${CONFIG.reviews.source}</a>
            </div>
        `;
    }

    // Why Us
    const whyGrid = document.querySelector('#why-grid');
    if (whyGrid) {
        whyGrid.innerHTML = CONFIG.whyUs.map(w => `
            <div class="why-card">
                <h4>${w.title}</h4>
                <p>${w.desc}</p>
            </div>
        `).join('');
    }

    // Contact Info
    document.querySelector('#contact-address').textContent = CONFIG.business.address;
    const hoursHtml = CONFIG.business.hours.map(h => `<li><span>${h.days}</span><span>${h.time}</span></li>`).join('');
    document.querySelector('#contact-hours').innerHTML = hoursHtml;
    document.querySelector('#directions-btn').href = CONFIG.business.directionsUrl;

    // Bottom Bar
    document.querySelector('#mobile-call-btn').href = CONFIG.business.phoneUrl;
    document.querySelector('#mobile-message-btn').href = CONFIG.business.messenger;

    // Footer
    document.querySelector('#footer-address').textContent = CONFIG.business.address;
    document.querySelector('#footer-fb').href = CONFIG.business.facebook;
}

function renderMenuFilters() {
    const filterContainer = document.querySelector('#menu-filters');
    if (!filterContainer) return;

    const categories = ["All", ...CONFIG.menu.categories.map(c => c.name)];
    filterContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn ${activeMenuCategory === cat ? 'active' : ''}" onclick="setMenuFilter('${cat}')">${cat}</button>
    `).join('');
}

window.setMenuFilter = function (category) {
    activeMenuCategory = category;
    renderMenuFilters();
    renderMenu();

    // Scroll to menu section top
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
        window.scrollTo({
            top: menuSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function renderMenu() {
    const menuContainer = document.querySelector('#menu-categories');
    if (!menuContainer) return;

    const filtered = activeMenuCategory === "All"
        ? CONFIG.menu.categories
        : CONFIG.menu.categories.filter(c => c.name === activeMenuCategory);

    menuContainer.innerHTML = filtered.map(cat => `
        <div class="menu-category animate-fade-in">
            <h3 class="category-title">${cat.name}</h3>
            <div class="menu-items-grid">
                ${cat.items.map(item => `
                    <div class="menu-item">
                        <div class="menu-item-header">
                            <span class="item-name">${item.name} ${item.glutenFree ? '<small title="Gluten Free">GF</small>' : ''}</span>
                            <span class="item-dots"></span>
                            <span class="item-price">$${item.price}</span>
                        </div>
                        ${item.note ? `<p class="item-note">${item.note}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    document.querySelector('#menu-footer-note').textContent = CONFIG.menu.fullMenuNote;
}

function setupNavigation() {
    const burger = document.querySelector('#burger-trigger');
    const overlay = document.querySelector('#mobile-overlay');
    const closeOverlay = document.querySelector('#close-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleOverlay = (state) => {
        const isOpening = state !== undefined ? state : !overlay.classList.contains('active');
        overlay.classList.toggle('active', isOpening);
        document.body.style.overflow = isOpening ? 'hidden' : '';
    };

    burger.addEventListener('click', () => toggleOverlay());

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                toggleOverlay(false);
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleOverlay(false);
    });

    // CTA Scroll
    const ctaButtons = document.querySelectorAll('.primary-cta');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            const typeSelect = document.querySelector('#order-type');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                if (typeSelect) typeSelect.value = 'Takeout';
            }
        });
    });
}

function setupForm() {
    const form = document.querySelector('#contact-form');
    const status = document.querySelector('#form-status');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            status.textContent = "Sending...";

            // Honeypot check
            if (form.querySelector('[name="_gotcha"]').value) return;

            const formData = new FormData(form);
            try {
                // Mock success for now, would be Formspree/Netlify
                await new Promise(resolve => setTimeout(resolve, 1000));
                status.textContent = "Thanks — we'll contact you shortly.";
                form.reset();
            } catch (err) {
                status.textContent = "Oops! Something went wrong.";
            }
        });
    }
}



function injectLdJson() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const ld = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": CONFIG.business.name,
        "image": window.location.origin + "/" + CONFIG.images.hero,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "344 Main St",
            "addressLocality": "Shediac",
            "addressRegion": "NB",
            "postalCode": "E4P 2E8",
            "addressCountry": "CA"
        },
        "telephone": CONFIG.business.phone,
        "priceRange": CONFIG.business.priceRange,
        "url": window.location.href,
        "sameAs": [CONFIG.business.facebook]
    };
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);
}

function getIcon(name) {
    const icons = {
        'dine-in': `
            <svg viewBox="0 0 100 100" class="kawaii-icon">
                <!-- Plate -->
                <ellipse cx="50" cy="70" rx="40" ry="15" fill="#FFF9F5" stroke="#FFB7C5" stroke-width="2"/>
                <!-- Sushi -->
                <rect x="35" y="45" width="30" height="20" rx="10" fill="white" stroke="#FFB7C5" stroke-width="2"/>
                <rect x="35" y="35" width="30" height="12" rx="6" fill="#FFB7C5"/>
                <!-- Face -->
                <circle cx="43" cy="55" r="2" fill="#3D3D3D"/>
                <circle cx="57" cy="55" r="2" fill="#3D3D3D"/>
                <path d="M47 60 q3 4 6 0" fill="none" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"/>
                <!-- Blushes -->
                <circle cx="39" cy="57" r="3" fill="#FFB7C5" opacity="0.4"/>
                <circle cx="61" cy="57" r="3" fill="#FFB7C5" opacity="0.4"/>
                <!-- Steam -->
                <path d="M45 25 q2 -5 5 0 m-10 5 q2 -5 5 0" fill="none" stroke="#FFB7C5" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            </svg>`,
        'take-out': `
            <svg viewBox="0 0 100 100" class="kawaii-icon">
                <!-- Bag Body -->
                <path d="M30 30 L70 30 L75 80 L25 80 Z" fill="white" stroke="#FFB7C5" stroke-width="3" stroke-linejoin="round"/>
                <path d="M30 30 L40 15 L60 15 L70 30" fill="none" stroke="#FFB7C5" stroke-width="3" stroke-linecap="round"/>
                <!-- Heart Pattern -->
                <path d="M50 40 q-5 -5 -5 0 q0 5 5 8 q5 -3 5 -8 q0 -5 -5 0" fill="#FFB7C5"/>
                <!-- Face -->
                <circle cx="40" cy="60" r="2.5" fill="#3D3D3D"/>
                <circle cx="60" cy="60" r="2.5" fill="#3D3D3D"/>
                <path d="M47 65 q3 3 6 0" fill="none" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round"/>
                <!-- Blushes -->
                <circle cx="35" cy="62" r="4" fill="#FFB7C5" opacity="0.5"/>
                <circle cx="65" cy="62" r="4" fill="#FFB7C5" opacity="0.5"/>
            </svg>`,
        'delivery': `
            <svg viewBox="0 0 100 100" class="kawaii-icon">
                <!-- Scooter Body -->
                <rect x="25" y="55" width="50" height="20" rx="10" fill="#FFB7C5"/>
                <circle cx="35" cy="75" r="8" fill="#3D3D3D"/>
                <circle cx="65" cy="75" r="8" fill="#3D3D3D"/>
                <!-- Delivery Box -->
                <rect x="30" y="35" width="30" height="20" rx="5" fill="white" stroke="#FFB7C5" stroke-width="2"/>
                <!-- Face on Box -->
                <circle cx="40" cy="45" r="2" fill="#3D3D3D"/>
                <circle cx="50" cy="45" r="2" fill="#3D3D3D"/>
                <path d="M43 48 q2 2 4 0" fill="none" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"/>
                <!-- Speed Lines -->
                <line x1="10" y1="40" x2="20" y2="40" stroke="#FFB7C5" stroke-width="3" stroke-linecap="round"/>
                <line x1="5" y1="50" x2="15" y2="50" stroke="#FFB7C5" stroke-width="3" stroke-linecap="round"/>
                <!-- Petals -->
                <circle cx="20" cy="30" r="3" fill="#FFB7C5" opacity="0.6"/>
                <circle cx="85" cy="50" r="3" fill="#FFB7C5" opacity="0.6"/>
            </svg>`
    };
    return icons[name] || '';
}
