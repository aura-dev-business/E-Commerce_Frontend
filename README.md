# 💐 Perfume E-commerce App – Frontend Structure

This repository contains the frontend codebase for a modern, scalable perfume e-commerce web application. The app is built using **React**, **Context API**, and **React Router** with a clean, modular architecture.

---

## 🔧 `components/` Folder – Reusable UI Blocks

### `Header.jsx`
- Navigation links: Home, Products, Cart, Profile.
- Shows login/register or user dropdown based on auth state.
- Displays cart item count badge.

### `Footer.jsx`
- Static footer with Privacy Policy, Contact, and social media links.
- Optional: Newsletter subscription input.

### `ProductCard.jsx`
- Shows product image, name, price, and “Add to Cart” button.
- On click: navigates to full product detail view.

### `ProductList.jsx`
- Renders multiple `ProductCard` components.
- Accepts `products` prop.
- Can implement filters/sorting.

### `CartItem.jsx`
- Renders item in cart with name, quantity, price.
- Allows increment, decrement, or remove actions.
- Updates cart state via context.

### `CheckoutForm.jsx`
- Form for shipping address, contact info, and payment method.
- Validates input and submits to `/api/order/checkout`.

### `AuthForm.jsx`
- Handles both login and registration.
- Uses props to determine mode.
- Submits to `/api/auth/login` or `/api/auth/register`.

### `Loader.jsx`
- Spinner or skeleton loader for async API calls.

### `Notification.jsx`
- Toast/modal for messages (e.g., "Payment successful", "Login failed").

---

## 🧭 `pages/` Folder – Route-Level Pages

### `Home.jsx`
- Displays featured perfumes and promotions.
- Uses `ProductList` with `/api/products` data.

### `ProductDetail.jsx`
- Fetches product detail by ID from `/api/products/:id`.
- Shows description, ingredients, size, price, etc.

### `Cart.jsx`
- Lists all cart items with total price.
- Includes "Proceed to Checkout" button.

### `Checkout.jsx`
- Renders `CheckoutForm`.
- On successful payment, redirects to Orders page.

### `Login.jsx`
- Uses `AuthForm` in login mode.
- Sets auth token on success and redirects.

### `Register.jsx`
- Uses `AuthForm` in register mode.
- Sends POST request to register endpoint.

### `Profile.jsx`
- Displays and allows editing user profile data.
- Fetches from `/api/users/profile`.

### `Orders.jsx`
- Lists user’s past orders with items, amount, and status.
- Fetches from `/api/orders`.

### `AdminDashboard.jsx`
- Admin-only page.
- Manage products, orders, and stock.
- Optional: Show charts/analytics.

---

## 🔄 `App.jsx` – Root Application Logic

- Wraps app in `AuthProvider` and `CartProvider`.
- Includes layout: `Header`, `Footer`, and `AppRoutes`.
- Maintains global user and cart state.

---

## 🧠 `context/` Folder – Global State Management

### `AuthContext.jsx`
- Auth state, token, and user info.
- Functions: login, logout, register, validate session.

### `CartContext.jsx`
- Cart items, totals, and quantities.
- Functions: `addToCart`, `removeFromCart`, `clearCart`, `updateQuantity`.
- Data persisted in localStorage or sessionStorage.

---

## 🔌 `services/` Folder – API Handlers

### `api.js`
- Axios instance setup.
- Interceptors for auth token injection and error handling.

### `authService.js`
- API calls: `login`, `register`, `logout`, `getProfile`.

### `productService.js`
- API calls: Get all/single product, create/edit/delete product (admin).

### `cartService.js`
- API calls for cart management (sync with backend if logged in).

### `orderService.js`
- API calls: Place order, get user/admin order history, cancel order.

---

## 🛠 `utils/` Folder

### `formatPrice.js`
- Utility function to format prices, e.g., `£12.99`.

---

## 🧭 `routes/AppRoutes.jsx`

- Defines all routes of the app:

```jsx
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/product/:id" element={<ProductDetail />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/profile" element={<Profile />} />
<Route path="/orders" element={<Orders />} />
<Route path="/admin" element={<AdminDashboard />} />
