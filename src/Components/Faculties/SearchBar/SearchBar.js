import React from "react";

function SearchBar({searchQuery, setSearchQuery}){
    return(
        <div className="rounded bg-gray-400 p-3">
            <input className="w-full p-2 border rounded"
            id="facultyName"
            type="text"
            placeholder="Search Faculty By Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;