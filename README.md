# Vardha Warehousing

A modern warehousing and logistics website built using Next.js. The platform showcases warehouse facilities, business solutions, and allows customers to submit booking requests and enquiries online.

## Overview

Vardha Warehousing is designed to help businesses explore warehousing solutions, estimate warehouse space costs, and connect with the warehouse team through a simple and responsive web platform.

## Features

- Responsive modern user interface
- Warehouse facility showcase
- Solutions and use-case pages
- Warehouse space booking form
- Business enquiry form
- Warehouse space cost estimation calculator
- Email notifications for bookings and enquiries
- PostgreSQL database integration
- Mobile-friendly design

## Technology Choices

### Next.js
Used for its modern React-based architecture, file-based routing, and performance optimization.

### Tailwind CSS
Used to create a responsive and consistent user interface while enabling faster development.

### PostgreSQL (Neon)
Used for storing booking requests and customer enquiries securely.

### Resend
Used for sending automated email notifications for booking requests and enquiries.

### Vercel
Used for deployment and hosting of the application.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- PostgreSQL (Neon)
- Resend
- Vercel

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AS-Codes15/vardha-warehousing
cd vardha-warehousing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL=your_database_url
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your_email
```

### 4. Run the Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## Deployment

The project can be deployed on Vercel.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy the application.

## Author

Archana Sharma