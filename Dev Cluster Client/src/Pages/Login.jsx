import { FcGoogle } from "react-icons/fc";


const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center font-ibm">
      
      <div className="main">
      <div className=" border-b-2  rounded-3xl pb-3 text-center">
        <h3 className="text-xl font-bold text-core tracking-widest">Continue With</h3>
        <button className="btn btn-ghost btn-error text-2xl"><FcGoogle /><span className="-ml-2">oogle</span></button>
        
        
      </div>
      <input className="input" type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true" className="text-core">Sign up</label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button className="buttonl bg-core ">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true" className="text-info">Login</label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button className="buttonl bg-core">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
