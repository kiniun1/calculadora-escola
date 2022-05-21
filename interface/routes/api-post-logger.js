const { createLogger, transports, format } = require('winston');

const apiLogger = createLogger({
    transports:[
        new transports.File({
            filename: 'api-route.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'api-route-error.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        }),
    ]
});

module.exports = {apiLogger};