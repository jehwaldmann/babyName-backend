const CustomAPIError = require("./custom_api_error");
const UnauthenticatedError = require("./unauthenticated");
const NotFoundError = require("./not-found");
const BadRequestError = require("./bad-request");
const ForbiddenError = require("./forbidden");
const InternalServerError = require("./internal-server");

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
};
