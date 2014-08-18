/**
 * Client side equivalent to Laravel "required_without_all" validator
 * The field under validation must be present only when the all of the other specified fields are not present.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.requiredWithoutAll = $.extend($.fn.bootstrapValidator.i18n.requiredWithoutAll || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredWithoutAll = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                required = true,
                valid = false,
                status = null;

            // check to see if any of the other fields has content
            $.each(options.fields, function(ix, field) {

                var $field = validator.getFieldElements(field);

                if ($field && $field.val() !== '') {
                    required = false;
                    return true;
                }

            });

            if(!required) {
                // one of the other fields has content, so we are ok
                valid = true;
            } else {
                if(value !== '') {
                    // the other fields can pass because this one has content
                    valid = true;
                } else {
                    // everything is a fail because they are all empty
                    valid = false;
                }
            }

            // update the status of all the fields

            validator.updateStatus($field, valid ? 'VALID' : 'INVALID' , null);
            $.each(options.fields, function(ix, field) {
                validator.updateStatus(field, valid ? 'VALID' : 'INVALID' , null);
            });

            var message = options.message['requiredWithoutAll'] || options.message || $.fn.bootstrapValidator.i18n.requiredWithoutAll['default'];

            return {
                valid : valid,
                message : $.fn.bootstrapValidator.helpers.format(message, options.fields.join(', '))
            };
        }
    };

}(window.jQuery));
