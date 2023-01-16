function notification(value) {

    var div = document.getElementById('notification')

    switch (value) {
        case 'success':
            div.style.cssText = 'height: 50px; color: #c7ff2c;'
            div.innerText = 'LOGIN SUCCESSFULLY'
            break
        case 'pass':
            div.style.cssText = 'height: 50px; color: #f31230;'
            div.innerText = 'FAIL TO LOGIN, WRONG PASS OR E-MAIL'
            break
        case 'mail':
            div.style.cssText = 'height: 50px; color: #f31230;'
            div.innerText = 'VERIFY YOUR E-MAIL'
            break
        case 'empty':
            div.style.cssText = 'height: 50px; color: #f31230;'
            div.innerText = 'EMPTY DATA'
            break
        case 'verified':
            div.style.cssText = 'height: 50px; color: #c7ff2c'
            div.innerText = 'E-MAIL TO RECOVERY ACCOUNT WAS SEND'
            break
        default:
            div.style.cssText = 'height: 50px; color: #f31230;'
            div.innerText = 'FAIL TO LOGIN'

    }

}

function closeNotification() {

    var div = document.getElementById('notification')
    div.style.cssText = 'height: 0px; color: black'

}

function verify(value) {

    var validRegex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i

    if (value.match(validRegex)) {
        return true
    } else {
        return false
    }

}

function login() {

    var mail = document.getElementById('login-mail').value

    var pass = document.getElementById('login-pass').value

    if (mail === '' || pass === '') {
        notification('empty')
        setTimeout(closeNotification, 3000)
    } else if (verify(mail)) {
        if (mail === 'seu@email.com' && pass === '123456') {
            notification('success')
            setTimeout(closeNotification, 3000)
        } else {
            notification('pass')
            setTimeout(closeNotification, 3000)
        }
    } else {
        notification('mail')
        setTimeout(closeNotification, 3000)
    }

}

function send() {

    var mail = document.getElementById('recovery-mail').value

    if(verify(mail)) {
        notification('verified')
        setTimeout(closeNotification, 3000)
    } else {
        notification('mail')
        setInterval(closeNotification, 3000)
    }

}

function recover() {
    
    var divRecover = document.getElementById('recover')

    var divLogin = document.getElementById('login')

    divRecover.style.cssText = 'z-index: 1;'

    divLogin.style.cssText = 'display: none;'

}