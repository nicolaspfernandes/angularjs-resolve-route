app.factory('secondControllerService', ['$q', function($q) {
    return {

        loadData: function() {
            
            var deferred = $q.defer();
			
            setTimeout(function() {
                deferred.resolve('Data from secondController.');
            }, 3000);
			
            return deferred.promise;
        }
    };
}]);