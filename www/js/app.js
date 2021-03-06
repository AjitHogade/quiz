// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'dataProviders.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })

      
//--------------------HTML__________________________//


.state('app.html_test', {
      url: '/html_test',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/html_test.html'
        }
      }
    })


      .state('app.html_test1_questions', {
                        cache: false,

      url: '/html_test1_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/html_test1_questions.html',
          controller: 'HtmlCtrl'
        }
      }
    })

     .state('app.html_test2_questions', {
                        cache: false,

      url: '/html_test2_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/html_test2_questions.html',
          controller: 'HtmlCtrl'
        }
      }
    })

//--------------------CSS__________________________//

       .state('app.css_test', {
      url: '/css_test',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/css_test.html'
        }
      }
    })

  .state('app.css_test1_questions', {
                        cache: false,

      url: '/css_test1_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/css_test1_questions.html',
          controller: 'CssCtrl'
        }
      }
    })

     .state('app.css_test2_questions', {
                        cache: false,

      url: '/css_test2_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/css_test2_questions.html',
          controller: 'CssCtrl'
        }
      }
    })

   //--------------------JS__________________________//
   
        .state('app.js_test', {
      url: '/js_test',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/js_test.html',
                    controller: 'JsCtrl'

        }
      }
    })
        .state('app.js_test1_questions', {
                                  cache: false,

      url: '/js_test1_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/js_test1_questions.html',
                              controller: 'JsCtrl'

        }
      }
    })
        .state('app.js_test2_questions', {
                                  cache: false,

      url: '/js_test2_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/js_test2_questions.html',
                              controller: 'JsCtrl'

        }
      }
    })


   //--------------------PHP__________________________//

         .state('app.php_test', {
      url: '/php_test',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/php_test.html'
        }
      }
    })

          .state('app.php_test1_questions', {
        cache: false,
      url: '/php_test1_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/php_test1_questions.html',
                                        controller: 'PhpCtrl'

        }
      }
    })

           .state('app.php_test2_questions', {
        cache: false,
      url: '/php_test2_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/php_test2_questions.html',
                                        controller: 'PhpCtrl'

        }
      }
    })

   //--------------------CPP__________________________//

          .state('app.c_test', {
            cache: false,
      url: '/c_test',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/c_test.html'
        }
      }
    })

    .state('app.c_test1_questions', {
      cache: false,
      url: '/c_test1_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/c_test1_questions.html',
          controller: 'CppCtrl'

        }
      }
    })



      .state('app.c_test2_questions', {
          cache: false,
      url: '/c_test2_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/c_test2_questions.html',
          controller: 'CppCtrl'

        }
      }
    })

             //--------------------JAVA__________________________//


           .state('app.java_test', {
      url: '/java_test',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/java_test.html'
        }
      }
    })
            .state('app.java_test1_questions', {
              cache:false,
      url: '/java_test1_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/java_test1_questions.html',
          controller:'JavaCtrl'
        }
      }
    })
             .state('app.java_test2_questions', {
              cache:false,
      url: '/java_test2_questions/:quesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tests/java_test2_questions.html',
                    controller:'JavaCtrl'

        }
      }
    })
/* -------------------------Built In---------------------------------- */
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
