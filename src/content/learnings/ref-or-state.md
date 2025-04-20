---
title: Refs vs. State in React, When to Use Which?
publishDate: 2025-04-20
tags: ["react", "state", "refs", "frontend", "react-hooks", "javascript"]
---


>Saved me big time today! ⚡️

Use State (`useState`) when:
✅ The value needs to be displayed in your UI  
✅ The value changing should cause a re-render  
✅ You need React to "react" to the value changing  
✅ The value is part of your component's visual output  

Use Refs (`useRef`) when:
✅ You need to remember a value between renders  
✅ Changing the value should NOT cause a re-render  
✅ The value is used for internal logic only  
✅ You're tracking something that doesn't affect the UI directly  
✅ You're preserving values during re-renders (like form state, scroll positions)  

**Quick Test:**  8
Ask yourself: "Does the rest of my component need to know when this value changes?"  
- If yes → probably need state  
- If no → probably need a ref  

Remember: Refs are perfect for "behind the scenes" values that your component needs to track without telling the browser to repaint the UI.

#ReactJS #WebDevelopment #FrontendTips #ReactHooks #JavaScriptDevelopment