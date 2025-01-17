import React, { useContext ,useEffect,useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashbord from './components/Dashboard/EmployeeDashbord'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

export const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        const userData =JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
    }
  
  },[])
  
// console.log(user)
const handleLogin = (email, password) => {
  if (email === 'admin@me.com' && password === '123') {
    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
  } else if (userData) {
    const employee = userData.find((e) => email === e.email && e.password === password);
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
    } else {
      console.log("Employee not found in userData");
      alert("Invalid user");
    }
  } else {
    console.log("No userData available");
    alert("Invalid user");
  }
};


  return (
    <>
      { !user ? <Login handleLogin= {handleLogin}/> : ''}
      {user =='admin' ? <AdminDashboard changeUser={setUser}/> : 
      (user == 'employee' ? <EmployeeDashbord data= {loggedInUserData} changeUser={setUser} /> : null)}
      
    </>
  )
}

export default App