# AutoGrade - AI Powered Teacher Assistant

**AutoGrade** is an end-to-end, AI-driven grading platform designed to help teachers automate assignment processing, plagiarism detection, and personalized feedback generation. Integrating seamlessly with Google Classroom and Google Forms, AutoGrade streamlines grading workflows, reduces teacher workload, and enhances student learning outcomes.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Fork and Contribution](#fork-and-contribution)
- [Screenshots](#screenshots)
- [Documentation and References](#documentation-and-references)
- [Future Enhancements](#future-enhancements)
- [Acknowledgements](#acknowledgements)

---

## Introduction

AutoGrade automates the grading process by leveraging OCR, NLP, and machine learning to process and evaluate student assignments. Key objectives include:

- **Reducing Teacher Workload:** Automate manual grading and feedback, freeing teachers to focus on personalized instruction.
- **Enhancing Feedback Quality:** Deliver dynamic, actionable insights tailored to individual student performance.
- **Integrating Modern Technologies:** Utilize cutting-edge web technologies (React, TypeScript, Vite) alongside AI/ML frameworks (Flask, scikit-learn) for a robust grading ecosystem.
- **Seamless Classroom Integration:** Connect directly with Google Classroom and Forms for efficient assignment management.

---

## Features

### User-Focused Features

- **Automated Grading & OCR:**  
  - Retrieves assignment PDFs via Google Classroom and Forms, converts them to images, and extracts text using Tesseract and pdf2image.  
  - Processes large volumes of submissions with minimal manual intervention.

- **Plagiarism Detection & Grouping:**  
  - Uses MinHash and LSH to identify copied content and flags assignments with high similarity.  
  - Clusters similar assignments using TF-IDF and cosine similarity for efficient batch grading.

- **Dynamic Feedback Generation:**  
  - Integrates with LLM APIs (e.g., Gemini API) to provide personalized, detailed feedback for each assignment.
  - Allows teachers to review and adjust feedback before distribution.

- **Dashboard & Analytics:**  
  - Offers an interactive dashboard for teachers to monitor submission statuses, grading outcomes, and student performance metrics in real time.

---

## Tech Stack

- **Frontend:**  
  - **Framework:** React + TypeScript + Vite  
  - **Plugins:** @vitejs/plugin-react and @vitejs/plugin-react-swc for fast refresh  
  - **Linting:** ESLint with recommended TypeScript and React configurations

- **Backend:**  
  - **API Server:** Node.js with Express for RESTful API management  
  - **AI/ML Integration:** Python with Flask to serve machine learning models (scikit-learn, spaCy, Tesseract, pdf2image)

- **Databases:**  
  - **Structured Data:** PostgreSQL, MongoDB for assignment metadata and user information

- **Feature Engineering & NLP:**  
  - **Libraries:** scikit-learn for TF-IDF, MinHash, LSH; spaCy for tokenization and normalization

- **Cloud & Deployment:**  
  - **Containerization:** Docker, Kubernetes (Google Kubernetes Engine)  
  - **CI/CD & Monitoring:** Google Cloud Build, Cloud Monitoring, BigQuery, and Data Studio

- **Integration:**  
  - **APIs:** Google Classroom & Forms APIs for seamless assignment management  
  - **Authentication:** Google OAuth 2.0 and Google Cloud Identity for secure access

---

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/raazseth/Auto-Grade-Frontend.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd autograde
   ```

3. **Install Dependencies:**
   - For the **Frontend** (React + TypeScript + Vite):
     ```bash
     npm install
     ```
   - For the **Backend** (Express & Flask):
     - Navigate to the Node.js backend folder and install dependencies:
       ```bash
       cd backend/node
       npm install
       ```
     - Navigate to the AI/ML folder and install Python dependencies:
       ```bash
       cd ../python-ai
       pip install -r requirements.txt
       ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the frontend root directory:
     ```
     VITE_API_BASE_URL=YOUR_API_URL
     VITE_GOOGLE_CLASSROOM_API_KEY=YOUR_GOOGLE_API_KEY
     ```
   - Configure additional environment variables for backend services as required.

5. **Start Development Servers:**
   - **Frontend:**
     ```bash
     npm run dev
     ```
   - **Backend:**
     - For Express:
       ```bash
       cd backend/node
       npm run dev
       ```
     - For Flask AI/ML service:
       ```bash
       cd backend/python-ai
       flask run
       ```

6. **Access the Application:**
   Open your browser and navigate to `http://localhost:5173` to access the AutoGrade teacher dashboard.

---

## Fork and Contribution

1. **Fork the Repository:**  
   Click the "Fork" button on the repository page.

2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/raazseth/Auto-Grade-Frontend.git
   ```

3. **Create a New Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes:**  
   Develop your feature and commit changes with clear, descriptive messages.

5. **Push Your Branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Submit a Pull Request:**  
   Open a pull request on GitHub to merge your changes into the main branch.

---

## Screenshots

- **Dashboard Overview:**
  
  *Real-time view of assignment submissions, grading outcomes, and feedback.*
  ![Dashboard](https://github.com/user-attachments/assets/ea422ec9-6107-4786-9fb0-975bd6a316d1)

- **ClassRoom Integration:**
  
  *Detailed view for teachers to validate automated grading and personalized feedback.*
  ![Classes-AutoGrade-04-06-2025_06_50_PM](https://github.com/user-attachments/assets/275cba61-f1c1-470c-a00b-2876288e4c20)
  ![Hackathon-Class-2025-04-06-2025_06_49_PM](https://github.com/user-attachments/assets/147c2c63-1d1b-455d-85b9-5680170ef4f2)

- **Automated AI Assignment Creation:**
  
  *Create assignments and google forms quickly using AI.*
  ![Assignment-AutoGrade-04-06-2025_06_50_PM](https://github.com/user-attachments/assets/860574cb-d114-4a91-b7bb-fe54909c12e8)
  ![Assignment-AutoGrade-04-06-2025_06_46_PM](https://github.com/user-attachments/assets/76be3206-7b26-4d26-89a0-f535512b8d18)


---

## Documentation and References

- **AutoGrade Backend:**
  
  [AutoGrade Backend Link](https://github.com/prakash2003pramanick/AutoGrade)
  
- **AI Plagiarism Checker:**
  
  [AI Plagiarism Checker Link](https://github.com/saurav1729/Autograde-Plagiarism-checker)

---

## Future Enhancements

- **Real-Time Analytics Dashboard:**  
  Expand interactive reporting with enhanced visualizations and KPIs.
  
- **Mobile Application:**  
  Develop native mobile apps for on-the-go access by teachers.
  
- **Advanced Reporting:**  
  Enable customizable report exports (Excel, PDF) for in-depth analysis.

---

## Acknowledgements

AutoGrade is developed and maintained by [Raj Seth](https://github.com/raazseth), [Prityanshu Singh](https://github.com/PrityanshuSingh), [Prakash Pramanick](https://github.com/prakash2003pramanick), and [Saurav Jha](https://github.com/saurav1729). Special thanks to all contributors and the open-source community for providing invaluable tools and frameworks, including React, Express, Flask, scikit-learn, and the Google Developer ecosystem.

Happy Grading!
