/**
 * Client side equivalent to Laravel "required_without" validator
 * The field under validation must be present only when any of the other specified fields are not present.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.requiredWithout = $.extend($.fn.bootstrapValidator.i18n.requiredWithout || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredWithout = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                required = false,
                requiredField = '';

            $.each(options.fields, function(ix, field) {

                var $field = validator.getFieldElements(field);

                if (!$field || $field.val() == '') {
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

            var message = options.message['requiredWithout'] || options.message || $.fn.bootstrapValidator.i18n.requiredWithout['default'];

            return {
                valid : false,
                message : $.fn.bootstrapValidator.helpers.format(message, requiredField)
            }
        }
    };

}(window.jQuery));
