'use strict';

var trademe = {
	credentials: {
		oauth_consumer_key:'key',
		oauth_signature:'sig' + '&'
	}
}

describe('rentMeApp.view2 module', function() {

  	var $httpBackend;
 	beforeEach(module('rentMeApp.view2'));
	beforeEach(inject(function(_$httpBackend_){
		$httpBackend = _$httpBackend_;
	}));

	describe('view2 controller', function(){

		it('should retrieve properties for a region', inject(function($controller) {
		  
			$httpBackend
				.expectGET('https://api.tmsandbox.co.nz/v1/Search/Property/Rental.json?oauth_consumer_key=key&oauth_signature=sig%26&oauth_signature_method=PLAINTEXT&region=100')
				.respond({"TotalCount":36,"Page":1,"PageSize":36,"List":[{"ListingId":3786031,"Title":"Ngauranga, 3 bedrooms, $350 pw","Category":"0350-5748-4233-","StartPrice":0,"StartDate":"\/Date(1409608029867)\/","EndDate":"\/Date(1418590449867)\/","ListingLength":null,"HasGallery":true,"IsBold":true,"IsHighlighted":true,"AsAt":"\/Date(1416984543658)\/","CategoryPath":"\/Trade-Me-Property\/Residential\/To-Rent","PictureHref":"https:\/\/images.tmsandbox.co.nz\/photoserver\/thumb\/832380.jpg","RegionId":15,"Region":"Wellington","SuburbId":966,"Suburb":"Ngauranga","NoteDate":"\/Date(0)\/","ReserveState":3,"IsClassified":true,"GeographicLocation":{"Latitude":-41.2434795,"Longitude":174.8081702,"Northing":5432637,"Easting":1751512,"Accuracy":1},"PriceDisplay":"$350 per week","Address":"9 Lower Tyers Road","District":"Wellington","AgencyReference":"ZGD1085","AvailableFrom":"today","Bathrooms":3,"Bedrooms":3,"ListingGroup":"FLAT","Parking":"","PropertyType":"Unit","RentPerWeek":350,"AdjacentSuburbNames":["Newlands","Khandallah","Horokiwi","Raroa","Broadmeadows","Ngauranga"],"AdjacentSuburbIds":[1538,1797,877,950,951,966],"DistrictId":47,"Agency":{"Id":11,"Name":"Alister's Real Estate, Licensed Agent (REAA 2008)","PhoneNumber":"+64-4-4711849","Agents":[{"FullName":"Geoff Duncan","MobilePhoneNumber":"(04) 4711849","OfficePhoneNumber":"(027) 2711274"}],"IsRealEstateAgency":true,"IsLicensedPropertyAgency":true}}]});

			var scope = {},
				routeParams = {
					regionName: 'myRegion',
					regionId: 100
				}

		    var view2Ctrl = $controller('View2Ctrl', {$scope:scope, $routeParams:routeParams});
		  
		    $httpBackend.flush();

		    expect(scope.regionId).toBe(100);
		    expect(scope.properties.TotalCount).toBe(36);
		    expect(scope.properties.List[0].ListingId).toBe(3786031);

		}));

	});

});