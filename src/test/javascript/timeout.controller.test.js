
describe("GeneralController", () => {

    beforeEach(module("UHGroupingsApp"));
    beforeEach(module("ngMockE2E"));

    let scope;
    let controller;
    let httpBackend;
    let BASE_URL;
    let gs;
    let uibModal;

    beforeEach(inject(($rootScope, $controller, _BASE_URL_, _$httpBackend_, groupingsService, $uibModal, $window) => {
        scope = $rootScope.$new();
        controller = $controller("GeneralJsController", {
            $scope: scope
        });
        httpBackend = _$httpBackend_;
        BASE_URL = _BASE_URL_;
        gs = groupingsService;
        uibModal = $uibModal;
        window = $window;
    }));

    it("should clear the timeouts and intervals when DOM is destroyed.", () => {

    });

    it("should close the timeout modal.", () => {
        spyOn(scope.timeoutModalInstance, "close").and.callThrough();
        scope.createApiErrorModal();
    });

    it("should ping the server.", () => {
        spyOn(scope, "getGroupingInformation").and.callThrough();
        scope.displayGrouping(0, 0);
        expect(scope.getGroupingInformation).toHaveBeenCalled();
    });

    it("should log out the user.", () => {
        spyOn(scope, "getGroupingInformation").and.callThrough();
        scope.displayGrouping(0, 0);
        expect(scope.getGroupingInformation).toHaveBeenCalled();
    });
});