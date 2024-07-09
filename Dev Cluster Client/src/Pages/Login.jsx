import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";


const Login = () => {
  const {user, signIn, googleLogin,createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if(user)
    {
        setTimeout(()=>navigate('/'),3000);
        return;
    }

    const handleRegister=(e)=>
      {
          e.preventDefault();
          const form = new FormData(e.currentTarget)
          const email=form.get('email');
          const password=form.get('pswd');
          console.log(email, password)
          
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
          if (!passwordRegex.test(password)) {
              toast.warning('Password must be at least 6 characters and contain at least one uppercase and one lowercase letter.');
              return;
            }
  
            createUser(email,password)
          .then(res=>{
              Swal.fire({
                  title: "Greetings!",
                  text: "Successfully Registered!",
                  icon: "success"
                });
                navigate(location?.state ? location.state : "/");
             
          })
          .catch(()=>{Swal.fire({
            icon: "error",
            title: "Invalid Credentials!",
            text: "Please provide a valid credentials",
          });})
      }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("pswd");
    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Welcome Back",
          text: "Successfully logged in!",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials!",
          text: "Please provide a valid credentials",
        });
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center font-ibm">
      <Helmet>
            <title>Login Now! | Dev Cluster</title>
        </Helmet>
      <div className="main">
      <div className=" bg-base-300  rounded-b-full pb-3 text-center">
        <h3 className="text-xl font-bold text-core tracking-widest">Continue With</h3>
        <button onClick={() =>
                          googleLogin().then(() => {
                            Swal.fire({
                              title: "Welcome Back!",
                              text: "Successfully logged in!",
                              icon: "success",
                            });
                            navigate(location?.state ? location.state : "/");
                          })
                        } className="btn btn-ghost btn-error text-2xl"><FcGoogle /><span className="-ml-2">oogle</span></button>
        
        
      </div>
      <input className="input" type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleRegister}>
          <label htmlFor="chk" aria-hidden="true" className="text-core label">Sign up</label>
          <input className="inputl" type="email" name="email" placeholder="Email" required />
          <input className="inputl" type="password" name="pswd" placeholder="Password" required />
          <button className="buttonl bg-core ">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form  onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true" className="text-info label">Login</label>
          <input className="inputl" type="email" name="email" placeholder="Email" required />
          <input className="inputl" type="password" name="pswd" placeholder="Password" required />
          <button className="buttonl bg-core">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
