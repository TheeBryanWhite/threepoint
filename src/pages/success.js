import React from 'react';
import SEO from '../components/seo'

import SuccessLayout from '../components/layout/success-layout'

const Success = () => (
  <SuccessLayout>
     <SEO title="Contact Success!" />

    <div id="main" className="main success">
      <h2>You did it!</h2>
      <hr />
      <p>We'll get you back ASAP!</p>
    </div>
  </SuccessLayout>
);

export default Success