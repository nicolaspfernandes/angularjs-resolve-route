app.factory('firstControllerService', ['$q', function($q) {
    return {

        loadData: function() {
            
            var deferred = $q.defer();
			
            setTimeout(function() {
                deferred.resolve('Data from firstController.');
            }, 3000);
			
            return deferred.promise;
        }
    };
}]);