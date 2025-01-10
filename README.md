# Hospital Food Manager

A hospital food management system built using **Node.js**, **Express.js**, **PostgreSQL**, **React**, and **Vite**. This system manages patient details, diet charts, meal preparation, delivery tasks, and pantry staff, with separate dashboards for Hospital Food Manager and Inner Pantry Staff.

## Features

### 1. **Hospital Food Manager Functionality**
- **Manage patient details**: 
  - Patient Name, Diseases, Allergies, Room Number, Bed Number, Floor Number, Age, Gender, Contact Information, Emergency Contact, and other details.
  
- **Create food/diet charts for patients**:
  - Morning, Evening, and Night meal plans.
  - Specify ingredients for each meal.
  - Include specific instructions (e.g., "no salt," "low sugar").

- **Manage inner pantry**:
  - Input pantry details (Staff Name, Contact Info, Location).
  - Assign food preparation and delivery tasks to specific pantry staff.

- **Track meal preparation and delivery**:
  - Monitor the preparation status of each meal.
  - Track delivery statuses for Morning, Evening, and Night meals.

### 2. **Inner Pantry Functionality**
- **Manage food preparation tasks**:
  - View assigned meal preparation tasks from the hospital food manager.
  - Update the preparation status for individual meals.

- **Manage delivery personnel**:
  - Add delivery personnel details (Name, Contact Info, Other Details).
  - Assign specific meal boxes to delivery personnel.

- **Track meal deliveries**:
  - Include details of each meal box (Patient Information, Room Number, Diet Chart Details).
  - Allow delivery personnel to mark a meal box as "Delivered" via the pantry portal.
  - Ensure delivery status updates are visible to the Hospital Food Manager and Pantry Staff.

### 3. **Delivery Personnel Functionality**
- **Mark deliveries as completed**:
  - Login to the pantry portal.
  - View assigned meal boxes with patient and delivery details.
  - Mark deliveries as "Done" upon successful delivery to patient rooms.
  - Include timestamps and optional delivery notes.

### 4. **Dashboards**
- **Hospital Food Manager Dashboard**:
  - Track all food deliveries.
  - View patient details and diet charts.
  - Monitor pantry performance and meal delivery statuses.
  - Receive alerts for delayed deliveries or issues in preparation.

- **Inner Pantry Dashboard**:
  - Monitor all meal preparation and delivery tasks.
  - Manage delivery personnel and assigned meal boxes.
  - View delivery statuses and real-time updates.

## Technologies Used

### Backend:
- **NestJS** (for building scalable backend)
- **Prisma** (for database management)
- **PostgreSQL** (for database)
- **JWT** (for user authentication)
- **Docker** (for containerization)
- **Node.js** & **Express.js** (web framework)

### Frontend:
- **React.js** with **Vite.js** (for building the user interface)
- **Material UI** (for reusable components)
- **Tailwind CSS** (for responsive design)
- **Axios** (for API calls)

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (preferably the latest LTS version)
- [Docker](https://www.docker.com/get-started) (optional for running in containers)
- [PostgreSQL](https://www.postgresql.org/) (or Docker to run it in a container)