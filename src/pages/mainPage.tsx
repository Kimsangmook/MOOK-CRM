// import { Layout, Menu } from "antd";

import React ,{useContext} from "react";
import styled from "@emotion/styled";
import { PronmptContext } from "../context/promptContext";
interface MainPageProps {

}


export default function MainPage(): JSX.Element {
    const promptCtx = useContext(PronmptContext);

      
      
    return (
        <>
          <div className="mainPage" >
            <div>
                <ul>
                {promptCtx.items.map((prompt)=>
                <li>
                    <div>{prompt.id}</div>
                    <button>취소</button>
                </li>
                )}
                </ul>
            </div>
            <div>
                <button>만들기</button>
            </div>
          </div>
        </>
      );    
}
