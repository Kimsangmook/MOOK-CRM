import React, {useState} from "react";
import styled from "@emotion/styled";

interface PromptComponentsFormProps {
    onAddToMainPage: () => void;
}
  
  export default function PromptComponentsForm({ onAddToMainPage }: PromptComponentsFormProps): JSX.Element {
      
      const submitHandler = (event: React.FormEvent) => {
          event.preventDefault();
          onAddToMainPage(); 
      };
  
      return (
          <form onSubmit={submitHandler}>
              <button type="submit">+ Add</button>
          </form>
      );
  }


