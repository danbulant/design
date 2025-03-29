---
title: Crypto challenges and analysis
tags: [security]
date: 2025-03-29
---

I'm not much of a crypto guy so there won't be that many separate notes.

## Transposition

- letter counts will be similar to real language (how often a letter shows up in the text)
- you can use letter count table to solve these challenges

## S box

Substition box. Used in diagrams for more advanced ciphers, used for mixing up data (so that data in byte 1 moves to byte 7 and so on)

## DES

56bit key (chosen not to make it too secure).

## 3DES

Trides, encrypts, decrypts and encrypts again. If a single key is provided, try it for all 3 (becomes just slower DES).