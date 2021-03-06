const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom_api_error");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
