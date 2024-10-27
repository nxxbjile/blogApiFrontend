import React from "react";
import Code from "../components/Code";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Method from "../components/Method";
import Response from "../components/Response";
import Params from '../components/params'
import { endpoint_props } from "../components/endpoints";

const Endpoints = () => {
    const blogs_params = [
        {
            key:"page",
            value:"page number to show (default : 1)",
            type:"number"
        },
        {
            key:"limit",
            value:"defines number of items per page (default : 20)",
            type:"number"
        }
    ];
    
    const props = endpoint_props;
  return (
    <div className={`p-2 w-full h-fit`}>
        {
            props.map((prop)=>(
                <div key={prop.id} className={`my-3`}>
                    <h1 className={`text-xl font-semibold my-2`}>{prop.title}</h1>
                    <Code>
                    <Method req={prop.req_method} endpoint={prop.endpoint} />
                    <Params params={prop.params} />
                    <Response response={prop.response} />
                    </Code>
                    <br />
                    {
                        prop.sub_routes && 
                        (
                            prop.sub_routes.map((route)=>(
                                <div key={route.id} className={`my-3`}>
                                    <h1 className={`text-xl font-semibold my-2`}>{route.title}</h1>
                                    <Code>
                                    <Method req={route.req_method} endpoint={route.endpoint} />
                                    <Params params={route.params} />
                                    <Response response={route.response} />
                                    </Code>     
                                </div>
                            ))
                        )
                    }
                </div>
            ))
        }
      
    </div>
  );
};

export default Endpoints;
