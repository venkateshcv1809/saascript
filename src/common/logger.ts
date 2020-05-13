import { createLogger, format, transports } from 'winston'
import expressWinston from 'express-winston'

const { colorize, combine, json, prettyPrint, simple, timestamp } = format
const defaultFileOptions = {
    maxsize: 5242880, // 5MB
    maxFiles: 5
}
const logger = createLogger({
    format: combine(
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new transports.File({
            ...defaultFileOptions,
            level: 'info',
            filename: 'logs/server.log',
            format: combine(
                simple()
            )
        }),
        new transports.File({
            ...defaultFileOptions,
            level: 'error',
            filename: 'logs/error.log',
            handleExceptions: true
        }),
        new transports.Console({
            level: 'debug',
            format: combine(
                simple(),
                colorize({ all: true })
            ),
            handleExceptions: true
        })
    ],
    exceptionHandlers: [
        new transports.File({
            ...defaultFileOptions,
            filename: 'logs/exceptions.log',
            handleExceptions: true
        })
    ]
})

export const reqLogger = expressWinston.logger({
    winstonInstance: logger,
    expressFormat: true,
    meta: true,
    statusLevels: {},
    metaField: 'meta',
    requestField: 'req',
    ignoreRoute: (_req, _res) => false,
    skip: (_req, _res) => false,
    requestFilter: (req, propName) => req[propName],
    responseFilter: (req, propName) => req[propName],
    requestWhitelist: ['url', 'headers', 'method', 'httpVersion', 'originalUrl', 'query'],
    responseWhitelist: [],
    bodyWhitelist: [],
    bodyBlacklist: [],
    ignoredRoutes: [],
    dynamicMeta: (_req, _res) => { return [] },
    headerBlacklist: []
})

export const errorLogger = expressWinston.errorLogger({
    winstonInstance: logger,
    meta: true,
    metaField: 'meta',
    requestField: 'req',
    responseField: 'res',
    requestFilter: (req, propName) => req[propName],
    requestWhitelist: ['url', 'headers', 'method', 'httpVersion', 'originalUrl', 'query'],
    headerBlacklist: [],
    level: 'error',
    dynamicMeta: (_req, _res) => { return [] },
    // exceptionToMeta: function (error) { return Object },
    blacklistedMetaFields: [],
    skip: (_req, _res) => false
})

export default {
    error: (message: string, errorData: Error) => logger.error(message, errorData),
    warn: (message: string, data?: object) => logger.warn(message, data),
    info: (message: string, data?: object) => logger.info(message, data),
    http: (message: string, data?: object) => logger.http(message, data),
    verbose: (message: string, data?: object) => logger.verbose(message, data),
    debug: (message: string, data?: object) => logger.debug(message, data)
}
