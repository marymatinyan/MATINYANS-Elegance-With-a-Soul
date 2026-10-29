// =======================================
// MATINYANS — Scroll Reveal Animation
// =======================================

document.addEventListener("DOMContentLoaded", () => {

  // Respect accessibility preferences
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    return;
  }

  // Check browser support
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const revealElements = document.querySelectorAll(
    ".philosophy .reveal"
  );

  if (!revealElements.length) {
    return;
  }

  // Enable animations only when supported
  document.documentElement.classList.add("js-reveal");

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          // Reveal only once
          observerInstance.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  // Observe elements
  revealElements.forEach((element) => {
    observer.observe(element);
  });

});
// ==========================================
// MATINYANS — FOUNDER SECTION ANIMATIONS
// Independent from Our Philosophy animations
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  const founderSection = document.querySelector(
    ".founder-section"
  );

  if (!founderSection) return;

  const founderElements = founderSection.querySelectorAll(
    ".founder-reveal"
  );

  // Respect reduced-motion accessibility settings
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) return;

  // Fallback for older browsers
  if (!("IntersectionObserver" in window)) return;

  const founderObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("founder-visible");

          // Animate each element only once
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px 30px 0px"
    }
  );

  // Observe the elements before enabling animations
  founderElements.forEach((element) => {
    founderObserver.observe(element);
  });

  founderSection.classList.add(
    "founder-animations-ready"
  );

});
// =====================================
// MATINYANS — OUR VALUES REVEAL
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  const valuesSection = document.querySelector(
    ".values-section"
  );

  if (!valuesSection) return;

  const valuesItems = valuesSection.querySelectorAll(
    ".values-item"
  );

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) return;

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("values-visible");
          observerInstance.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px 25px 0px"
    }
  );

  valuesItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 100}ms`;
    observer.observe(item);
  });

  valuesSection.classList.add(
    "values-animations-ready"
  );

});
/* Hide Our Values numbering */

/* ==========================================
   MATINYANS — SHOPPING SYSTEM
   ========================================== */
let sizeGuides;
document.addEventListener("DOMContentLoaded", () => {
const checkoutDraft = JSON.parse(
  localStorage.getItem("matinyansCheckoutDraft") || "null"
) || {
  fullName: "",
  phone: "",
  address: ""
};

function saveCheckoutDraft() {
  localStorage.setItem(
    "matinyansCheckoutDraft",
    JSON.stringify(checkoutDraft)
  );
}
// MATINYANS — SIZE GUIDE DATA
// Measurements in centimeters.
// Sample reference values — verify with suppliers.

sizeGuides = {
  outerwear: {
  title: "Outerwear",
  headers: ["Size", "Bust", "Waist"],
  rows: [
    ["XS", "80–84", "60–64"],
    ["S", "84–88", "64–68"],
    ["M", "88–92", "68–72"],
    ["L", "92–98", "72–78"],
    ["XL", "98–104", "78–84"]
  ],
  note: "General size reference only. Actual garment measurements may vary."
},
  gloves: {
  title: "Leather Gloves",
  headers: ["Size", "Hand Circumference (cm)"],
  rows: [
    ["S", "17–18"],
    ["M", "18–19"],
    ["L", "19–20"],
    ["XL", "20–21"]
  ],
  note: "Measure around the widest part of your palm, excluding the thumb. General reference only. Confirm actual measurements with the supplier."
},
  oversize: {
  title: "Oversized Sweaters",
  headers: ["Size", "Fit"],
  rows: [
    ["XS/S", "Relaxed fit"],
    ["M/L", "Oversized fit"],
    ["XL/XXL", "Extra oversized fit"]
  ],
  note: "Oversized silhouette. Choose your preferred fit."
},
  suits: {
    title: "Suits",
    headers: ["Size", "Bust", "Waist", "Hips"],
    rows: [
      ["XS", "80–84", "60–64", "86–90"],
      ["S", "84–88", "64–68", "90–94"],
      ["M", "88–92", "68–72", "94–98"],
      ["L", "92–98", "72–78", "98–104"],
      ["XL", "98–104", "78–84", "104–110"]
    ],
    note: "Consider the fit of both the jacket and trousers."
  },

  trousers: {
    title: "Classic Trousers",
    headers: ["Size", "Waist", "Hips"],
    rows: [
      ["XS", "60–64", "86–90"],
      ["S", "64–68", "90–94"],
      ["M", "68–72", "94–98"],
      ["L", "72–78", "98–104"],
      ["XL", "78–84", "104–110"]
    ],
    note: "Check the inseam length for the best fit."
  },

  tops: {
    title: "Tops",
    headers: ["Size", "Bust", "Waist"],
    rows: [
      ["XS", "80–84", "60–64"],
      ["S", "84–88", "64–68"],
      ["M", "88–92", "68–72"],
      ["L", "92–98", "72–78"],
      ["XL", "98–104", "78–84"]
    ],
    note: "Stretch and fabric composition may affect the fit."
  },

  skirts: {
    title: "Skirts",
    headers: ["Size", "Waist", "Hips"],
    rows: [
      ["XS", "60–64", "86–90"],
      ["S", "64–68", "90–94"],
      ["M", "68–72", "94–98"],
      ["L", "72–78", "98–104"],
      ["XL", "78–84", "104–110"]
    ],
    note: "Check garment length for mini, midi and maxi styles."
  },

  sweaters: {
    title: "Sweaters",
    headers: ["Size", "Bust", "Waist"],
    rows: [
      ["XS", "80–84", "60–64"],
      ["S", "84–88", "64–68"],
      ["M", "88–92", "68–72"],
      ["L", "92–98", "72–78"],
      ["XL", "98–104", "78–84"]
    ],
    note: "Oversized styles are designed for a relaxed fit."
  },

  shirts: {
    title: "Shirts",
    headers: ["Size", "Bust", "Waist"],
    rows: [
      ["XS", "80–84", "60–64"],
      ["S", "84–88", "64–68"],
      ["M", "88–92", "68–72"],
      ["L", "92–98", "72–78"],
      ["XL", "98–104", "78–84"]
    ],
    note: "Consider shoulder width and sleeve length."
  },

  shoes: {
    title: "Shoes",
    headers: ["EU Size", "Foot Length"],
    rows: [
      ["36", "22.5–22.9"],
      ["37", "23.0–23.6"],
      ["38", "23.7–24.3"],
      ["39", "24.4–25.0"],
      ["40", "25.1–25.7"],
      ["41", "25.8–26.4"]
    ],
    note: "Measure from the heel to the longest toe."
  },

  gloves: {
    title: "Gloves",
    headers: ["Size", "Palm Circumference"],
    rows: [
      ["XS", "15–16"],
      ["S", "16–17"],
      ["M", "17–19"],
      ["L", "19–21"],
      ["XL", "21–23"]
    ],
    note: "Measure around the palm, excluding the thumb."
  },

  coats: {
    title: "Coats",
    headers: ["Size", "Bust", "Waist", "Hips"],
    rows: [
      ["XS", "80–84", "60–64", "86–90"],
      ["S", "84–88", "64–68", "90–94"],
      ["M", "88–92", "68–72", "94–98"],
      ["L", "92–98", "72–78", "98–104"],
      ["XL", "98–104", "78–84", "104–110"]
    ],
    note: "Allow room for layering underneath."
  },

  blazers: {
    title: "Blazers",
    headers: ["Size", "Bust", "Waist"],
    rows: [
      ["XS", "80–84", "60–64"],
      ["S", "84–88", "64–68"],
      ["M", "88–92", "68–72"],
      ["L", "92–98", "72–78"],
      ["XL", "98–104", "78–84"]
    ],
    note: "Consider shoulder structure and sleeve length."
  }
};
const catalog = {
    // THE MATINYANS COLLECTION

redBlazer: {
  id: "redBlazer",
  name: "Red Tailored Blazer",
  price: 28000,
  image: "karmirkostyum.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "blazers",
  purchasable: true
},

navyBlazer: {
  id: "navyBlazer",
  name: "Navy Pinstripe Blazer",
  price: 32000,
  image: "kostyum.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "blazers",
  purchasable: true
},

sweater: {
  id: "sweater",
  name: "Oversized Turtleneck Sweater",
  price: 18000,
  image: "sviter.jpg",
  category: "clothing",
  sizes: ["XS/S", "M/L", "XL/XXL"],
sizeType: "oversize",
  purchasable: true
},

blackBody: {
  id: "blackBody",
  name: "Black Turtleneck Bodysuit",
  price: 12000,
  image: "sev.body.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "tops",
  purchasable: true
},

jeans: {
  id: "jeans",
  name: "Wide Leg Denim Jeans",
  price: 20500,
  image: "jeans.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "trousers",
  purchasable: true
},

navyTrousers: {
  id: "navyTrousers",
  name: "Navy Pinstripe Trousers",
  price: 26000,
  image: "kapuyt.ktor.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "trousers",
  purchasable: true
},

redShirt: {
  id: "redShirt",
  name: "Red Oversized Shirt",
  price: 17500,
  image: "vernashapik.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "tops",
  purchasable: true
},

redBag: {
  id: "redBag",
  name: "Red Leather Handbag",
  price: 20000,
  image: "karmir.payusak.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},

redHeels: {
  id: "redHeels",
  name: "Red Pointed Heels",
  price: 24000,
  image: "heels.jpg",
  category: "shoes",
  sizes: ["36", "37", "38", "39", "40", "41"],
  sizeType: "shoes",
  purchasable: true
},

redBoots: {
  id: "redBoots",
  name: "Red Ankle Boots",
  price: 28000,
  image: "karmirboots.jpg",
  category: "shoes",
  sizes: ["36", "37", "38", "39", "40", "41"],
  sizeType: "shoes",
  purchasable: true
},

gloves: {
  id: "gloves",
  name: "Black Leather Gloves",
  price: 8500,
  image: "dzernoc.jpg",
  category: "accessories",
  sizes: ["S", "M", "L", "XL"],
  sizeType: "gloves",
  purchasable: true
},

sunglasses: {
  id: "sunglasses",
  name: "Black Sunglasses",
  price: 9500,
  image: "aknoc.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},

earrings: {
  id: "earrings",
  name: "Gold Statement Earrings",
  price: 5500,
  image: "voski.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},
    emeraldBordeauxTrench: {
  id: "emeraldBordeauxTrench",
  name: "Emerald Leather-Look Trench",
  price: 42000,
  image: "kanachkoj.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "outerwear",
  purchasable: true
},
emeraldBordeauxBlazer: {
  id: "emeraldBordeauxBlazer",
  name: "Emerald Tailored Blazer",
  price: 28500,
  image: "kanachkost.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "blazers",
  purchasable: true
},

emeraldBordeauxKnit: {
  id: "emeraldBordeauxKnit",
  name: "Bordeaux Cropped Knit",
  price: 14500,
  image: "kanachbordo.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "tops",
  purchasable: true
},

emeraldBordeauxTrousers: {
  id: "emeraldBordeauxTrousers",
  name: "Ivory Wide-Leg Trousers",
  price: 21000,
  image: "kanachshalvar.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "trousers",
  purchasable: true
},

emeraldBordeauxBag: {
  id: "emeraldBordeauxBag",
  name: "Emerald Structured Bag",
  price: 24500,
  image: "kanachbag.jpg",
  sizes: []
},

emeraldBordeauxTote: {
  id: "emeraldBordeauxTote",
  name: "Emerald Everyday Tote",
  price: 22500,
  image: "kanachsumka.jpg",
  sizes: []
},

emeraldBordeauxCap: {
  id: "emeraldBordeauxCap",
  name: "Emerald Baseball Cap",
  price: 8500,
  image: "kanachkepi.jpg",
  sizes: []
},

emeraldBordeauxBelt: {
  id: "emeraldBordeauxBelt",
  name: "Emerald Classic Belt",
  price: 7500,
  image: "kanachgoti.jpg",
  sizes: []
},

emeraldBordeauxSunglasses: {
  id: "emeraldBordeauxSunglasses",
  name: "Noir Cat-Eye Sunglasses",
  price: 9500,
  image: "kanachaknoc.jpg",
  sizes: []
},

emeraldBordeauxEarrings: {
  id: "emeraldBordeauxEarrings",
  name: "Gold Sculptural Earrings",
  price: 6500,
  image: "kanachvoski.jpg",
  sizes: []
},


emeraldBordeauxBag: {
  id: "emeraldBordeauxBag",
  name: "Emerald Structured Bag",
  price: 24500,
  image: "kanachbag.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},
emeraldBordeauxTote: {
  id: "emeraldBordeauxTote",
  name: "Emerald Everyday Tote",
  price: 22500,
  image: "kanachsumka.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},
emeraldBordeauxCap: {
  id: "emeraldBordeauxCap",
  name: "Emerald Baseball Cap",
  price: 8500,
  image: "kanachkepi.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},
emeraldBordeauxBelt: {
  id: "emeraldBordeauxBelt",
  name: "Emerald Classic Belt",
  price: 7500,
  image: "kanachgoti.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},
emeraldBordeauxSunglasses: {
  id: "emeraldBordeauxSunglasses",
  name: "Noir Cat-Eye Sunglasses",
  price: 9500,
  image: "kanachaknoc.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},
emeraldBordeauxEarrings: {
  id: "emeraldBordeauxEarrings",
  name: "Gold Sculptural Earrings",
  price: 6500,
  image: "kanachvoski.jpg",
  category: "accessories",
  sizes: [],
  purchasable: true
},
emeraldBordeauxHeels: {
  id: "emeraldBordeauxHeels",
  name: "Nude Pointed Heels",
  price: 25000,
  image: "kanachhells.jpg",
  category: "shoes",
  sizes: ["36", "37", "38", "39", "40", "41"],
  sizeType: "shoes",
  purchasable: true
},
emeraldBordeauxSneakers: {
  id: "emeraldBordeauxSneakers",
  name: "Retro White Sneakers",
  price: 23000,
  image: "kanachsamba.jpg",
  category: "shoes",
  sizes: ["36", "37", "38", "39", "40", "41"],
  sizeType: "shoes",
  purchasable: true
},

   // ==========================================
// MATINYANS — THE ROUGE & NOIR EDIT
// ==========================================

rougeBlazer: {
  id: "rougeBlazer",
  name: "The Scarlet Tailored Blazer",
  price: 28000,
  image: "karmirkostyum.jpg",
  sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "blazers",
purchasable: true
},

rougeWideTrousers: {
  id: "rougeWideTrousers",
  name: "The Noir Wide-Leg Trousers",
  price: 20500,
  image: "karmirsevtabat.jpg",
  sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "trousers",
purchasable: true
},

rougeOffShoulder: {
  id: "rougeOffShoulder",
  name: "The Scarlet Off-Shoulder Top",
  price: 15500,
  image: "karmirtop.jpg",
  sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
},

rougeCroppedBlouse: {
  id: "rougeCroppedBlouse",
  name: "The Noir Cropped Blouse",
  price: 18500,
  image: "karmirsevtop.jpg",
  sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
},

rougeMaxiSkirt: {
  id: "rougeMaxiSkirt",
  name: "The Scarlet Maxi Skirt",
  price: 19500,
  image: "karmirkisashrjazgest.jpg",
  sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "skirts",
purchasable: true
},

rougeHeels: {
  id: "rougeHeels",
  name: "The Burgundy Pointed Heels",
  price: 26000,
  image: "karmirkoshikner.jpg",
  sizes: ["36", "37", "38", "39", "40", "41"],
sizeType: "shoes",
purchasable: true
},

rougeEarrings: {
  id: "rougeEarrings",
  name: "The Gold Sculptural Earrings",
  price: 5500,
  image: "karmirakanjoxner.jpg",
  sizes: []
},

rougeClutch: {
  id: "rougeClutch",
  name: "The Noir Quilted Clutch",
  price: 22000,
  image: "karmirpayusak.jpg",
  sizes: []
},

rougeBag: {
  id: "rougeBag",
  name: "The Noir Structured Bag",
  price: 24000,
  image: "karmirpayusak2.jpg",
  sizes: []
},

rougeSunglasses: {
  id: "rougeSunglasses",
  name: "The Noir Sunglasses",
  price: 8500,
  image: "karmirsevaknocner.jpg",
  sizes: []
},

rougeTrousers: {
  id: "rougeTrousers",
  name: "The Noir Tailored Trousers",
  price: 20500,
  image: "karmirsevtabat.jpg",
  sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "trousers",
purchasable: true
},

rougeGloves: {
  id: "rougeGloves",
  name: "The Black Leather Gloves",
  price: 9500,
  image: "sevdzernocner.jpg",
  sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "gloves",
purchasable: true
}, 
  // ==========================================
  // MATINYANS — THE CHOCOLATE & IVORY EDIT
  // ==========================================

  chocolateIvoryCoat: {
    id: "chocolateIvoryCoat",
    name: "Chocolate Tailored Coat",
    price: 38000,
    image: "kariepalto.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "outerwear",
purchasable: true
  },

  chocolateIvoryTrench: {
    id: "chocolateIvoryTrench",
    name: "Espresso Leather-Look Trench",
    price: 42000,
    image: "kariepalto2.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "outerwear",
purchasable: true
  },

  chocolateIvoryBrownBlazer: {
    id: "chocolateIvoryBrownBlazer",
    name: "Chocolate Oversized Blazer",
    price: 28000,
    image: "kariekost.jpg",
    sizes: ["XS/S", "M/L", "XL/XXL"],
sizeType: "oversize",
purchasable: true
  },

  chocolateIvoryWhiteBlazer: {
    id: "chocolateIvoryWhiteBlazer",
    name: "Ivory Tailored Blazer",
    price: 27000,
    image: "kariewhite.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "blazers",
purchasable: true
  },

  chocolateIvoryKnit: {
    id: "chocolateIvoryKnit",
    name: "Ivory Quarter-Zip Knit",
    price: 14500,
    image: "kariebluse.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
  },

  chocolateIvoryDrapedTop: {
    id: "chocolateIvoryDrapedTop",
    name: "Ivory Draped Top",
    price: 12500,
    image: "karietop.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
  },

  chocolateIvoryShirt: {
    id: "chocolateIvoryShirt",
    name: "Classic White Shirt",
    price: 13500,
    image: "kariesarochka.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
  },

  chocolateIvoryTrousers: {
    id: "chocolateIvoryTrousers",
    name: "Ivory Wide-Leg Trousers",
    price: 21000,
    image: "karieshalvar.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "trousers",
purchasable: true
  },

  chocolateIvorySkirt: {
    id: "chocolateIvorySkirt",
    name: "Chocolate Satin-Look Skirt",
    price: 19500,
    image: "karieskirt.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "skirts",
purchasable: true
  },

  chocolateIvoryEverydayBag: {
    id: "chocolateIvoryEverydayBag",
    name: "Espresso Everyday Bag",
    price: 24000,
    image: "kariebag.jpg",
    sizes: []
  },

  chocolateIvoryShoulderBag: {
    id: "chocolateIvoryShoulderBag",
    name: "Chocolate Shoulder Bag",
    price: 22000,
    image: "kariesumka.jpg",
    sizes: []
  },

  chocolateIvoryBoots: {
    id: "chocolateIvoryBoots",
    name: "Chocolate Ankle Boots",
    price: 29000,
    image: "kariekabluk.jpg",
    sizes: ["36", "37", "38", "39", "40", "41"],
sizeType: "shoes",
purchasable: true
  },

  chocolateIvorySneakers: {
    id: "chocolateIvorySneakers",
    name: "Retro White Sneakers",
    price: 23000,
    image: "kariesamba.jpg",
    sizes: ["36", "37", "38", "39", "40", "41"],
sizeType: "shoes",
purchasable: true
  },

  chocolateIvoryBelt: {
    id: "chocolateIvoryBelt",
    name: "Chocolate Leather-Look Belt",
    price: 7500,
    image: "kariegoti.jpg",
    sizes: []
  },

  chocolateIvoryCap: {
    id: "chocolateIvoryCap",
    name: "Ivory Baseball Cap",
    price: 8500,
    image: "kariehat.jpg",
    sizes: []
  },

    // ==========================================
    // MATINYANS — THE CITY MUSE EDIT
    // ==========================================

    cityMuseBlazer: {
      id: "cityMuseBlazer",
      name: "The Pinstripe Power Blazer",
      price: 27500,
      image: "haveslook1.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "blazers",
purchasable: true
    },

    cityMuseSweater: {
      id: "cityMuseSweater",
      name: "The Scarlet Knit Sweater",
      price: 14500,
      image: "haveslook2.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
    },


    cityMuseSkort: {
      id: "cityMuseSkort",
      name: "The Noir Tailored Skort",
      price: 13500,
      image: "haveslook3.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "trousers",
purchasable: true
    },

    cityMuseBoots: {
      id: "cityMuseBoots",
      name: "The Noir Lace-Up Boots",
      price: 32000,
      image: "haveslook5.jpg",
      sizes: ["36", "37", "38", "39", "40", "41"],
sizeType: "shoes",
purchasable: true
    },

    cityMuseBlouse: {
      id: "cityMuseBlouse",
      name: "The Ivory Sculpted Blouse",
      price: 12500,
      image: "haveslook6.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
    },


    // ==========================================
    // MATINYANS — THE HERITAGE DENIM EDIT
    // ==========================================

    heritageJacket: {
      id: "heritageJacket",
      name: "Vintage Leather Biker Jacket",
      price: 32000,
      image: "lavkurtka.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "outerwear",
purchasable: true
    },

    heritageShirt: {
      id: "heritageShirt",
      name: "Heritage Plaid Shirt",
      price: 13500,
      image: "lavsarochka.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
    },

    heritageJeans: {
      id: "heritageJeans",
      name: "Relaxed Wide-Leg Denim",
      price: 19500,
      image: "lavshalvar.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "trousers",
purchasable: true
    },

    heritageBoots: {
      id: "heritageBoots",
      name: "Suede Western Ankle Boots",
      price: 27000,
      image: "lavkoshik.jpg",
      sizes: ["36", "37", "38", "39", "40", "41"],
sizeType: "shoes",
purchasable: true
    },


    // ==========================================
    // MATINYANS — THE NAVY & IVORY EDIT
    // ==========================================

    navyCamelBag: {
      id: "navyCamelBag",
      name: "The Camel Signature Bag",
      price: 18500,
      image: "blue.bag.jpg",
      sizes: []
    },

    navyIvoryTop: {
      id: "navyIvoryTop",
      name: "The Ivory Ribbed Top",
      price: 7900,
      image: "blue.bagieshirt.jpg",
      sizes: []
    },

    navyIvoryTrousers: {
      id: "navyIvoryTrousers",
      name: "The Ivory Tailored Trouser",
      price: 15900,
      image: "blue.bagietrouser.jpg",
      sizes: []
    },

    navyCroppedBlouse: {
      id: "navyCroppedBlouse",
      name: "The Midnight Cropped Blouse",
      price: 10900,
      image: "blue.bluse.jpg",
      sizes: []
    },

    navyChocolateBelt: {
      id: "navyChocolateBelt",
      name: "The Chocolate Buckle Belt",
      price: 6500,
      image: "blue.goti.jpg",
      sizes: []
    },

    navyBowBoots: {
      id: "navyBowBoots",
      name: "The Beige Bow Boots",
      price: 32900,
      image: "blue.heels.jpg",
      sizes: []
    },

    navyBowPumps: {
      id: "navyBowPumps",
      name: "The Nude Bow Pumps",
      price: 24900,
      image: "blue.heel2.jpg",
      sizes: []
    },

    navySatinSkirt: {
      id: "navySatinSkirt",
      name: "The Midnight Satin Skirt",
      price: 13900,
      image: "blue.longskirt.jpg",
      sizes: []
    },

    navyBuckleShirt: {
      id: "navyBuckleShirt",
      name: "The Navy Buckle Shirt",
      price: 11900,
      image: "blue.shirt.jpg",
      sizes: []
    },

    navyIvorySkort: {
      id: "navyIvorySkort",
      name: "The Ivory Tailored Skort",
      price: 11900,
      image: "blue.skirt.jpg",
      sizes: []
    },

    // END MATINYANS — THE NAVY & IVORY EDIT

    blazer: {
      id: "blazer",
      name: "Պիջակ",
      price: 17000,
      image: "blazer.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "blazers",
purchasable: true
    },
    body: {
      id: "body",
      name: "Տոպ (բոդի)",
      price: 8000,
      image: "body.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
    },
    skirt: {
      id: "skirt",
      name: "Կիսաշրջազգեստ",
      price: 12000,
      image: "skirt.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "skirts",
purchasable: true
    },
    boots: {
      id: "boots",
      name: "Երկարաճիտ կոշիկներ",
      price: 23000,
      image: "boots.jpg",
      sizes: ["36", "37", "38", "39", "40", "41"],
sizeType: "shoes",
purchasable: true
    },
  redBlazer: {
  id: "redBlazer",
  name: "Red Tailored Blazer",
  price: 28000,
  image: "karmirkostyum.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "blazers",
  purchasable: true
},
    navyBlazer: {
      id: "navyBlazer",
      name: "Navy Pinstripe Blazer",
      price: 32000,
      image: "kostyum.jpg",
      category: "clothing",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "blazers",
purchasable: true
    },
    sweater: {
      id: "sweater",
      name: "Oversized Turtleneck Sweater",
      price: 18000,
      image: "sviter.jpg",
      category: "clothing",
      sizes: ["XS/S", "M/L", "XL/XXL"],
sizeType: "oversize",
purchasable: true
    },
    blackBody: {
      id: "blackBody",
      name: "Black Turtleneck Bodysuit",
      price: 12000,
      image: "sev.body.jpg",
      category: "clothing",
      sizes: ["XS", "S", "M", "L", "XL"],
sizeType: "tops",
purchasable: true
    },
    jeans: {
  id: "jeans",
  name: "Wide Leg Denim Jeans",
  price: 20500,
  image: "jeans.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "trousers",
  purchasable: true
},
    navyTrousers: {
  id: "navyTrousers",
  name: "Navy Pinstripe Trousers",
  price: 26000,
  image: "kapuyt.ktor.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "trousers",
  purchasable: true
},
    redShirt: {
  id: "redShirt",
  name: "Red Oversized Shirt",
  price: 17500,
  image: "vernashapik.jpg",
  category: "clothing",
  sizes: ["XS", "S", "M", "L", "XL"],
  sizeType: "tops",
  purchasable: true
},
    redBag: {
      id: "redBag",
      name: "Red Leather Handbag",
      price: 20000,
      image: "karmir.payusak.jpg",
      category: "accessories",
      sizes: [],
      purchasable: false
    },
    redHeels: {
  id: "redHeels",
  name: "Red Pointed Heels",
  price: 24000,
  image: "heels.jpg",
  category: "shoes",
  sizes: ["36", "37", "38", "39", "40", "41"],
  sizeType: "shoes",
  purchasable: true
},
    redBoots: {
  id: "redBoots",
  name: "Red Ankle Boots",
  price: 28000,
  image: "karmirboots.jpg",
  category: "shoes",
  sizes: ["36", "37", "38", "39", "40", "41"],
  sizeType: "shoes",
  purchasable: true
},
    gloves: {
  id: "gloves",
  name: "Black Leather Gloves",
  price: 8500,
  image: "dzernoc.jpg",
  category: "accessories",
  sizes: ["S", "M", "L", "XL"],
  sizeType: "gloves",
  purchasable: true
},
    sunglasses: {
      id: "sunglasses",
      name: "Black Sunglasses",
      price: 9500,
      image: "aknoc.jpg",
      category: "accessories",
      sizes: [],
      purchasable: true
    },
    earrings: {
      id: "earrings",
      name: "Gold Statement Earrings",
      price: 5500,
      image: "voski.jpg",
      category: "accessories",
      sizes: [],
      purchasable: false
    }

  };

  const storageKey = "matinyans-shopping-cart-v1";
  const trigger = document.getElementById("matinyans-cart-trigger");
  const count = document.getElementById("matinyans-cart-count");
  const panel = document.getElementById("matinyans-shopping-panel");
  const overlay = document.getElementById("matinyans-shopping-overlay");
  const closeButton = document.getElementById("matinyans-panel-close");
  const content = document.getElementById("matinyans-shopping-content");
  const title = document.getElementById("matinyans-panel-title");
  const status = document.getElementById("matinyans-shopping-status");

  if (!trigger || !count || !panel || !overlay ||
      !closeButton || !content || !title || !status) return;

  const formatPrice = amount =>
    new Intl.NumberFormat("en-US").format(amount) + " AMD";

  const escapeHTML = value =>
    String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (!Array.isArray(saved)) return [];

      const valid = new Map();

      saved.forEach(item => {
        if (!item || !Object.hasOwn(catalog, item.id)) return;
        if (!Number.isSafeInteger(item.quantity) ||
            item.quantity < 1 || item.quantity > 99) return;

        const product = catalog[item.id];

        if (product.sizes.length > 0 &&
            !product.sizes.includes(item.size)) return;

        const size = product.sizes.length ? item.size : null;
        const key = product.id + ":" + (size || "");
        const previous = valid.get(key);

        if (previous) {
          previous.quantity = Math.min(
            99, previous.quantity + item.quantity
          );
        } else {
          valid.set(key, {
            id: product.id,
            size,
            quantity: item.quantity
          });
        }
      });

      return [...valid.values()];
    } catch {
      return [];
    }
  }

  let cart = loadCart();
  let activeProduct = null;
  let lastFocused = null;
  let selectedSize = null;
  let selectedQuantity = 1;

  function saveCart() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(cart));
    } catch {
      status.textContent =
        "Զամբյուղի տվյալները հնարավոր չեղավ պահպանել։";
    }
  }

  function updateCount() {
    const total = cart.reduce(
      (sum, item) => sum + item.quantity, 0
    );
    count.textContent = total;
    trigger.setAttribute(
      "aria-label", `Բացել զամբյուղը, ${total} ապրանք`
    );
  }

  function announce(message) {
    status.textContent = "";
    requestAnimationFrame(() => {
      status.textContent = message;
    });
  }

  function openPanel() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    panel.hidden = false;
    document.body.classList.add("matinyans-shopping-open");
    closeButton.focus();
  }

  function closePanel() {
    panel.hidden = true;
    overlay.hidden = true;
    document.body.classList.remove("matinyans-shopping-open");
    activeProduct = null;

    if (lastFocused && lastFocused.isConnected) {
      lastFocused.focus();
    } else {
      trigger.focus();
    }
  }

  function addToCart(id, quantity = 1, size = null) {
    console.log("ADD TO CART:", { id, quantity, size });
    const product = catalog[id];
    if (!product) return;

    if (product.sizes.length && !product.sizes.includes(size)) {
      announce("Խնդրում ենք ընտրել չափսը։");
      return;
    }
if (false) {
  announce("Այս ապրանքի չափսերն ու առկայությունը դեռ հաստատված չեն։");
  return;
}
    const existing = cart.find(
      item => item.id === id && item.size === size
    );

    if (existing) {
      existing.quantity = Math.min(
        99, existing.quantity + quantity
      );
    } else {
      cart.push({
        id,
        size,
        quantity: Math.min(99, quantity)
      });
    }

    saveCart();
    updateCount();
    announce(`${product.name}՝ ավելացվեց զամբյուղ։`);
  }

  function renderCart() {
    activeProduct = null;
    title.textContent = "Your Bag";

    if (!cart.length) {
      content.innerHTML = `
        <p class="matinyans-shopping-empty">
          Ձեր զամբյուղը դեռ դատարկ է։
        </p>
        <button type="button"
                class="matinyans-shopping-action"
                data-shopping-close>
          CONTINUE SHOPPING
        </button>
      `;
      return;
    }

    const rows = cart.map((item, index) => {
      const product = catalog[item.id];

      return `
        <article class="matinyans-cart-item">
          <img src="${product.image}"
               alt="${escapeHTML(product.name)}">
          <div>
            <h3>${escapeHTML(product.name)}</h3>
            <p>${formatPrice(product.price)}</p>
            ${item.size
              ? `<p>Չափս՝ ${escapeHTML(item.size)}</p>`
              : ""}
            <div class="matinyans-cart-quantity">
              <button type="button"
                      data-cart-change="${index}"
                      data-delta="-1"
                      aria-label="Նվազեցնել քանակը">−</button>
              <span>${item.quantity}</span>
              <button type="button"
                      data-cart-change="${index}"
                      data-delta="1"
                      aria-label="Ավելացնել քանակը">+</button>
            </div>
            <button type="button"
                    class="matinyans-cart-remove"
                    data-cart-remove="${index}">
              REMOVE
            </button>
          </div>
        </article>
      `;
    }).join("");

    const subtotal = cart.reduce(
      (sum, item) =>
        sum + catalog[item.id].price * item.quantity, 0
    );

    content.innerHTML = `
      ${rows}
      <div class="matinyans-cart-subtotal">
        <span>Subtotal</span>
        <strong>${formatPrice(subtotal)}</strong>
      </div>
      <p class="matinyans-shopping-note">
        Վճարման և պատվերի հաստատման համակարգը
        դեռ հասանելի չէ։
      </p>
      <button type="button"
              class="matinyans-shopping-action"
              data-shopping-close>
        CONTINUE SHOPPING
      </button>
      <button
  type="button"
  class="matinyans-checkout-button"
  data-checkout>
  PROCEED TO CHECKOUT
