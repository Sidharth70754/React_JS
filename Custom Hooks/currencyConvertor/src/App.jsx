import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyinfo(from)
  
  const options = currencyInfo && Object.keys(currencyInfo).length > 0 ? Object.keys(currencyInfo.conversion_rates) : []

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount * (currencyInfo.conversion_rates[from] || 1))
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (currencyInfo.conversion_rates) {
      setConvertedAmount(amount * (currencyInfo.conversion_rates[to] || 1))
    }
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/2124792712/photo/dollars-connecting-in-plexus.webp?b=1&s=170667a&w=0&k=20&c=c-n-I2GElJ4SNJMr3hkRUzHH-n4DJ4Fq8EZRRyL14HE=')`
      }}
    >
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className='w-full mb-1'>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button
              type="button" className='absolute left-1/2 -translate-x-1/2
              -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className='w-full mt-1 mb-4'>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button type="submit"
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App;


