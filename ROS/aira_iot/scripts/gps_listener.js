loadScript('gps_contract.js');
var e = [
  gps.NewGPSCoordinates({}, '', function(err, r){
    if (!err)
      console.log('GPS ' + r.args.destinationLongitude + ' ' + r.args.destinationLatitude);
  }),
  gps.NewEstimate({}, '', function(err, r){
    if (!err)
      console.log('EST ' + r.args.estimateID.toString() +
                     ' ' + r.args.homebaseLongitude +
                     ' ' + r.args.homebaseLatitude +
                     ' ' + r.args.destinationLongitude +
                     ' ' + r.args.destinationLatitude);
  })];
