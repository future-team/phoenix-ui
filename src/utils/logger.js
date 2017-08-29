import Logger from 'pmlogger'

const TYPE = 8;

let opt = {
    id: '65723430',
    //上报地址
    url: 'http://prism.test.sankuai.com/monitor/logstore/log/'
}

let pmlogger = null;

if(!pmlogger){
    pmlogger = new Logger(opt);
    pmlogger.type = TYPE;
}

export default pmlogger;