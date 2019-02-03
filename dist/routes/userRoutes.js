"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route("/")
            .get((req, res) => {
            res.status(200).send({
                message: "GET request successfull!"
            });
        });
        // User
        app.route("/user")
            // GET endpoint
            .get((req, res) => {
            // Get all users
            res.status(200).send({
                message: "GET request successfull!"
            });
        })
            // POST endpoint
            .post((req, res) => {
            // Create new user
            res.status(200).send({
                message: "POST request successfull!"
            });
        });
        // User detail
        app.route("/user/:userId")
            // Get a single user
            .get((req, res) => {
            res.status(200).send({
                message: "GET request successfull!"
            });
        })
            .put((req, res) => {
            // Update a user
            res.status(200).send({
                message: "PUT request successfull!"
            });
        })
            .delete((req, res) => {
            // Delete a user
            res.status(200).send({
                message: "DELETE request successfull!"
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=userRoutes.js.map