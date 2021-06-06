import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto ">
      {/* First Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="p-4">
          <img src="/img/doc_pres.jpg" alt="doctor-prescribing-meds" />
        </div>

        <div className="flex flex-col flex-wrap justify-center">
          <img
            className="h-12 w-12 m-4"
            src="/img/Medicine-Bottle.png"
            alt="med-bottle"
          />
          <p className="text-4xl m-4">
            Prescription Reminders and Consultations
          </p>
          <p className="text-xl m-4">
            Some sub text Any time your prescription ends or in case you need a
            consultation. Nonummy nibh euismod tincidunt ut laoreet dolore.
            magna aliquam erat volutpat.
          </p>
        </div>
      </div>
      {/* Second Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col flex-wrap justify-center">
          <img
            className="h-12 w-12 m-4"
            src="/img/pills.svg"
            alt="med-bottle"
          />
          <p className="text-4xl m-4">Prescription Transfers and Delivery</p>
          <p className="text-xl m-4">
            Some sub text Any time your prescription ends or in case you need a
            consultation. Nonummy nibh euismod tincidunt ut laoreet dolore.
            magna aliquam erat volutpat.
          </p>
        </div>
        <div className="p-4">
          <img
            src="/img/image-8-copyright-min.jpg"
            alt="doctor-prescribing-meds"
          />
        </div>
      </div>
      {/* Third Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="p-4">
          <img
            src="/img/image-17-copyright-min.jpg"
            alt="doctor-prescribing-meds"
          />
        </div>

        <div className="flex flex-col flex-wrap justify-center">
          <img
            className="h-12 w-12 m-4"
            src="/img/band-aid.svg"
            alt="med-bottle"
          />
          <p className="text-4xl m-4">
            Consultations and Prescription Reminders
          </p>
          <p className="text-xl m-4">
            Some sub text Any time your prescription ends or in case you need a
            consultation. Nonummy nibh euismod tincidunt ut laoreet dolore.
            magna aliquam erat volutpat.
          </p>
        </div>
      </div>
      {/* Fourth Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col flex-wrap justify-center">
          <img
            className="h-12 w-12 m-4"
            src="/img/capsule.svg"
            alt="med-bottle"
          />
          <p className="text-4xl m-4">Prescription Transfers and Delivery</p>
          <p className="text-xl m-4">
            Some sub text Any time your prescription ends or in case you need a
            consultation. Nonummy nibh euismod tincidunt ut laoreet dolore.
            magna aliquam erat volutpat.
          </p>
        </div>
        <div className="p-4">
          <img
            src="/img/image-37-copyright-min.jpg"
            alt="doctor-prescribing-meds"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
