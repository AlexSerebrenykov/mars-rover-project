export const handleStatusError = (status) => {
    switch (status) {
        case 403: {
            showError({ fatal:true, message: 'Forbidden' })
            break
        }
        case 404: {
            showError({ fatal:true, message: 'Page Not Found' })
            break
        }
        case 429: {
            showError({ fatal:true, message: 'Too Many Requests' })
            break
        }
        default: {
            showError({ fatal:true })
        }
    }
}
