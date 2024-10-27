import React from "react";
import Code from "../components/Code";
import Method from "../components/Method";
import Response from "../components/Response";

const Home = () => {
  const blogs_res = `
    {
    "blogs": [
        {
            "__v": 0,
            "_id": "6718db6e28c0c2fbc65fd875",
            "author": "Clifford Kihn",
            "content": "Arbor coadunatio centum vulnus pecto. Veritas vallum spargo. Suscipio absque advoco vorago vomer adduco. Curia crur agnitio ars coepi vehemens. Vesco itaque assentator appono atqui mollitia non facilis nemo iure.",
            "id": 1,
            "keywords": [
                "Arbor",
                "coadunatio",
                "centum",
                "vulnus",
                "pecto.",
                "Veritas",
                "vallum",
                "spargo.",
                "iure."
            ],
            "published_date": "2024-09-25",
            "tags": [
                "reactJS",
                "maths",
                "biology",
                "physics",
                "php",
                "nextJS",
                "algo"
            ],
            "title": "camouflage carefully emotional unlike finally feminize gloomy if",
            "username": "Francesco_Becker73"
        },
        //18 More respnoses
        {
            "__v": 0,
            "_id": "6718db6e28c0c2fbc65fd888",
            "author": "Vanessa Turcotte",
            "content": "Artificiose valens audacia. Vado termes suscipio arx conicio. Cetera voluptate suscipit adnuo demo illum voco turba in voluptatibus. Truculenter color asperiores suadeo soluta. Abstergo color acidus dedecor.",
            "id": 20,
            "keywords": [
                
                "asperiores",
                "suadeo",
                "soluta.",
                "Abstergo",
                "color",
                "acidus",
                "dedecor."
            ],
            "published_date": "2024-02-20",
            "tags": [
                "maths",
                "java",
                "c",
                "physics",
                "pixiJS",
                "new",
                "biology"
            ],
            "title": "immense surprised uh-huh nor instead pearl yet tensely",
            "username": "Ollie.Corwin"
        }
    ],
    "current_page": 1,
    "per_page": 20,
    "showing": {
        "from": 0,
        "to": 20
    },
    "total_blogs": 999,
    "total_pages": 50
}

        `;
  const baseUrl = "https://blogapi-hlu3.onrender.com/blogs";
  return (
    <div className={`w-full h-fit p-3 flex flex-col justify-center`}>
      <h1>
        This is a simple RESTful Blog API with fake blog and user data which is
        stored on mongoDB Atlas, it also has authentication which is implemented
        with jsonwebtoken library and password encryption with bcryptjs, this
        api is made in expressJS and it is live on{" "}
        <a className={`text-blue-600 font-semibold underline`} href={baseUrl}>
          blogAPI
        </a>
      </h1>
      <h1 className={`text-3xl m-2`}>Sample URL</h1>
      <Code>
        <Method req={"GET"} endpoint={"/blogs"} />
        <Response response={blogs_res} />
      </Code>
    </div>
  );
};

export default Home;
