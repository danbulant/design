---
title: File analysis tools + enumeration
tags: [security]
date: 2025-03-29
---

- `file` shows filetype.
- `binwalk` finds file headers inside of file. Can be used to extract data from corrupted disk images.
- `7z` can extract almost anything.
- `foremost` data recovery tool.
- `volatility` for RAM analysis (mainly windows).

- `ffuf` (web) fuzzer
- `hydra` credential stuffer
- `sqlmap` for automatic SQL injection exploiting
- `linPEAS`, `linEnum`, `lse`, `find` for finding executables.
    - `find -perm 4000` to filter by perm (4000 suid, 2000 guid, sum for both)
    - `find -user root` to filter by user