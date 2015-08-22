

// TODO: Remove after release
var isDevEnv = function () {
        return function() {
                return Session.equals("environment", "development");
        };
};

Template.home.onRendered(function () {
        $('.scrollspy').scrollSpy();
});

Template.home.helpers({
        // TODO: Remove after release
        isDev: function () {
                var checkDev = isDevEnv();
                return checkDev();
        }
});
