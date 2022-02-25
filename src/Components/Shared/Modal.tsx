import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useContext } from "react";
import { theme } from "Styles/theme";
import { PixelCard } from "./PixelCard";
import { isMobile } from "react-device-detect";

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
  const [modalComponent, setModalComponent] = useState(null);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <ModalContext.Provider
        value={{
          openModal: (modalComponent) => {
            setModalOpen(true);
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
          {modalOpen && (
            <AnimatePresence>
              {modalOpen && (
                <motion.div
                  key="modal"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  {modalComponent ? modalComponent : <></>}
                </motion.div>
              )}
            </AnimatePresence>
          )}
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
      style={{
        margin: theme.spacing.large,
        paddingBottom: theme.spacing.large,
        ...style,
      }}
      header={
        <>
          <div
            className="d-flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <h1
              style={{
                fontSize: isMobile
                  ? theme.fontSize.medium
                  : theme.fontSize.large,
                padding: 0,
                margin: 0,
                color: theme.backgroundColor.white,
              }}
            >
              {header}
            </h1>
            <div className="d-flex" style={{ justifyContent: "flex-end" }}>
              <button
                style={{
                  border: "none",
                  color: theme.backgroundColor.white,
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

export const withModal = (Component) => (props) =>
  (
    <ModalContext.Consumer>
      {(context) => (
        <Component {...props} {...context} context={{ ...props.context }} />
      )}
    </ModalContext.Consumer>
  );
