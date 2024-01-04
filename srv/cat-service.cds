using {ECTimeOff as EC} from './external/ECTimeOff.csn';
using {ECEmploymentInformation as EmpInfo} from './external/ECEmploymentInformation';

service ECTimeService {

  @cds.autoexpose
  entity ECTime            as
    projection on EC.EmployeeTime {
      externalCode,
      userId,
      startDate,
      endDate,
      timeType,
      approvalStatus
    };

  entity EmpJob            as
    projection on EmpInfo.EmpJob {
      *
    };
}

@protocol: 'rest' //defined as as rest service
service ECTimeServiceRest {
  entity ECTime            as projection on ECTimeService.ECTime;
  

}
