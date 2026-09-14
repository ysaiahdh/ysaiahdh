/* ==========================================================================
   data.js — ALL editable content lives here.
   --------------------------------------------------------------------------
   HOW TO ADD A PROJECT (no HTML/CSS edit needed):
     1. Copy the TEMPLATE object at the bottom.
     2. Push it to the TOP of PROJECTS (newest-first).
     3. Fields:
        - slug:    unique id, used for anchor links (#proj-<slug>)
        - title:   card heading
        - flagship:boolean — true spans full width on desktop + shows ★ tag.
                      Keep at most ONE flagship.
        - problem: 1–2 sentences: pain + what it does (EN).
        - stack:   array of badge strings. Prefix a badge with "!" to render
                  it amber (security-flavoured), e.g. "!Burp Suite".
        - metrics: array of "challenge / metric" bullets, keep ≤ 5.
        - repo:    GitHub URL. live: demo URL or null (link hidden if null).

   HOW TO ADD A WRITE-UP:
     Push { date:"YYYY-MM-DD", category:"Web|Forensics|Reverse|Pwn|Crypto|Misc",
     title, url (or null), status:"solved"|"ongoing" } to the TOP of WRITEUPS.

   Classic script (no modules) on purpose: works via file:// with zero build.
   Exposes window.PORTFOLIO = { PROJECTS, WRITEUPS } for main.js.
   ========================================================================== */

var PROJECTS = [
  {
    slug: "exif-timeline-resync",
    title: "EXIF Timeline Resync & Image Matcher",
    flagship: true,
    problem:
      "Downloaded camp photos all stamped with the download date, losing their real timeline. Rebuilds realistic EXIF timestamps from folder names, JSON schedules, filenames and visual matching.",
    stack: ["Python", "PyTorch", "ExifTool", "CLI wizard", "pytest", "ruff"],
    metrics: [
      "Interactive --wizard: folder → schedule → refs → dry-run → confirm",
      "Visual matching: ResNet-18 or perceptual hash against dated refs",
      "Safety-first: --dry-run, HTML timeline, CSV report + --undo rollback",
      "Clock-drift detection (--sync-clocks) + duplicate detection",
    ],
    repo: "https://github.com/ysaiahdh/EXIF-Timeline-Resync-Image-Matcher",
    live: null,
  },
  {
    slug: "cognivault",
    title: "CogniVault — offline RAG study app",
    flagship: false,
    problem:
      "Study vault (Markdown + PDF) with RAG chat, flashcards and mock exams — 100% offline against a local LLM so nothing leaves the machine.",
    stack: ["FastAPI", "React", "ChromaDB", "SQLite FTS5", "Local LLM", "SSE"],
    metrics: [
      "4 prompt modes: Explain / Summarize / Feynman / Quizzer, streamed with citations",
      "Header-aware chunking, MMR retrieval, hash-based incremental reindex",
      "Flashcards (SM-2) + Anki CSV export, evidence-graded open questions",
      "21 offline tests, wikilink/tag/semantic knowledge graph",
    ],
    repo: "https://github.com/ysaiahdh/CogniVault",
    live: null,
  },
  {
    slug: "autocomplete-c",
    title: "AutoComplete — fish-style suggestions in C, 60KB",
    flagship: false,
    problem:
      "Fast typing for Linux: fish-style shell suggestions plus a system-wide snippet picker for KDE Wayland — one ~60KB C binary, no GUI toolkit.",
    stack: ["C", "Linux", "Wayland", "Bash", "!privacy-first"],
    metrics: [
      "~1ms suggestions, frecency scoring (count × recency × 3× cwd_boost)",
      "Wayland-native picker (ext-data-control, shm rendering), no keyloggers",
      "Local plain-text history + TOML snippets, nothing leaves the machine",
      "Hermetic e2e suite (16 checks), vendored protocols for repro builds",
    ],
    repo: "https://github.com/ysaiahdh/AutoComplete",
    live: null,
  },
];

var WRITEUPS = [
  {
    date: "2026-08-30",
    category: "Forensics",
    title: "pcap playground: TLS export & SSTV decode notes",
    url: null,
    status: "ongoing",
  },
  {
    date: "2026-08-12",
    category: "Web",
    title: "Burp fundamentals: repeater → intruder workflow",
    url: null,
    status: "ongoing",
  },
  {
    date: "2026-07-05",
    category: "Misc",
    title: "EXIF forensics: recovering timelines from filenames",
    url: null,
    status: "solved",
  },
  {
    date: "2026-06-14",
    category: "Reverse",
    title: "First steps: strings, file headers & syscalls on tiny C binaries",
    url: null,
    status: "solved",
  },
];

/* ---- TEMPLATE — copy/paste to add your next project -----------------------
{
  slug: "my-next-tool",
  title: "My Next Tool — one-line hook",
  flagship: false,
  problem: "Pain in one sentence. What the tool does in one sentence.",
  stack: ["Python", "FastAPI", "!Burp Suite"],
  metrics: ["Metric or challenge #1", "Metric or challenge #2"],
  repo: "https://github.com/ysaiahdh/my-next-tool",
  live: null, // or "https://demo-url"
},
----------------------------------------------------------------------------- */

window.PORTFOLIO = { PROJECTS: PROJECTS, WRITEUPS: WRITEUPS };
