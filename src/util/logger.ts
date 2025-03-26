import winston from "winston";
import  config from "../config"
// ../ erja3 5twten la wara la tjeba lal config 
// configuratin of loger 
const logDir=config.logDir ;//kermel ma dal oul logs/.. w hek kerml server
const isDev= config.isDev; //kermel ma n2ale3 l consol bl server b3ouza bas bl developement 
//const {logDir ,isDev}=config
/*const levels = {
    error: 0,//errors
    warn: 1,//out of resourse limit 
    info: 2,//person use this api 
    http: 3,
    verbose: 4,
    debug: 5,// the fonctionalty start here finished here give a value ktiir mouhem 
    // kerml 2za sytsem ktiir kber ma n2le3 kl debuger lkel system
    silly: 6
};*/
const logFileFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.timestamp({format :"HH:mm:ss"}),

    winston.format.splat(), 
    winston.format.errors({ stack: true }),
)
const logConsoleFormat=winston.format.combine(
winston.format.colorize(),
winston.format.timestamp({format :"HH:mm:ss"}),
winston.format.splat(), 

winston.format.errors({stack:true}),
winston.format.printf( ({ timestamp,level,message})=>{
    return `[${timestamp}] ${level} ${message || ""}`;

}

)



);
const logger = winston.createLogger({
level: 'info',
transports: [ // hon kerml wen badak 7tlak l log
    new winston.transports.File({ filename: "error.log",dirname:logDir, level: 'error',format:logFileFormat }),

    new winston.transports.File({ filename: "all.log" ,dirname:logDir,format:logFileFormat}),
],
exceptionHandlers :[
    new winston.transports.File({ filename: "exceptions.log",dirname:logDir }) ]
});
if (isDev) {
    logger.add(new winston.transports.Console({format: logConsoleFormat,}));
    logger.level = "debug";
}
export default logger