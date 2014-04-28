describe('Controllers Suite', function() {
    /*beforeEach(function() {
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });*/
    beforeEach(module('app'));
    beforeEach(module('controllers'));

    describe('Item Controller Suite', function() {

        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('api/items').
                    respond([{text: 'item1', val: 0}, {text: 'item2', val: 1}]);

            scope = $rootScope.$new();
            ctrl = $controller('itemController', {$scope: scope});
        }));

        it('should create "items" with 2 items', function() {
            //ctrl.listItem();
            //expect(scope.items).toEqualData([]);
            //$httpBackend.flush();

            //expect(scope.items).toEqualData(
             ///       [{text: 'item1', val: 0}, {text: 'item2', val: 1}]);
        });


        it('dummy', function() {
        });
        it('foo', function() {
        });
    });
});

