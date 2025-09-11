import { faArrowDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CaretDownIcon } from "@phosphor-icons/react";
import React from "react";

export default function TopBar() {
  return (
    <div className="bg-green-100">
      <div className="flex justify-between max-w-7xl m-auto py-3">
        <p className="flex gap-2 text-hard-primary items-center justify-center">
          <FontAwesomeIcon icon={faLocationDot} />
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm flex items-center gap-2 mr-4">
            Eng{" "}
            <CaretDownIcon size={12}/>
          </span>
          <span className="text-sm flex items-center gap-2 mr-4">
            USD{" "}
            <CaretDownIcon size={12}/>
          </span>
           
        </div>
      </div>
    </div>
  );
}
