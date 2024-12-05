# E-Commerce Backend API

Welcome to the **E-Commerce Backend API**! This Node.js-based backend supports the operations of a small e-commerce platform. The API manages users, products, and orders, providing features like recent order tracking, user-specific order retrieval, and stock management.

## Features
- **User Management**: Create, update, and retrieve user information.
- **Product Management**: Add, update, manage stock, and track buyers of products.
- **Order Management**: Create, update, and fetch orders, including filtering by date or user.
- **Stock Overview**: Fetch the total stock quantity of all products combined.

---

## Base URL
The API is deployed on Vercel. Use the following base URL for all endpoints:
https://imagined-assignment-th37-git-master-shiwangs-projects-b019ffcc.vercel.app/

---

## API Endpoints

### User Endpoints
| Method | Endpoint                 | Description                                 |
|--------|--------------------------|---------------------------------------------|
| POST   | `/user/createUser`       | Create a new user.                         |
| GET    | `/user/getuserDetails`   | Retrieve all user details.                 |
| GET    | `/user/getOrders`        | Retrieve all orders placed by a user.      |
| PATCH  | `/user/updateUserDetails`| Update details of an existing user.        |

### Product Endpoints
| Method | Endpoint                   | Description                                 |
|--------|----------------------------|---------------------------------------------|
| POST   | `/product/createProduct`   | Add a new product.                         |
| GET    | `/product/getProductDetails`| Retrieve details of a specific product.    |
| GET    | `/product/getTotalStock`   | Get the total stock quantity of products.  |
| PATCH  | `/product/updateProductDetails`| Update product details.                 |
| POST   | `/product/getProductBuyers`| Get users who bought a specific product.   |

### Order Endpoints
| Method | Endpoint                   | Description                                 |
|--------|----------------------------|---------------------------------------------|
| POST   | `/order/createOrder`       | Create a new order.                        |
| POST   | `/order/getOrderDetails`   | Retrieve details of a specific order.      |
| GET    | `/order/pastSevenOrders`   | Get orders placed in the last 7 days.      |
| POST   | `/order/getUserOrders`     | Get all orders placed by a specific user.  |
| PATCH  | `/order/updateOrder`       | Update an existing order.                  |

---
