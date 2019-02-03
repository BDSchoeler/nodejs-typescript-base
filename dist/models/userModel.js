"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    created_date: {
        default: Date.now,
        type: Date
    },
    email: {
        type: String
    },
    firstName: {
        required: "Enter a first name",
        type: String
    },
    lastName: {
        required: "Enter a last name",
        type: String
    }
});
//# sourceMappingURL=userModel.js.map