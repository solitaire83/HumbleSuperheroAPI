# Info
A small web app which use Express.js and React as backend and frontend.<br>
You can add/view your superheroes
- **Adding Route**: `POST /superheroes`
  ```json
  {
    "name": "Flash",
    "superpower": "speed",
    "score": "8"
  }
  ```
- **Fetching Route**: `GET /superheroes`

### To collaborate effectively with a teammate on this project, I would:
1. **Communicate Regularly**: regularily talk with my teammate/s to achieve/add tasks and features.
2. **Distribution of tasks**: we would distribute our tasks according to our skills and knowledge. (and help eachother if we are stuck somewhere)
3. **Knowledge Sharing**: i always like to learn new things, so we can share our experiences in different domains :-)

### If I had more time, i would add:

1. **New Features**: Probably, a full CRUD application and more hero details like an actual picture of him and specific traits about him (statistics).
2. **Server Side Rendering**: For some reason, these days I like serverside rendering.
3. **NestJS**: I was really excited when i received this challange, I didn't know how to get home faster so I could complete the challenge earlier.<br> I arrived late and chose to make it in express.js to make it faster so i can send it :(
4. **Git**: I would implement it just to monitorize the progress of the application. (I forgot to initialize it from the beginning)

## Used:
```bash
node: v20.12.2
npm: 10.9.2
```

## Backend Installation
1. Install the required dependencies:
```bash 
cd backend
```
2. Install the required dependencies:
```bash 
npm install 
```
3. Use the commands:
```bash
npm run start # launch the application
npm run test # use jest to test the endpoints & some requirements
```

## Frontend Installation
1. Install the required dependencies:
```bash 
cd frontend
```
2. Install the required dependencies:
```bash 
npm install 
```
3. Use the commands:
```bash
npm run dev # launch the application in devmode
npm run build # build the application
npm run preview # launch a local web server that serves the built version of the application
```
