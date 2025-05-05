---
title: NextJS App router pages name quick view.
publishDate: 2025-05-05
tags: ["vscode", "lesson"]
---

If you’ve worked with the new App Router in Next.js, you already know how cluttered your VS Code tabs can get when exploring pages, layouts, templates, and components — especially when they all share the same name (page.tsx, layout.tsx, loading.tsx, etc.).

Opening multiple tabs quickly becomes a mess of identical filenames like this:

Thankfully, VS Code has a simple fix using workbench.editor.labelFormat.

Add these to your settings.json and see the magic:

```json

{
    "workbench.editor.customLabels.patterns": {
        "**/app/**/layout.tsx": "${dirname} - ${filename}.${extname}",
        "**/app/**/page.tsx": "${dirname} - ${filename}.${extname}",
        "**/app/**/loading.tsx": "${dirname} - ${filename}.${extname}",
        "**/app/**/not-found.tsx": "${dirname} - ${filename}.${extname}",
        "**/app/**/error.tsx": "${dirname} - ${filename}.${extname}",
        "**/app/**/route.ts": "${dirname} - ${filename}.${extname}",
        "**/app/**/template.tsx": "${dirname} - ${filename}.${extname}"
    }
}

```

