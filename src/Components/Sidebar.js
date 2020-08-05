import React, { useEffect } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Sidebar = ({ onClick, show }) => {

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.closest(".sidebar-wrapper")) return;
      onClick(false)
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  });

  return (
    <SidebarContainer show={show}>
      <SidebarWrapper show={show} className="sidebar-wrapper">
        <i className="fas fa-times" onClick={() => onClick(false)}></i>
        <Navigation />
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  pointer-events: none;
  transition: 0.3s ease;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

const SidebarWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30rem;
  background-color: var(--lighter);
  color: var(--main);
  padding: 5rem;
  z-index: 1001;
  pointer-events: all;
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.show ? 0 : 100)}%);

  i {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3rem;
    transform: translate(-100%, 50%);
    cursor: pointer;

    &:hover {
      color: var(--light);
    }
  }

  .navigation {
    display: inline-block;

    li {
      margin: 4rem 0;
      padding: 0;

      &::after {
        left: 0;
      }

      &:hover {
        &::after {
          width: 50%;
        }
      }
    }
  }
`;

export default Sidebar;