</button>
    `;
  }

  function renderDetails(id) {
    const product = catalog[id];
    if (!product) return;

    activeProduct = id;
    selectedQuantity = 1;
    selectedSize = null;
    title.textContent = "Product Details";

    const sizeOptions = product.sizes.length
      ? `
        <label for="matinyans-product-size">Չափս</label>
        <select id="matinyans-product-size">
          <option value="">Ընտրիր չափսը</option>
          ${product.sizes.map(size => `
            <option value="${escapeHTML(size)}">
              ${escapeHTML(size)}
            </option>
          `).join("")}
        </select>
      <button
  type="button"
  class="matinyans-size-guide-btn"
  data-size-guide="${product.sizeType || 'tops'}"
>
  SIZE GUIDE ↗
</button>
        `
      
      : `<p class="matinyans-shopping-note">
           Չափսերի տվյալները դեռ նշված չեն։
         </p>`;

    content.innerHTML = `
      <div class="matinyans-product-details">
        <img src="${product.image}"
             alt="${escapeHTML(product.name)}">
        <h3>${escapeHTML(product.name)}</h3>
        <p>${formatPrice(product.price)}</p>
        ${sizeOptions}
        <label for="matinyans-detail-quantity">Քանակ</label>
        <input type="number"
               id="matinyans-detail-quantity"
               min="1" max="99" value="1">
        <button type="button"
                class="matinyans-shopping-action"
                data-detail-add="${id}">
          ADD TO BAG
        </button>
      </div>
    `;
  }

  document.addEventListener("click", event => {
    const detailsButton = event.target.closest(
      "[data-product-details]"
    );
    const addButton = event.target.closest(
      "[data-add-to-cart]"
    );

    if (detailsButton) {
      const id = detailsButton.dataset.productDetails;
      if (!catalog[id]) return;
      renderDetails(id);
      openPanel();
      return;
    }

    if (addButton) {
     const productId = addButton.dataset.addToCart;
const product = catalog[productId];

if (!product) return;

if (product.sizes?.length) {
  renderDetails(productId);
  openPanel();
} else {
  addToCart(productId);
}
      return;
    }
  });

  trigger.addEventListener("click", () => {
    renderCart();
    openPanel();
  });

  closeButton.addEventListener("click", closePanel);
  overlay.addEventListener("click", closePanel);
  content.addEventListener("input", event => {
  const field = event.target;

  if (field.id === "checkout-phone") {
    field.value = field.value.replace(/\D/g, "").slice(0, 8);
  }

  if (["fullName", "phone", "address"].includes(field.name)) {
    checkoutDraft[field.name] = field.value;
    saveCheckoutDraft();
  }
});
content.addEventListener("submit", async event => {
  if (event.target.id !== "matinyans-checkout-form") return;

  event.preventDefault();

  const form = event.target;

  if (!form.reportValidity()) return;

  const name = form.elements.fullName.value.trim();
  const phone = "+374" + form.elements.phone.value.trim();
  const phonePattern = /^\+374\d{8}$/;

if (!phonePattern.test(phone)) {
  alert("Please enter a valid Armenian phone number: +37499123456");
  return;
}
  const address = form.elements.address.value.trim();

  if (!name || !phone || !address) {
    alert("Please complete all required fields.");
    return;
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + catalog[item.id].price * item.quantity,
    0
  );

const orderDetails = cart.map(item => {
  const product = catalog[item.id];
  return [
    `Product: ${product.name}`,
    `Size: ${item.size || "One size"}`,
    `Quantity: ${item.quantity}`,
    `Price: ${product.price * item.quantity} AMD`
  ].join("\n");
}).join("\n\n");

const submitButton = form.querySelector('[type="submit"]');
if (submitButton) submitButton.disabled = true;


const orderForm = document.createElement("form");
orderForm.method = "POST";
orderForm.action = "https://formsubmit.co/matinyanmari5@gmail.com";
orderForm.style.display = "none";

const fields = {
  _subject: "New MATINYANS Order",
  _captcha: "false",
  name: name,
  phone: phone,
  address: address,
  products: orderDetails,
  total: `${subtotal} AMD`
};

Object.entries(fields).forEach(([key, value]) => {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = key;
  input.value = value;
  orderForm.appendChild(input);
});

document.body.appendChild(orderForm);
orderForm.submit();
orderForm.remove();

if (submitButton) submitButton.disabled = false;
return;


  cart = [];
saveCart();
updateCount();
checkoutDraft.fullName = "";
checkoutDraft.phone = "";
checkoutDraft.address = "";
  title.textContent = "Order Confirmation";

  content.innerHTML = `
    <div class="matinyans-order-success">
      <h2>Thank You, ${escapeHTML(name)}!</h2>
      <p>Your MATINYANS order preview is ready.</p>
      <p><strong>Order Total:</strong> ${formatPrice(subtotal)}</p>
     <p>Your order request has been received successfully. Payment has not been collected.</p>
      <button type="button"
        class="matinyans-shopping-action"
        data-shopping-close>
        CONTINUE SHOPPING
      </button>
    </div>
  `;
});
  content.addEventListener("click", event => {
    const backToBag = event.target.closest("[data-back-to-bag]");

if (backToBag) {
  const form = content.querySelector("#matinyans-checkout-form");

  if (form) {
    checkoutDraft.fullName = form.elements.fullName.value;
    checkoutDraft.phone = form.elements.phone.value;
    checkoutDraft.address = form.elements.address.value;
  }

  renderCart();
  return;
}
    const checkoutButton = event.target.closest("[data-checkout]");

if (checkoutButton) {
  const subtotal = cart.reduce(
    (sum, item) => sum + catalog[item.id].price * item.quantity,
    0
  );
const orderSummary = cart.map(item => {
  const product = catalog[item.id];

  return `
    <div class="matinyans-order-summary-item">
      <img src="${product.image}" alt="${escapeHTML(product.name)}">

      <div>
        <h4>${escapeHTML(product.name)}</h4>
        <p>Quantity: ${item.quantity}</p>
        <strong>${formatPrice(product.price * item.quantity)}</strong>
      </div>
    </div>
  `;
}).join("");

  title.textContent = "Checkout";

  content.innerHTML = `
    <form id="matinyans-checkout-form" class="matinyans-checkout-form">
      <p class="matinyans-checkout-intro">
        Complete your details to prepare your MATINYANS order.
      </p>

      <label for="checkout-name">Full Name</label>
      <input
        id="checkout-name"
        name="fullName"
        type="text"
        placeholder="Your full name"
        autocomplete="name"
        required
      >

      <label for="checkout-phone">Phone Number</label>
      <div class="matinyans-phone-field">
  <span class="matinyans-phone-prefix">+374</span>

  <input
    id="checkout-phone"
    name="phone"
    type="tel"
    inputmode="numeric"
    maxlength="8"
    minlength="8"
    pattern="[0-9]{8}"
    placeholder="77663271"
    title="Enter 8 digits, for example 77663271"
    autocomplete="tel-national"
    required
  >
