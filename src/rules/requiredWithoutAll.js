(function($) {

    $.fn.bootstrapValidator.i18n.requiredWithoutAll = $.extend($.fn.bootstrapValidator.i18n.requiredWithoutAll || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredWithoutAll = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                required = true;

            $.each(options.fields, function(ix, field) {

                var $field = validator.getFieldElements(field);

                if ($field && $field.val() !== '') {
                    required = false;
                    return false;
                }

            });

            if(!required) {
                return true;
            }

            if(value !== '') {
                return true;
            }

            var message = options.message['requiredWithoutAll'] || options.message || $.fn.bootstrapValidator.i18n.requiredWithoutAll.default;

            return {
                valid : false,
                message : $.fn.bootstrapValidator.helpers.format(message, options.fields.join(', '))
            }
        }
    };

}(window.jQuery));
