import React from "react";
import AlisterMMRating, { AlisterMM } from "../alistermm";

export default function Example(props: AlisterMM) {
    return (
        <AlisterMM
            ratingValue={props.ratingValue}
            onRatingChange={props.onRatingChange}
        />
    );
}
