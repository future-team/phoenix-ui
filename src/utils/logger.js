import Logger from 'pmlogger'

const TYPE = 8,
      host = window.location.host,
      IpReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])/

let opt = {},
    isLocal = IpReg.test(host)

console.log('isLocal:', isLocal)
if(isLocal){ // beta
    opt.id = '65723430'
    opt.url = '//future.test.sankuai.com/monitor/logstore/log/'
}else{ // online
    opt.id = '66032663'
    opt.url = '//future.sankuai.com/monitor/logstore/log/'
}

opt.repeat = 1
opt.combo = true
opt.delay = 2000 
// opt.level = 2

let pmlogger = null;

if(!pmlogger){
    pmlogger = new Logger(opt);
    // pmlogger.type = TYPE;
}


export default class PmLogger{
    constructor(msg){
        try{
            pmlogger.info({
                msg: msg,
                type: 8
            });
        }catch(err){
            pmlogger.error({
                msg: err.toString(),
                type: 2
            });
        }
    }
}