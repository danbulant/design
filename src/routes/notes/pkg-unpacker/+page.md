---
title: Unpacking packed nodejs
tags: [cybersec]
date: 2025-03-29
---

Use [pkg unpacker](https://github.com/LockBlock-dev/pkg-unpacker). Some applications are compiled with (now deprecated) [vercel/pkg](https://github.com/vercel/pkg). Those work by embedding packed code into nodejs statically compiled executable. This tool unpacks those files into separate files for readability.

Note that pkg has support for v8 bytecode only mode (afaik it's used by default for dependencies, but apps in the wild have it disabled for their source code too), and that is very difficult to reliable reverse engineer - the bytecode is not stable between releases, and there isn't a ton of tools for analysing different versions, and they often rely on compiling parts of chromium/v8.

As for node SEA, the recommended alternative for pkg, use `strings -t x` (`-t x` for hexadecimal offsets, `-t d` for decimal) and find the text in your favorite hex editor. It is not the default there to have v8 bytecode only.