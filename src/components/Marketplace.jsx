import React from "react";
import Container from "./shared/Container";
import { FaShoppingCart, FaMoneyBillAlt } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";

const Marketplace = () => {
  return (
    <Container activeRoute="marketplace">
      <div className="p-2 flex flex-col space-y-1">
        <div className="border border-neutral-700 rounded p-5 bg-neutral-900/10 hover:bg-neutral-900/20 hover:cursor-pointer flex justify-between items-center space-x-5">
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-4xl text-purple-500" />
            <div>
              <h2 className="text-lg font-semibold">Buy Products</h2>
              <p>Explore and purchase products from the marketplace</p>
            </div>
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded">
            Explore
          </button>
        </div>
        <div className="border border-neutral-700 rounded p-5 bg-neutral-900/10 hover:bg-neutral-900/20 hover:cursor-pointer flex justify-between items-center space-x-5">
          <div className="flex items-center space-x-4">
            <FaMoneyBillAlt className="text-4xl text-green-500" />
            <div>
              <h2 className="text-lg font-semibold">Sell Products</h2>
              <p>List and sell your own products on the marketplace</p>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded">
            Start Selling
          </button>
        </div>
        <div className="border border-neutral-700 rounded p-5 bg-neutral-900/10 hover:bg-neutral-900/20 hover:cursor-pointer flex justify-between items-center space-x-5">
          <div className="flex items-center space-x-4">
            <RiAuctionFill className="text-4xl text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">Auctions</h2>
              <p>Bid on or create auctions for unique items</p>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded">
            Join Auctions
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Marketplace;
