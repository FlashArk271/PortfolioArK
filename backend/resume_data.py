RESUME_DATA = """
# Aryan Khandelwal - Software Developer & AI/ML Enthusiast

## Personal Information
- **Location:** Kota, Rajasthan, India
- **Email:** aryankhandelwal243@gmail.com
- **Phone:** 7877681309
- **LinkedIn:** linkedin.com/in/aryan10khandelwal
- **GitHub:** github.com/FlashArk271

## Professional Summary
Final-year Computer Science undergraduate with specialization in Software Development and AI/ML systems. Proficient in Python, C++ with Data Structures & Algorithms, and SQL. Experienced in building production-ready full-stack and backend systems, including LLM-based applications, through internships and real-world projects. Published Researcher and Hackathon Winner.

## Education
- **B.Tech in Computer Science** - NMIMS (2022-2026)
  - CGPA: 8.67/10
- **Class XII (CBSE)** - Disha Delphi Public School (2022)
  - Score: 85.80%
- **Class X (CBSE)** - Disha Delphi Public School (2020)
  - Score: 91.20%

## Technical Skills

### Programming Languages
- Python (Advanced)
- C++ (5-star on HackerRank)
- SQL (4-star on HackerRank)
- JavaScript

### Backend & APIs
- Node.js, Express.js
- Django, Flask, FastAPI
- REST APIs, API Integration

### Databases
- MongoDB, MySQL, PostgreSQL
- SQLite, Supabase

### Frontend
- React.js
- Next.js (basic)
- HTML, CSS

### Tools & Platforms
- Git, GitHub
- Postman, VS Code
- Vercel, Render
- Power BI

### Core CS Fundamentals
- Data Structures & Algorithms
- Object-Oriented Programming (OOP)
- DBMS
- Operating Systems (basic)

## Work Experience

### Software Developer Intern - BlueStock Fintech (Feb 2025 - Mar 2025)
- Developed responsive and reusable UI components using React.js for fintech dashboards
- Converted Figma designs into production-ready code
- Integrated backend REST APIs and resolved bugs through debugging
- Maintained version control standards using Git

### Software Developer Intern - Premier Measurement Solutions (Apr 2025 - May 2025)
- Optimized 3 C++ MultiATE factory systems
- Supported barcode programming and calibration workflow
- Debugged and resolved cross-module integration issues related to NVRAM data handling
- Improved memory integrity, calibration status management, and overall system stability in 5+ production modules

## Projects

### AI/ML Projects

#### 1. Neuro Pilot: Automated Multi-Model (AutoML) Analysis Pipeline
- Automated 100% of the ML pipeline—from dataset search (via Kaggle & Groq APIs) to automated preprocessing, visualizations, and model training—into a single end-to-end platform
- Trained & evaluated multiple models per dataset, performing intelligent best model selection with downloadable results
- Engineered full automation system using PandasAI and Groq API for zero-code data preprocessing, eliminating manual feature engineering
- **Tech Stack:** Python, Machine Learning, Kaggle API, Groq API, PandasAI

#### 2. Online Code Executor with Language Detection and AI-based Complexity Analysis
- Designed a full-stack Online Code Compiler supporting 4+ languages with automatic language detection
- Implemented a code execution engine using Python's subprocess module, enabling input handling and execution
- Integrated LLM-based time and space complexity analysis to evaluate user submitted code
- **Tech Stack:** Python, React.js, LLM Integration, subprocess
- **Links:** Live Demo Available, GitHub Repository

### Full Stack Projects

#### 1. Seller Admin Product Management Dashboard
- Built a full-stack product management dashboard with MERN featuring OTP-based authentication and JWT session management
- Implemented secure RESTful APIs for product CRUD operations, and real-time search functionality with role-based access control
- Designed a responsive seller dashboard with product categorization, multi-image upload support, and deployment
- **Tech Stack:** MongoDB, Express.js, React.js, Node.js (MERN)
- **Links:** Live Demo Available, GitHub Repository

#### 2. Store Review Platform
- Built a full-stack store rating platform with role-based access control (Admin, Owner, User) using React.js, Express.js, and MySQL
- Implemented REST APIs with features including real-time rating aggregation, and form validation on both client and server sides
- Designed secure authentication system with protected routes, token-based sessions, and middleware for role authorization
- **Tech Stack:** React.js, Express.js, MySQL
- **Links:** GitHub Repository

## Publications & Research
- Research paper titled "The Role of Artificial Intelligence in Market Prediction, Customer Retention, and Churn Modeling"
- Published as Chapter 25 in "Next Generation Technologies for Sustainable Development"
- Publisher: Taylor & Francis Publication

## Achievements & Certifications
- 5-star rating in C++ on HackerRank
- 4-star rating in SQL on HackerRank
- Solved over 300 coding problems across competitive programming platforms
- Secured 2nd position among 99 teams in a hackathon by developing an AI-Powered Resume Suite project
- Certification in Python Programming
- Certification in Data Structures & Algorithms (DSA)

## Contact Information
For any inquiries, collaborations, or opportunities:
- **Email:** aryankhandelwal243@gmail.com
- **Phone:** 7877681309
- **LinkedIn:** linkedin.com/in/aryan10khandelwal
- **GitHub:** github.com/FlashArk271
"""

SYSTEM_PROMPT = """You are an AI assistant for Aryan Khandelwal's portfolio website. Your role is to help visitors learn about Aryan's skills, experience, projects, and qualifications.

Here is Aryan's complete resume information:

{resume}

Instructions:
1. Answer questions about Aryan's background, skills, projects, education, and experience accurately based on the resume data provided.
2. Be friendly, professional, and helpful.
3. If asked about something not in the resume, politely indicate that you don't have that information.
4. Highlight relevant achievements and skills when appropriate.
5. Keep responses concise but informative.
6. If someone wants to contact Aryan, provide his email: aryankhandelwal243@gmail.com
7. Be enthusiastic about Aryan's work and accomplishments while remaining professional.
8. For technical questions about his projects, provide detailed explanations based on the project descriptions.

Remember: You represent Aryan's portfolio, so maintain a professional and positive tone throughout the conversation.""".format(resume=RESUME_DATA)
