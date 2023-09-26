import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface MyComponentProps {
  children?: ReactNode;
  className?: string;
  style?: {
    minHeight: string;
  };
}

const StyledLayout = styled.div<{ minHeight: string }>`
  min-height: ${(props) => props.minHeight};
  display:flex;
  flex:1
`;

export default function Layout({
  children,
  className,
  style,
}: MyComponentProps): JSX.Element {
  const classNames = ["Layout", className];

  return (
    <StyledLayout
      className={classNames.join(" ")}
      minHeight={style?.minHeight || "initial"}
    >
      {children}
    </StyledLayout>
  );
}
