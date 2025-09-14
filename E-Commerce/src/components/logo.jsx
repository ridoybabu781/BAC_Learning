import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <Link to="/" className="text-3xl font-bold  flex items-center gap-2">
      <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
      Ecobazar
    </Link>
  );
}
