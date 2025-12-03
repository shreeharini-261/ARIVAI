# ARIVAI Design Guidelines
## AI-Powered Menstrual Wellness Companion

### Design Approach
**Reference-Based**: Drawing inspiration from wellness apps like Flo, Clue, and Calm, combined with the sophisticated aesthetic of health-tracking apps like Whoop and Oura. The design emphasizes emotional intelligence, trustworthiness, and calming sophistication suitable for a sensitive health topic.

---

## Color System (User-Provided Palette)

**Foundation Colors:**
- **Espresso Black** (#281B1C): Main backgrounds, navigation bars
- **Dark Roast** (#4A3C3B): Cards, containers, panels
- **Rich Merlot** (#8B4B5B): Primary CTAs, key insights, active states
- **Soft Latte** (#EFE8E5): Primary text, headings, icons
- **Cabernet Stone** (#6D4D4F): Charts, secondary data points
- **Warm Truffle** (#7A6A63): Mood tracking, tertiary data

**Application:**
- Use Espresso Black for main app background
- Cards and panels use Dark Roast with subtle elevation
- Rich Merlot for all interactive elements and phase highlights
- Ensure WCAG AA contrast ratios between text and backgrounds

---

## Typography Hierarchy

**Font Families:**
- **Primary**: Inter (via Google Fonts) - Clean, readable, professional
- **Accent**: Playfair Display - Elegant serif for section headings only

**Scale:**
- **Hero/Page Titles**: 2.5rem (40px), Playfair Display, Semi-bold
- **Section Headers**: 1.75rem (28px), Inter, Semi-bold
- **Subsection Headers**: 1.25rem (20px), Inter, Medium
- **Body Text**: 1rem (16px), Inter, Regular
- **Secondary Text**: 0.875rem (14px), Inter, Regular
- **Small Text/Labels**: 0.75rem (12px), Inter, Medium

**Line Heights:**
- Headlines: 1.2
- Body text: 1.6
- Compact UI elements: 1.4

---

## Layout System

**Spacing Primitives** (Tailwind units):
- Primary scale: `2, 4, 6, 8, 12, 16`
- Component padding: `p-6` for cards, `p-8` for main sections
- Vertical rhythm: `space-y-6` for component groups
- Grid gaps: `gap-4` for tight layouts, `gap-6` for breathing room

**Container Widths:**
- Max content width: `max-w-7xl` (1280px)
- Main dashboard: `max-w-6xl` (1152px)
- Chat interface: `max-w-4xl` (896px)
- Sidebar: Fixed `w-64` (256px) on desktop

**Grid Patterns:**
- Dashboard: 3-column grid on desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Calendar: 7-column for days (`grid-cols-7`)
- Content tabs: Single column with max-width constraints

---

## Core Components

### Navigation
**Top Navigation Bar:**
- Fixed header, full-width
- Logo left-aligned
- Navigation links center (Dashboard, Recipes, Meditation, Education, Chat)
- User avatar and settings right-aligned
- Height: `h-16`
- Subtle bottom border for definition

**Tab Navigation:**
- Horizontal tabs with Rich Merlot underline for active state
- Icons + text labels
- Smooth transition animations (200ms)

### Menstrual Cycle Calendar
**Design Structure:**
- Monthly calendar grid (7×5 or 7×6 depending on month)
- Each day cell: `aspect-square` ratio
- Phase color-coding using provided palette:
  - Menstrual: Rich Merlot indicator
  - Follicular: Warm Truffle indicator
  - Ovulation: Cabernet Stone indicator
  - Luteal: Darker Warm Truffle
- Current day: Bold outline with Rich Merlot accent
- Day numbers: Soft Latte, bold on current day
- Symptom indicators: Small dots below date

**Phase Legend:**
- Compact horizontal strip above/below calendar
- Icons + phase names with color indicators
- Shows current phase prominently

### Dashboard Cards
**Card Structure:**
- Background: Dark Roast
- Rounded corners: `rounded-xl` (12px)
- Padding: `p-6`
- Subtle shadow for elevation
- Border: 1px solid slightly lighter than background

**Card Types:**
1. **Current Phase Card** (Featured):
   - Large, prominent placement
   - Phase icon, name, and day count
   - Brief phase description
   - Symptom input CTA

2. **Next Period Prediction**:
   - Countdown display
   - Predicted date range
   - Confidence indicator

3. **Recent Symptoms**:
   - List of logged symptoms with timestamps
   - Icons for symptom categories

4. **Quick Stats**:
   - Cycle length average
   - Regularity score
   - Streak tracking

### Chat Agent Interface
**Layout:**
- Full-height container with Espresso Black background
- Messages container: centered, `max-w-3xl`
- User messages: Right-aligned, Rich Merlot background
- Agent messages: Left-aligned, Dark Roast background
- Message bubbles: `rounded-2xl` with generous padding (`px-4 py-3`)
- Timestamp: Small, Warm Truffle color

**Input Area:**
- Fixed bottom position
- Text input with Dark Roast background
- Send button: Rich Merlot, icon-only
- Suggested quick replies as pill-shaped buttons above input

### Recipe Cards (Healthy Snacks Tab)
**Grid Layout:**
- 2-column on tablet, 3-column on desktop
- Card structure:
  - Image placeholder at top (4:3 aspect ratio)
  - Recipe name (bold)
  - Brief description (2 lines max)
  - Tags: Phase-specific, dietary tags
  - CTA: "View Recipe" button

**Filtering:**
- Top bar with dropdown filters (Phase, Dietary preferences, Cravings)
- Active filters shown as removable pills

### Meditation Videos Tab
**Layout:**
- Large featured video at top (16:9 aspect ratio)
- Grid of smaller video thumbnails below (2-3 columns)
- Each card shows:
  - YouTube thumbnail
  - Video title (2 lines max)
  - Channel name
  - Duration badge
  - Quick preview on hover

### Educational Content Tab
**Article List:**
- Clean, readable list layout
- Each article entry:
  - Icon representing topic category
  - Title
  - Brief excerpt (3 lines)
  - "Read more" link
  - Estimated reading time

**Categories:**
- Tabbed navigation: Pregnancy, PMS, Menopause, Sexual Wellness
- Active category highlighted with Rich Merlot

---

## Form Elements

**Input Fields:**
- Background: Slightly lighter than Espresso Black
- Border: 1px solid Dark Roast
- Focus state: Rich Merlot border
- Placeholder text: Warm Truffle
- Height: `h-12` for text inputs

**Buttons:**
- Primary: Rich Merlot background, Soft Latte text
- Secondary: Dark Roast background with Rich Merlot border
- Hover: Slight brightness increase
- Padding: `px-6 py-3`
- Border radius: `rounded-lg`

**Toggle Switches:**
- Active state: Rich Merlot
- Inactive: Warm Truffle

---

## Data Visualization

**Cycle Charts:**
- Line graphs for symptom tracking over time
- Use Cabernet Stone for primary data line
- Warm Truffle for secondary metrics
- Grid lines: Subtle, minimal contrast
- Axis labels: Small, Soft Latte

**Progress Indicators:**
- Circular progress for cycle completion
- Rich Merlot for filled portion
- Dark Roast for unfilled

---

## Responsive Behavior

**Desktop (1024px+):**
- Sidebar navigation visible
- Multi-column layouts active
- Calendar shows full month view

**Tablet (768px-1023px):**
- Collapse to 2-column layouts
- Condensed navigation

**Mobile (<768px):**
- Single column throughout
- Bottom navigation bar
- Calendar: Swipeable week view option
- Hamburger menu for main navigation

---

## Animation & Interactions

**Minimal, Purposeful Motion:**
- Tab transitions: 200ms ease
- Card hover: Subtle lift (2px translate-y)
- Button press: Slight scale (0.98)
- Phase transitions in calendar: Gentle fade (300ms)
- NO distracting animations during data entry

---

## Accessibility

- Maintain 4.5:1 contrast ratio minimum for all text
- Focus indicators: 2px Rich Merlot outline
- Keyboard navigation for all interactive elements
- ARIA labels for icon-only buttons
- Screen reader announcements for phase changes

---

## Images

**Hero Section (Dashboard):**
- Optional subtle abstract background pattern suggesting natural cycles (waves, phases)
- If used: Low opacity overlay to maintain text readability
- Fallback: Solid Espresso Black background

**Recipe Images:**
- Use actual food photography
- Maintain consistent 4:3 aspect ratio
- Placeholder: Subtle pattern with utensil icon

**No other decorative images needed** - Focus on data clarity and functional UI elements.