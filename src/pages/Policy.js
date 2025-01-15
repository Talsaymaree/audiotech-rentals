// Policy.js
import React from 'react';

const Policy = () => {
  document.title ="Policy - AudioTech Rentals"; 
  document.getElementsByTagName("META")[2].content="Rental Policy, Late Returns and Care of Equipment.";

  return (
    <div className={"mx-auto my-0 prose md:prose-md text-left 2xl:max-w-screen-lg max-h-screen-lg mx-auto text-1xl"}>
      <h3 className="policy-title">Policies</h3>
      <div className={'mx-10 text-md'}>
        <h4 className="policy-title">Rental Policy:</h4>
        <p className="policy-description">Please present a valid Photo ID upon arrival. A credit card deposit is necessary and required for all transactions. Full payment is required upon pickup. Rentals must be returned by 12:00pm. If you need an extension, please inquire with us. Late returns will incur additional fees. For safety reasons, transportation in open vehicles is not permitted. Outdoor use of the equipment is strictly prohibited unless approved.</p>
        <h4 className="policy-title">Late Return:</h4>
        <p>Renter agrees to return the rented equipment to Owner by the agreed-upon return date and time. Late returns will result in additional rental fees.</p>
        <h4 className="policy-title">Care of Equipment:</h4>
        <p>Outdoor use of the equipment is strictly prohibited unless approved. Renter shall exercise reasonable care in the use of the rented equipment and shall be responsible for any damages beyond normal wear and tear. Renter shall not make any alterations or modifications to the equipment without the prior written consent of Owner. If any repairs are needed it's the responsibility of the Renter to pay those fees via credit card on file. </p>
      </div>
    </div>
  );
}

export default Policy;
