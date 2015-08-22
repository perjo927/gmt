/**/
Template.hero_modal.events({
    "submit form": function () {
        $('#hero_modal').closeModal();
        // TODO: Or show confirmation
    }
});


Template.hero_modal_title_container.helpers({
    'modalDocument': function () {
        var modal = this.modal;
        modal._id = this._id;
        return modal;
    }
});
