# Overview
This project is a React-based frontend application that displays hotel details. It's part of a full-stack application that uses Express.js and PostgreSQL on the backend.
## Features

- Responsive design for mobile and desktop
- Display hotel information fetched from REST API
- Integrates with an Express.js backend
- Uses PostgreSQL for data management
- Shimmer loader for improved user experience while loading data
- Reusable React components
- Configuration file for easy management of static values

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Pranto-Sen/W3_Assignment_03_Frontend.git
    cd W3_Assignment_03_Frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

1. **Start the development server**:
    ```sh
     npm run dev
    ```

    The application will run at `http://localhost:5173/hotel/:slug`
   
## Project structure
```
W3_Assignment_03_Frontend
├── images
├── node_modules
├── public
└── src
    ├── assets
    ├── Body
    │   ├── AmenitiesSection.jsx
    │   ├── BookingWidget.jsx
    │   ├── DatePickerStatic.jsx
    │   ├── HostInfoSection.jsx
    │   ├── HostSection.jsx
    │   ├── ReviewSection.jsx
    │   ├── SleepSection.jsx
    │   ├── Slider.jsx
    │   └── SliderUpperSection.jsx
    ├── Footer
    │   ├── ExploreOptions.jsx
    │   └── ThingsToKnowSection.jsx
    ├── Header
    │   └── Navbar.jsx
    ├── App.jsx
    ├── main.jsx
    ├── NotFound.jsx
    ├── ShimmerLoader.jsx
    ├── style.css
    └── useHotelData.jsx
├── .eslintrc.cjs
├── .gitignore
├── config.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```
