MainApp.controller('MainCtrl', ['$rootScope', '$scope', '$state', '$http', 'preLoadService', 'navigationService', 'loadChecker', function ($rootScope, $scope, $state, $http, preload, nav, loadChecker) {
    //preload.loadDirectories();
    preload.loadImgs('food');
    preload.loadImgs('buttons');
    $scope.loadChecker = loadChecker;
    $scope.$state = $state;
    $scope.mainState = {states: ["home", "skills", "about", "food"], active: 0}; //sets up initial routing for side arrows
    $scope.nav = nav;

    //rebinds data if not in a digest phase
    var safeApply = function (fn) {
        var phase = $scope.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            fn()
        }
        else {
            $scope.$apply(fn);
        }
    };
    $rootScope.$on("mainSwiper", function (mainSwiper) {
        $scope.mainSwiper = $('.main-swiper').swiper({
            loop: false,
            autoHeight: true,
            direction: 'horizontal',
            slidePrevClass: '#mobile-left',
            slideNextClass: '#mobile-right'
        });
        $scope.mainSwiper.on("TransitionEnd", function () {
            //ensures proper binding from non angular event
            safeApply(function () {
                $scope.mainState.active = $scope.mainSwiper.activeIndex;
            })

        });
    });
}]);
