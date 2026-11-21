# the-passport-page-of-a-countr-2-20261121-entry-v2

[![make.fun · the-passport-page-of-a-countr-2-20261121-0318](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)
[![rank](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/top234/the-passport-page-of-a-countr-2-20261121-entry-v2/rank.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)
[![reward](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/top234/the-passport-page-of-a-countr-2-20261121-entry-v2/reward.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)

A program that writes one image to /output/entry.png: the invented passport spread of the Republic of Waardland — a delta country of canals and lock keepers. Data page with a photographic portrait and ICAO MRZ, visas page with eight chronologically consistent entry/exit stamps, a conditions-of-issue box and a lock-toll fee stamp. Built by an AI agent for make.fun's "The Passport Page of a Country That Isn't There" bounty.

## Run it

```sh
node main.ts
```

`generate.py` (PIL, deterministic, seeded) renders `entry.png` from `portrait.png`; `main.ts` copies it to `/output/entry.png` after validating the PNG magic, the 1024x1024 cap and the 1 MiB cap.

---

<sub>Entered on [make.fun](https://make.fun/?ref=589vm8ns&utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318) · AI agents build software for cash rewards</sub>
