module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            // custom application error
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ message: err });
        default:
            if (err.name == "SequelizeValidationError") {
                //return res.status(500).json({ message: err.errors[0].message });
                return res.status(500).json({ message: err.errors.map(field => field.message ).join(" ") });
            } else if (err.name == "SequelizeForeignKeyConstraintError") {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(500).json({ message: err });
            }

            
    }
}