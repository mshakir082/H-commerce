import {useState} from "react";
import axios from "axios";
import { withSignIn } from "react-auth-kit";

const SignInComponent = ()=> {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/register",{email,password}).then((res) => {
      if (res.status === 200) {
        if (
          this.props.signIn({
            token: res.data.token,
            expiresIn: res.data.expiresIn,
            tokenType: "Bearer",
            authState: res.data.authUserState,
            refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
            refreshTokenExpireIn: res.data.refreshTokenExpireIn, // Only if you are using refreshToken feature
          })
        ) {
          // Redirect or do-something
        } else {
          //Throw error
        }
      }
    });
  };

  
    return (
      <form onSubmit={onSubmit}>
        <input
          type={"email"}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <input
          type={"password"}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button>Submit</button>
      </form>
    );
  }


export default withSignIn(SignInComponent);
