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

## RSA

Key sizes of 128b or less are not enough and are factorable in small time.

`e` must be constant or otherwise not changeable by the attacker, can be forced to make a collision if it can be changed (for example when validating via user provided public key). Usually just set to 65537.

When generating prime numbers, both must be random - if the primes are close enough (for example, generating one random and then the other one by adding +2 until it's a prime again), they can be factored via fermat's theorem.