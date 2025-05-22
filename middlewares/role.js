const roleAuth = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403);
      throw new Error('Forbidden: You do not have the required role');
    }
    next();
  };
};

module.exports = roleAuth;