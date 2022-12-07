import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import Logo from "../../image/logoE.png"
import { Button, EmailIcon } from '@chakra-ui/react'
// import Login from "../login/Login";
// import SignUp from "../../components/signup/SignUp"
// import { IconButton } from '@chakra-ui/react'


export default function Navbar() {
    return (
        <nav className={style.navcont}> 
            <div className={style.botones}>   
                <img className={style.logo} src={Logo} alt="Logo" />  
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/course">Course</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">Contact</Link>
                <div className={style.buttons}>
                    <Link to="/login">
                        <Button colorScheme='gray'>
                            Login
                        </Button></Link>
                    <Link to="/signup">
                        <Button colorScheme='teal' variant='solid'>
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}