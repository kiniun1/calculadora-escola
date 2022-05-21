const { createLogger, transports, format } = require('winston');

const loggerComum = createLogger({
    transports:[
        new transports.File({
            filename: 'arquivo.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'arquivo-erro.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        }),
    ]
});

module.exports = {loggerComum};