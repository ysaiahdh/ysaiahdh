<div align="center">

```text
██╗   ██╗███████╗ █████╗ ██╗ █████╗ ██╗  ██╗██████╗ ██╗  ██╗
╚██╗ ██╔╝██╔════╝██╔══██╗██║██╔══██╗██║  ██║██╔══██╗██║  ██║
 ╚████╔╝ ███████╗███████║██║███████║███████║██║  ██║███████║
  ╚██╔╝  ╚════██║██╔══██║██║██╔══██║██╔══██║██║  ██║██╔══██║
   ██║   ███████║██║  ██║██║██║  ██║██║  ██║██████╔╝██║  ██║
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝
```

**System • Security • Development**

![system](https://img.shields.io/badge/System-Operational-10b981?style=flat-square&labelColor=0d1117&logo=linux&logoColor=10b981)
![ctf](https://img.shields.io/badge/CTF-PTH_2026-f59e0b?style=flat-square&labelColor=0d1117&logo=hackthebox&logoColor=f59e0b)
![homelab](https://img.shields.io/badge/homelab-3_nodes-38bdf8?style=flat-square&labelColor=0d1117&logo=raspberrypi&logoColor=38bdf8)
![profile](https://img.shields.io/badge/views-komarev-9ca3af?style=flat-square&labelColor=0d1117)
![followers](https://img.shields.io/github/followers/ysaiahdh?style=flat-square&labelColor=0d1117&color=0d1117&label=FOLLOWERS)

[Portfolio](#) · [LinkedIn](https://www.linkedin.com/in/YOUR-HANDLE) · [Contact](mailto:you@example.com) · [GitHub](https://github.com/ysaiahdh)

</div>

---

## > whoami

```bash
$ cat ~/.profile
user:     ysaiahdh — FR / remote-friendly
base:     frontend (HTML/CSS/JS → React) · python CLIs · C on Linux · Wayland
env:      linux · homelab (workstation + server + rpi4) · local LLMs, offline-first
ops:      pentest mindset · CTF forensics · EXIF/metadata · automation
school:   La Salle Passy Buzenval (2020-2026, NSI) · Cambridge C1 (2026)
open_to:  collabs — fastest route: open an issue on any repo
$ # comprendre comment ça marche — et comment ça casse.
```

## > stack.json

```json
{
  "systems_infra": ["C", "Linux", "Bash", "Wayland", "Git", "Netlify"],
  "cybersecurity": ["Kali Linux", "Burp Suite", "ExifTool", "pcap forensics", "Root-Me", "Web/Forensics"],
  "development": ["Python", "FastAPI", "React", "JavaScript", "Node.js", "Vite", "pytest", "ruff", "ChromaDB", "LM Studio"],
  "hardware_local_llm": {
    "primary": "i5-13600K / RTX 4070 SUPER / 32Go DDR5 / 5To",
    "server": "i5-4400U / 16Go DDR4 / 1To RAID10",
    "edge": "RPi4 BCM2711 / 8Go LPDDR4",
    "serving": ["LM Studio", "ChromaDB", "SQLite FTS5", "SSE"]
  }
}
```

* **Systems & Réseau :** `C` `Linux` `Bash` `Wayland` `Git` `Netlify`
* **Cybersécurité :** `Kali` `Burp Suite` `ExifTool` `pcap` `Root-Me` `LetsDefend` `HTB` `PTH-COMCYBER-2026`
* **Développement :** `Python` `FastAPI` `React` `JS` `Node` `Vite` `pytest` `ruff` `ChromaDB` `LM Studio`
* **Hardware / Local LLMs :** `i5-13600K` `RTX-4070S` `RAID10` `RPi4-8Go` `offline-first`

## > projects.log

| Projet / Système | Focus | Description | Liens |
|---|---|---|---|
| **EXIF Timeline Resync & Image Matcher** ★ flagship | `Python` `PyTorch` `ExifTool` `CLI` `pytest` | Photos de camp toutes tamponnées à la date de download. Reconstruit un EXIF réaliste depuis noms de dossiers, schedule JSON, filenames et matching visuel (ResNet-18 / pHash). `--wizard` en 5 étapes, `--dry-run` + timeline HTML + CSV + `--undo`, `--sync-clocks`, dédup. | [Code](https://github.com/ysaiahdh/EXIF-Timeline-Resync-Image-Matcher) / `live: —` |
| **CogniVault — offline RAG study app** | `FastAPI` `React` `ChromaDB` `SQLite-FTS5` `SSE` | Vault Markdown + PDF avec chat RAG, flashcards et mock exams, 100% offline sur LLM local. 4 modes Explain/Summarize/Feynman/Quizzer streamés avec citations, chunking header-aware, MMR, réindex hash incrémental, SM-2 + export Anki, graph wikilinks, 21 tests offline. | [Code](https://github.com/ysaiahdh/CogniVault) / `live: —` |
| **AutoComplete — fish-style C, 60KB** | `C` `Linux` `Wayland` `Bash` | Suggestions fish-style ~1ms dans bash + picker snippets system-wide KDE Wayland. Un binaire ~60KB, sans toolkit GUI. Scoring frecency, rendu shm ext-data-control, historique local + TOML, 16 checks e2e hermétiques, protocoles vendored. | [Code](https://github.com/ysaiahdh/AutoComplete) / `live: —` |
| **HomeLab — 3 nodes** | `i5-13600K` `RTX-4070S` `RAID10` `RPi4` | Socle local : dev isolé, transcodage, stockage privé latence ~0. Primary 32Go DDR5 / 5To, serveur 16Go / 1To RAID10, RPi4 8Go. Roadmap : Switch 2.5/10GbE, NAS dédié, UPS, Wi-Fi 6, baie rack. | `code: n/a (infra)` / `live: —` |

```bash
$ tail -n 4 /var/log/ctf.log
2026-??-?? [Forensics][ongoing] pcap playground: TLS export + SSTV decode
2026-??-?? [Web][ongoing]      burp fundamentals: repeater → intruder
2026-??-?? [Misc][solved]      EXIF forensics: timelines from filenames
2026-CTF   [COMCYBER][done]    PTH 2026 — crypto/stego/OSINT/reverse, GIC, ~10k
```

## > telemetry & activity

```console
$ uptime --pretty && fw --status --tail 5
up 99d, nodes: 3/3 operational, trackers: 0, egress: local-only (LLM/RAG)
ALLOW lan -> homelab:22,80,443 | DENY wan -> *:3389,23 [hits: 1420]
CTF: PTH-2026[done] root-me[active] letsdefend[active] htb[active]
load: dev=EXIF-hardening cognivault-quiz ctf-grind
```

<div align="center">

![stats](https://github-readme-stats.vercel.app/api?username=ysaiahdh&show_icons=true&hide_border=true&title_color=38bdf8&icon_color=38bdf8&text_color=9ca3af&bg_color=0d1117&count_private=true&include_all_commits=true)
![langs](https://github-readme-stats.vercel.app/api/top-langs/?username=ysaiahdh&layout=compact&hide_border=true&title_color=38bdf8&text_color=9ca3af&bg_color=0d1117&langs_count=8)
![streak](https://streak-stats.demolab.com?user=ysaiahdh&hide_border=true&background=0d1117&ring=38bdf8&fire=f59e0b&currStreakLabel=38bdf8&sideLabels=9ca3af&dates=6b7280)
![activity](https://github-readme-activity-graph.vercel.app/graph?username=ysaiahdh&hide_border=true&bg_color=0d1117&color=9ca3af&line=38bdf8&point=f59e0b)

</div>

## > connect.sig

```bash
$ ./contact.sh --fastest-route
PGP:  TODO:ABCD 1234 EFGH 5678 IJKL 9012 MNOP 3456 QRST 7890
mail: you@example.com  # TODO: replace with real address
gh:   github.com/ysaiahdh — open an issue (read: 100%)
ask:  react · python CLIs · linux · local LLMs · EXIF/metadata · CTF forensics
# TODO: linkedin/in/YOUR-HANDLE · TODO: portfolio URL
```
