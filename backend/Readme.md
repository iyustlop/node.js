Examples of request

curl http://localhost:5000/api/

example of Register

curl -d '{"name":"pepe ramirez", "age":55, "password": "password", "email":"pepe.ramirez@it.com", "role": "user"}' -H "Content-Type: application/json" -X POST http://localhost:5000/api/auth/register