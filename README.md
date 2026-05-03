# ✝️ The Counterfeit

A Next.js web app focused on Christian **eschatology**, comparative theology, and global persecution.

---

## Overview

**The Counterfeit** explores end-times prophecy through Scripture and comparative analysis.  
It includes a blog, forum, and an interactive map showing global Christian persecution since 1990.

---

## Tech Stack

- Next.js (React + TypeScript)
- Tailwind CSS
- Leaflet (maps)
- Neon PostgreSQL (map data)
- Firebase (auth + forum)
- Contentful (homepage content)

---

## Key Features

- Theological articles and blog entries  
- Interactive persecution map  
- Forum with authentication  
- Newsletter signup  
- Search functionality  

---

## Project Structure 

- `/api/terrorGroupsDataFetch/route.ts` – Fetch map data from Neon  
- `/components` – Reusable UI components  
- `/entries` – Blog  
- `/forum` – Forum + auth  
- `/map` – Interactive map  
- `/lib/firebase/config.ts` – Firebase setup  
- `/lib/contentful/client.ts` – Contentful setup  

---

## Getting Started

```bash
npm install
npm run dev