</div>

      <label for="checkout-address">Delivery Address</label>
      <textarea
        id="checkout-address"
        name="address"
        rows="3"
        placeholder="City, street, building, apartment"
        required
      ></textarea>
<div class="matinyans-order-summary">
  <h3>YOUR ORDER</h3>
  ${orderSummary}
</div>
      <div class="matinyans-cart-subtotal">
        <span>Order Total</span>
        <strong>${formatPrice(subtotal)}</strong>
      </div>
<button
  type="button"
  class="matinyans-shopping-action"
  data-back-to-bag>
  ← BACK TO BAG
</button>
      <button type="submit" class="matinyans-checkout-button">
        CONFIRM ORDER
      </button>

      <p class="matinyans-shopping-note">
        Demo checkout — no payment or order submission is processed.
      </p>
    </form>
  `;

const checkoutForm = content.querySelector("#matinyans-checkout-form");

if (checkoutForm) {
  const saved = JSON.parse(
    localStorage.getItem("matinyansCheckoutDraft") || "{}"
  );

  checkoutForm.elements.fullName.value = saved.fullName || "";
  checkoutForm.elements.phone.value = saved.phone || "";
  checkoutForm.elements.address.value = saved.address || "";
}
  return;
}

    const close = event.target.closest("[data-shopping-close]");
    if (close) {
      closePanel();
      return;
    }

    const add = event.target.closest("[data-detail-add]");
    if (add) {
      const id = add.dataset.detailAdd;
      const quantityInput = document.getElementById(
        "matinyans-detail-quantity"
      );
      const quantity = Number(quantityInput?.value);

      if (!Number.isSafeInteger(quantity) ||
          quantity < 1 || quantity > 99) {
        announce("Ընտրիր ճիշտ քանակ՝ 1-ից 99։");
        return;
      }

      const product = catalog[id];
      if (!product) return;

      const sizeInput = document.getElementById(
        "matinyans-product-size"
      );
      const size = sizeInput ? sizeInput.value : null;

      if (product.sizes.length && !size) {
        announce("Ընտրիր չափսը։");
        return;
      }

      addToCart(id, quantity, size);
      renderCart();
      return;
    }

    const change = event.target.closest("[data-cart-change]");
    if (change) {
      const index = Number(change.dataset.cartChange);
      const delta = Number(change.dataset.delta);
      const item = cart[index];

      if (!item || ![-1, 1].includes(delta)) return;

      item.quantity = Math.max(
        1, Math.min(99, item.quantity + delta)
      );
      saveCart();
      updateCount();
      renderCart();
      return;
    }

    const remove = event.target.closest("[data-cart-remove]");
    if (remove) {
      const index = Number(remove.dataset.cartRemove);
      if (!cart[index]) return;

      cart.splice(index, 1);
      saveCart();
      updateCount();
      renderCart();
      announce("Ապրանքը հեռացվեց զամբյուղից։");
    }
  });

  panel.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closePanel();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = [...panel.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]'
    )].filter(element => element.getClientRects().length);

    if (!focusable.length) {
      event.preventDefault();
      panel.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey &&
               document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* MATINYANS — COMPLETE COLLECTION */

  const collectionGrid = document.getElementById(
    "matinyans-collection-grid"
  );

  const collectionCount = document.getElementById(
    "matinyans-collection-count"
  );

  const collectionProducts = Object.values(catalog)
  .filter(product => product.category)
  .filter(product =>
    !product.id.startsWith("emeraldBordeaux") &&
    !product.id.startsWith("rouge")
  );

  function renderCollection(category = "all") {
    if (!collectionGrid || !collectionCount) return;

    const products = collectionProducts.filter(product =>
      category === "all" || product.category === category
    );

    collectionCount.textContent =
      `${products.length} CURATED PIECES`;

    collectionGrid.innerHTML = products.map(product => {
      const image = product.image
        ? `<img src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                loading="lazy">`
        : `<div class="matinyans-collection__placeholder">
             IMAGE COMING SOON
           </div>`;

      return `
        <article class="matinyans-collection__card">
          <div class="matinyans-collection__image">
            ${image}
          </div>

          <div class="matinyans-collection__info">
            <h3>${escapeHTML(product.name)}</h3>
            <p>${formatPrice(product.price)}</p>

            <button type="button"
                    class="matinyans-collection__quick"
                    data-product-details="${product.id}">
              QUICK VIEW
            </button>

            <button type="button"
  class="matinyans-collection__add"
  data-add-to-cart="${product.id}">
  ADD TO BAG
