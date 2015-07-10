/*
    NOTE: The datetime part of Timestamp(1435262350, 1) translates to ISODate("2015-06-25T19:59:10Z" via this code:
    new Date(ts.t * 1000)
*/

cyan = null;
load('dvir.js');

var options = {
    vehicleType: 'standard',
    startUpdatedAt : new Timestamp(new ISODate("2014-07-10T00:00Z"), 0)    
};

var inspections = cyan.dvir.getInspections.withTypeAndNewerThan(options);

if(inspections.size() === 0){
    inspections = cyan.dvir.getInspections.withTypeAndMostRecent(options);
}

print('found ' + inspections.size() + ' inspections');

inspections;



    