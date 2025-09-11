import { faArrowDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TopBar() {
  return (
    <div className="bg-green-100">
      <div className="flex justify-between max-w-7xl m-auto p-1">
        <p className="flex gap-2 text-green-500 text-sm items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
        <div>
          <button className="text-sm">
            Eng <FontAwesomeIcon icon={faArrowDown} className="" />
          </button>
          <button className="text-sm">
            USD <FontAwesomeIcon icon={faArrowDown} className="" />
          </button>
        </div>
      </div>
    </div>
  );
}
