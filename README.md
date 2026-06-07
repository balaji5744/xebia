# 🤖 AI-Powered Placement Management Platform

A modern, intelligent campus recruitment system designed to seamlessly bridge the gap between talent and opportunity. By leveraging **AI-driven resume scoring**, **automated skill gap analysis**, and **intelligent job matching**, this platform streamlines the entire placement lifecycle for students, recruiters, and placement officers (TPOs).

---

## 🌟 Key Features

### 👨‍🎓 For Students

- **AI Skill Gap Analysis**
  - Receive personalized AI-driven feedback on missing or weak skills compared to current market demands.

- **Intelligent Job Matching**
  - Discover job opportunities tailored to your profile and technical skill set.

- **Centralized Dashboard**
  - Upload resumes, track application statuses, and manage interview schedules from one place.

---

### 🏢 For Recruiters

- **Smart Candidate Ranking**
  - Automatically parse and score student resumes against job descriptions.

- **Streamlined Hiring**
  - Post jobs, review AI-ranked applicants, and schedule interviews efficiently.

- **Data-Driven Decisions**
  - Identify the best-fit candidates through automated capability assessments.

---

### 🛡️ For Placement Officers (TPO / Admin)

- **Complete Lifecycle Management**
  - Verify student profiles, approve company registrations, and monitor job postings.

- **Analytics Dashboard**
  - View placement statistics, active jobs, and overall student performance.

- **Platform Security**
  - Secure role-based access control (RBAC) ensures data privacy and operational integrity.

---

## 🛠️ Tech Stack

| Category               | Technology       |
| ---------------------- | ---------------- |
| **Frontend Framework** | React + Vite     |
| **State Management**   | Redux Toolkit    |
| **Routing**            | React Router DOM |
| **Styling**            | Tailwind CSS     |
| **Icons**              | Lucide React     |
| **HTTP Client**        | Axios            |

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### 📋 Prerequisites

- Node.js (v16.x or higher recommended)
- npm or yarn

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd placewise-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

> Update the API URL according to your backend configuration.

### 4️⃣ Start the Development Server

```bash
npm run dev
```

### 5️⃣ Open the Application

Navigate to:

```
http://localhost:5173
```

(or the URL provided by Vite in your terminal).

---

## 📂 Project Structure

```text
src/
├── assets/                 # Static files (images, icons)
├── components/             # Reusable UI components
│   ├── common/             # Shared layout components
│   │   ├── Sidebar
│   │   └── Navbar
│   └── student/            # Student-specific components
│       └── SkillGapAlert
├── features/               # Redux slices
│   ├── auth
│   ├── jobs
│   ├── skillGap
│   └── applications
├── hooks/                  # Custom React hooks
├── mock/                   # Mock data for frontend testing
├── pages/                  # Page-level components
│   ├── auth
│   ├── admin
│   ├── recruiter
│   └── student
├── routes/                 # Protected route configurations
├── services/               # API integration and Axios setup
└── utils/                  # Helper functions
    └── date formatting
```

---

## 📜 Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint for code quality checks   |

---

## 🎯 Core Modules

- ✅ AI Resume Scoring
- ✅ Skill Gap Analysis
- ✅ Intelligent Job Matching
- ✅ Resume Management
- ✅ Job & Application Tracking
- ✅ Recruiter Dashboard
- ✅ Placement Officer Dashboard
- ✅ Role-Based Authentication (RBAC)
- ✅ Analytics & Reporting

---

## 📌 Future Enhancements

- AI-powered Interview Preparation
- Resume Improvement Suggestions
- Company-wise Placement Analytics
- Email & SMS Notifications
- Video Interview Integration
- Campus Placement Prediction Models

---

## 📄 License

This project is developed for educational and campus placement management purposes.
