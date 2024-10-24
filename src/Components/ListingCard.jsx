import React from 'react';


const ListingCard = ({ listing }) => {
  return (
    <div className="overflow-hidden">
      <img
        src={listing.image}
        loading="lazy"
        alt={listing.title}
        className="m-1.5 h-[240px] w-[95%] border rounded-xl hover:shadow-x3 transition duration-200"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{listing.title}</h2>
        <p className="text-gray-500">{listing.type}</p>
        <p className="text-gray-700">Guests: {listing.guests}</p>
        <p className="font-bold text-lg">Price: ${listing.price}</p>
        <div className="flex">
        </div>
      </div>
    </div>
  );
};

export default ListingCard;