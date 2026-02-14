import express, { Request, Response } from 'express'
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1> Hello world, the server is now running </h1>");
});

app.listen(5000, () =>
  console.log("Server started on port 5000 at http://localhost:5000")
);
