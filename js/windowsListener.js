window.onload = function () {
    $.ajax({
        url: `${request_url}/configOperation`,
        type: 'POST',
        dataType: 'JSON',
        data: {
            'key': CONFIG.APPEARANCE,
            'value': null,
            'operation': FINAL.CONFIGOPERATION_GET
        },
        success: function (data) {
            nightOperation(parseInt(data), false)
        },
        error: function (err) {
            console.log(err)
        }
    })

    // loading language
    config_operation(CONFIG.LANGUAGE, null, FINAL.CONFIGOPERATION_GET)

    if (window.innerWidth <= 520) {
        storage_column_button.click();
    }

    // loading data
    update_data('templates');
}