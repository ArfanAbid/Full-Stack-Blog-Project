# Fullstack Project

This project is a full-stack web application with a frontend built using React and Tailwind CSS, and a backend built using Django REST framework. The application uses MySQL as the database.

## Features

- User authentication and authorization
- CRUD operations for managing data
- Responsive UI with Tailwind CSS
- RESTful API with Django REST framework

## Technologies Used

### Frontend

- React
- Tailwind CSS

### Backend

- Django
- Django REST framework

### Database

- MySQL

## Setup and Installation

### Prerequisites

- Node.js and npm
- Python 3.x
- MySQL

### Frontend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/ArfanAbid/Full-Stack-Blog-Project.git
   ```

   ```sh
   cd FullstackBlogProject/Frontend`
   ```

2. Install dependencies:

   ```sh
   npm install i
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```sh
   cd ../Backend
   ```

2. Create a virtual environment and activate it:

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ```sh
   pip install -r requirements.txt
   ```

4. Configure the database settings in `backend/settings.py`:

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'your-database-name',
           'USER': 'your-database-user',
           'PASSWORD': 'your-database-password',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

5. Apply migrations:

   ```sh
   python manage.py migrate
   ```

6. Start the Django development server:

   ```sh
   python manage.py runserver
   ```

### Database Setup

1. Ensure MySQL is installed and running on your machine.
2. create a file mydb.py same as in manage.py directory

```sh
        import mysql.connector

        database = mysql.connector.connect(host = 'localhost', user ='DB name ', password= 'you set for your DB')

        #prepare a cursor object

        cursorObject=database.cursor()

        #Create a data base

        cursorObject.execute("CREATE DATABASE database_name")

        print("All Done!")

```

3. Execute using
   `python mydb.py`

## Usage

1. Ensure both frontend and backend servers are running.
2. Open your web browser and navigate to `http://localhost:5173` for the frontend.
3. The backend API can be accessed at `http://localhost:8000/`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.
