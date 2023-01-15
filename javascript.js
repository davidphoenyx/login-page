function notification(value1, value2) {

    if (value1) {
        var div = document.getElementById('notification')
        div.style.cssText = 'height: 50px; color: green;'
        div.innerText = 'LOGIN SUCCESSFULLY'
    } else if (value2 == 'pass') {
        var div = document.getElementById('notification')
        div.style.cssText = 'height: 50px; color: red;'
        div.innerText = 'FAIL TO LOGIN, WRONG PASS OR E-MAIL'
    } else if (value2 == 'mail') {
        var div = document.getElementById('notification')
        div.style.cssText = 'height: 50px; color: red;'
        div.innerText = 'FAIL TO LOGIN, VERIFY YOUR E-MAIL'
    } else if (value2 == 'empty') {
        var div = document.getElementById('notification')
        div.style.cssText = 'height: 50px; color: red;'
        div.innerText = 'FAIL TO LOGIN, EMPTY DATA'
    } else {
        var div = document.getElementById('notification')
        div.style.cssText = 'height: 50px; color: red;'
        div.innerText = 'FAIL TO LOGIN'
    }

}

function closeNotification() {

    var div = document.getElementById('notification')
    div.style.cssText = 'height: 0px;'

}

function verify() {

    var mail = document.getElementById('login-mail').value

    var validRegex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i

    if (mail.match(validRegex)) {
        return true
    } else {
        return false
    }

}

function login() {

    var mail = document.getElementById('login-mail').value

    var pass = document.getElementById('login-pass').value

    if (mail === '' || pass === '') {
        notification(false, 'empty')
        setTimeout(closeNotification, 3000)
    } else if (verify()) {
        if (mail === 'seu@email.com' && pass === 'senha') {
            notification(true)
            setTimeout(closeNotification, 3000)
        } else {
            notification(false, 'pass')
            setTimeout(closeNotification, 3000)
        }
    } else {
        notification(false, 'mail')
        setTimeout(closeNotification, 3000)
    }

}