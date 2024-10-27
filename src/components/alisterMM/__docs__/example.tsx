import React from "react";
import AlisterMMRating, { AlisterMMProp } from "../alistermm";

export default function Example(props: AlisterMMProp) {
    return (
        <AlisterMMRating
            ratingValue={props.ratingValue}
            onRatingChange={props.onRatingChange}
        />
    );
}