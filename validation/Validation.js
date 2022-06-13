const { generateResponse } = require("../utility/generateResponse");

class Validation {
  validationErrors = [];
  handle(body, queryString) {
    if (body) return this.bodyValidation(body);
  }

  bodyValidation(body) {
    const { id, data, parentId } = body;
    if (!id || !data || !parentId) {
      const result = generateResponse(400, "Missing required fields");
      this.validationErrors.push(result);
    }

    // if (!data) {
    //   const result = generateResponse(400, "data is required!");
    //   this.validationErrors.push(result);
    // }

    // if (!parentId) {
    //   const result = generateResponse(400, "parentId is required!");
    //   this.validationErrors.push(result);
    // }
  }
}

module.exports = new Validation();
