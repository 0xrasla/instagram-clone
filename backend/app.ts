import express, { Express } from "express";
require("dotenv").config();

(async (): Promise<void> => {
  const app: Express = express();
  const PORT = process.env.PORT || 8080;

  app.listen(PORT, (): void => {
    console.log("Server Started at ", PORT);
  });
})();
