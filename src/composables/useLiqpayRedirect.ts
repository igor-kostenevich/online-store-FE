export function useLiqpayRedirect() {
  function redirectToLiqPay(data: string, signature: string) {
    const form = document.createElement('form')
    form.setAttribute('method', 'POST')
    form.setAttribute('action', 'https://www.liqpay.ua/api/3/checkout')
    form.setAttribute('accept-charset', 'utf-8')
    form.style.display = 'none'

    const dataInput = document.createElement('input')
    dataInput.setAttribute('type', 'hidden')
    dataInput.setAttribute('name', 'data')
    dataInput.setAttribute('value', data)

    const signatureInput = document.createElement('input')
    signatureInput.setAttribute('type', 'hidden')
    signatureInput.setAttribute('name', 'signature')
    signatureInput.setAttribute('value', signature)

    form.appendChild(dataInput)
    form.appendChild(signatureInput)
    document.body.appendChild(form)

    form.submit()
    form.remove()
  }

  return { redirectToLiqPay }
}
