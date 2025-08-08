# StyleHub - Fashion E-commerce Website

A modern, responsive e-commerce website for displaying men's and women's clothing with a beautiful UI and interactive features.

## 🚀 Features

### Core Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, modern design with smooth animations and hover effects
- **Product Categories**: Separate pages for Men's and Women's clothing
- **Shopping Cart**: Add products to cart with local storage persistence
- **Quick View**: Modal popup for detailed product information
- **Sale Section**: Dedicated sale page with countdown timer and discounted products
- **Newsletter Subscription**: Email subscription functionality
- **Search Functionality**: Product search capability
- **Filtering & Sorting**: Filter products by category, size, price, and color

### Pages
1. **Homepage** (`index.html`) - Landing page with featured products and categories
2. **Men's Fashion** (`mens.html`) - Men's clothing with filters and pagination
3. **Women's Fashion** (`womens.html`) - Women's clothing with filters and pagination
4. **Sale** (`sale.html`) - Discounted products with countdown timer

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and cart management
- **Font Awesome**: Icons for better UX
- **Unsplash Images**: High-quality product images

## 📁 File Structure

```
Ecommerce/
├── index.html          # Homepage
├── mens.html          # Men's clothing page
├── womens.html        # Women's clothing page
├── sale.html          # Sale page
├── styles.css         # Main stylesheet
├── script.js          # JavaScript functionality
└── README.md          # Documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #e74c3c (Red)
- **Secondary**: #2c3e50 (Dark Blue)
- **Background**: #f8f9fa (Light Gray)
- **Text**: #333 (Dark Gray)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold weights for emphasis
- **Body Text**: Clean, readable font

### Components
- **Navigation**: Sticky header with active state indicators
- **Product Cards**: Hover effects with quick view overlay
- **Buttons**: Multiple styles (primary, secondary, outline)
- **Forms**: Newsletter subscription with validation
- **Footer**: Multi-column layout with social links

## 🚀 Getting Started

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Navigate** through the different pages using the navigation menu
4. **Test** the interactive features:
   - Add products to cart
   - Use quick view functionality
   - Subscribe to newsletter
   - Apply filters on product pages

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout with sidebar filters)
- **Tablet**: 768px - 1199px (Adaptive layout)
- **Mobile**: < 768px (Stacked layout, mobile-optimized navigation)

## 🛒 Shopping Cart Features

- **Add to Cart**: Click "Add to Cart" button on any product
- **Cart Counter**: Real-time cart count in header
- **Local Storage**: Cart persists between browser sessions
- **Notifications**: Success messages when items are added
- **Quick View**: Detailed product view with size/quantity selection

## 🎯 Interactive Elements

### Product Interactions
- **Hover Effects**: Product cards lift and show overlay
- **Quick View**: Modal popup with product details
- **Add to Cart**: One-click cart addition
- **Price Display**: Current and original prices with discounts

### Navigation
- **Active States**: Current page highlighting
- **Smooth Scrolling**: Smooth transitions between sections
- **Search Icon**: Clickable search functionality

### Forms
- **Newsletter**: Email subscription with validation
- **Filters**: Checkbox-based product filtering
- **Sorting**: Dropdown for product sorting options

## 🔧 Customization

### Adding Products
To add new products, follow this structure in the HTML:

```html
<div class="product-card">
    <div class="product-image">
        <img src="product-image-url" alt="Product Name">
        <div class="product-overlay">
            <button class="btn-quick-view">Quick View</button>
        </div>
        <div class="product-badge">Sale</div> <!-- Optional -->
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p class="product-category">Category</p>
        <div class="product-price">
            <span class="current-price">$49.99</span>
            <span class="original-price">$69.99</span> <!-- Optional -->
        </div>
        <button class="btn btn-primary add-to-cart">Add to Cart</button>
    </div>
</div>
```

### Styling Customization
- Modify colors in `styles.css` by changing CSS custom properties
- Adjust layout by modifying grid and flexbox properties
- Update typography by changing font-family declarations

## 🌟 Key Features Explained

### 1. Cart System
- Uses localStorage to persist cart data
- Real-time cart count updates
- Add multiple quantities of same item
- Success notifications on add

### 2. Quick View Modal
- Dynamic modal creation with JavaScript
- Product image, details, size selection
- Quantity selector
- Add to cart from modal

### 3. Responsive Filters
- Sidebar filters on desktop
- Collapsible on mobile
- Multiple filter categories
- Apply filters button

### 4. Sale Features
- Countdown timer for limited offers
- Sale badges on products
- Discounted pricing display
- Sale category cards

## 📞 Support

For questions or support:
- **Email**: info@stylehub.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Fashion St, Style City

## 📄 License

This project is created for educational and demonstration purposes. All rights reserved.

---

**StyleHub** - Your destination for trendy fashion and style! 🛍️✨
