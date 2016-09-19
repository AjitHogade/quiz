angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/tests/resultModal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  
   $scope.openModal = function(score) {
        $scope.score = score;
        $scope.modal.show();
   };
  // Triggered in the login modal to close it
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.go = function(toGo){
   // alert(toGo);
$location.path("app/"+toGo);  
}


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})



.controller('HtmlCtrl', function($scope, $stateParams, HtmlQ ) {

startTimer(300);
  $scope.html = HtmlQ.get($stateParams.quesId);

  $scope.selectedAns = function(ans,optionId,correctAns){
       var selectedId = document.getElementById("selected_ans").value;
        if(selectedId == ""){

        }else{
                document.getElementById(selectedId).className="button button-positive"
 
        }

       document.getElementById(optionId).className="button button-energized"

    document.getElementById(optionId).className="button button-energized"

        document.getElementById("selected_ans").value=optionId;

if(selectedId == correctAns){
}else{

}

  }

  $scope.checkMaxQues = function(quesNo){

     if(parseInt(quesNo) == 1 ){
    var score = document.getElementById("score").value;
    $scope.openModal(score);
     }else{
  var selectedId = document.getElementById("selected_ans").value="";
               document.getElementById("opt_1").className="button button-positive";
               document.getElementById("opt_2").className="button button-positive";
               document.getElementById("opt_3").className="button button-positive";
               document.getElementById("opt_4").className="button button-positive";


     }


  }
$scope.verifyAndNext = function(correctAns,yourAnsValue,quesNo){
  var selectedId = document.getElementById("selected_ans").value;
  if(selectedId == ""){
       var selectedId = document.getElementById("selected_ans").value = yourAnsValue;
       document.getElementById(selectedId).className="button button-energized";
     }else{alert(selectedId)

             document.getElementById(selectedId).className="button button-positive";

                          document.getElementById(yourAnsValue).className="button button-energized";
                              document.getElementById("selected_ans").value = yourAnsValue;



     }
   var score = document.getElementById("score").value
       if(correctAns == yourAnsValue){
document.getElementById("score").value = parseInt(score)+1;

        }else{

            //  alert("Wrong Answer")

        }
        var updatedScore = document.getElementById("score").value;
     //  alert(updatedScore)


}





});
