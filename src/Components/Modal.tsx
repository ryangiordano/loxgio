import React, { useState, useContext } from "react";
import { PixelCard } from "./PixelCard";

export interface ModalContextProps {
  openModal: (Component: JSX.Element) => void;
  closeModal: () => void;
}

const ModalContext = React.createContext({
  openModal: (modalComponent) => {},
  closeModal: () => {},
});

export const Modal = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTransitionOpen, setModalTransitionOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);
  const closeModal = () => {
    setModalOpen(false);
    setModalTransitionOpen(false);
  };
  return (
    <>
      <ModalContext.Provider
        value={{
          openModal: (modalComponent) => {
            setModalOpen(true);
            setModalTransitionOpen(true);
            setModalComponent(modalComponent);
          },
          closeModal,
        }}
      >
        <div
          style={{
            zIndex: 1000,
            position: "fixed",
            height: modalOpen ? "100vh" : 0,
            width: "100%",
            backgroundColor: "rgba(0,0,0,.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={(e) => {
            e.preventDefault();
            closeModal();
          }}
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {modalOpen && modalComponent ? modalComponent : <></>}
          </div>
        </div>
        {props.children}
      </ModalContext.Provider>
    </>
  );
};

export const ModalConsumer = (props) => {
  return (
    <ModalContext.Consumer>
      {(context) => {
        return props.children(context);
      }}
    </ModalContext.Consumer>
  );
};

export const ModalLayout = ({ header, style = {}, children }) => {
  const { closeModal } = useModal();
  return (
    <PixelCard
      className={"pixel-panel"}
      style={{ margin: "1rem", paddingBottom: "1rem", ...style }}
      header={
        <>
          <div
            className="d-flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <h1 style={{ fontSize: "1.5rem", padding: 0, margin: 0 }}>
              {header}
            </h1>
            <div className="d-flex" style={{ justifyContent: "flex-end" }}>
              <button
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onClick={() => {
                  closeModal();
                }}
              >
                <span style={{ fontSize: "30px" }}>&#xd7;</span>
              </button>
            </div>
          </div>
        </>
      }
    >
      {children}
    </PixelCard>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};

export const withModal = (Component) => (props) => (
  <ModalContext.Consumer>
    {(context) => (
      <Component {...props} {...context} context={{ ...props.context }} />
    )}
  </ModalContext.Consumer>
);
