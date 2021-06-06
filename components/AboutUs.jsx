const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="">
        <img
          className="width_90"
          src="/img/doc_img.jpg"
          alt="doctor-prescribing-meds"
        />
      </div>

      <div className="flex flex-col flex-wrap justify-center">
        <p className="text-3xl m-4">Customer Centeric</p>
        <p className="text-2xl m-4">
          Find the right care right when you need it. Start by choosing your
          reason for visit, and we'll help you find the right care.
        </p>
        <div className="grid grid-cols-2 gap-4 m-4">
          <div className="self-stretch">
            <ol className="list-inside list-disc">
              <li className="my-2">
                <span className="text-base ">Shop directly and save!</span>
              </li>
              <li className="my-2">
                <span className="text-base ">Free or discounted shipping</span>
              </li>
              <li className="my-2">
                <span className="text-base ">
                  24 hour/7 day customer service
                </span>
              </li>
            </ol>
          </div>
          <div className="self-stretch">
            <ol className="list-inside list-disc">
              <li className="my-2">
                <span className="text-base ">
                  Assurance of freshness with expiration dates
                </span>
              </li>
              <li className="my-2">
                <span className="text-base ">A greener way to shop</span>
              </li>
              {/* <li>24 hour/7 day customer service</li> */}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
