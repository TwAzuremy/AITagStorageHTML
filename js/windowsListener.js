$(document).ready(function () {
    setTimeout(function () {
        categoryBtns.forEach(sidebarBtn => {
            sidebarBtn.classList.add('slideout')
        })
    }, 500)


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

    if (navigator.onLine) {
        // loading data
        update_data('templates');
    } else {
        setTimeout(function () { createToast(TOAST.WARNING, '无网络链接') }, 1000)
    }
})