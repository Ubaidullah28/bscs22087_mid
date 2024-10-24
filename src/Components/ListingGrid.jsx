import React from 'react';
import listingsData from './MoviesData';
import ListingCard from './ListingCard';

const ListingsGrid = () => {
  return (
    <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {listingsData.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsGrid;