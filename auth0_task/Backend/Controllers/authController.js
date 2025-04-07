const jwksClient = require("jwks-rsa");
const { jwtVerifyToken } = require("../Utils/Jwt");
const sendTokenEmail = require("../Utils/mailer");

const client = jwksClient({
  jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key?.getPublicKey();
    callback(null, signingKey);
  });
}

exports.verifyToken = async (req, res) => {
  const { token, email } = req.body;

  const isVerified = await jwtVerifyToken(token, getKey);
  if (isVerified) {
    await sendTokenEmail(email, token);
    return res.status(200).send({ message: "Email Sent ✔" });
  } else {
    return res.status(401).send({ message: "Token Not Verified!" });
  }
};
