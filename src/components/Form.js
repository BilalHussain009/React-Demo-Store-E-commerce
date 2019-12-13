import React from 'react';
import { CardElement, injectStripe,ReactStripeElements} from 'react-stripe-elements';
class  Form extends React.Component {
  render(){
    return(
      <h1>hello </h1>
    )
  }
  


}
export default injectStripe(Form);