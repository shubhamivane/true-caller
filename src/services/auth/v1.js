let auth = {};

/**
 * 
 * @param {import("express").Request} req
 * @param {import("express").Response} res 
 */
auth['login'] = (req, res) => {
  console.log('Login Request');
  res.send({
    'code': 200,
    'message': 'Login successfully'
  })
}; 

const _auth = auth;
export { _auth as auth };