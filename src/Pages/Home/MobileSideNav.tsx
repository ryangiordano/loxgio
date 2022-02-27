import { AnimatePresence, motion } from "framer-motion";
import debounce from "lodash/debounce";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { theme } from "Styles/theme";

function MobileSideNavButton({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className="pixel-panel"
      style={{
        padding: theme.spacing.giant,
        display: "block",
        width: "20%",
        backgroundColor: active ? theme.backgroundColor.green : undefined,
      }}
    >
      {children}
    </div>
  );
}

const MobileSideNavItem = ({ to, text, icon }) => {
  const l = useLocation();
  const active = l.pathname.includes(to);
  return (
    <MobileSideNavButton active={active}>
      <NavLink
        to={to}
        style={{
          color: theme.backgroundColor.white,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          aria-label={text}
          src={`/images/${icon}`}
          style={{ height: "25px", marginLeft: "auto", marginRight: "auto" }}
        />
      </NavLink>
    </MobileSideNavButton>
  );
};

/** Hook for setting the side nav extended of truncated based on scroll position
 * If the user scrolls to the bottom of the content, the nav automatically extends
 * If they use clicks the single button in truncated state, extend the nav.
 */
function useMobileSideNav() {
  const [extended, setExtended] = React.useState(false);

  const onScroll = React.useCallback(
    debounce(
      () =>
        setExtended(
          window.innerHeight + window.scrollY >= document.body.offsetHeight
        ),
      50
    ),
    [setExtended]
  );

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { extended, setExtended };
}

export default function MobileSideNav({
  navItems,
}: {
  navItems: { text: string; to: string; icon: string }[];
}) {
  const { extended, setExtended } = useMobileSideNav();
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      {extended ? (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: {
              opacity: 1,
              x: 0,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="show"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {navItems.map((n) => {
            return (
              <MobileSideNavItem
                key={n.text}
                to={n.to}
                text={n.text}
                icon={n.icon}
              />
            );
          })}
          <MobileSideNavItem
            to={"/title"}
            text={"Title Screen"}
            icon={"home.png"}
          />
        </motion.div>
      ) : (
        <MobileSideNavButton active={false}>
          <button
            className="button-reset"
            type="button"
            onClick={() => {
              setExtended(!extended);
            }}
          >
            <img
              aria-label={"Extend menu"}
              src={`/images/catshape-daruma-nav.png`}
              style={{
                height: "25px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </button>
        </MobileSideNavButton>
      )}
    </nav>
  );
}
