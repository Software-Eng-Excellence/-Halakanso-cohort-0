import dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.join(__dirname,'../../.env')})

export default{
    logDir :process.env.LOG_DIR || "./logs",
    //fena na3ref mn env aya logs 2za ma knet mawjoude by default 7ota bl logs 
    isDev: process.env.NODE_ENV=="development",
    //node envirement mn3rfa mn l .env btkoun ya developement ya testing ya production  or staging 

}