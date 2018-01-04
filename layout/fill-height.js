$.fn.extend({
    fillHeight: function() {
        let windowHeight = window.innerHeight;
        let eleHeight    = this[0].offsetHeight;
        let top          = this[0].offsetTop;

        let offsetBottom  = windowHeight - eleHeight - top;

        this.css('minHeight', this.height() + offsetBottom + 'px');
    }
})
