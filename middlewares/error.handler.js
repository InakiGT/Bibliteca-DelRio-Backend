class Errors {
    static errorHandler() {
        return ( err, _, res, next ) => {
            res
                .status(500)
                .json({
                    message: err.message,
                    stack: err.stack,
                });
        }
    }
    
    static boomErrorHandler() {
        return ( err, _, res, next ) => {            
            if(err.isBoom) {
                const { output } = err;
                res
                    .status(output.statusCode)
                    .json(output.payload);
            } else {
                next(err);
            }
        }
    }
}




module.exports = {
    Errors,
}