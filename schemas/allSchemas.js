const S = require("fluent-json-schema");

exports.signUpSchema = S.object()
  .prop("name", S.string().required())
  .prop("email", S.string().required())
  .prop("password", S.string().minLength(3).required())
  .prop("repassword", S.string().minLength(3).required())
  .prop("couple_key", S.string().minLength(7))
  .valueOf();

exports.loginSchema = S.object()
  .prop("email", S.string().required())
  .prop("password", S.string().minLength(3).required())
  .valueOf();
