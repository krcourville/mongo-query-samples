// /*
//     NOTE: The datetime part of Timestamp(1435262350, 1) translates to ISODate("2015-06-25T19:59:10Z" via this code:
//     new Date(ts.t * 1000)
// */

load('sys.js');
module('cyan.dvir');

cyan.dvir.collection = db.getCollection('node_default');

cyan.dvir.getInspections = {
    withTypeAndNewerThan: function ( options ) {
        return cyan.dvir.collection
            .find({
                "n_t": "VehicleInspection",
                "n_props.vehicleType": options.vehicleType,
                "up_at" : { 
                    $gte : options.startUpdatedAt 
                }
            });
    },
    
    withTypeAndMostRecent: function( options ){
        return cyan.dvir.collection
            .find({
                "n_props.vehicleType": "standard"
            })
            .sort({
                "up_at": -1
            })
            .limit(1);
    }
};

    