import React from 'react'

function CreditCard(props) {

    let { type, number, bank, owner } = props
    let { expirationMonth, expirationYear } = props
    let { bgColor, color } = props

    // Colocar 0 atrás do expirationMonth se necessário
    if (expirationMonth < 10){
        expirationMonth = `0` + expirationMonth
    }

    // Reduzir o ano
    expirationYear = expirationYear % 1000

    // Configurar Número de Cartão com •••
    let hashedNumber = "•••• •••• •••• "
    hashedNumber += `${number.substring(number.length - 4)}`

    // Configurar Logo
    const masterCardLogo = "https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
    const visaLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png"

    let typeImage

    if (type === "Master Card") {
        typeImage = masterCardLogo
    }
    else if (type === "Visa") {
        typeImage = visaLogo
    }

    return (
        <div className='credit-card'
            style={{ backgroundColor: bgColor, color: color }}>
            <header>
                <img src={typeImage} />
            </header>
            <div className='number'>
                {hashedNumber}
            </div>
            <div className='info'>
                <span className='expiry-date'>Expires {expirationMonth}/{expirationYear}</span>
                <span className='bank'>{bank}</span>
                <div className='owner'>{owner}</div>
            </div>
        </div>
    )
}

export default CreditCard