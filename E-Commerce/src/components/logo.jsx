import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export function Logo() {
    return (
        <div className='text-3xl flex items-center gap-2'>
            <FontAwesomeIcon icon={faLeaf} className='text-green-500' />
            Ecobazar
        </div>
    );
}
