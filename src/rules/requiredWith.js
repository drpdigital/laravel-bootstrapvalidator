(function($) {

    $.fn.bootstrapValidator.i18n.requiredWith = $.extend($.fn.bootstrapValidator.i18n.requiredWith || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredWith = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                required = false,
                requiredField = '';

            $.each(options.fields, function(ix, field) {

                var $field = validator.getFieldElements(field);

                if ($field && $field.val() !== '') {
                    required = true;
                    requiredField = field;
                    return false;
                }

            });

            if(!required) {
                return true;
            }

            if(value !== '') {
                return true;
            }

            var message = options.message['requiredWith'] || options.message || $.fn.bootstrapValidator.i18n.requiredWith.default;

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
