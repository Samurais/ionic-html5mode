angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) { })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.data = {
      message: null,
      messagePlaceholder: '42'
    }

    $scope.sendMessage = function () {
      if ($scope.data.message) {
        console.log('Send text ... ' + $scope.data.message)
      } else {
        $scope.data.messagePlaceholder = '什么是生命的意义'
      }
    }

    $scope.onMessageTextChange = function(){
        console.log('Text is  ... ' + $scope.data.message)
    }

  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
