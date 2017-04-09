MainApp.controller('FoodCtrl', ['$scope', 'apiService', function ($scope, apiService) {

    $scope.active = [];

    //apiService calling recipes by reference ID to category table
    //1: Breads, 2: desserts, etc..

    apiService.getJson('recipe', '1').then(function (response) {
    // apiService.getJson('recipe', 'breads').then(function (response) {
        $scope.breads = response.data;
        $scope.setActiveCat($scope.breads, 'Breads');
    });

    apiService.getJson('recipe', '2').then(function (response) {
    // apiService.getJson('recipe', 'desserts').then(function (response) {
        $scope.desserts = response.data;
    });

    apiService.getJson('recipe', '3').then(function (response) {
    // apiService.getJson('recipe', "entrees").then(function (response) {
        $scope.entrees = response.data;

    });

    apiService.getJson('recipe', '4').then(function (response) {
    // apiService.getJson('recipe', "sides").then(function (response) {
        $scope.sides = response.data;

    });


    $scope.recipeSwiper; //initializes swiper

    $scope.setActiveCat = function (item, cat) { //changes active category
        $scope.category = cat;
        $scope.active = item;
    };

    $scope.$on('makeFoodSwiper', function (makeFoodSwiper) {

        //ensures initialization doesn't error out
        try {
            $scope.recipeSwiper.slideTo('0', 0);
            $scope.recipeSwiper.destroy();
        } catch(err){}

        $scope.recipeSwiper = new Swiper('.food-swiper-container', {
            loop: false,
            autoHeight: false,
            direction: 'horizontal',
            nested: true
        });
    });
    $scope.activeNav = function (x) {
        return x < 0 ? $scope.active[$scope.active.length - 1] : x >= $scope.active.length ? $scope.active[0] : $scope.active[x];
    }
}]);
