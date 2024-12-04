import React from "react";
import AlisterMMRating, { AlisterMMRatingProps } from "../alistermm";

export default function Example(props: AlisterMMRatingProps) {
    return (
        <AlisterMMRating
            ratingValue={props.ratingValue}
            onRatingChange={props.onRatingChange}
        />
    );
}

