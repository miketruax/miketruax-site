MainApp.controller('ResumeCtrl', ['$scope', '$http', 'apiService', function ($scope, $http, apiService) {

    apiService.getJson('job', '')
    // apiService.getJson('job', 'resume')
        .then(function (response) {
            $scope.jobs = response.data.reverse();
            $scope.jobs.forEach(function (x) {
                x.jobDuties = x.jobDuties.split('|');
            })
        });
}]);
