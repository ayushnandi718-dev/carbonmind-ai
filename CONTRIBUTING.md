# Contributing to CarbonMind AI

Thanks for your interest! Here's how to get started.

## Quick Start

```bash
git clone https://github.com/ayushnandi718-dev/carbonmind-ai.git
cd carbonmind-ai
npm install
cp .env.local.example .env.local  # Add your keys
npm run dev
```

## Development

- **Frontend**: React 19 + Next.js 16 App Router + Tailwind CSS v4
- **Backend**: Next.js API routes (serverless functions)
- **Database**: Supabase (PostgreSQL)
- **AI**: Google Gemini 2.0 Flash API

### Environment Variables

```env
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
src/
├── app/          # Pages & API routes (Next.js App Router)
│   ├── api/ai/          # Climate Coach chat
│   └── api/ai-insights/ # Weekly AI insights
├── components/  # React components
├── context/     # React context (User, Theme)
├── data/        # Mock data
└── lib/         # Utilities (emissions, supabase, badges, etc.)
```

## Making Changes

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-idea`)
3. Make your changes
4. Run `npm run build` to check for errors
5. Commit and push
6. Open a Pull Request

## Guidelines

- Follow existing code style (no extra comments)
- TypeScript only — no plain JS
- Use Tailwind CSS for styling
- Test your changes with `npm run build`
- Keep PRs focused on a single change

## Need Help?

Open an issue or start a discussion.
