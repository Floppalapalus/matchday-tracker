# Matchday Tracker — Project Rules

## What this is
A sideline tool used by a single coach during a live football match.
It runs in a mobile browser — one coach, one phone, one game at a time.

## Rules

### Phone-first UI
- All tap targets must be large enough to hit on a touchscreen sideline (minimum 44px height).
- Test every interaction as if you are tapping with a thumb in a hurry.
- No hover-only states — everything must work with touch.

### No hardcoded branding
- Never hardcode a club name, league name, badge, or colour scheme into the source code.
- Team name, colours, and other identity details must always come from user-editable state or config.

### Data must survive page close
- All user data (players, games, notes) must be written to `localStorage` immediately on every change.
- Never rely on in-memory state alone — assume the browser can close at any moment.
- Cloud sync (GAS) is a bonus layer on top of localStorage, not a replacement for it.

### Keep the code simple and commented
- This codebase is a learning project. Prefer clear, readable code over clever one-liners.
- Add a short comment whenever the *why* behind something is not obvious.
- Avoid unnecessary abstractions — if a pattern appears fewer than three times, write it out directly.
- Prefer small, focused functions with descriptive names.
