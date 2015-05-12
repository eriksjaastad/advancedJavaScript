asyncSeries([
  function(callback) {
    console.log(1);
    callback();
  }, function(callback) {
    setTimeout(function() {
      console.log(2);
      callback();
    }, 1000);
  }, console.log.bind(console, 3)
], function(err) {
  console.log("This should not run unless there are errors.");
});