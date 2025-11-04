# Aladia NestJS Monorepo Backend Challenge

## 📦 Overview
This repository contains a **NestJS Monorepo** built for the Aladia technical backend challenge.

It includes two applications:
- **apps/gateway** → Public HTTP REST API.
- **apps/authentication** → Microservice for user management.

Both communicate internally via **TCP** using NestJS Microservices.

---

## 🚀 Features
- NestJS Monorepo with modular structure.
- Controller → Service → Repository pattern.
- MongoDB (Mongoose) integration.
- DTO validation with `class-validator`.
- TCP-based microservice communication.
- Swagger UI documentation.
- Docker-ready setup.

---

## Project Structure
apps/
gateway/ # Public HTTP REST API
authentication/ # Authentication microservice
common/ # Shared code (DTOs, filters, pipes)
core/ # Core modules and configuration
config/ # Configuration and environment variables


---

## Technologies

- NestJS (Monorepo)
- TypeScript
- MongoDB + Mongoose
- NestJS Microservices (TCP transport)
- class-validator for DTO validation
- Docker (optional)
- Postman / Swagger UI for testing

---

## Prerequisites

- Node.js >= 18
- npm or yarn
- MongoDB running locally or in a container
- (Optional) Docker / Docker Compose

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/GastonPini/NestJS-Technical-Code-Challenge.git
cd aladia-nest-monorepo
```

2. Install dependencies:
```npm install
```

3. Configure environment variables (.env):
# Gateway
```GATEWAY_PORT=3000
AUTH_TCP_HOST=0.0.0.0
AUTH_TCP_PORT=8877
```

# Authentication
```MONGO_URI=mongodb://localhost:27017/aladia
```

The Gateway will be available at http://localhost:3000


---

## 🧩 Endpoints

You can import it directly into Postman or Apidog to test the following endpoints:
- `POST /auth/register`: Registers a new user.

```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "123456"
}```

- `GET /auth/users`: Returns a list of registered users (passwords excluded).

---

## 🧪 Postman Collection
A Postman collection is included in the root of the project for quick testing:
`Nest JS Challenge.postman_collection.json`


---

## 📹 Video Walkthrough
🎥 Loom Video: [https://www.loom.com/share/3e8df68789b44a85881873318d8b209d](https://www.loom.com/share/3e8df68789b44a85881873318d8b209d)

---

## 👨‍💻 Author
**Gaston Pini**  
🔗 [LinkedIn](https://www.linkedin.com/in/gaston-pini/)  
💻 [GitHub](https://github.com/GastonPini)
