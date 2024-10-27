import React from "react";
import Code from "../components/Code";
import Method from "../components/Method";
import Params from "../components/params";
import Response from "../components/Response";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Auth = () => {
  const params = [
    {
      key: "Username",
      value: "Required",
      type: "String",
    },
    {
      key: "Password",
      value: "Required",
      type: "String",
    },
  ];
  const login_params = [
    {
      key: "Username",
      value: "Required",
      type: "string",
    },
    {
      key: "Password",
      value: "Required",
      type: "string",
    },
    {
      key: "Authorization",
      value: "Required(its a Header containing the Bearer Token)",
      type: "string",
    },
  ];
  const signup_res = `
    // Using httpie (cli)
    //http POST https://blogapi-hlu3.onrender.com/auth/signup username="example" password="123"
    {
        "message": "user created Successfully",
        "success": true
    }`;

  const login_res = `
        {
            "expires_in": "1h",
            "message": "logged in successfully!",
            "success": true,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUiLCJpYXQiOjE3MzAwMDg5ODIsImV4cCI6MTczMDAxMjU4Mn0.bEuj1VUvXKwKjvExUOW1Xww2nn1jqSOdf3FZqWQ9nO8",
            "user": {
                "username": "example"
            }
        }

    `;

  return (
    <div className={`p-2 w-full h-fit`}>
      <h1 className={`text-xl font-semibold my-2`}>Accessing Blogs</h1>
      <h2>
        Accessing the blogs is allowed for everyone, however to delete a blog
        you should be logged in.
      </h2>
      <SyntaxHighlighter
          language="json"
          style={atomOneDark}
          className={`rounded-lg`}
        >
          {`// fetching the blogs 
            http GET https://blogapi-hlu3.onrender.com/blogs `}
        </SyntaxHighlighter>
      <h1 className={`text-xl font-semibold my-2`}>Accessing Users</h1>
      <h2>
        Accessing users is not allowed without authentication so, in order to
        access the users you should first make a user and then login to make any
        changes or even to just read the users data.{" "}
      </h2>
      <SyntaxHighlighter
          language="json"
          style={atomOneDark}
          className={`rounded-lg`}
        >
          {`// fetching the users 
            http GET https://blogapi-hlu3.onrender.com/users
            // will fail without token or username and password `}
        </SyntaxHighlighter>
      <br />
      <h1 className={`text-xl font-semibold my-2`}>Signing Up</h1>
      <Code>
        <Method req={"POST"} endpoint={"/auth/signup"} />
        <Params params={params} />
        <Response response={signup_res} />
      </Code>
      <br />
      <h1 className={`text-xl font-semibold my-2`}>Logging In</h1>
      <Code>
        <Method req={"POST"} endpoint={"/auth/login"} />
        <Params params={login_params} />
        <Response response={login_res} />
      </Code>
      <h1 className={`text-xl font-semibold my-2`}>After that</h1>
      <h2>
        After generating the token you can just use the token with authorization header instead of making every request with you username and password.
        Below there is an example query command with httpie-cli to fetch the users using the previous token.
        
        <SyntaxHighlighter
          language="json"
          style={atomOneDark}
          className={`rounded-lg`}
        >
          {`http POST https://blogapi-hlu3.onrender.com/users Authorization:"Bearer [YOUR_TOKEN]"`}
        </SyntaxHighlighter>
      </h2>
    </div>
  );
};

export default Auth;
