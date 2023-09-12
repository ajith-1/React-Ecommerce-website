import React, { useState } from 'react';
import './CheckOut.css'; 
import UserDetails from '../UserDetails/UserDetails';
// import Payment from './Payment';
// import Confirmation from './Confirmation';

const CheckOut = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="checkout-container">
      {step === 1 && <UserDetails onNext={handleNext} />}
      {/* {step === 2 && <Payment onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <Confirmation />} */}
    </div>
  );
};

export default CheckOut;
