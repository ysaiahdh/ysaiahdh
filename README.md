<p align="center">
  <a href="https://github.com/ysaiahdh"><img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=22&pause=1000&color=38BDF8&center=true&vCenter=true&width=600&lines=System+%E2%80%A2+Security+%E2%80%A2+Full-stack;Python+Builder+%E2%80%A2+CLI+%2B+AI+%2B+Automation;Linux+%2B+C+Hacker+%E2%80%A2+tiny+binaries;Pentesting+%26+CTF+Learner" alt="Typing SVG"/></a>
</p>

```text
$ whoami
ysaiahdh — System • Security • Full-stack
[System: Operational] · FR / remote-friendly · open to collabs
```

<p align="center">
  <a href="https://github.com/ysaiahdh"><img src="https://img.shields.io/badge/GitHub-ysaiahdh-12161f?style=flat-square&logo=github&logoColor=38bdf8&labelColor=12161f" alt="GitHub"/></a>
  <!-- TODO: replace with your real LinkedIn URL -->
  <a href="https://www.linkedin.com/in/YOUR-HANDLE"><img src="https://img.shields.io/badge/LinkedIn-Connect-12161f?style=flat-square&logo=linkedin&logoColor=38bdf8&labelColor=12161f" alt="LinkedIn"/></a>
  <!-- TODO: replace with your real email -->
  <a href="mailto:you@example.com"><img src="https://img.shields.io/badge/Contact-email-12161f?style=flat-square&logo=gmail&logoColor=38bdf8&labelColor=12161f" alt="Email"/></a>
  <img src="https://komarev.com/ghpvc/?username=ysaiahdh&color=38bdf8&style=flat-square&label=views" alt="Profile views"/>
</p>

> Frontend developer learning React • Python builder • Linux & C hacker • Pentesting enthusiast.
> I love understanding how things work — and how they break.

---

### `$ ls ~/stack --by-domain`

**Systems & Infra**

