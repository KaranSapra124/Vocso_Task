const jwt = require("jsonwebtoken");

exports.jwtVerifyToken = (token, getKeyFn) => {
  console.log(token, process.env.AUTH0_AUDIENCE);

  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      getKeyFn,
      {
        audience: process.env.AUTH0_AUDIENCE,
        issuer: `https://${process.env.AUTH0_DOMAIN_URL}/`,
        algorithms: ["RS256"],
      },
      (err, decoded) => {
        if (err) {
          console.log("JWT Verification Error:", err.message); // 🛠️ Error here
          resolve(false);
        }
        resolve(true);
      }
    );
  });
};
