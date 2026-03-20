# Laurieville Farms: Agent Guidelines

## 1. Project Identity
- **Brand:** Laurieville Farms (Michigan-based Apiary & Woodworking).
- **Vibe:** Clean, high-end, trustworthy, "Bee Lovely Botanicals" inspired.
- **Primary Domain:** jeff-hutchinson.github.io

## 2. Technical Stack (Jules - Senior Web Dev)
- **Framework:** Astro (latest version).
- **Language:** TypeScript (Strict).
- **CSS:** Mobile-first, Vanilla CSS (scoped within components).
- **Deployment:** GitHub Actions via `.github/workflows/deploy.yml`.

## 3. Coding Standards & Constraints
- **Variable Naming:** Do NOT change existing variable or class names when updating code.
- **File Structure:** - Layouts in `src/layouts/`
  - Components in `src/components/`
  - Content in `src/content/`
- **Branching Protocol:**
  - Never push directly to `main`.
  - Always work on `feature/` branches.
  - Submit Pull Requests (PRs) to the `develop` branch.

## 4. UI/UX Requirements
- **Color Palette:** - Background: Cream (#fffdf7)
  - Accents: Honey Gold (#f9a825)
  - Text/Icons: Charcoal (#212121)
- **Typography:** Serif for headers; Sans-serif for body.
- **Navigation:** Must feature a "Products" dropdown with exactly these categories:
  1. Honey & Sweets
  2. Beeswax & Candles
  3. Beekeeping Supplies
- **Contact Info:** Use `info@laurievillefarms.com` and `(810) 47-HONEY`.
- **Mobile UI:** Mobile pages should never have horizontal scrolling.

## 5. Interaction Rules
- Always check `MISSION.md` for specific task objectives before starting.
- Inform the user if a better technical solution (e.g., a specific joint in woodworking or a specific CSS grid layout) exists before proceeding.