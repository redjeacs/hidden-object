const { body } = require("express-validator");

const required = "is required.";
const length = "must be between 1 to 50 characters";

exports.validateLeaderboardForm = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username " + required)
    .isLength({ min: 1, max: 50 })
    .withMessage("Username " + length)
    .matches(/^[a-zA-Z0-9 ]+$/)
    .withMessage("Username must be alphanumeric"),
  body("time")
    .notEmpty()
    .withMessage("Time " + required)
    .isFloat({ min: 0, max: 86400 })
    .withMessage(
      "Time must be a floating number between 0 and 86400 seconds(24hrs)"
    ),
];
