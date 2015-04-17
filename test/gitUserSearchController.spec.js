describe('GitUserSearchController', function(){
  beforeEach(module('GitHubUserSearch'));

  var scope, ctrl;
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('GitUserSearchController', {
      $scope: scope
    });
  }));  

  it('should initialize with zero search results', function(){
    expect(scope.searchResult).toBeUndefined();
    expect(scope.searchTerm).toBeUndefined();
  });
});