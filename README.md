# Portfolio with Theme Switcher

This is a personal portfolio website project with an integrated **light/dark mode toggle** and **browser detection** features. The website showcases my skills, projects, and experience in a clean, modern, and user-friendly way. It’s built using **Django** (or **Flask**) for the backend and simple **HTML, CSS, and JavaScript** for the frontend.

---

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [License](#license)

---

## **Project Overview**

This project aims to create a **dynamic, responsive personal portfolio website** with the following features:
- **Dark/Light Mode Toggle**: Users can switch between light and dark themes.
- **Browser Detection**: The website adapts its design and behavior based on the user's browser (e.g., Chrome, Firefox, Safari).
- **Contact Form**: A form for visitors to contact me directly through the website.
- **Showcase of Projects and Experience**: Display personal projects, blogs, and work experience.

The goal is to create a simple yet elegant design that is both functional and visually appealing.

---

## **Technologies Used**

- **Frontend**: HTML, CSS, JavaScript
  - **CSS Framework**: Tailwind CSS (optional)
  - **JavaScript**: For light/dark theme toggle, browser detection
- **Backend**: Django (or Flask)
- **Database**: PostgreSQL
- **Version Control**: Git, GitHub
- **Deployment**: Heroku (or any other platform like DigitalOcean)

---

## **Setup and Installation**

### 1. Clone the repository:
```bash
git clone https://github.com/LeonByte/portfolio-with-theme-switcher.git
cd portfolio-with-theme-switcher
```

### 2. Set up a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate
```

### 3. Install backend dependencies:
```bash
pip install -r backend/requirements.txt
```

### 4. Install frontend dependencies (if using package manager like npm):
```bash
npm install  # If you have a package.json in the frontend folder
```

### 5. Apply database migrations (for Django):
```bash
python manage.py migrate
```

### 6. Start the development server:
```bash
python manage.py runserver
```

The app will be available at `http://127.0.0.1:8000/`.

---

## **Project Structure**

The project is divided into **backend** (Django or Flask) and **frontend** (HTML, CSS, JS) folders. Here’s an overview of the directory structure:

```
portfolio-with-theme-switcher/
│
├── backend/                     # Backend folder for Django (or Flask)
│   ├── manage.py                # Main script for Django (or Flask equivalent)
│   ├── portfolio/                # Django app for handling portfolio content
│   │   ├── __init__.py
│   │   ├── models.py            # Database models for projects, blog, etc.
│   │   ├── views.py             # Views to render portfolio pages
│   │   ├── urls.py              # URLs configuration for your portfolio
│   │   ├── admin.py             # Admin setup (if using Django)
│   │   └── migrations/          # Folder for database migrations
│   ├── settings.py              # Django settings (or Flask equivalent)
│   ├── urls.py                  # Main URLs configuration for the backend
│   ├── wsgi.py                  # WSGI configuration (for production deployment)
│   └── requirements.txt         # List of Python dependencies
│
├── frontend/                    # Frontend folder (HTML, CSS, JS)
│   ├── assets/                  # Folder for images, fonts, icons
│   ├── css/                     # CSS files
│   │   ├── style.css            # Main stylesheet for the site
│   │   ├── dark-mode.css        # Custom styles for dark mode
│   │   └── theme.css            # New CSS variables and theme styles
│   ├── js/                      # JavaScript files
│   │   ├── theme-toggle.js      # JS for theme switching functionality
│   │   └── browser-detection.js # JS for detecting user browser
│   ├── templates/               # Template files for the frontend (Django templates)
│   │   ├── base.html            # Base template to be extended (Header, Footer)
│   │   ├── index.html           # Homepage for the portfolio
│   │   ├── about.html           # About me page
│   │   ├── projects.html        # Page to showcase your projects
│   │   ├── contact.html         # Contact page with form and details
│   │   └── 404.html             # Custom 404 page (optional)
│
├── .gitignore                   # Git ignore file (exclude unnecessary files)
├── README.md                    # Readme file explaining the project and setup
├── package.json                 # For any JavaScript-related dependencies (if needed)
└── requirements.txt             # Python dependencies for the backend
```

---

## **Contributing**

We welcome contributions from collaborators! Please follow these guidelines to ensure smooth collaboration:

1. **Fork the repository**: Create your own fork of this repository.
2. **Create a feature branch**: Before you start working on a new feature, create a branch:
   ```bash
   git checkout -b feature-name
   ```
3. **Make changes**: Work on the features or fixes assigned to you, or as discussed.
4. **Commit your changes**: Use meaningful commit messages to describe your changes.
   ```bash
   git commit -m "Added dark mode toggle functionality"
   ```
5. **Push your changes**: Push your changes to your fork.
   ```bash
   git push origin feature-name
   ```
6. **Create a Pull Request**: Once your feature is complete, open a pull request to merge your changes back into the main repository.

If you're new to GitHub or have any questions, feel free to ask!

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Additional Notes**
- If you're contributing to specific features, feel free to take a look at the **Issues** tab on GitHub for open tasks.
- Don’t hesitate to ask for help or clarification—collaboration is key!

---

### **Next Steps:**
- Add more features (e.g., contact form, blog section, etc.).
- Implement better error handling and user validation.
- Start working on frontend design improvements.

---
