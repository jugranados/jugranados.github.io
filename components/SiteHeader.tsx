'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { home } from '@/content/home';

const { profile } = home;

// Ids match the homepage sections in app/page.tsx.
const sectionLinks = [
  { id: 'work', label: 'Work' },
  { id: 'approach', label: 'Approach' },
  { id: 'experience', label: 'Experience' },
];

const sectionIds = new Set(sectionLinks.map(({ id }) => id));

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isResume = pathname.startsWith('/resume');

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Highlight the homepage section nearest the top of the viewport. Read-only: never touches the hash.
  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }
    const sections = document.querySelectorAll<HTMLElement>('main > section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveSection(sectionIds.has(entry.target.id) ? entry.target.id : null);
        });
      },
      // A thin band just below the sticky header.
      { rootMargin: '-72px 0px -70% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;

    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const onHashChange = () => setMenuOpen(false);
    const desktop = window.matchMedia('(min-width: 801px)');
    const onBreakpoint = () => desktop.matches && setMenuOpen(false);

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('hashchange', onHashChange);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('hashchange', onHashChange);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [menuOpen]);

  // Close after any navigation, including route changes from the menu.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-header-inner page-shell">
        <Link href="/" className="brand">
          {profile.name}
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <nav className="primary-nav" aria-label="Primary">
          <ul id="site-menu" className="nav-list" data-open={menuOpen}>
            {sectionLinks.map(({ id, label }, index) => (
              <li key={id}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={`/#${id}`}
                  className="nav-link"
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-resume-item">
              <Link
                href="/resume"
                className="nav-resume"
                aria-current={isResume ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Résumé
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
