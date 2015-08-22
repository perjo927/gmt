var fireSelector = ".scrollfire" + "." + "icons";


Template.intro.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.intro.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.intro.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);

    this.$('.modal-trigger').leanModal();
});
