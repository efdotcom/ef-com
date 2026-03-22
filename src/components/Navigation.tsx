import { useState, useEffect, useRef } from "react";
import { NavLink } from "./NavLink";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        setHidden(false);
        lastScrollY.current = window.scrollY;
        return;
      }
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: '/documentary', label: 'Documentary' },
    { to: '/news', label: 'News' },
    { to: '/sports', label: 'Sport' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`${styles.nav} ${hidden ? styles.navHidden : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <NavLink to="/" className={styles.logo}>
            ETHAN FIBIKAR
          </NavLink>

          {isMobile ? (
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          ) : (
            <div className={styles.navLinks}>
              {links.map(({ to, label }) => (
                <NavLink key={to} to={to} className={styles.navLink} activeClassName={styles.active}>
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {isMobile && menuOpen && (
          <div className={styles.mobileMenu}>
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} className={styles.mobileNavLink} onClick={closeMenu}>
                {label.toUpperCase()}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
