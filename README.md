## CRUD OF STUDENTS
This little CRUD contains the basic HTTP requests of the students path. <br>
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
### CRUD EXAMPLE 
#### GET
```
http://localhost:3500/v1/students
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
http://localhost:3500/v1/students
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
[]('/img/update.png')
```
http://localhost:3500/v1/students/15
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
[]('/img/update-after.png')
#### DELETE
```
http://localhost:3500/v1/students/21
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
[]('/img/delete.png')

## USING DOCKER
Docker compose `sudo docker-compose up`