(function($) {

    $.fn.bootstrapValidator.i18n.requiredIf = $.extend($.fn.bootstrapValidator.i18n.requiredIf || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredIf = {

        validate: function(validator, $field, options) {

            var value = $field.val();
            var compareWith = validator.getFieldElements(options.field);

            if (compareWith === null) {
                return true;
            }

            if (compareWith.val() !== options.value) {
                return true;
            }

            if (value !== '') {
                return true;
            }

            var message = options.message['requiredIf'] || options.message || $.fn.bootstrapValidator.i18n.requiredIf.default;

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
