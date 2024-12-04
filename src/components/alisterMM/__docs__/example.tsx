import React from "react";
import AlisterMM, { AlisterMMProps } from "../alistermm";

export default function Example(props: AlisterMMProps) {
    return (
        <AlisterMM
            ratingValue={props.ratingValue}
            onRatingChange={props.onRatingChange}
        />
    );
}

