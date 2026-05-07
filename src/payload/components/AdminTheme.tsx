'use client'

import React from 'react'

const css = `
  /* ── HackifyTech Admin Theme ── */

  /* 1. Brand green — replaces Payload's default teal/blue-green */
  :root {
    --color-success-50:   hsl(160 50% 97%);
    --color-success-100:  hsl(160 65% 92%);
    --color-success-150:  hsl(160 68% 86%);
    --color-success-200:  hsl(160 70% 77%);
    --color-success-250:  hsl(160 72% 66%);
    --color-success-300:  hsl(160 73% 55%);
    --color-success-350:  hsl(160 74% 47%);
    --color-success-400:  hsl(160 74% 44%);
    --color-success-450:  hsl(160 74% 41%);
    --color-success-500:  hsl(160 74% 37%);
    --color-success-550:  hsl(160 78% 32%);
    --color-success-600:  hsl(160 80% 27%);
    --color-success-650:  hsl(160 82% 22%);
    --color-success-700:  hsl(160 84% 17%);
    --color-success-750:  hsl(160 84% 12%);
    --color-success-800:  hsl(160 84% 9%);
    --color-success-850:  hsl(160 84% 6%);
    --color-success-900:  hsl(160 84% 4%);
    --color-success-950:  hsl(160 84% 2%);
    --color-success-1000: hsl(160 84% 1%);

    /* 2. Font: Inter for body text */
    --font-body: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  /* 3. Nav sidebar: always dark navy regardless of light/dark preference */
  aside.nav,
  .nav {
    background-color: hsl(220 55% 12%);
    border-right-color: hsl(220 40% 20%) !important;
    /*
      Scope dark-mode-style elevation vars inside .nav so all child
      components (nav links, group labels, separators) stay readable
      on the dark background without extra per-element overrides.
    */
    --theme-text:           hsl(220 10% 90%);
    --theme-elevation-0:    hsl(220 55% 12%);
    --theme-elevation-50:   hsl(220 50% 14%);
    --theme-elevation-100:  hsl(220 46% 18%);
    --theme-elevation-150:  hsl(220 43% 21%);
    --theme-elevation-200:  hsl(220 40% 24%);
    --theme-elevation-250:  hsl(220 37% 28%);
    --theme-elevation-300:  hsl(220 34% 33%);
    --theme-elevation-350:  hsl(220 28% 40%);
    --theme-elevation-400:  hsl(220 22% 48%);
    --theme-elevation-500:  hsl(220 15% 58%);
    --theme-elevation-600:  hsl(220 10% 68%);
    --theme-elevation-700:  hsl(220 8%  76%);
    --theme-elevation-800:  hsl(220 6%  83%);
    --theme-elevation-900:  hsl(220 5%  91%);
    --theme-elevation-1000: hsl(0   0%  98%);
  }

  /* Active indicator bar on current nav link */
  .nav__link-indicator {
    background: hsl(160 74% 42%) !important;
  }

  /* 4. App header: dark band above content area */
  header.app-header {
    background-color: hsl(220 45% 10%);
    border-bottom: 1px solid hsl(220 38% 17%);
    --theme-text:           hsl(220 10% 85%);
    --theme-elevation-0:    hsl(220 45% 10%);
    --theme-elevation-100:  hsl(220 35% 17%);
    --theme-elevation-1000: hsl(0   0%  95%);
  }

  /* The bg overlay div — make it always visible for our dark header */
  .app-header__bg {
    background-color: hsl(220 45% 10%);
    opacity: 1 !important;
  }

  /* 5. Space Grotesk for headings */
  h1, h2, h3, h4, h5 {
    font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  }

  /* ── A. Sidebar nav group section headers ── */
  .nav__group-label {
    font-size: 10px !important;
    font-weight: 700 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    color: hsl(220 10% 38%) !important;
    padding: 16px 20px 5px !important;
    border-top: 1px solid hsl(220 38% 18%) !important;
    margin-top: 4px;
  }
  .nav__groups > .nav__group:first-child > .nav__group-label {
    border-top: none !important;
    padding-top: 8px !important;
  }

  /* ── B. Nav link hover & active states ── */
  .nav__link {
    border-radius: 8px !important;
    margin: 1px 8px !important;
    transition: background-color 150ms ease, color 150ms ease !important;
  }
  .nav__link:hover {
    background-color: hsl(220 50% 18%) !important;
  }
  .nav__link--active .nav__link-label {
    color: hsl(160 74% 65%) !important;
  }
  .nav__link-indicator {
    background: hsl(160 74% 42%) !important;
    border-radius: 0 3px 3px 0 !important;
  }

  /* ── C. Dashboard cards (Payload default grid) ── */
  .dashboard__card {
    border-radius: 12px !important;
    border: 1px solid hsl(220 38% 20%) !important;
    transition: border-color 200ms, transform 200ms, box-shadow 200ms !important;
    box-shadow: 0 2px 6px hsl(220 55% 5% / 0.3) !important;
  }
  .dashboard__card:hover {
    border-color: hsl(160 74% 42%) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px hsl(160 74% 42% / 0.12) !important;
  }
  .dashboard__card-title {
    font-family: 'Space Grotesk', 'Inter', sans-serif !important;
    font-weight: 600 !important;
  }
  .dashboard__icon-wrap {
    background: hsl(160 74% 52% / 0.12) !important;
    border-radius: 10px !important;
    color: hsl(160 74% 52%) !important;
  }

  /* ── D. Table / list views ── */
  .table-wrap {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--theme-elevation-100);
  }
  .table thead tr {
    background: var(--theme-elevation-50);
  }
  .table thead .sort-column__label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 700;
  }
  .table .row:hover td,
  .table .row:hover th {
    background: var(--theme-elevation-50) !important;
  }
  .cell { font-size: 13.5px; }
  .list-header h1,
  .collection-list h1 {
    font-family: 'Space Grotesk', sans-serif;
  }

  /* ── E. Pill / badge color coding ── */
  .pill {
    border-radius: 20px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    letter-spacing: 0.04em !important;
  }
  .pill--style-light[title="Active"],
  .pill--style-light[title="Published"],
  .pill--style-light[title="Present"],
  .pill--style-light[title="Accepted"] {
    background: hsl(160 74% 42% / 0.15) !important;
    color: hsl(160 74% 60%) !important;
  }
  .pill--style-light[title="Upcoming"],
  .pill--style-light[title="New"],
  .pill--style-light[title="Submitted"] {
    background: hsl(38 92% 50% / 0.15) !important;
    color: hsl(38 92% 60%) !important;
  }
  .pill--style-light[title="Cancelled"],
  .pill--style-light[title="Lost"],
  .pill--style-light[title="Absent"] {
    background: hsl(0 74% 50% / 0.12) !important;
    color: hsl(0 74% 65%) !important;
  }

  /* ── F. Document edit forms ── */
  .field-label {
    font-size: 12px !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
  }
  .text-field__input:focus,
  .textarea-field__textarea:focus,
  .date-field__input:focus,
  .number-field__input:focus {
    border-color: hsl(160 74% 42%) !important;
    box-shadow: 0 0 0 3px hsl(160 74% 42% / 0.18) !important;
    outline: none !important;
  }
  .doc-header {
    border-bottom: 1px solid var(--theme-elevation-100);
  }
  .doc-header__title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-weight: 700 !important;
  }

  /* ── G. Buttons ── */
  .btn--style-primary {
    background: hsl(160 74% 40%) !important;
    border-color: hsl(160 74% 40%) !important;
    color: hsl(220 55% 8%) !important;
    font-weight: 700 !important;
    border-radius: 8px !important;
    transition: background 150ms, transform 100ms !important;
  }
  .btn--style-primary:hover {
    background: hsl(160 74% 48%) !important;
    transform: translateY(-1px) !important;
  }
  .btn--style-secondary {
    border-radius: 8px !important;
  }

  /* ── H. Sidebar scrollbar ── */
  .nav__scroll::-webkit-scrollbar { width: 4px; }
  .nav__scroll::-webkit-scrollbar-track { background: transparent; }
  .nav__scroll::-webkit-scrollbar-thumb {
    background: hsl(220 40% 25%);
    border-radius: 4px;
  }
  .nav__scroll::-webkit-scrollbar-thumb:hover {
    background: hsl(220 34% 32%);
  }

  /* ── I. Sidebar flex layout for AfterNavLinks sticky bottom ── */
  aside.nav { display: flex !important; flex-direction: column !important; }
  .nav__scroll { flex: 1 !important; }

  /* ── J. List view layout ── */
  .list-header { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--theme-elevation-100); }
  .list-header__title { font-family: 'Space Grotesk', sans-serif !important; font-size: 24px !important; font-weight: 700 !important; }
  .list-controls { background: var(--theme-elevation-50); border: 1px solid var(--theme-elevation-100); border-radius: 10px; padding: 12px 16px; margin-bottom: 20px; }
  .search-filter__input input:focus { border-color: hsl(160 74% 42%) !important; box-shadow: 0 0 0 3px hsl(160 74% 42% / 0.18) !important; }
  .list-header__actions .btn { border-radius: 8px !important; }

  /* ── K. Table rows & cells ── */
  .table table { border-collapse: separate; border-spacing: 0; }
  .table thead { position: sticky; top: 0; z-index: 1; }
  .table thead th { font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em; font-weight: 700; border-bottom: 2px solid var(--theme-elevation-100); padding: 10px 14px; }
  .table tbody tr:nth-child(even) td { background: var(--theme-elevation-50); }
  .table tbody tr:hover td { background: hsl(160 74% 42% / 0.06) !important; }
  .table td { vertical-align: middle !important; padding: 10px 14px; }
  .table td:first-child a { font-weight: 600; }
  .cell-link { color: hsl(160 74% 52%) !important; text-decoration: none !important; }
  .cell-link:hover { text-decoration: underline !important; }

  /* ── L. Sort columns ── */
  .sort-column__label { font-size: 11px !important; font-weight: 700 !important; letter-spacing: 0.07em !important; text-transform: uppercase !important; }
  .sort-column__button { opacity: 0.7; transition: opacity 150ms, color 150ms; }
  .sort-column__button:hover { opacity: 1; }

  /* ── M. Pagination ── */
  .paginator { display: flex; align-items: center; gap: 4px; margin-top: 16px; }
  .paginator__page { border-radius: 6px; min-width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; transition: background 150ms; font-size: 13px; }
  .paginator__page:hover { background: var(--theme-elevation-100); }
  .paginator__page--is-current { background: hsl(160 74% 42%) !important; color: hsl(220 55% 8%) !important; font-weight: 700 !important; }
  .per-page__button { border-radius: 6px; padding: 4px 8px; font-size: 12px; transition: background 150ms; }
  .per-page__button--active, .per-page__button[aria-pressed="true"] { background: hsl(160 74% 42% / 0.15); color: hsl(160 74% 52%); }

  /* ── N. Pills - all statuses ── */
  /* Positive / Active */
  .pill[title="Active"], .pill[title="active"],
  .pill[title="Present"], .pill[title="present"],
  .pill[title="Published"],
  .pill[title="Enrolled"],
  .pill[title="Accepted"],
  .pill[title="Interested"],
  .pill[title="Completed"], .pill[title="completed"],
  .pill[title="Graded"] {
    background: hsl(160 74% 42% / 0.15) !important;
    color: hsl(160 74% 62%) !important;
    border: 1px solid hsl(160 74% 42% / 0.25) !important;
  }
  /* Pending / In-progress */
  .pill[title="Upcoming"], .pill[title="upcoming"],
  .pill[title="New"], .pill[title="new"],
  .pill[title="Contacted"],
  .pill[title="Submitted"],
  .pill[title="Late"], .pill[title="late"],
  .pill[title="Under Review"],
  .pill[title="Pending"] {
    background: hsl(38 92% 50% / 0.15) !important;
    color: hsl(38 92% 62%) !important;
    border: 1px solid hsl(38 92% 50% / 0.25) !important;
  }
  /* Negative / Cancelled */
  .pill[title="Cancelled"], .pill[title="cancelled"],
  .pill[title="Lost"], .pill[title="lost"],
  .pill[title="Absent"], .pill[title="absent"],
  .pill[title="Not Interested"] {
    background: hsl(0 74% 50% / 0.12) !important;
    color: hsl(0 74% 65%) !important;
    border: 1px solid hsl(0 74% 50% / 0.2) !important;
  }
  /* Roles */
  .pill[title="Super Admin"], .pill[title="super-admin"] {
    background: hsl(280 60% 55% / 0.15) !important; color: hsl(280 60% 70%) !important; border: 1px solid hsl(280 60% 55% / 0.25) !important;
  }
  .pill[title="Admin"], .pill[title="admin"] {
    background: hsl(210 70% 55% / 0.15) !important; color: hsl(210 70% 68%) !important; border: 1px solid hsl(210 70% 55% / 0.25) !important;
  }
  .pill[title="Trainer"], .pill[title="trainer"] {
    background: hsl(160 74% 42% / 0.15) !important; color: hsl(160 74% 60%) !important; border: 1px solid hsl(160 74% 42% / 0.25) !important;
  }
  .pill[title="Student"], .pill[title="student"] {
    background: hsl(38 92% 50% / 0.15) !important; color: hsl(38 92% 62%) !important; border: 1px solid hsl(38 92% 50% / 0.25) !important;
  }
  .pill[title="Placement"], .pill[title="placement"] {
    background: hsl(200 80% 50% / 0.15) !important; color: hsl(200 80% 62%) !important; border: 1px solid hsl(200 80% 50% / 0.25) !important;
  }
  /* Modes */
  .pill[title="Online"], .pill[title="online"], .pill[title="Hybrid"], .pill[title="hybrid"] {
    background: hsl(200 70% 45% / 0.15) !important; color: hsl(200 70% 62%) !important; border: 1px solid hsl(200 70% 45% / 0.25) !important;
  }
  .pill[title="Offline"], .pill[title="offline"] {
    background: hsl(25 80% 50% / 0.15) !important; color: hsl(25 80% 64%) !important; border: 1px solid hsl(25 80% 50% / 0.25) !important;
  }
  .pill[title="Self-Paced"], .pill[title="self-paced"] {
    background: hsl(260 60% 55% / 0.15) !important; color: hsl(260 60% 70%) !important; border: 1px solid hsl(260 60% 55% / 0.25) !important;
  }
  /* Course levels */
  .pill[title="Beginner"], .pill[title="beginner"] {
    background: hsl(160 74% 42% / 0.15) !important; color: hsl(160 74% 60%) !important; border: 1px solid hsl(160 74% 42% / 0.25) !important;
  }
  .pill[title="Intermediate"], .pill[title="intermediate"] {
    background: hsl(38 92% 50% / 0.15) !important; color: hsl(38 92% 62%) !important; border: 1px solid hsl(38 92% 50% / 0.25) !important;
  }
  .pill[title="Advanced"], .pill[title="advanced"] {
    background: hsl(280 60% 55% / 0.15) !important; color: hsl(280 60% 70%) !important; border: 1px solid hsl(280 60% 55% / 0.25) !important;
  }
  /* Payload built-in pill styles */
  .pill--style-success { background: hsl(160 74% 42% / 0.15) !important; color: hsl(160 74% 62%) !important; border: 1px solid hsl(160 74% 42% / 0.25) !important; }
  .pill--style-warning { background: hsl(38 92% 50% / 0.15) !important; color: hsl(38 92% 62%) !important; border: 1px solid hsl(38 92% 50% / 0.25) !important; }
  .pill--style-error { background: hsl(0 74% 50% / 0.12) !important; color: hsl(0 74% 65%) !important; border: 1px solid hsl(0 74% 50% / 0.2) !important; }

  /* ── O. Document edit - controls bar and breadcrumb ── */
  .doc-controls { background: hsl(220 48% 13% / 0.95) !important; backdrop-filter: blur(12px); border-bottom: 1px solid hsl(220 38% 18%) !important; }
  .doc-controls__label { font-size: 10px !important; text-transform: uppercase !important; letter-spacing: 0.06em !important; opacity: 0.55; }
  .doc-controls__value { font-weight: 600 !important; font-size: 13px !important; }
  .step-nav { font-family: 'Space Grotesk', sans-serif; font-size: 13px; }
  .step-nav a { color: hsl(160 74% 52%) !important; text-decoration: none; }
  .step-nav a:hover { text-decoration: underline; }
  .step-nav__divider { opacity: 0.4; }

  /* ── P. Document fields: groups, sidebar, tabs ── */
  .document-fields__sidebar { background: hsl(220 55% 11%) !important; }
  .document-fields__sidebar-wrap { border-left: 1px solid hsl(220 40% 20%) !important; }
  .group-field__header { border-bottom: 1px solid var(--theme-elevation-100); padding-bottom: 10px; margin-bottom: 16px; }
  .group-field__title { font-family: 'Space Grotesk', sans-serif !important; font-size: 14px !important; font-weight: 700 !important; color: hsl(160 74% 52%); }
  .tabs-field__tab-button { font-weight: 500; opacity: 0.6; transition: opacity 150ms, color 150ms; border-bottom: 2px solid transparent; padding-bottom: 10px; }
  .tabs-field__tab-button:hover { opacity: 0.85; }
  .tabs-field__tab-button--active { opacity: 1 !important; color: hsl(160 74% 52%) !important; border-bottom-color: hsl(160 74% 42%) !important; }
  .tabs-field__content-wrap { padding-top: 24px; }

  /* ── Q. Collapsible and array field rows ── */
  .collapsible { border-radius: 8px !important; border: 1px solid var(--theme-elevation-100) !important; overflow: hidden; margin-bottom: 8px; }
  .collapsible__toggle-wrap { background: var(--theme-elevation-50); transition: background 150ms; }
  .collapsible__toggle-wrap:hover { background: var(--theme-elevation-100) !important; }
  .collapsible__content { border-top: 1px solid var(--theme-elevation-100); padding: 16px !important; }
  .array-field__header { border-bottom: 1px solid var(--theme-elevation-100); padding-bottom: 12px; margin-bottom: 12px; }
  .array-field__draggable-rows { display: flex; flex-direction: column; gap: 8px; }
  .array-field__add-row { border-radius: 8px !important; border-style: dashed !important; margin-top: 8px; }

  /* ── R. Form fields ── */
  .rs__control { border-radius: 6px !important; transition: border-color 150ms, box-shadow 150ms !important; }
  .rs__control--is-focused { border-color: hsl(160 74% 42%) !important; box-shadow: 0 0 0 3px hsl(160 74% 42% / 0.18) !important; }
  .rs__menu { border-radius: 8px !important; border: 1px solid var(--theme-elevation-150) !important; box-shadow: 0 8px 32px hsl(220 55% 5% / 0.5) !important; overflow: hidden; }
  .rs__option { border-radius: 6px; margin: 2px 4px; width: calc(100% - 8px) !important; }
  .rs__option--is-focused { background: var(--theme-elevation-100) !important; }
  .rs__option--is-selected { background: hsl(160 74% 42% / 0.2) !important; color: hsl(160 74% 62%) !important; }
  .rs__multi-value { background: hsl(160 74% 42% / 0.15) !important; border-radius: 4px !important; color: hsl(160 74% 58%) !important; }
  .rs__multi-value__label { color: hsl(160 74% 58%) !important; }
  .checkbox-input__input { border-radius: 4px !important; }
  .checkbox-input--checked .checkbox-input__input { background: hsl(160 74% 42%) !important; border-color: hsl(160 74% 42%) !important; }
  .upload__dropzoneContent { border: 1px dashed var(--theme-elevation-200) !important; border-radius: 8px !important; transition: border-color 150ms; }
  .upload__dropzoneContent:hover { border-color: hsl(160 74% 42% / 0.5) !important; }

  /* ── S. Popup / Drawer / Sticky toolbar ── */
  .popup__content { background: hsl(220 52% 14%) !important; border: 1px solid hsl(220 38% 22%) !important; border-radius: 8px !important; box-shadow: 0 16px 48px hsl(220 55% 5% / 0.6) !important; }
  .popup__content .btn:hover { background: hsl(220 46% 20%) !important; border-radius: 6px !important; }
  .drawer__content { background: hsl(220 52% 12%) !important; border-left: 1px solid hsl(220 38% 20%) !important; }
  .drawer__header { border-bottom: 1px solid hsl(220 38% 18%) !important; padding: 20px 24px !important; }
  .drawer__header__title { font-family: 'Space Grotesk', sans-serif !important; font-weight: 700 !important; }
  .sticky-toolbar { background: hsl(220 52% 14%) !important; border: 1px solid hsl(220 38% 22%) !important; border-radius: 10px !important; box-shadow: 0 8px 24px hsl(220 55% 5% / 0.5) !important; }

  /* ── Tile hover state for dashboard quick nav ── */
  .htadmin-tile { transition: all 200ms; }
  .htadmin-tile:hover { border-color: hsl(160 74% 42% / 0.5) !important; transform: translateY(-2px); box-shadow: 0 6px 20px hsl(160 74% 42% / 0.1) !important; }
`

export function AdminTheme({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      />
      <style>{css}</style>
      {children}
    </>
  )
}
