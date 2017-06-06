import request from 'request-promise';

import * as config from '../../config';

async function validateUser(req, res, next) {
  const sessionToken = req.get('X-Session-Token');
  const options = {
    uri: `http://${config.HOST}:${config.PORT}/ej/users/me`,
    headers: {
      'X-Parse-Session-Token': sessionToken,
      'X-Parse-Application-Id': config.APP_ID,
    },
    json: true,
  };

  try {
    const user = await request(options);
    const {
      name,
      username,
      email,
      organization,
      stripe_customer_id: stripeCustomerId,
    } = user;

    req.user = {
      name,
      username,
      email,
      organization,
      session_token: sessionToken,
      stripeCustomerId,
    };

    return next();
  } catch (e) {
    return res.json({
      data: e.error,
    });
  }
}

export { validateUser };
