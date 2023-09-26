// import { Layout, Menu } from "antd";
import React from "react";
import styled from "@emotion/styled";

// import { useAppContext } from "@/context/appContext";
// import logoIcon from "@/style/images/logo-icon.svg";
// import logoText from "@/style/images/logo-text.svg";
// import history from "@/utils/history";

interface MenuItem {
  key: string;
  icon?: string;
  color?: string;
}

const SIDEBAR_MENU: MenuItem[] = [
  { key: "/", icon: "", color: "" },
  { key: "/lead", icon: "", color: "blue" },
  { key: "/offer", icon: "", color: "red" },
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
      <div className="sidebar-wraper" style={{ width: "200px" }}>
        {SIDEBAR_MENU.map((menuItem) => (
          <Sidebar
            className={menuItem.key}
            style={{ color: menuItem.color || "white" }}
          />
        ))}
      </div>
    </>
  );
}

interface MyButtonProps {
  className?: string;
  style?: {
    color: string;
  };
}

function Sidebar({ className, style }: MyButtonProps): JSX.Element {
  const classNames = ["Layout", className];
  return (
    <Button className={classNames.join(" ")} color={style?.color || "white"}>
      Componet adding button.
    </Button>
  );
}
