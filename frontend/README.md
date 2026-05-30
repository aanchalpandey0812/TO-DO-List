Introduction: In this assignment we have to make a TO-DO-List.this assignment is divided into two parts BACKEND and FRONTEND.
So in Backend we have to focus on building TO-DO-List using Node.js,Express.js and MongoDB.In Frontend we are intigrating to-do-list API with React.

Purpose of the assignment: for practicing seamless communication between the frontend and backend to make a fully functional To-Do List app.

The application allows users to:
1.Add tasks
2.View tasks
3.Update tasks
4.Delete tasks
5.Mark tasks as completed
6.Search tasks

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

And now i am able to understand and write a more polish code compared to eariler time.This time i already know many things because of previous assignment .

Features:
1.Add new task
2.Delete task
3.Update task
4.Search task
5.Mark task as completed
6.Responsive UI
7.MongoDB database integration

Challenges:
1.MongoDB Atlas connection issue because IP was not whitelisted:As i am using this for the 1st time i faced silly challenges in connections.
2.Node.js version compatibility issue:Backend is not supporting latest version of Node.js during this challenge i got know about NVM Node.js thing.
3.Understanding React state updates after API calls.
4.Handling errors and validations.


=>CORS allows frontend and backend to communicate even when running on different ports.
Frontend:
localhost:3000
Backend:
localhost:5000
Example:
javascript
const cors = require("cors");
app.use(cors());

 Frontend Technologies
1.React.js:
React.js is used to build frontend UI using components.

In this assignment React is used for:
Displaying tasks
Updating UI dynamically
Managing state

2.useState Hook:
useState stores and updates data.

Example:
javascript
const [tasks, setTasks] = useState([]);
Used for:
 Storing tasks
 Updating tasks dynamically

3.useEffect Hook:
useEffect runs functions automatically when component loads.

Example:
javascript
useEffect(() => {
  fetchTasks();
}, []);

Used for:Fetching tasks when page loads

 4.Axios
 Axios is used to make API requests.
 Used for:
 1.GET requests
 2.POST requests
 3.PUT requests
 4.DELETE requests
 5.PATCH requests

 Example:
 javascript
 axios.get("/api/tasks");

 5.React Icons
 Used to display icons in UI.
 
 Example:
 javascript
 import { FaTrash, FaCheck } from "react-icons/fa";
 Used for:
 Delete icon
 Complete task i

APIs Implemented
1.GET API
Purpose:Fetch all tasks
Endpoint:GET /api/tasks

2.POST API
Purpose:Create new task
Endpoint:POST /api/tasks

3.PUT API
Purpose:Update task
Endpoint:PUT /api/tasks/:id

4.DELETE API
Purpose:Delete task
Endpoint:DELETE /api/tasks/:id

5.PATCH API
Purpose:Update task status
Endpoint:PATCH /api/tasks/:id/status

6.Search API
Purpose:Search tasks
Endpoint:GET /api/tasks?search=text

Conclusion
This project helped in understanding:
1.MERN stack development
2.API creation
3.MongoDB integration
4.React frontend integration
4.CRUD operations
5.Project structure and code organization

Netlify deployed link:https://adorable-griffin-b19079.netlify.app
