const routeNotFound = (req, res, next) => {
   return res
      .status(404)
      .json({
         success: false,
         message: "404 Route you're looking for couldn't be found",
      });
};

module.exports = { routeNotFound };
