describe('Route Spec', function() {
	beforeEach(module('app'));
	beforeEach(module('controllers'));

	it('should map routes to controllers', function() {
		inject(function($route) {

			expect($route.routes['/add'].controller).toBe('itemController');
			expect($route.routes['/add'].templateUrl).toEqual('partials/add.html');
			expect($route.routes['/add'].controller).toBe('itemController');
			expect($route.routes['/add'].templateUrl).toEqual('partials/add.html');
			expect($route.routes['/add'].controller).toBe('itemController');
			expect($route.routes['/add'].templateUrl).toEqual('partials/add.html');


		});
	});

	it('root as a default route', function() {
		inject(function($route) {
			expect($route.routes[null].redirectTo).toEqual('/')
		});
	})
})