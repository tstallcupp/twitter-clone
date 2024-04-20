//* Middleware for routes that require a logged in user
module.exports = function(req, res, next) {
    // Pass the req/res to the next middleware/route handler
    if( req.isAuthenticated() ) return next();
    // Redirect to Login if the user is not already Logged in
    res.redirect('/auth/google');
};