
describe('TimeoutJsController', function () {
    beforeEach(module('UHGroupingsApp'));

    let $scope, $controller, $timeout, $interval, $uibModal;

    beforeEach(inject(function (_$rootScope_, _$controller_, _$timeout_, _$interval_, _$uibModal_) {
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        $timeout = _$timeout_;
        $interval = _$interval_;
        $uibModal = _$uibModal_;
    }));

    it('should reset timeouts when the createTimeoutModalPromise is cancelled', function () {
        spyOn($timeout, 'cancel');
        $timeout.cancel;
        expect($timeout.cancel).toHaveBeenCalled();
    });

    it('should clear timeouts and intervals when the DOM is destroyed', function () {
        spyOn($timeout, 'cancel');
        spyOn($interval, 'cancel');
        $controller('TimeoutJsController', {
            $scope: $scope,
            $window: {},
            $uibModal: $uibModal,
            $controller: $controller,
            dataProvider: {},
            BASE_URL: '',
            $timeout: $timeout,
            $interval: $interval
        });

        $scope.$destroy();
        expect($timeout.cancel).toHaveBeenCalled();
        expect($interval.cancel).toHaveBeenCalled();
    });

    it('should restart the countdown timer', function () {
        spyOn($interval, 'cancel');
        $controller('TimeoutJsController', {
            $scope: $scope,
            $window: {},
            $uibModal: $uibModal,
            $controller: $controller,
            dataProvider: {},
            BASE_URL: '',
            $timeout: $timeout,
            $interval: $interval
        });

        $restartCountdown();
        expect($interval.cancel).toHaveBeenCalled();
    });
});