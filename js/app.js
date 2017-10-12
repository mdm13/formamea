angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselCtrl', function ($scope) {
  
  $scope.slides = [ 
      { image: 'images/gio3d-3.jpg',  id:0},
      { image: 'images/gio3d-2.jpg',  id:1},
      { image: 'images/gio3d-4.jpg',  id:2} 
  ];
  
});