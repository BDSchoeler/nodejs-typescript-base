import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export class UserController {

    public addNewUser(req: Request, res: Response) {
        const newUser = new User(req.body);

        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUsers(req: Request, res: Response) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserWithID(req: Request, res: Response) {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser(req: Request, res: Response) {
        User.remove({ _id: req.params.userId }, (err: any) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted user!"});
        });
    }
}
