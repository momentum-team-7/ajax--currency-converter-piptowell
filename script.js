// const catFacts = document.querySelector('.cat-facts')
// fetch(catUrl)
// .then (response => response.json())
// .then (data => {
//   console.log(data)
//   const catFact = data[0].text
//   document.querySelector('.cat-facts').innerHTML = `<p>${catFact}</p>`
// })

const url = 'https://api.exchangeratesapi.io/latest'
const baseUrl = 'https://api.exchangeratesapi.io/latest?base=BASE_CURRENCY_SYMBOL'
const urlSpecific = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP'
const urlBase = 'https://api.exchangeratesapi.io/latest?base=USD'

const fromCurrencyEl = document.querySelector('.convert-from')
const fromAmountEl = document.querySelector('.from-amount-field')
const toCurrencyEl = document.querySelector('.convert-to')
const toAmountEl = document.querySelector('.to-amount-field')
const finalAmountEl = document.querySelector('.final-amount')



fetch (url)
  .then(response => response.json())
  .then(data => {
    console.log('working?', data)
  // .then(data => {
    fromCurrency = data.rates
    console.log('fromCurrency is ', fromCurrency)
  })
  // })

  
  fetch (urlBase)
  .then(response => response.json())
  .then(data2 => {
    console.log('working?', data2)
  // .then(data => {
    fromCurrency = data2.rates
    console.log('fromCurrency is ', fromCurrency)
  })

  //symbols parameter yields specific exchange rates

  fetch (urlSpecific)
  .then(response => response.json())
  .then(data3 => {
    console.log('working?', data3)
  // .then(data => {
    fromCurrency = data3.rates
    console.log('fromCurrency is ', fromCurrency)
  })



  // get from currency type
  // make function where that pulls base value for currency
  // add that value to the end of the URL
  // 


// input amount value / exchange rate value = exchange total





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

