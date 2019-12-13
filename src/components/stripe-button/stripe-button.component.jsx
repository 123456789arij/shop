import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_LmwRwIj0dhsE9C08OAH5f6x400r0ckc0wS';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='payer'
      name='PANIER'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Total : ${price} dt`}
      amount={priceForStripe}
      panelLabel='payer'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;