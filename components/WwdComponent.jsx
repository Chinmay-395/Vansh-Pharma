import React from "react";

const Card = () => {
  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {/* <!--Card 1--> */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="h-12 w-12 ml-8 my-2"
            src="/img/box.svg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Free Shipping Orders Over $150
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div> */}
        </div>
        {/* <!--Card 2--> */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="h-12 w-12 ml-8 my-2"
            src="/img/packages.svg"
            alt="River"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Discrete Packaging</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div> */}
        </div>

        {/* <!--Card 3--> */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="h-12 w-12 ml-8 my-2"
            src="/img/chatting.svg"
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Doctors Prescription</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div> */}
        </div>
        {/* <!--Card 4--> */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="h-12 w-12 ml-8 my-2"
            src="/img/pharmacy.svg"
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Trusted Online Pharmacy
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const WwdComponent = () => {
  return (
    <div>
      <Card />
      {/* </div> */}
    </div>
  );
};

export default WwdComponent;
