// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Shopping Cart Functionality
const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");
const cartOverlay = document.getElementById("cart-overlay");
const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const emptyCartMessage = document.getElementById("empty-cart-message");
const cartSubtotal = document.getElementById("cart-subtotal");
const checkoutBtn = document.getElementById("checkout-btn");
const continueShopping = document.getElementById("continue-shopping");

let cart = [];

// Toggle Cart Sidebar
cartIcon.addEventListener("click", () => {
  cartSidebar.classList.remove("translate-x-full");
  cartOverlay.classList.remove("hidden");
  document.documentElement.classList.add("no-scroll"); // prevents scroll without breaking sticky
});

function closeCartSidebar() {
  cartSidebar.classList.add("translate-x-full");
  cartOverlay.classList.add("hidden");
  document.documentElement.classList.remove("no-scroll"); // restore normal scroll
}

closeCart.addEventListener("click", closeCartSidebar);
cartOverlay.addEventListener("click", closeCartSidebar);
continueShopping.addEventListener("click", closeCartSidebar);

// Add to Cart Functionality
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    const image = button.getAttribute("data-image");

    // Check if item already exists in cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id,
        name,
        price,
        image,
        quantity: 1,
      });
    }

    updateCart();

    // Show notification
    const notification = document.createElement("div");
    notification.className =
      "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate-fadeIn";
    notification.innerHTML = `
                    <i class="fas fa-check-circle mr-2"></i>
                    <span>Added to cart</span>
                `;
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

// Update Cart
function updateCart() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  if (totalItems > 0) {
    cartCount.classList.remove("hidden");
  } else {
    cartCount.classList.add("hidden");
  }

  // Update cart items
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    cartSubtotal.textContent = "$0.00";
    checkoutBtn.disabled = true;
    return;
  } else {
    emptyCartMessage.classList.add("hidden");
    checkoutBtn.disabled = false;
  }

  let subtotal = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "flex items-center border-b border-gray-100 pb-4";
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${
        item.name
        }" class="w-16 h-16 object-cover rounded mr-4">
        <div class="flex-grow">
            <h4 class="font-medium">${item.name}</h4>
            <div class="flex justify-between items-center mt-1">
                <div class="flex items-center">
                    <button class="decrease-quantity text-gray-500 hover:text-indigo-600 mr-2" data-id="${
                        item.id
                    }">
                        <i class="fas fa-minus text-xs"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="increase-quantity text-gray-500 hover:text-indigo-600 ml-2" data-id="${
                        item.id
                    }">
                        <i class="fas fa-plus text-xs"></i>
                    </button>
                </div>
                <span class="font-medium">$${itemTotal.toFixed(
                    2
                )}</span>
            </div>
        </div>
        <button class="remove-item ml-4 text-gray-400 hover:text-indigo-500" data-id="${
            item.id
        }">
            <i class="fas fa-times"></i>
        </button>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  // Update subtotal
  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

  // Add event listeners to quantity buttons
  document.querySelectorAll(".increase-quantity").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const item = cart.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        updateCart();
      }
    });
  });

  document.querySelectorAll(".decrease-quantity").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const item = cart.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
      }
    });
  });

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      cart = cart.filter((item) => item.id !== id);
      updateCart();
    });
  });
}

// Checkout Button
checkoutBtn.addEventListener("click", () => {
  alert(
    "Thank you for your purchase! This is a demo site. No actual order will be placed."
  );
  cart = [];
  updateCart();
  cartSidebar.classList.add("translate-x-full");
  cartOverlay.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Initialize cart
updateCart();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
