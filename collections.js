const grid = document.getElementById("product-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

// Reusable render function
function renderProducts(productList) {
  grid.innerHTML = ""; // Clear existing grid

  productList.forEach((product, index) => {
    const card = document.createElement("div");
    card.className =
      "shoe-card bg-white rounded-lg overflow-hidden shadow-md animate__animated animate__fadeInUp";
    card.style.animationDelay = `${index * 100}ms`;

    card.innerHTML = `
      <div class="relative">
        <img
          src="${product.image || "#"}"
          alt="${product.name || "Product"}"
          class="w-full h-64 object-cover cursor-pointer product-img"
        />
        ${
          product.badge
            ? `<div class="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">${product.badge}</div>`
            : ""
        }
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg mb-1">${product.name || "Unnamed"}</h3>
        <p class="text-gray-600 text-sm mb-2">${product.description || ""}</p>
        <div class="flex justify-between items-center">
          ${
            product.originalPrice
              ? `<div>
                  <span class="font-bold text-lg text-indigo-500">$${product.price.toFixed(
                    2
                  )}</span>
                  <span class="text-gray-400 text-sm line-through ml-2">$${product.originalPrice.toFixed(
                    2
                  )}</span>
                </div>`
              : `<span class="font-bold text-lg">$${product.price.toFixed(
                  2
                )}</span>`
          }
          <button
            class="add-to-cart bg-indigo-600 text-white px-3 py-1 rounded-full text-sm hover:bg-indigo-700 transition duration-300"
            data-id="${product.id}"
            data-name="${product.name}"
            data-price="${product.price}"
            data-image="${product.image}"
          >
            Add to Cart
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  attachAddToCartHandlers();
  setupLightbox();
}

// Add-to-cart button listeners
function attachAddToCartHandlers() {
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const image = button.dataset.image;

      const existingItem = cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ id, name, price, image, quantity: 1 });
      }

      updateCart();

      // Notification
      const notification = document.createElement("div");
      notification.className =
        "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate__animated animate__fadeInUp";
      notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i><span>Added to cart</span>`;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.classList.add(
          "opacity-0",
          "transition-opacity",
          "duration-300"
        );
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    });
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  document.querySelectorAll(".product-img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
      lightboxImg.classList.remove("animate__fadeOut");
      lightboxImg.classList.add("animate__fadeIn");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightboxImg.classList.remove("animate__fadeIn");
    lightboxImg.classList.add("animate__fadeOut");

    setTimeout(() => {
      lightbox.classList.add("hidden");
      lightboxImg.src = "";
      document.body.style.overflow = "auto";
    }, 500); // Matches animate.css fadeOut duration
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Category filtering
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // Toggle active state
    filterButtons.forEach((b) => {
      b.classList.remove("bg-indigo-600", "text-white", "active");
      b.classList.add("bg-white", "text-gray-700");
    });
    btn.classList.remove("bg-white", "text-gray-700");
    btn.classList.add("bg-indigo-600", "text-white", "active");

    const filtered =
      category === "all"
        ? products
        : products.filter((p) => p.category.toLowerCase() === category);
    renderProducts(filtered);
  });
});

// Initial render
renderProducts(products);
