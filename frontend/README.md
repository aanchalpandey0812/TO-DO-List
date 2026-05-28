Introduction: In this assignment we have to make a TO-DO-List.this assignment is divided into two parts BACKEND and FRONTEND.
So in Backend we have to focus on building TO-DO-List using Node.js,Express.js and MongoDB.In Frontend we are intigrating to-do-list API with React.

Purpose of the assignment: for practicing seamless communication between the frontend and backend to make a fully functional To-Do List app.

Frontend
1.React.js
2.Axios
3.CSS

Backend
1.Node.js
2.Express.js
3.MongoDB Atlas
4.Mongoose

Environment Variables:
1.Backend (.env):
Create a .env file inside the backend folder and add:
'''env
PORT=5000
MONGO_URI=your_mongodb_connection_string
a.PORT is used to run the backend server.
b.MONGO_URI is the MongoDB Atlas connection string.

2.Frontend (.env):
Create a .env file inside the frontend folder and add: REACT_APP_API_URL=http://localhost:5000/api/tasks
a.REACT_APP_API_URL is used to connect React frontend with backend APIs.

some simple react concepts i used in frontend as mentor mentioned in assignment:
=>const [tasks, setTasks] = useState([]);
This creates a React state variable.
1.tasks: It stores all task data.
2.setTasks:It is used o updates the tasks.
3.useState([]):It is repreasting that initial value is empty array.

=>tasks.map((task) => ...)
map() loops through all tasks and displays them one by one
It is used for displaying task list dynamically.

=>await createTask(taskData);
This waits for API request to finish.
createTask(taskData) sends data to backend and backend stores task in MongoDB.

Features:
1.Add new tasks
2.Delete tasks
3.Update task status
4.Search tasks
5.Store data in MongoDB
6.Dynamic UI updates
7.REST API integration

Challenges:
1.MongoDB Atlas connection issue because IP was not whitelisted:As i am using this for the 1st time i faced silly challenges in connections.
2.Node.js version compatibility issue:Backend is not supporting latest version of Node.js during this challenge i got know about NVM Node.js thing.
3.Understanding React state updates after API calls.
4.I also find logic building during code writing difficult ,lots of error are there in my code which i unable to find early i have taken help for understanding that.

