const urlBase = 'https://api.exchangeratesapi.io/latest?base='

const fromCurrency = document.querySelector('#convert-from')
const fromAmount = document.querySelector('.from-amount-field')
const toCurrency = document.querySelector('#convert-to')
const finalAmountDiv = document.querySelector('.final-amount')
const convertButton = document.querySelector('#convert')
const amount = document.querySelector('#to-amount-field')

console.log('toCurrency is', toCurrency)




convertButton.addEventListener('click',(event) => {
  const fromCurrencyCode = fromCurrency.value
  console.log('fromCurrency is', fromCurrency.value)

  const toCurrencyCode = toCurrency.value
  console.log('toCurrency is', toCurrency.value)

  const convertAmount = amount.value
  console.log('amount is', amount.value)


  convert(fromCurrencyCode, toCurrencyCode, convertAmount)

})

  function convert (from, to, amount) {
  console.log('from variable is', from)
    fetch(urlBase + from)
      .then(response => response.json())
      .then(data => {
        let rates = data.rates
        console.log(rates[to]) 
        calculate(rates[to], amount)
      })
  }
  
  function calculate (rate, amount) {
    console.log('Exchange rate is ', rate)
    let result = (amount * rate).toFixed(2)
    finalAmountDiv.innerHTML = `<p>${result}</p>` 
    

  }







// fetch (urlBase)
//   .then(response => response.json())
//   .then(data => {
//     console.log('working?', data)
//     fromCurrencyEl = data.rates
//     console.log('fromCurrencyEl is ', fromCurrencyEl)
//   })

// event listener for 'convert button'
// after convert is clicked; function takes the toCurrency.value and the fromCurrency.value 
// puts them in a function with the amount and does some math or something and spits out the
// answer into the finalAmountDiv





const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

