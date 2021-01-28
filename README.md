## CRUD OF STUDENTS
This little CRUD contains the basic HTTP requests of the students path. <br>
### REQUIREMENTS
Have installed -
- NodeJS
- Docker
- Docker-Compose
- MySQL 

To install all dependencies you must run
```
npm i
```
Show all containers
```
sudo docker ps -a
```
Verify that MySQL server is active. If you use Docker, it starts up
```
sudo docker start <idContenedor>
```
Configure the .env file with your credentials. <br>
To start the server you can use two commands.
```
npm run dev
npm run start
```
However,  `npm run dev`  requires nodemon, which can be installed globally by running:
```
npm i -g nodemon
```
other way to install `nodemon` is 
```
npm install nodemon -D
```
### CRUD EXAMPLE 
#### GET
```
http://localhost:3000/v1/students
```
```json
{
    "status": 200,
    "msg": "Success",
    "data": [
        {
            "id": 1,
            "name": "Victoriasaurio",
            "lastname": "Rex"
        },
        {
            "id": 2,
            "name": "David",
            "lastname": "Mendoza"
        },
        {
            "id": 3,
            "name": "Sara",
            "lastname": "Reyes"
        }
    ]
}
```
#### POST
```
http://localhost:3000/v1/students
```
```json
{
    "name": "Vicente",
    "lastname": "Yah"
}
```
```json
{
    "status": 201,
    "msg": "Student created",
    "data": {
        "id: ": 22
    }
}
```
#### UPDATE

```
http://localhost:3000/v1/students/15
```
```json
{
    "name": "Hector",
    "lastname": "Cetina"
}
```
```json
{
    "status": 201,
    "msg": "Updated student",
    "data": {
        "id": "15"
    }
}
```

#### DELETE
```
http://localhost:3000/v1/students/21
```
```json
{
    "status": 200,
    "msg": "Eliminated student",
    "data": {
        "id": "21"
    }
}
```

## USING DOCKER-COMPOSE
To generate the containers you need to run, in this case 3 containers will be created:
```
sudo docker-compose up
```
Make the necessary changes considering the .env file. With the shortcut CTRL + C you stop the containers without deleting them.

## USING TEST
Have installed - <br>
- Jest
- Supertest
To install this dependencies you must use `npm install jest -D` and `npm install supertest -D`

To run our tests we must execute the command:
```
npm test
```
Thanks to the script we have in the package.json