</button>
          </div>
        </article>
      `;
    }).join("");
  }

  document.querySelectorAll(
    "[data-collection-filter]"
  ).forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(
        "[data-collection-filter]"
      ).forEach(item => {
        item.setAttribute("aria-pressed", "false");
      });

      button.setAttribute("aria-pressed", "true");
      renderCollection(button.dataset.collectionFilter);
    });
  });

  renderCollection();

  updateCount();
});
// MATINYANS — DYNAMIC SIZE GUIDE

function openMatinyansSizeGuide(type) {
  const modal = document.getElementById("matinyans-size-modal");
  const guide = sizeGuides[type];

  if (!modal || !guide) return;

  const title = modal.querySelector("#matinyans-size-title");
  const thead = modal.querySelector("#matinyans-size-table thead");
  const tbody = modal.querySelector("#matinyans-size-table tbody");
  const note = modal.querySelector("#matinyans-size-note");

  title.textContent = guide.title + " Size Guide";

  thead.innerHTML = "";
  tbody.innerHTML = "";

  const headerRow = document.createElement("tr");

  guide.headers.forEach((heading) => {
    const th = document.createElement("th");
    th.textContent = heading;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);

  guide.rows.forEach((row) => {
    const tr = document.createElement("tr");

    row.forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  note.textContent = guide.note;
  modal.hidden = false;
}

document.addEventListener("click", (event) => {
  const guideButton = event.target.closest("[data-size-guide]");

  if (guideButton) {
    const type = guideButton.dataset.sizeGuide;
    openMatinyansSizeGuide(type);
    return;
  }

  if (event.target.closest("[data-size-close]")) {
    const modal = document.getElementById("matinyans-size-modal");
    if (modal) modal.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const modal = document.getElementById("matinyans-size-modal");
    if (modal) modal.hidden = true;
  }
});