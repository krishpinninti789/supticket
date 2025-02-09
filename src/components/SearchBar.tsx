import { Search } from "lucide-react";
import React from "react";

import Form from "next/form";

const SearchBar = () => {
  return (
    <div>
      <Form className="relative" action={"/search"}>
        <input
          type="text"
          name="q" //query
          placeholder="Search for events..."
          className="w-full py-3 px-4 border border-gray-200 pl-12 bg-white rounded-xl shadow-sm
           focus:outline-none focus:ring-2 foucs:ring-blue-600 focus:ring-opacity-50 
           foucs:border-transparent transtion duration-200"
        />
        <Search className="absolute top-1/2 left-4 transform w-5 h-5 -translate-y-1/2 text-gray-400" />
        <button
          className="absolute right-3 bg-blue-600 top-1/2 -translate-y-1/2 px-4 py-1.5
         rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200  
          text-white"
        >
          {" "}
          Search
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;
