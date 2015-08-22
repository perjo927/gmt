


Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var noParams = false;

        return CreateSubscriptions({
            "navbar": noParams,
            "hero": noParams,
            "intro": noParams,
            "locations": noParams,
            "eventss": noParams,
            "footer": noParams,
            "appointment": noParams,
            "markers": noParams
        });
    },
    action: function(){
        var router = this;
        var params = router.params;

        var c = App.collections;

        router.render('home', {
            data: function () {
                // TODO: refactor
                return {
                    navbar: c["navbar"].find(),
                    hero: c["hero"].find(),
                    intro: c["intro"].find(),
                    locations: c["locations"].find(),
                    eventss: c["eventss"].find(),
                    appointment: c["appointment"].find(),
                    markers: Markers.find()
                }
            }
        });
        router.render('navbar', {
            to: "navbar",
            data: function () {
                return {
                    navbar: c["navbar"].find()
                }
            }
        });
        router.render('footer', {
            to: "footer",
            data: function () {
                return {
                    footer: c["footer"].find()
                }
            }
        });
    }
});

Router.route('/admin', {
    name: "admin",
    loadingTemplate: "loading",
    layoutTemplate: "admin_app",
    onBeforeAction: function () {
        if (Meteor.userId()) {
            Router.go('home');
        } else {
            this.next();
        }
    },
    action: function(){
        var router = this;
        router.render('admin', {});
    }
});

// TODO: 404, etc