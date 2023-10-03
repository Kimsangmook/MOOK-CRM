// import { Layout, Menu } from "antd";
import React from "react";
import styled from "@emotion/styled";
// import PromptComponentsForm from "../../form/PromptComponentForm";
import PromptComponent from "../../components/PromptComponent";

// import { useAppContext } from "@/context/appContext";
// import logoIcon from "@/style/images/logo-icon.svg";
// import logoText from "@/style/images/logo-text.svg";
// import history from "@/utils/history";

interface MenuItem {
  key: string;
  name: string;
  description: string;
}

const SIDEBAR_MENU: MenuItem[] = [
  { key: "/",name:"중등 난이도",description:"문제를 중등 난이도로 출제합니다"},
  { key: "/lead", name :"빈칸추론",description:"빈칸 추론 문제를 출제합니다"},
  { key: "/offer",  name:"과학",description:"과학을 주제로 출제합니다"},
];

const Button = styled.button<{ color: string }>`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.color};
  }
`;

export default function Navigation(): JSX.Element {
  return (
    <>
      <ul className="sidebar-wraper" style={{ width: "200px" }}>
        {SIDEBAR_MENU.map((menuItem) => (
          <PromptComponent
            name={menuItem.name}
            description={menuItem.description}
          ></PromptComponent>
          // <li>{menuItem.componet}</li>
        ))}
        {/* {SIDEBAR_MENU.map((menuItem) => (
          <Sidebar
            className={menuItem.key}
            style={{ color: menuItem.color || "white" }}
            componet = {menuItem.componet}
          />
        ))} */}


      </ul>
    </>
  );
}

interface MyButtonProps {
  className?: string;
  style?: {
    color: string;
  };
  componet?:string;
}

function Sidebar({ className, style,componet }: MyButtonProps): JSX.Element {
  const classNames = ["Layout", className];
  return (
    <Button className={classNames.join(" ")} color={style?.color || "white"}>
      {componet}
    </Button>
  );
}
