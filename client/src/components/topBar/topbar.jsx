import "./topbar.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { useEffect } from "react";
import logo from '../../assets/event.gif'
const TopBar = ({ user }) => {
  const navigate = useNavigate()
  const checkSession = () => {
    axios.get("http://localhost:8000/check", { withCredentials: true }).then((res) => {
      if (res.data.msg !== "user") {
        navigate("/");
      }
    }).catch((err) => {
      console.log("Failed Checking", err);
    })
  }
  useEffect(() => { checkSession() }, [])
  const userLogout = () => {
    
      Swal.fire({
        title: 'Do you want to proceed with logout?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Logout',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios.get("http://localhost:8000/users/logout", { withCredentials: true }).then((res) => {
          navigate("/");
             })
        }
     


    }).catch((e) => { console.log(e) })
  }
  return (
    <>
      <nav className="topBarContainer">
      <img src={logo} />
        <div>
          <h3>{user}</h3>
          <button onClick={userLogout}>Log out</button>
        </div>
      </nav>
    </>
  )
}
export default TopBar;
