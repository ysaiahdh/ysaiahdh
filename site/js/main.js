/* ==========================================================================
   main.js — rendering + small interactions. No framework, no build.
   - Renders PROJECTS → #project-grid and WRITEUPS → #log-list from data.js
   - Sets footer year, wires PGP copy button (with fallback for file://)
   - All DOM built with createElement (no innerHTML on untrusted strings)
   ========================================================================== */
(function () {
  "use strict";

  var data = window.PORTFOLIO || { PROJECTS: [], WRITEUPS: [] };

  /* -- Helpers ------------------------------------------------------------ */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function link(href, text) {
    var a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.target = "_blank";
    a.rel = "noopener";
    return a;
  }

  /* -- Projects ------------------------------------------------------------ */
  function badgeItem(label) {
    var li = document.createElement("li");
    li.className = "badge";
    var text = label;
    // "!" prefix convention (see data.js) → amber security badge
    if (text.charAt(0) === "!") {
      li.classList.add("badge--sec");
      text = text.slice(1);
    }
    // Flagship core stack gets a subtle cyan highlight
    if (text === "Python" || text === "C" || text === "FastAPI") {
      li.classList.add("badge--hot");
    }
    li.textContent = text;
    return li;
  }

  function renderProjects() {
    var grid = document.getElementById("project-grid");
    if (!grid) return;
    grid.textContent = "";

    data.PROJECTS.forEach(function (p) {
      var card = el("article", "card");
      card.id = "proj-" + p.slug;

      var top = el("div", "card-top");
      var title = el("h3", "card-title", p.title);
      top.appendChild(title);
      if (p.flagship) top.appendChild(el("span", "card-flag", "★ flagship"));
      card.appendChild(top);

      card.appendChild(el("p", "card-problem", p.problem));

      card.appendChild(el("p", "card-label", "stack"));
      var badges = el("ul", "badge-list");
      p.stack.forEach(function (s) {
        badges.appendChild(badgeItem(s));
      });
      card.appendChild(badges);

      card.appendChild(el("p", "card-label", "metrics / challenges"));
      var metrics = el("ul", "card-metrics");
      p.metrics.forEach(function (m) {
        metrics.appendChild(el("li", null, m));
      });
      card.appendChild(metrics);

      var links = el("div", "card-links");
      links.appendChild(link(p.repo, "repo →"));
      if (p.live) {
        links.appendChild(link(p.live, "live demo →"));
      } else {
        var noDemo = el("span", "meta", "live: —");
        noDemo.setAttribute("aria-label", "No live demo for " + p.title);
        links.appendChild(noDemo);
      }
      card.appendChild(links);

      grid.appendChild(card);
    });
  }

  /* -- Write-ups (newest-first, defensive sort) ------------------------------ */
  function renderWriteups() {
    var list = document.getElementById("log-list");
    if (!list) return;
    list.textContent = "";

    var rows = data.WRITEUPS.slice().sort(function (a, b) {
      return b.date.localeCompare(a.date);
    });

    rows.forEach(function (w) {
      var li = el("li", "log-row");

      li.appendChild(el("time", "log-date", w.date)).setAttribute("datetime", w.date);

      var cat = el("span", "log-cat log-cat--" + w.category.toLowerCase(), "[" + w.category + "]");
      li.appendChild(cat);

      if (w.url) {
        var titleLink = link(w.url, w.title);
        titleLink.className = "log-title";
        li.appendChild(titleLink);
      } else {
        li.appendChild(el("span", "log-title", w.title));
      }

      var status = el("span", "log-status", w.status === "solved" ? "[solved]" : "[ongoing]");
      status.setAttribute("data-status", w.status);
      li.appendChild(status);

      list.appendChild(li);
    });
  }

  /* -- Footer: year + PGP copy (clipboard API w/ file:// fallback) ------------ */
  function initFooter() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    var btn = document.getElementById("copy-pgp");
    var key = document.getElementById("pgp-key");
    if (!btn || !key) return;

    btn.addEventListener("click", function () {
      var text = key.textContent.trim();
      function done() {
        btn.textContent = "copied ✓";
        window.setTimeout(function () {
          btn.textContent = "copy";
        }, 1500);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {
          fallbackCopy(text) && done();
        });
      } else {
        fallbackCopy(text) && done();
      }
    });

    function fallbackCopy(text) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        return true;
      } catch (e) {
        return false;
      }
    }
  }

  /* -- Boot ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    renderProjects();
    renderWriteups();
    initFooter();
  });
})();
