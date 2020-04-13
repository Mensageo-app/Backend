'use strict' 

// According to the API Gateway specs, the body content must be stringified.
module.exports.debug = async (event) => {
  return {
      statusCode: 200,
      headers: { "X-DEBUG-HEADER": "true" },
      body: JSON.stringify(event)
     }
  }