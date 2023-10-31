const validator = require("validator");
const { errorMessage } = require("../../core/utils");
/**
 * Validate Email Address using validator..
 * @param {String} email email to validate
 * @param {*} res Express Response 
 * @returns {Boolean}
 */
const emailValidatorHelper = (email, res) => {
    if (!validator.isEmail(email))
      return errorMessage(400, "Invalid Email Address", {
        email,
        example: "example@example.com",
      })(res);
    return true;
};

function paginateResults(request, query) {
  const page = parseInt(request.query.page) || 1;
  let limit = parseInt(request.query.limit) || 10;
  const maxLimit = 50;

  if (limit > maxLimit) {
    limit = maxLimit;
  }

  return query
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();
}


module.exports = {emailValidatorHelper, paginateResults}