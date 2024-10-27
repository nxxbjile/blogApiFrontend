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


export const endpoint_props = [
    {
        id:1,
        title:"Blogs",
        req_method:"GET",
        endpoint:"/blogs",
        params:[
            {
                key:"page",
                value:"page number to show (default : 1)",
                type:"number"
            },
            {
                key:"limit",
                value:"defines number of items per page (default : 20)",
                type:"number"
            },
        ],
        response:blogs_res,
        sub_routes:[
            {
                id:1,
                title:"Blog by ID",
                req_method:"GET",
                endpoint:"/blogs/id/:id",
                params:[
                    {
                        key:"id",
                        type:"number",
                        value:"the id of the blog",
                    },
                ],
                response:`
{
    "blog": {
        "__v": 0,
        "_id": "6718db6e28c0c2fbc65fd8ac",
        "author": "Lynda Reichert",
        "content": "Commodi arbitro clementia audio suus campana corrigo cogo. Nobis talis acerbitas bibo deripio clamo depopulo pectus cedo. Spiculum curia denuo comptus solum. Quod crinis consuasor adsuesco bene coma deleo tremo. Pauper subseco defetiscor auctus.",
        "id": 56,
        "keywords": [
            "Commodi",
            "arbitro",
            "subseco",
            "defetiscor",
            "auctus."
        ],
        "published_date": "2025-05-11",
        "tags": [
            "maths",
            "reactJS",
            "api",
            "nextJS",
            "biology",
            "sciene",
            "new"
        ],
        "title": "modulo stupendous modulo negotiation coolly without what hm",
        "username": "Esperanza_Stiedemann41"
    },
    "success": true
}
                `,
            },
            {
                id:2,
                title:"Get specific data from Blog",
                req_method:"GET",
                endpoint:"/blogs/id/:id/:field",
                params:[
                    {
                        key:"id",
                        type:"number",
                        value:"id of the blog",
                    },
                    {
                        key:"field",
                        type:"string",
                        value:"the desired field"
                    }
                ],
                response:`
{
"success": true,
"title": "modulo stupendous modulo negotiation coolly without what hm"
}

                `,
            },
            {
                id:3,
                title:"Make a new Blog Post",
                req_method:"POST",
                endpoint:"/blogs/blog",
                params:[
                    {
                        key:"author",
                        type:"string",
                        value:"author Name"
                    },
                    {
                        key:"content",
                        type:"string",
                        value:"content of the blog"
                    },
                    {
                        key:"keywords",
                        type:"String[]",
                        value:"keywords for the blog"
                    },
                    {
                        key:"username",
                        type:"string",
                        value:"username of the Author"
                    },
                    {
                        key:"tags",
                        type:"string[]",
                        value:"Tags for the blog"
                    },
                    {
                        key:"title",
                        type:"string",
                        value:"title for the blog"
                    },
                ],
                response:`
{
"blog": {
    "__v": 0,
    "_id": "671dfa7a7a496eaa24ce269f",
    "author": "some author",
    "content": "some content",
    "id": 1002,
    "keywords": [
        "keyword",
        "another keyword"
    ],
    "published_date": "2024-10-27",
    "tags": [
        "sometag",
        "anothertag"
    ],
    "title": "some title",
    "username": "someuser"
},
"message": "New blog created successfully!",
"success": true
}


                `,
            },
            {
                id:4,
                title:"Make a changes in Blog Post",
                req_method:"PATCH",
                endpoint:"/blogs/id/:id",
                params:[
                    {
                        key:"Any fields",
                        type:"string",
                        value:"Any number of fields can be updated"
                    },
                ],
                response:`
{
"blog": {
    "__v": 0,
    "_id": "671dfa7a7a496eaa24ce269f",
    "author": "some author",
    "content": "some content",
    "id": 1002,
    "keywords": [
        "keyword",
        "another keyword"
    ],
    "published_date": "2024-10-27",
    "tags": [
        "sometag",
        "anothertag"
    ],
    "title": "some title",
    "username": "UpdatedUsername"
},
"message": "blog successfully updated",
"success": true
}

                `,
            },
            {
                id:5,
                title:"Delete a Blog Post",
                req_method:"DELETE",
                endpoint:"/blogs/id/:id",
                params:[
                    {
                        key:"id",
                        type:"number",
                        value:"Id of the blog post to be deleted"
                    },
                    {
                        key:"Authorization header",
                        type:"header",
                        value:"As delete is not allowed users have to use their token for authentication",
                    }
                ],
                response:`
{
"blog": {
    "__v": 0,
    "_id": "671dfa7a7a496eaa24ce269f",
    "author": "some author",
    "content": "some content",
    "id": 1002,
    "keywords": [
        "keyword",
        "another keyword"
    ],
    "published_date": "2024-10-27",
    "tags": [
        "sometag",
        "anothertag"
    ],
    "title": "some title",
    "username": "UpdatedUsername"
},
"message": " blog deleted successfully!",
"success": true
}

                `,
            },


        ],
    },
    {
        id:2,
        title:"Users",
        req_method:"GET",
        endpoint:"/users",
        params:[
            {
                key:"Authorization token",
                vlaue:"string",
                value:"token"
            },
            {
                key:"page",
                type:"number",
                value:"page number (default : 1)",
            },
            {
                key:"limit",
                type:"number",
                value:"limit the results per page (default : 20)",
            },

        ],
        response:`
{
"current_page": 1,
"per_page": 20,
"total_pages": 51,
"total_users": 1008,
"users": [
    {
        "__v": 0,
        "_id": "6718cc432449ca26888db9fe",
        "email": "Santina_Morissette@hotmail.com",
        "first_name": "Amya",
        "id": "1",
        "last_name": "O'Hara-Mante",
        "total_blogs": 10,
        "username": "Braeden.Rolfson19"
    },
    // More Users 
    ....
    {
        "__v": 0,
        "_id": "6718cc432449ca26888dba11",
        "email": "Sydni_Weissnat97@hotmail.com",
        "first_name": "Alek",
        "id": "20",
        "last_name": "Prohaska",
        "total_blogs": 15,
        "username": "Lenore_Daniel"
    }
]
}

        `,
        sub_routes:[
            {
                id:1,
                title:"Get user By ID",
                req_method:"GET",
                endpoint:"/users/id/",
                params:[
                    {
                        key:"id",
                        value:"id of the user",
                        type:"number",
                    },
                    {
                        key:"Authorization header",
                    }
                ],
                response:`
{
"__v": 0,
"_id": "6718cc432449ca26888dba11",
"email": "Sydni_Weissnat97@hotmail.com",
"first_name": "Alek",
"id": "20",
"last_name": "Prohaska",
"total_blogs": 15,
"username": "Lenore_Daniel"
}

                `,

            },
            {
                id:2,
                title:"get specific details of user",
                req_method:"GET",
                endpoint:"/users/id/:id/:field",
                params:[
                    {
                        key:"any field of the user schema",
                    }
                ],
                response:`
{
"success": true,
"username": "Lenore_Daniel"
}


                `,
            },
            {
                id:3,
                title:"Create a user",
                req_method:"POST",
                endpoint:"/users/user",
                params:[
                    {
                        key:"first_name",
                        type:"string",
                        value:"first name of the user",
                    },
                    {
                        key:"last_name",
                        type:"string",
                        value:"last name of the user",
                    },
                    {
                        key:"email",
                        type:"string",
                        value:"email of the user",
                    },
                    {
                        key:"total_blogs",
                        type:"string",
                        value:"total number of blogs written by the user",
                    },
                    {
                        key:"username",
                        type:"string",
                        value:"the username of the user",
                    }
                ],
                response:`
{
"success": true,
"user": {
    "__v": 0,
    "_id": "671dfefa2f11998dcdcdef67",
    "email": "newemail@exmaple.com",
    "first_name": "newname",
    "id": "1012",
    "last_name": "anothername",
    "total_blogs": 23,
    "username": "newusername3"
}
}

                `,
            },
            {
                id:4,
                title:"Update a user",
                req_method:"PATCH",
                endpoint:"/users/id/:id",
                params:[
                    {
                        key:"any fields",
                        value:"any number of fields to update",
                    }
                ],
                response:`
{
"success": true,
"updatedUser": {
    "__v": 0,
    "_id": "671dfefa2f11998dcdcdef67",
    "email": "newemail@exmaple.com",
    "first_name": "newname",
    "id": "1012",
    "last_name": "anothername",
    "total_blogs": 23,
    "username": "newusername69"
}
}


                `,
            },
            {
                id:5,
                title:"Delete a user",
                req_method:"DELETE",
                endpoint:"/users/id/:id",
                params:[
                    {
                        key:"id",
                        value:"id of the user",
                        type:"number",
                    }
                ],
                response:`
{
"deletedUser": {
    "__v": 0,
    "_id": "671dfefa2f11998dcdcdef67",
    "email": "newemail@exmaple.com",
    "first_name": "newname",
    "id": "1012",
    "last_name": "anothername",
    "total_blogs": 23,
    "username": "newusername69"
},
"message": "User deleted successfully",
"success": true
}


                `,
            },

        ]
    }

];


