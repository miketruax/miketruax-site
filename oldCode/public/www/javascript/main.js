var MainApp = angular.module('MainApp', ['ui.router', 'ngAnimate']) //initialize ui-router

    .factory('navigationService', ['$state', function ($state) {

//Removes sliding classes to reduce risk of double animation or wrong animation
//based off location in CSS file
        var clearClasses = function () {
            $('section').removeClass('slide-left');
            $('section').removeClass('slide-right');
            $('section').removeClass('slide-up');
            $('section').removeClass('slide-down');
        };


//creates object to attach external functions to
        var navigationService = {
            transitionLeft: function (nav) {
                changeState(nav, -1, 1);
            },
            transitionRight: function (nav) {
                changeState(nav, 1, 1);
            },
            transitionUp: function (nav) {
                changeState(nav, -1, 2);
            },
            transitionDown: function (nav) {
                changeState(nav, 1, 2);
            }
        };

        /*
         changeMainState and changeSubState: Allows for main or sub state to be changed.
         Uses way for either up (1) or down (-1) incrementing in the array of states names.
         Verifies that the state being changed to is no outside of array index and adds
         appropriate classes for animation then changes active index for future transitions
         Utilizes only two parameters and since first is an object from a Ctrl, it can change
         the object in appropriate scope without a return needed.
         @Param nav: nav object from scope containing sub-keys states(array of state names)
         and active (currently active index)
         @Param way: direction for incrementing in the array will either be -1 or 1
         */
        var changeState = function (nav, way, lvl) {
            clearClasses();
            $("html, body").animate({scrollTop: 0});
            lvl == 1 ? $('section').addClass(way == 1 ? 'slide-left' : 'slide-right') :
                $('.nav-lvl2-top section').addClass(way == 1 ? 'slide-down' : 'slide-up');

            if ((nav.active != (nav.states.length - 1) && way == 1) || (nav.active != 0 && way == -1)) {
                $state.go(nav.states[nav.active + way]);
                nav.active += way;
            } else {
                if (way == 1) {
                    $state.go(nav.states[0]);
                    nav.active = 0;
                }
                else {
                    $state.go(nav.states[nav.states.length - 1]);
                    nav.active = nav.states.length - 1;
                }
            }


        };
        return navigationService;
    }])


    .factory('loadChecker', ['$rootScope', function ($rootScope) {
        var templates = {
            foodTemplates: 3,
            aboutTemplates: 5,
            skillsTemplates: 5,
            homeTemplates: 4
        };

        var genericLoader = function (parent) {
            templates[parent] -= 1;
            checkLoaded();
        };
        var checkLoaded = function () {
            if (templates.foodTemplates <= 0 && templates.aboutTemplates <= 0 &&
                templates.skillsTemplates <= 0 && templates.homeTemplates <= 0
                && $('#mobile-left').length === 1) {
                $rootScope.$emit("mainSwiper");
            }
        };
        var loaders = {
            foodLoaded: function () {
                genericLoader('foodTemplates');
            },
            aboutLoaded: function () {
                genericLoader('aboutTemplates');
            },
            skillsLoaded: function () {
                genericLoader('skillsTemplates');
            },
            homeLoaded: function () {
                genericLoader('homeTemplates');
            }
        };
        return loaders;
    }])


    .directive('toggleMenu', [function () {

        return {
            link: function (elem) {
                $('.ng-animate-disabled').toggleClass('ng-animate-disabled');

                $('#nav-menu').on('click', changeNav);
                window.addEventListener("keyup", function (e) {
                    if (e.keyCode == 27 && $('#nav-menu').hasClass('nav-menu-active')) changeNav();
                }, false);

                $(document).on("click", "#main-nav .pointer", changeNav);

                $(document).on('click', function (e) {
                    if ($(e.target).is('#main-nav') || $(e.target).is("#nav-menu") || $("#main-nav").has(e.target).length !== 0 || $("#nav-menu").has(e.target).length !== 0) {
                    } else if ($('#main-nav').hasClass('nav-active')) {
                        $('#nav-menu').toggleClass('nav-menu-active');
                        $('#main-nav').toggleClass('nav-active');
                    }
                });


                function changeNav() {
                    $('#nav-menu').toggleClass('nav-menu-active');
                    $('#main-nav').toggleClass('nav-active');
                }
            }
        }
    }])

    /*
     Preloader takes an array of image filenames and a directory in relation to img/
     each image file is then appeneded to a hidden DIV on the index to begin loading into
     local cache. After all items have been attached, the img are removed from body
     @param dir directory below assets/img
     @param imgArray array of image file names with extension
     @return returns self to allow access to internal functions
     */
    .factory('preLoadService', ['$http', function ($http) {
        var preLoadService = {
            loadImgs: function (dir) {
                $http.get("./www/img/" + dir)
                    .then(function (response) {
                        var files = response.data;
                        for(var i = 0; i <files.length; i++)
                        $("#preloader").append("<img src='/www/img/"+dir+'/' + files[i]+"'>");

                        });

            },
            loadDirectories: function () {
                $http.get("./www/img/")
                    .then(function (response) {
                        var folders = response.data;
                        for (var i = 0; i<folders.length; i++) {
                            preLoadService.loadImgs(folders[i]);
                        }
                    });
            }



        };
        return preLoadService;
    }])

    /*
     onRepeatFinish attached to ng-repeat and emits attr when final item is loaded.
     Uses $timeout to ensure loading is completed and not just started. This is
     used to ensure Swiper.js creates a new swiper ONLY when the DOM is done being
     manipulated so no issues are caused.
     */

    .directive('onRepeatFinish', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onRepeatFinish);
                    });
                }
            }
        }
    })
