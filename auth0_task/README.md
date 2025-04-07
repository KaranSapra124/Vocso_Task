# 🔐 Auth0 Task - Fullstack Auth Implementation

# 🔗 Live Link

https://vocso-task.onrender.com/

This is a full-stack project built using **React + Vite** for the frontend and **Node.js + Express** for the backend. The application integrates **Auth0** for authentication and includes secure JWT verification, mailing via **Nodemailer**, and token-based flows.

---

## 📁 Folder Structure

```
auth0_task/
├── Backend/               # Node.js + Express backend
│   ├── controllers/       # Logic for token verification, etc.
│   ├── middlewares/       # JWT verification middleware
│   ├── utils/             # Nodemailer config & templates
│   ├── routes/            # All backend routes
│   ├── .env               # Backend environment variables
│   └── index.js           # Entry point of backend server
│
├── node_modules/
│
├── vite-react-app/        # Frontend app (React + Vite)
│   ├── src/
│   │   ├── Pages/
│   │   │   └── Auth.jsx   # Main login page with Auth0 logic
│   │   └── App.jsx
│   ├── public/
│   ├── .env               # Frontend environment variables
│   ├── index.html
│   └── vite.config.js
│
├── README.md              # You're reading it :)
└── package.json
```

---

## 🚀 Tech Stack

### Frontend
- ⚛️ React (with Vite)
- 🔠 Auth0 (via `@auth0/auth0-react`)
- 🔐 Secure token handling using `getAccessTokenSilently`
- 💅 TailwindCSS (for clean UI)

### Backend
- ⚙️ Node.js + Express
- 🔑 Auth0 JWT verification (RS256)
- 📩 Nodemailer (for sending verification tokens)
- 📄 HTML Email Template (custom styled)

---

## 🧪 Features Implemented

- ✅ Auth0 Login via Popup
- ✅ Silent Access Token retrieval
- ✅ Backend JWT verification using public keys
- ✅ Secure token flow with audience & issuer checks
- ✅ Email sending via Nodemailer (token-based)
- ✅ Styled HTML email templates

---

## 🔧 Setup & Installation

### 🛆 Backend Setup

```bash
cd Backend
npm install
```

1. Create a `.env` file in `Backend/` with the following:

```env
PORT=5000
AUTH0_DOMAIN=https://your-auth0-domain
AUTH0_AUDIENCE=https://your-auth0-domain/api/v2/
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
FRONTEND_URL=http://localhost:5173
```

2. Run backend:
```bash
npm run dev
```

---

### 💻 Frontend Setup

```bash
cd vite-react-app
npm install
```

1. Create a `.env` file in `vite-react-app/` with the following:

```env
VITE_CLIENT_ID=your-auth0-client-id
VITE_AUTH_DOMAIN=your-auth0-domain
VITE_AUDIENCE=https://your-auth0-domain/api/v2/
VITE_REDIRECT_URL=http://localhost:5173
VITE_BACKEND_URL=http://localhost:5000
```

2. Run frontend:
```bash
npm run dev
```

---

## 📬 Sample Email Preview

Styled email looks like this:

> **Subject:** Verify Your Token  
> "Hello 👋 Here is your one-time token: `123456`  
> Valid for 10 minutes."

---

## 🔒 To-Do / Future Enhancements

- ⏳ Add token expiry logic (e.g., using Redis or in-memory storage)
- ✅ Add route to verify token and mark it used
- 📂 Optional DB to store issued tokens

---

## 🙌 Author

Made with ❤️ by `You` – a corporate superhero on a mission to master secure authentication flows.

---

## 🛡️ License

MIT

