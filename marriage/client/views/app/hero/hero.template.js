// TODO: Move to Lib + ES6

var fireSelector = ".scrollfire.hero";


Template.hero.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    Materialize.fadeInImage(fireSelector);

    this.$('.modal-trigger').leanModal();
});

