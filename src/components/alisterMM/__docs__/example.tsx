import React from "react";
import AlisterMM, { AlisterMMProps } from "../alistermm";
export default function Example(props: AlisterMMProps){
        return(
                <AlisterMM
                        text={props.text}
                        alignment={props.alignment}
                        color={props.color}
                        bottomMargin={props.bottomMargin}
                        variant={props.variant}
                />
        )
}