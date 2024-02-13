import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import CheckoutStepper from './CheckoutStepper';


function App() {
  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      text:'Provide your contact details',
    },
    {
      name: "Shipping Info",
      text: 'Enter your shipping address.',
    },
    {
      name: "Payment",
      text: 'Complete payment for your order.',
    },
    {
      name: "Delivered",
      text: 'Your order has been delivered.',
    },
  ];
  return (
    <>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </>
  )
}

export default App
