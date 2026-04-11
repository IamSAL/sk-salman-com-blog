---
title: Gitignore files without touching .gitignore
publishDate: 2026-04-12
tags: ["git", "lesson"]
---

> Your team is still in taboo about AI coding agents, but you already dropped `.claude/` and `CLAUDE.md` into the repo locally. You can't add them to `.gitignore` either. That file is shared and somebody will ask questions.

Every git repo has a file at `.git/info/exclude`. Same syntax as `.gitignore`, but it lives inside `.git/` so it never gets committed, never gets pushed, never gets seen by anyone else.

Open it and add your files:

```
# .git/info/exclude
.claude/
CLAUDE.md
```

Git treats them as ignored from that point on. `git status` stops complaining about them, and your teammates are none the wiser.
