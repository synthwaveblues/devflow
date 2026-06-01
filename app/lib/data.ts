// TYPES
export interface Person {
  id: string;
  name: string;
  tint: string; //hex color for the user avatar background
}

export interface Priority {
  label: string;
  color: string;
}

export interface Project {
  id: string;
  name: string;
  glyph: string; // symbol of the project
  hint: string; // subtitle
}

export interface Column {
  id: string
  title: string
  color: string
}

export interface Issue {
  id: string
  project: string      // foreign key → Project.id
  title: string
  label: string        // foreign key → label key in LABELS
  status: string       // foreign key → Column.id
  assignee: string     // foreign key → Person.id
  createdAt: string
  priority: string     // foreign key → priority key in PRIORITIES
  desc: string
}

// An object whose keys are strings and whose values are Person objects.
export const PEOPLE: Record<string, Person> = {
  AK: { id: 'AK', name: 'Anton Kovač',   tint: '#6366f1' },
  MR: { id: 'MR', name: 'Maya Reyes',    tint: '#0ea5e9' },
  JT: { id: 'JT', name: 'Jordan Tran',   tint: '#10b981' },
  PS: { id: 'PS', name: 'Priya Sharma',  tint: '#f59e0b' },
  DN: { id: 'DN', name: 'Dmitri Novak',  tint: '#ec4899' },
  LC: { id: 'LC', name: 'Lena Chen',     tint: '#a855f7' },
}

// Labels are just a color per name — simple key→value map
export const LABELS: Record<string, string> = {
  Backend:  '#38bdf8',
  Frontend: '#a855f7',
  Auth:     '#f43f5e',
  API:      '#34d399',
  Bug:      '#f87171',
  Infra:    '#fbbf24',
  Design:   '#f472b6',
  Perf:     '#22d3ee',
}

export const PROJECTS: Project[] = [
  { id: 'alpha',  name: 'Alpha Workspace', glyph: '❖', hint: 'Core platform' },
  { id: 'mobile', name: 'Mobile App',      glyph: '▲', hint: 'iOS + Android' },
  { id: 'growth', name: 'Growth',          glyph: '◗', hint: 'Experiments'   },
]

// ─── Columns ──────────────────────────────────────────────────

export const COLUMNS: Column[] = [
  { id: 'todo',     title: 'Todo',        color: 'var(--st-todo)'     },
  { id: 'progress', title: 'In Progress', color: 'var(--st-progress)' },
  { id: 'done',     title: 'Done',        color: 'var(--st-done)'     },
]


export const PRIORITIES: Record<string, Priority> = {
  urgent: { label: 'Urgent', color: '#f87171' },
  high:   { label: 'High',   color: '#fb923c' },
  medium: { label: 'Medium', color: '#a1a1aa' },
  low:    { label: 'Low',    color: '#52525b' },
}

// TEMP DATA
const DESC_JWT = `Our session layer currently trusts the raw token without verifying signature expiry on refresh. We need middleware that:

- Validates the **HS256** signature against the rotating secret
- Rejects tokens with a skewed \`exp\` (allow 30s clock drift)
- Surfaces a typed \`401\` with a machine-readable error code

Acceptance: all auth integration tests green, p95 verify time < \`2ms\`.`

const DESC_RATE = `Public API has no per-key throttle, so a single noisy client can saturate the pool. Implement a sliding-window limiter backed by Redis.

- Default: 600 req / min / key
- Return \`429\` with \`Retry-After\`
- Emit a metric so we can chart abuse`

const DESC_MODAL = `The settings modal does not trap focus, so tabbing escapes to the page behind it. Screen-reader users get lost. Wire up a focus trap and restore focus to the trigger on close.`

// ─── Issues (mock data — later replaced by DB queries) ─────────

