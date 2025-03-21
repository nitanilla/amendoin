ui.components = ui.components || {};  //prevents overriding the variable, while also preventing working with a null variable

ui.components.AddButtonView = Backbone.View.extend({
    tagName: 'span',
    className: 'add-button',
    template: _.template($('#add-button-template').html()),

    events: {
        'mousedown button': 'buttonClickHandler'//meaning: when its button is clicked, the buttonClickHandler is called
    },

    initialize: function () {
        if (!this.model.get('name')) {
            this.model.set('name', this.model.get('label'));
        }
        this.listenTo(this.model, 'change:active', this.highlight);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        $('#add-internal-cells-palette').append(this.$el);
        return this;
    },

    buttonClickHandler: function (event) {
        if (ui.states.editor.ADDING.data.button) {
            ui.states.editor.ADDING.data.button.end();
        }
        this.model.act();
        ui.changeAddMenuStatus(this.model.get('statusText'));
    },

    highlight: function (element) {
        this.$('button').toggleClass('buttonHighlight', element.get('active'));
        this.$('button').blur();
    }

});
