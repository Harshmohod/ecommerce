// Cart functionality
let cart = [];
let cartCount = 0;

// DOM elements
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const quickViewButtons = document.querySelectorAll('.btn-quick-view');

// Initialize cart from localStorage
function initCart() {
    const savedCart = localStorage.getItem('stylehub-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Update cart count display
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;
}

// Add to cart functionality
function addToCart(productName, price, image) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('stylehub-cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success message
    showNotification(`${productName} added to cart!`);
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Quick view functionality
function showQuickView(productName, price, description, image) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body">
                <div class="product-preview">
                    <img src="${image}" alt="${productName}">
                </div>
                <div class="product-details">
                    <h2>${productName}</h2>
                    <p class="price">$${price}</p>
                    <p class="description">${description}</p>
                    <div class="size-selector">
                        <label>Size:</label>
                        <select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                    <div class="quantity-selector">
                        <label>Quantity:</label>
                        <input type="number" value="1" min="1" max="10">
                    </div>
                    <button class="btn btn-primary add-to-cart-modal">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    
    // Style the modal
    const style = document.createElement('style');
    style.textContent = `
        .quick-view-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
        }
        
        .modal-content {
            background: white;
            border-radius: 10px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            z-index: 1;
        }
        
        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #333;
            z-index: 2;
        }
        
        .modal-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 2rem;
        }
        
        .product-preview img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 5px;
        }
        
        .product-details h2 {
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        
        .price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #e74c3c;
            margin-bottom: 1rem;
        }
        
        .description {
            color: #7f8c8d;
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        .size-selector,
        .quantity-selector {
            margin-bottom: 1rem;
        }
        
        .size-selector label,
        .quantity-selector label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        
        .size-selector select,
        .quantity-selector input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        @media (max-width: 768px) {
            .modal-body {
                grid-template-columns: 1fr;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Add to cart from modal
    const addToCartBtn = modal.querySelector('.add-to-cart-modal');
    const quantityInput = modal.querySelector('.quantity-selector input');
    
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        for (let i = 0; i < quantity; i++) {
            addToCart(productName, price, image);
        }
        closeModal();
    });
}

// Newsletter form functionality
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate subscription
            showNotification('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Product card hover effects
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Add to cart button event listeners
function initAddToCartButtons() {
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const priceElement = productCard.querySelector('.current-price');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            const image = productCard.querySelector('img').src;
            
            addToCart(productName, price, image);
        });
    });
}

// Quick view button event listeners
function initQuickViewButtons() {
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const priceElement = productCard.querySelector('.current-price');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            const image = productCard.querySelector('img').src;
            const description = "This is a high-quality product with excellent craftsmanship and modern design. Perfect for any occasion.";
            
            showQuickView(productName, price, description, image);
        });
    });
}

// Search functionality
function initSearch() {
    const searchIcon = document.querySelector('.nav-icon i.fa-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchTerm = prompt('Enter your search term:');
            if (searchTerm) {
                // Simulate search
                showNotification(`Searching for: ${searchTerm}`);
            }
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCart();
    initAddToCartButtons();
    initQuickViewButtons();
    initNewsletterForm();
    initSmoothScrolling();
    initProductCards();
    initSearch();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some sample product data for demonstration
const sampleProducts = [
    {
        name: "Men's Casual Shirt",
        price: 49.99,
        originalPrice: 69.99,
        category: "Men's Clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop"
    },
    {
        name: "Women's Summer Dress",
        price: 79.99,
        originalPrice: 99.99,
        category: "Women's Clothing",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4c3e5b5a?w=300&h=400&fit=crop"
    },
    {
        name: "Men's Denim Jacket",
        price: 89.99,
        category: "Men's Clothing",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
    },
    {
        name: "Women's Elegant Blouse",
        price: 59.99,
        originalPrice: 79.99,
        category: "Women's Clothing",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop"
    }
];
