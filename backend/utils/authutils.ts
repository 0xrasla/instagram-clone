const { OAuth2Client } = require("google-auth-library");
const client = OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (token) => {
  const ticket = await client.VerifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  const { sub, email, name, picture } = payload;
  const userId = sub;

  return { userId, email, name, picture };
};

module.exports = googleAuth;
