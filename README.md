# MED_CONNECT -  Smart Healthcare Management System
## Introduction
**MED_CONNECT** is an online doctor consultation platform designed to provide efficient and convenient access to healthcare services. It enables cost and time savings for patients while facilitating improved doctor-patient communication. 

## Features
- **Patient Management:** Store and manage patient records, including personal information, medical history, and treatment details.
- **Doctor & Staff Management:** Maintain and update doctor and staff details, schedules, and responsibilities.
- **Appointment Scheduling:** Book, manage, and track doctor appointments with automated notifications.
- **Reporting & Analytics:** Generate reports to support decision-making and improve hospital operations.
- **Secure User Authentication:** Role-based access control using JWT authentication.
- **Media Management:** Cloud storage for patient records and reports via Cloudinary.

## Tech Stack
- **Frontend:** React.js (with Vite)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **File Uploads:** Formidable package
- **Media Storage:** Cloudinary
- **Communication:** HTTP/HTTPS, Email Integration

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<details>   
<summary> Project Visuals </summary>

  ![Screenshot 2025-04-02 031118](https://github.com/user-attachments/assets/e2a72644-fbaf-4f97-a56a-3ed361036483)

 ![Screenshot 2025-04-02 031559](https://github.com/user-attachments/assets/3c9c8028-287e-4ea4-a584-270b1c236251)

![Screenshot 2025-04-02 031332](https://github.com/user-attachments/assets/5b6534df-76d1-430e-97af-ebe84aef1388)

![Screenshot 4](![Screenshot 2025-04-02 031357](https://github.com/user-attachments/assets/aa3b1fc9-4592-40f2-a0fc-c37ab8e2af74)

![Screenshot 2025-04-02 031417](https://github.com/user-attachments/assets/e9f21993-3a11-401a-8977-c5c3d0022be2)

![Screenshot 2025-04-02 031447](https://github.com/user-attachments/assets/7c20b740-80c9-452b-ac76-5e70de84b1e7)

</details>
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

## Installation
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>=14.x)
- MongoDB
- npm or yarn

### Steps to Set Up
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/medconnect.git
   cd medconnect
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```
5. Run the frontend:
   ```sh
   cd client
   npm install
   npm run dev
   ```

## Usage
- Open `http://localhost:5173` (or the assigned port) in your browser.
- Register/Login as a patient, doctor, or admin.
- Book appointments, manage schedules, and view reports.

## Security Measures
- **JWT Authentication** to ensure secure user sessions.
- **Role-Based Access Control (RBAC)** for different user permissions.
- **Encrypted Passwords** stored securely using hashing.
- **HTTPS** enforced for secure data transmission.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to the branch and create a Pull Request.


### Author
**Ayush Raj**

For any inquiries, feel free to contact me at [ayushraj620621@gmail.com](ayushraj620621@gmail.com).

