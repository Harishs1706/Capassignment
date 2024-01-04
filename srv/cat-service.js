const cds = require('@sap/cds');
const ECTimehandler = require('./handler/ECTimehandler');

class ECTimeService extends cds.ApplicationService {
    init() {
        this.on(["READ"], "ECTime", ECTimehandler.usersLeaveReport)
        //this.on(["READ"], "ECTime", ECTimehandler.ectimeEmployees)
        this.on(["READ"], "EmpJob", ECTimehandler.getUsersECtime)
        return super.init();
    }
}

module.exports = {
    ECTimeService
}


