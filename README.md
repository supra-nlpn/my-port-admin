# 🛠 my-port/Admin

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFFEFE)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=000)](https://firebase.google.com/)

**Manage Your Portfolio with Ease - No More Redeploys for Content Updates!**

## Description

`my-port/Admin` is a dedicated administration application designed to streamline the management of your static portfolio website, particularly those hosted via platforms like GitHub Pages. The common challenge for developers and tech professionals with static portfolios is the need to redeploy their entire codebase for every content update (e.g., adding a new project, updating work experience).

This application directly addresses this pain point. With `my-port/Admin`, you can effortlessly manage all your key portfolio components, including:

* **Education:** Add, edit, and organize your educational background.
* **Employment:** Maintain your professional work experience and job details.
* **Projects:** Showcase your projects with descriptions, technologies used, and links.
* **Publications:** List your publications, articles, and contributions.

Built with a modern tech stack of **React + Vite** for a fast and responsive frontend and **Firebase** for a reliable and scalable backend, `my-port/Admin` empowers you to update your portfolio content in real-time without the cumbersome process of redeploying your entire static site.



## 💻 Tech Stack

- **Frontend**: React (with Vite bundler)  
- **Backend**: Firebase Authentication + Firestore  
- **Deployment**: GitHub Pages  



## 🔧 Firebase Setup

Before running the project, you need to set up a Firebase project:

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Navigate to **Project Settings > General > Your Apps**, add a new **Web app**, and Firebase will generate your config keys.
3. Enable **Firestore Database** (use test mode for development) under the **Build** section.
4. Enable **Email/Password Authentication** under **Authentication > Sign-in method**.
5. Copy your Firebase config keys into a `.env` file as shown below.



## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/supra-nlpn/my-port-admin.git
cd my-port-admin

# 2. Install dependencies
npm install

# 3. Set up Firebase config
# 👉 Create a `.env` file in the root with your Firebase config:
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_firebase_app_id

# 4. Run the app locally
npm run dev
```

```bash
# 4. Run the app locally
npm run dev
```


## 🔐 Deployment

To deploy to GitHub Pages securely:

1. **Build the app:**

```bash
npm run build
```

2. **Deploy using `gh-pages`:**

```bash
npm install --save-dev gh-pages
```

3. **Update your `package.json`:**

```json
"homepage": "https://<your-username>.github.io/<repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. **Run:**

```bash
npm run deploy
```

> ⚠️ Never push `dist/` to your main branch!  
> ✅ Add `dist/` to `.gitignore`  
> 🚀 Use a separate `gh-pages` branch or deploy manually



## ⚠️ Security Best Practices

- 🔒 Firebase API keys are **not secrets**, but should be:
  - Restricted by domain (only your GitHub Pages domain)
  - Limited to required APIs
- 🔥 Firebase Firestore rules should strictly enforce authentication and authorization



## 📂 Directory Structure

```
my-port-admin/
├── src/
│   ├── components/
│   ├── pages/
│   ├── firebase.js
│   └── main.jsx
├── public/
├── .env
├── index.html
├── package.json
└── vite.config.js
```



## 📬 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you'd like to change.
