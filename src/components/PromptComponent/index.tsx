import React,{useContext} from "react";
import styled from "@emotion/styled";
import PromptComponentsForm from "../../form/PromptComponentForm";
import {PronmptContext} from "../../context/promptContext"

interface PronmptComponentProps {
    name: string;
    description:string;
}
  

export default function PromptComponent({name,description}:PronmptComponentProps): JSX.Element {
    const promptCtx = useContext(PronmptContext);
    
    const addToMainPagetHandler = () =>{
        promptCtx.addItem({
            id: name,
            description : description
        });
    };

    return (
        <li>
            <div><h3>{name}</h3></div>
            <div>{description}</div>
            <PromptComponentsForm onAddToMainPage={addToMainPagetHandler}/>
        </li>
    );
  }