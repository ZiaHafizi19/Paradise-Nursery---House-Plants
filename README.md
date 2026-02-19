# 🌿 Paradise Nursery

**Where Green Meets Serenity**

A modern, responsive e-commerce front-end application for browsing and shopping house plants. Built with React, TypeScript, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-blue?logo=tailwindcss)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Plant Catalog](#-plant-catalog)
- [State Management](#-state-management)
- [License](#-license)

---

## 🌱 Overview

Paradise Nursery is a single-page application (SPA) that simulates an online plant nursery shopping experience. Users can browse a curated collection of house plants organized by category, add items to a shopping cart, adjust quantities, and proceed to checkout.

The application was built as a React final project demonstrating proficiency in:
- Component-based architecture
- Client-side routing
- Global state management with React Context
- Responsive UI design with Tailwind CSS

---

## ✨ Features

- **🏠 Engaging Landing Page** — Full-screen hero section with background imagery, company branding, and a call-to-action button
- **🛍️ Product Browsing** — Browse 10 unique house plants organized into 3 categories
- **🛒 Shopping Cart** — Full-featured cart with add/remove items, quantity adjustment, and order summary
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop viewports
- **⚡ Fast & Lightweight** — Built with Vite for blazing-fast development and optimized production builds
- **🎨 Modern UI** — Clean, polished design with smooth transitions and hover effects
- **♿ Accessible** — Semantic HTML, proper button states, and descriptive alt text

---

## 📄 Pages

### 1. Landing Page (`/`)

The entry point of the application featuring:
- Full-screen background image with gradient overlay
- Company name and logo
- Tagline: *"Where Green Meets Serenity"*
- Company description paragraph
- **Get Started** button linking to the product listing page

### 2. Product Listing Page (`/products`)

Browse the complete plant catalog:
- Sticky header with company logo (links back to landing page), tagline, and cart icon
- Plants organized by category: **Air Purifying**, **Aromatic**, **Medicinal**
- Each plant displayed on a card with:
  - Thumbnail image
  - Plant name and price
  - Brief description
  - Category badges
  - **Add to Cart** / **Added to Cart** toggle button
- Cart icon in header displays the current number of items
- Some plants appear in multiple categories

### 3. Shopping Cart Page (`/cart`)

Manage your selected items:
- Cart item cards with thumbnail, plant name, unit price, quantity controls, delete button, and subtotal
- Increment/decrement buttons to adjust quantity
- Removing all units of a plant re-enables the "Add to Cart" button on the product page
- **Order Summary** sidebar with:
  - Itemized breakdown
  - Total number of plants
  - Total cost
  - **Checkout** button
- Empty cart state with illustration and link back to products
- **Continue Shopping** link

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI component library |
| [TypeScript 5.9](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite 7](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [React Router 7](https://reactrouter.com/) | Client-side routing (HashRouter) |
| [clsx](https://github.com/lukeed/clsx) | Conditional class names |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Merge Tailwind classes without conflicts |

---

## 📁 Project Structure

```
paradise-nursery/
├── index.html                    # HTML entry point
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
├── README.md                     # This file
└── src/
    ├── main.tsx                  # React DOM entry point
    ├── App.tsx                   # Root component with routing
    ├── index.css                 # Global styles (Tailwind import)
    ├── utils/
    │   └── cn.ts                 # Utility for merging class names
    ├── data/
    │   └── plants.ts             # Plant catalog data & types
    ├── context/
    │   └── CartContext.tsx        # Shopping cart state management
    ├── components/
    │   └── Header.tsx            # Shared navigation header
    └── pages/
        ├── LandingPage.tsx       # Landing/hero page
        ├── ProductListingPage.tsx # Product catalog page
        └── ShoppingCartPage.tsx  # Shopping cart page
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paradise-nursery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🎯 Usage

1. **Start** on the landing page and click **Get Started**
2. **Browse** plants organized by category (Air Purifying, Aromatic, Medicinal)
3. **Add plants** to your cart by clicking the **Add to Cart** button on any plant card
4. **View your cart** by clicking the cart icon in the header (shows item count badge)
5. **Adjust quantities** using the increment (+) and decrement (−) buttons
6. **Remove items** using the delete (trash) icon on each cart item
7. **Review your order** in the summary sidebar showing total items and cost
8. **Checkout** by clicking the Checkout button (demo placeholder)

---

## 🌿 Plant Catalog

The application features 10 curated house plants across 3 categories:

### 🍃 Air Purifying Plants
| Plant | Price | Description |
|---|---|---|
| Snake Plant | $15 | Hardy, low-maintenance, thrives in low light |
| Spider Plant | $12 | Easy-to-grow with arching leaves |
| Peace Lily | $18 | Elegant white blooms, removes toxins |
| Aloe Vera | $14 | Succulent with medicinal properties |

### 🌸 Aromatic Plants
| Plant | Price | Description |
|---|---|---|
| Peace Lily | $18 | Elegant white blooms with pleasant scent |
| Lavender | $20 | Fragrant herb for relaxation & aromatherapy |
| Jasmine | $22 | Sweet, calming fragrance |
| Rosemary | $10 | Versatile aromatic herb for cooking |
| Holy Basil | $8 | Sacred herb with distinctive aroma |
| Mint | $9 | Refreshing herb with cooling properties |

### 💊 Medicinal Plants
| Plant | Price | Description |
|---|---|---|
| Aloe Vera | $14 | Soothes burns, purifies air |
| Rosemary | $10 | Versatile herb with healing properties |
| Holy Basil | $8 | Traditional medicinal herb |
| Chamomile | $11 | Calming tea & soothing benefits |
| Mint | $9 | Refreshing with digestive benefits |

> **Note:** Some plants appear in multiple categories (e.g., Peace Lily is both Air Purifying and Aromatic).

---

## 🧠 State Management

The application uses **React Context API** for global cart state management.

### CartContext provides:

| Property/Method | Type | Description |
|---|---|---|
| `cartItems` | `CartItem[]` | Array of items currently in the cart |
| `addToCart(plant)` | `function` | Add a plant to the cart (quantity: 1) |
| `removeFromCart(plantId)` | `function` | Remove a plant entirely from the cart |
| `incrementItem(plantId)` | `function` | Increase quantity by 1 |
| `decrementItem(plantId)` | `function` | Decrease quantity by 1 (removes if 0) |
| `isInCart(plantId)` | `function` | Check if a plant is in the cart |
| `totalItems` | `number` | Sum of all item quantities |
| `totalCost` | `number` | Sum of all item subtotals |

### CartItem Type:
```typescript
interface CartItem {
  plant: Plant;
  quantity: number;
}
```

### Plant Type:
```typescript
interface Plant {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  categories: string[];
}
```

---

## 📝 License

This project is created for educational purposes as part of a React development course final project.

---

<p align="center">
  Made with 💚 by Paradise Nursery<br/>
  <em>Bringing nature closer to you since 2020</em>
</p>
