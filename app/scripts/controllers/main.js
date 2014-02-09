'use strict';

var app = angular.module('deezerAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });





function DeezerAlbum($scope, $http) {
	var url = 'http://api.deezer.com/album/302127';
	url = '/scripts/get.album.302127.json';
	$http.get(url).success(function(data) {
		angular.extend($scope, data);
	});
}
app.controller('DeezerAlbumCtrl', ['$scope', '$http', DeezerAlbum]);



function DeezerPlaylist($scope, $http) {
	var url = 'http://api.deezer.com/playlist/4341978';
	url = '/scripts/get.playlist.4341978.json';
	$http.get(url).success(function(data) {
		angular.extend($scope, data);
	});
}
app.controller('DeezerPlaylistCtrl', ['$scope', '$http', DeezerPlaylist]);
