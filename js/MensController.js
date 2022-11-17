angular.module('MENapp', []).controller('MensCtrl', function($scope) {
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Hege', country: 'Sweden' },
        { name: 'Kai', country: 'Denmark' }
    ];
});