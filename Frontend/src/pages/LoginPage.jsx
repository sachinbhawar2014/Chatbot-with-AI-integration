
import "./LoginPage.css";



const LoginPage = () => {
  return <div>
    <form>
      <h3>Login Form</h3>
      <label htmlFor="username"> Username</label>
      <input type="text" name="username" id="username" placeholder="Enter Username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Enter Password" />
      <button>Login Now</button>

    </form>


  </div>;
};


export default LoginPage;