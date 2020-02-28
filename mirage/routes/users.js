let users = [
    {
      id: 1,
      attributes:
      {
        "first-name": "Alex",
        "last-name": "Pandiyan",
        "age": 27
      },
      type: "users"
    },
    {
      id: 2,
      attributes:
      {
        "first-name": "Delux",
        "last-name": "Pandiyan",
        "age": 27
      },
      type: "users"
    },
    {
        id: 3,
        attributes:
        {
          "first-name": "James",
          "last-name": "Bond",
          "age": 27
        },
        type: "users"
      },
      {
        id: 4,
        attributes:
        {
          "first-name": "Captain",
          "last-name": "America",
          "age": 27
        },
        type: "users"
      }
]
export default function(server) {
  server.namespace = "api/user";
    // get a particular user record
    server.get('/users/:id', (schema, request) => {    
      return {
        data: {
            id: request.params.id,
            attributes:
            {
              "first-name": "Delux",
              "last-name": "Pandiyan",
              "age": 27
            },
            type: "users"
        }
      }   
    });
    
    // get all users record
    server.get('/users/findAll', () => {        
      return {
        data: users
      };
    });

    // create record response
    server.post('/users', (schema, request) => {
        const requestBody = JSON.parse(request.requestBody);     

        return {
            data: {
                id: requestBody.id,
                attributes:
                {
                  "first-name": 'raja',
                  "last-name": 's',
                  "age": 27
                },
                type: "users"
            }
        };
    });

    // delete record response
    server.del('/users/:id/destroy', () => {        
        return {
            data: {
                type: "users"
            }
        };
    });
}
