import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ProductNotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <FontAwesomeIcon icon={faHourglass} className="text-5xl py-2" />
        <div className="text-xl font-semibold mb-2">No Products Found</div>
        <div className="text-sm text-gray-400">
          Try browsing other categories or check back later.
        </div>
      </div>
    </div>
  );
}
