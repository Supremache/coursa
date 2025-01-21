# Coursa - Learning Management System

![image](https://github.com/user-attachments/assets/1582f160-911b-436e-beec-5f13259b4daf)

Coursa is a cutting-edge eCommerce platform for courses, designed to seamlessly connect educators and learners. With its robust features and modern tech stack, Coursa offers a comprehensive solution for managing courses, users, and other essential functionalities, making it the ultimate platform for online education.

---

## Features

### 📊 **Interactive Dashboard**
- **Analytics & Progress Tracking**: Monitor course performance and user engagement.
- **User Metrics**: Insights into learner activity and preferences.
- **Revenue Insights**: Real-time earnings data for instructors.
- **Dynamic Statistics**: Visual and actionable metrics.

### 👥 **User Management**
- **Role-Based Access Control**: Admin, Instructor, and Student roles with tailored permissions.
- **Comprehensive Profiles**: Manage personal details and activity.
- **Secure Authentication**: Robust login and signup system powered by Next-Auth.

### 📚 **Course Management**
- **Effortless Creation & Editing**: Tools for instructors to design and manage courses.
- **Organized Content**: Streamlined categorization and content structuring.
- **Category Management**: Organize courses by topics and themes.
- **Progress Tracking**: Visual progress indicators for learners.

### ⭐ **Reviews & Ratings**
- **Interactive Rating System**: Enable students to rate courses.
- **Student Feedback**: Collect and display reviews to improve courses.
- **Dynamic Review Components**: Engaging UI for feedback collection.

---

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) 15+
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/)
  - [Shadcn/ui](https://shadcn.dev/)
  - [Lucide Icons](https://lucide.dev/)
- **State Management**: React Hooks
- **Authentication**: [Next-Auth](https://next-auth.js.org/)

---

## Directory Structure

```
/src/
├── app/
│   ├── admin/
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── courses/
│   │   │   │   ├── category/
│   │   │   │   │   ├── page.tsx
│   │   │   │   ├── new/
│   │   │   │   │   ├── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   ├── members/
│   │   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   ├── courses/
│   │   ├── [category]/
│   │   │   │   ├── [course]/
│   │   │   │   │   ├── page.tsx
│   │   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   ├── login/
│   │   ├── page.tsx
│   ├── signup/
│   │   ├── page.tsx
│   ├── profile/
│   │   ├── courses/
│   │   │   ├── page.tsx
│   │   ├── instructor/
│   │   │   ├── page.tsx
│   │   ├── massage/
│   │   │   ├── page.tsx
│   │   ├── reviews/
│   │   │   ├── page.tsx
│   │   ├── settings/
│   │   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── components/
├── constants/
├── hooks/
├── lib/
├── types/
```

---

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.
- A code editor like **VS Code**.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/supremache/coursa.git
   cd coursa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   [http://localhost:3000](http://localhost:3000)

---

## Future Enhancements

- **Payment Gateways**: Enable secure course purchases.
- **Multi-Language Support**: Cater to a global audience.
- **Certificate Generation**: Issue completion certificates.
- **AI-Powered Feedback**: Use sentiment analysis to improve courses.

---

## Contributing

We welcome contributions to Coursa! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

![localhost_3000_admin_dashboard](https://github.com/user-attachments/assets/a388cd1f-b5b8-4c81-885e-2be034080706)
![image](https://github.com/user-attachments/assets/2fbf352a-9cb8-4bc5-af13-ab0c096b64c9)
![image](https://github.com/user-attachments/assets/f1a62480-c4d2-4180-b4d1-e12baa1ad420)
![image](https://github.com/user-attachments/assets/793a1214-17f1-4027-8bc4-05f757a5408a)
![image](https://github.com/user-attachments/assets/8ba12eb0-a32f-4c8d-8275-7c1d25517a23)
![image](https://github.com/user-attachments/assets/b93003dc-7f3b-4b22-8746-8a3484728977)

![image](https://github.com/user-attachments/assets/d668c553-b893-4301-b610-35a64d5fe989)
![image](https://github.com/user-attachments/assets/6e2a5f20-e081-417b-a8bd-80994658eb40)
![image](https://github.com/user-attachments/assets/f7ad5000-fd89-4c7b-8f84-617dc02f0137)
![image](https://github.com/user-attachments/assets/705ab3b1-d187-4910-8092-76640f9bc5f8)
![image](https://github.com/user-attachments/assets/11af2e84-9f06-4dbf-861d-7a96f7a2b996)
![image](https://github.com/user-attachments/assets/63a3984e-838d-498b-804a-df69c2cad82a)
![image](https://github.com/user-attachments/assets/0e2669c0-7f98-41bb-80db-2e57f9936a09)


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Thank you for choosing Coursa as your Learning Management System!