![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white)
![Wayland](https://img.shields.io/badge/Wayland-FFBC00?style=flat-square&logo=wayland&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

**Cybersecurity** `// amber = sec tags`

![Kali Linux](https://img.shields.io/badge/Kali_Linux-f59e0b?style=flat-square&logo=kalilinux&logoColor=black)
![Burp Suite](https://img.shields.io/badge/Burp_Suite-f59e0b?style=flat-square&logo=burpsuite&logoColor=black)
![ExifTool](https://img.shields.io/badge/ExifTool-f59e0b?style=flat-square&logo=exif&logoColor=black)
![pcap forensics](https://img.shields.io/badge/pcap-forensics-f59e0b?style=flat-square)
![Root-Me](https://img.shields.io/badge/Root--Me-f59e0b?style=flat-square)
![Web / Forensics](https://img.shields.io/badge/Web-Forensics-f59e0b?style=flat-square)

**Development & Tools**

![Python](https://img.shields.io/badge/Python-38bdf8?style=flat-square&logo=python&logoColor=black)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=flat-square&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white)
![ruff](https://img.shields.io/badge/ruff-D7FF64?style=flat-square&logo=ruff&logoColor=black)
![ChromaDB](https://img.shields.io/badge/ChromaDB-FF4C4C?style=flat-square&logo=chromadb&logoColor=white)
![LM Studio](https://img.shields.io/badge/LM_Studio-2C2C32?style=flat-square&logo=ollama&logoColor=white)

> **Currently learning:** React patterns + advanced Python (typing, packaging) + CTF fundamentals (web, forensics, pcap).

---

### `$ cat ./case-studies/*.md`

#### 📸 [EXIF Timeline Resync & Image Matcher](https://github.com/ysaiahdh/EXIF-Timeline-Resync-Image-Matcher) `[★ flagship]`

> **Problem:** downloaded photos lost their sense of time — hundreds of camp photos all stamped with the download date. Rebuilds realistic EXIF timestamps from folder names, schedules, filenames, and visual matching.

**Stack:** `Python` `PyTorch` `ExifTool` `CLI wizard` `pytest` `ruff`

**Metrics / challenges:**
- `>` Interactive `--wizard` — folder → schedule → refs → dry-run → confirm
- `>` Visual matching: ResNet-18 or perceptual hash against dated refs
- `>` Safety-first: `--dry-run`, HTML timeline, CSV report + `--undo` rollback
- `>` Clock-drift detection (`--sync-clocks`) + duplicate detection

**Links:** [repo →](https://github.com/ysaiahdh/EXIF-Timeline-Resync-Image-Matcher) · `live: —`

#### ◈ [CogniVault](https://github.com/ysaiahdh/CogniVault) — local RAG study app, 100% offline

> **Problem:** study from Markdown + PDF with RAG chat, flashcards, and mock exams — wired to a local LLM so nothing leaves the machine.

**Stack:** `FastAPI` `React` `ChromaDB` `SQLite FTS5` `Local LLM` `SSE`

**Metrics / challenges:**
- `>` 4 prompt modes (Explain / Summarize / Feynman / Quizzer), streamed SSE with `[1][2]` citations
- `>` Header-aware chunking, MMR retrieval, hash-based incremental reindex + file watcher
- `>` Flashcards (SM-2) + Anki CSV export, evidence-graded open questions
- `>` 21 offline tests, wikilink/tag/semantic knowledge graph

**Links:** [repo →](https://github.com/ysaiahdh/CogniVault) · `live: —`

#### ⌨️ [AutoComplete](https://github.com/ysaiahdh/AutoComplete) — fish-style autocomplete in C, 60KB

> **Problem:** fast typing for Linux — fish-style suggestions in bash + system-wide snippet picker for KDE Wayland. One ~60KB C binary, no GUI toolkit.

**Stack:** `C` `Linux` `Wayland` `Bash` `privacy-first`

**Metrics / challenges:**
- `>` ~1ms suggestions, frecency scoring (`count × recency × 3× cwd_boost`)
- `>` Wayland-native picker (ext-data-control, shm rendering) — no keyloggers, no X11
- `>` Local plain-text history + TOML snippets, nothing leaves the machine
- `>` Hermetic e2e suite (16 checks), vendored protocols for reproducible builds

**Links:** [repo →](https://github.com/ysaiahdh/AutoComplete) · `live: —`

<details>
<summary><b>more experiments</b></summary>
<br/>

- 🤖 **TikTok Repost Analyzer** — Playwright scraper + spaCy FR + local vision LLM (LM Studio) to profile reposts and generate DM-ready recommendations. Personal research project, offline fixtures included.
- 📡 **RootMe / pcap notes** — forensics playground: TLS export, SSTV decode, raw captures. Where I practice what I preach on security.

</details>

<!-- TO ADD A PROJECT: copy one #### block above (title → problem → stack →
     metrics → links), newest-first. Keep a single [★ flagship]. -->

---

### `$ tail -n 20 /var/log/ctf.log`

| date | category | title | status |
| ---- | -------- | ----- | ------ |
| 2026-08-30 | `[Forensics]` | pcap playground: TLS export & SSTV decode notes | `[ongoing]` |
| 2026-08-12 | `[Web]` | Burp fundamentals: repeater → intruder workflow | `[ongoing]` |
| 2026-07-05 | `[Misc]` | EXIF forensics: recovering timelines from filenames | `[solved]` |
| 2026-06-14 | `[Reverse]` | First steps: strings, file headers & syscalls on tiny C binaries | `[solved]` |

<!-- TO ADD A WRITE-UP: insert one table row on top (newest-first).
     status is [solved] or [ongoing]. Wrap the title in a link when published. -->

---

<details>
<summary><b>$ ./telemetry.sh — github stats</b></summary>
<br/>

<p align="center">
  <img width="49%" src="https://github-readme-stats.vercel.app/api?username=ysaiahdh&show_icons=true&hide_border=true&theme=tokyonight&count_private=true&include_all_commits=true" alt="Ysaiah's GitHub stats"/>
  <img width="49%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ysaiahdh&layout=compact&hide_border=true&theme=tokyonight&langs_count=8" alt="Top languages"/>
</p>

</details>

---

### `$ ./contact.sh --fastest-route`

Fastest way to reach me: **open an issue on any repo** — I read everything.

- 💬 Ask me about: **React, Python CLIs, Linux, local LLMs, EXIF/metadata, CTF forensics**
- 🌱 Currently: hardening **EXIF Matcher**, expanding **CogniVault quiz modes**, grinding CTFs

```text
PGP: TODO:ABCD 1234 EFGH 5678 IJKL 9012 MNOP 3456 QRST 7890
```

<!-- TODO: replace with your real PGP fingerprint -->

<sub>© 2026 ysaiahdh · plain markdown, no tracker</sub>
