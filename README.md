# Chat-Friend: Real-Time AI-Powered Chat Game Prototype

## 🛠 Tech Stack
- Frontend: Vanilla JS + HTML/CSS
- Backend: Node.js + Express
- Real-time Communication: Socket.IO
- Deployment Target: Android APK (coming next)
- No framework used — kept it lightweight

## 🔌 Architecture


1. Clients connect to the server via WebSockets (Socket.IO)
2. Each lobby supports multiple participants and AI bots
3. Chat messages are broadcast instantly, and typing events are emitted
4. (Planned) Bot replies via OpenAI API with short delay for realism

## 🧠 Prompt Strategy & AI Handling
(Not yet integrated — next milestone)
- Plan: On user message, server sends prompt to LLM with chat context
- Throttle bot messages to one every 2–3 seconds
- Use avatars/names to distinguish bots from humans

## 🚀 Run Instructions

```bash
cd server
npm install
npm run dev
