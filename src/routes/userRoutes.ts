import {Request, Response} from "express";
export class Routes {

  public routes(app: any): void {

    app.route("/")
    .get((req: Request, res: Response) => {
        res.status(200).send({
            message: "GET request successfull!"
        });
    });

    // User
    app.route("/user")
    // GET endpoint
    .get((req: Request, res: Response) => {
    // Get all users
        res.status(200).send({
            message: "GET request successfull!"
        });
    })
    // POST endpoint
    .post((req: Request, res: Response) => {
    // Create new user
        res.status(200).send({
            message: "POST request successfull!"
        });
    });

    // User detail
    app.route("/user/:userId")
    // Get a single user
    .get((req: Request, res: Response) => {
        res.status(200).send({
            message: "GET request successfull!"
        });
    })
    .put((req: Request, res: Response) => {
    // Update a user
        res.status(200).send({
            message: "PUT request successfull!"
        });
    })
    .delete((req: Request, res: Response) => {
    // Delete a user
        res.status(200).send({
            message: "DELETE request successfull!"
        });
    });
  }
}
