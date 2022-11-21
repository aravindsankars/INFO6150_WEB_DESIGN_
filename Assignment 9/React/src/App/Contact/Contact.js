import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import PageCard from '../../Components/PageCard/PageCard';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageCard
        title={"Contact Page"}
        desc={
          "Contact us for enquiries. Contact to know more."
        }
      />
    </div>
  );
}

export default Contact