export const INITIAL_ISSUES: Issue[] = [
  // Alpha Workspace
  { project: 'alpha', id: 'DF-104', title: 'Implement secure JWT validation middleware',    label: 'Auth',     status: 'progress', assignee: 'AK', createdAt: '2026-05-28', priority: 'high',   desc: DESC_JWT   },
  { project: 'alpha', id: 'DF-098', title: 'Add sliding-window rate limiting to public API', label: 'API',      status: 'todo',     assignee: 'MR', createdAt: '2026-05-30', priority: 'high',   desc: DESC_RATE  },
  { project: 'alpha', id: 'DF-112', title: "Settings modal doesn't trap keyboard focus",     label: 'Bug',      status: 'todo',     assignee: 'JT', createdAt: '2026-05-31', priority: 'medium', desc: DESC_MODAL },
  { project: 'alpha', id: 'DF-087', title: 'Paginate the activity feed endpoint',            label: 'API',      status: 'todo',     assignee: 'PS', createdAt: '2026-05-26', priority: 'medium', desc: 'Cursor-based pagination for `/v2/activity`.' },
  { project: 'alpha', id: 'DF-120', title: 'Dark-mode flash on first paint',                 label: 'Frontend', status: 'todo',     assignee: 'LC', createdAt: '2026-06-01', priority: 'low',    desc: 'Theme is read after hydration, causing a white flash.' },
  { project: 'alpha', id: 'DF-101', title: 'Webhook delivery retries drop after one failure', label: 'Backend', status: 'progress', assignee: 'DN', createdAt: '2026-05-27', priority: 'urgent', desc: "Retry queue isn't re-enqueuing on transient 5xx." },
  { project: 'alpha', id: 'DF-093', title: 'Skeleton loaders for the dashboard cards',       label: 'Frontend', status: 'progress', assignee: 'LC', createdAt: '2026-05-25', priority: 'low',    desc: 'Replace spinner with content-shaped skeletons.' },
  { project: 'alpha', id: 'DF-076', title: 'Migrate session store from cookie to Redis',     label: 'Infra',    status: 'done',     assignee: 'AK', createdAt: '2026-05-20', priority: 'high',   desc: 'Done — sessions now in Redis with 14-day TTL.' },
  { project: 'alpha', id: 'DF-081', title: 'Fix N+1 query on the projects list',             label: 'Perf',     status: 'done',     assignee: 'MR', createdAt: '2026-05-22', priority: 'medium', desc: 'Batched the membership lookup. p95 down from 380ms → 60ms.' },
  { project: 'alpha', id: 'DF-069', title: 'Empty-state illustration for new boards',        label: 'Design',   status: 'done',     assignee: 'PS', createdAt: '2026-05-18', priority: 'low',    desc: 'Shipped the friendly empty board state.' },

  // Mobile App
  { project: 'mobile', id: 'MOB-31', title: 'Biometric unlock flow for iOS',                 label: 'Auth',     status: 'progress', assignee: 'JT', createdAt: '2026-05-29', priority: 'high',   desc: 'Face ID / Touch ID gate. Fall back to PIN.' },
  { project: 'mobile', id: 'MOB-44', title: 'Push-notification token refresh on Android 14', label: 'Bug',      status: 'todo',     assignee: 'DN', createdAt: '2026-05-30', priority: 'urgent', desc: 'FCM token rotates silently; re-register on app foreground.' },
  { project: 'mobile', id: 'MOB-22', title: 'Offline cache for the inbox view',              label: 'Frontend', status: 'todo',     assignee: 'MR', createdAt: '2026-05-24', priority: 'medium', desc: 'Persist last 50 items so inbox renders with no network.' },
  { project: 'mobile', id: 'MOB-18', title: 'Shrink cold-start time under 1.2s',             label: 'Perf',     status: 'done',     assignee: 'AK', createdAt: '2026-05-19', priority: 'high',   desc: 'Cold start now ~1.0s on a mid-tier device.' },

  // Growth
  { project: 'growth', id: 'GRW-07', title: 'A/B test new pricing-page hero',                label: 'Design',   status: 'progress', assignee: 'PS', createdAt: '2026-05-28', priority: 'medium', desc: 'Two hero variants. 50/50 split, metric: trial-start conversion.' },
  { project: 'growth', id: 'GRW-12', title: 'Instrument funnel drop-off events',             label: 'API',      status: 'todo',     assignee: 'LC', createdAt: '2026-05-31', priority: 'high',   desc: 'Add typed analytics events at each onboarding step.' },
  { project: 'growth', id: 'GRW-03', title: 'Referral reward emails',                        label: 'Backend',  status: 'done',     assignee: 'JT', createdAt: '2026-05-21', priority: 'low',    desc: 'Shipped double-sided referral reward with idempotent issuance.' },
]

// FORMAT DATE FUNCTIONS
export function fmtDate(iso: string) : string {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}