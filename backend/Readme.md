# REST API in node
This project constains a rest api with jwt, express and node.

## Run Docker Image in local

docker run -p 27017:27017 -v /home/sobremesa/Documents/Develop/docker:/data/db --name mongo-node -d mongo:latest

## Examples of request
This section contains some exaples of request. A Postman collection will be provided

### Example of Register

curl -d '{"name":"pepe ramirez", "age":55, "password": "password", "email":"pepe.ramirez@it.com", "role": "user"}' -H "Content-Type: application/json" -X POST http://localhost:5000/api/auth/register