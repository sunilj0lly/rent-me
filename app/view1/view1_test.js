'use strict';

describe('rentMeApp.view1 module', function() {

	var $httpBackend;

	beforeEach(module('rentMeApp.view1'));
	beforeEach(inject(function(_$httpBackend_){
		$httpBackend = _$httpBackend_;
	}));

	describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      
		$httpBackend.expectGET('https://api.trademe.co.nz/v1/Localities.json').
		respond([{'LocalityId':14,'Name':'Waikato','Districts':[]}]);

    	var scope = {},
        view1Ctrl = $controller('View1Ctrl', {$scope:scope});
        
        expect(scope.localities.length).toBe(0);

        $httpBackend.flush();

    	expect(scope.localities.length).toBe(1);
    	expect(scope.localities[0].Name).toBe('Waikato');
    	expect(scope.localities[0].LocalityId).toBe(14);

    }));

  });
});