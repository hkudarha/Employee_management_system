// localStorage.clear()


const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update website",
        "taskDescription": "Revamp the homepage design",
        "taskDate": "2024-10-12",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client meeting",
        "taskDescription": "Discuss project requirements",
        "taskDate": "2024-10-10",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix bugs",
        "taskDescription": "Resolve bugs reported in issue tracker",
        "taskDate": "2024-10-14",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database optimization",
        "taskDescription": "Optimize queries for better performance",
        "taskDate": "2024-10-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design new feature",
        "taskDescription": "Create mockups for the new feature",
        "taskDate": "2024-10-09",
        "category": "Design"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Karan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write documentation",
        "taskDescription": "Document the API usage and examples",
        "taskDate": "2024-10-15",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Code review",
        "taskDescription": "Review teammate's pull request",
        "taskDate": "2024-10-13",
        "category": "Development"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Meera",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 2,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social media strategy",
        "taskDescription": "Develop a social media campaign",
        "taskDate": "2024-10-16",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO analysis",
        "taskDescription": "Analyze website SEO performance",
        "taskDate": "2024-10-17",
        "category": "SEO"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client follow-up",
        "taskDescription": "Send follow-up emails to clients",
        "taskDate": "2024-10-08",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Logo design",
        "taskDescription": "Create a new logo for the rebranding",
        "taskDate": "2024-10-06",
        "category": "Design"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Rahul",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "System testing",
        "taskDescription": "Perform end-to-end testing of the product",
        "taskDate": "2024-10-18",
        "category": "QA"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement caching",
        "taskDescription": "Add caching to improve performance",
        "taskDate": "2024-10-20",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Data migration",
        "taskDescription": "Migrate data to the new system",
        "taskDate": "2024-10-07",
        "category": "Database"
      }
    ]
  }
];

const admin = [
    {
      "Id": 1,
      "Email": "admin@example.com",
      "Password": "123"
    }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

  
export const getLocalStorage = () =>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
   return {employees, admin}
  }

  