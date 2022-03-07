---
title: Rust basics, from the perspective of a high level programmer
date: 2022-03-06
author: Daniel Bulant
authorIcon: /logo.png
categories: [programming, rust]
description: Rust is a fast memory-safe low level programming language. And here's how I got started with it.
---

<script>
    var story = true;
</script>

*I seem to like storytelling a bit too much.*
<div style="display: flex; align-items: center;">
    <label for="enable_story" style="padding-right: 10px">Enable story</label>
    <input type="checkbox" style="padding: 0; margin: 0;" bind:checked={story} id="enable_story">
</div>

> I really do enjoy reading blog posts like these, so I figured I'd try writing few of my own as well. I hope you'll enjoy it, if so, leave a comment below. I don't have any analytics except for basic limited access logs, where I don't even store the IP address.

{#if story}
    I first started programming with PHP. Some of it's syntax felt clunky and unnatural, sometimes plainly annoying (why do I have to prefix each variable with `$` when it understands constants without `$` just fine?). I don't really like the language now after learning other languages, but I do like some parts of it, like how it's easy to loop over an array or that it has multiple programming paradigms, from functional to OOP to traits (which I learnt about much later after I stopped using PHP).

    I later moved to JS which looked a lot like C, which I saw everywhere.

    I also tried learning C (and C++), and although I did have a certificate about both of them on Sololearn (I no longer have the C++ one as they added new lessons), I never really used them outside, as everything seemed way to complicated.

    Fast RAM access is cool and all, but why do I have to use `free`? Why can't it know that if I go outside the scope it should free the memory?

    So I always went just back to programming in JS where I didn't have to think about memory. And IO-bound stuff isn't really slowed down by V8 now anyway.

{/if}

## Actually learning Rust

{#if story}
    Then I heard about this small language developed by Mozilla, which won StackOverflow's most loved language for multiple years, even surpassing Typescript which I loved for it's type-safety (`Hello undefined! Goodbye null`). So I figured I'd give it a try.

{/if}

### Resources

{#if story}
    One of the things I had problems with was finding good resources that are easy to understand and short. I don't like youtube videos, I'd much rather read a content I can quickly skim, or read on my way without eating up my limited data plan.

{/if}

Here's a list of resources I found useful:
- [rust book](https://doc.rust-lang.org/book/) - an online book with short chapters about common things people want to do with Rust
- [A gentle intro to Rust](https://stevedonovan.github.io/rust-gentle-intro/) - A short ``book'' that can be read in an hour or two, with a day or two worth of examples if you try them locally. Much more in-depth than this post, but still easy to grasp.
- [r/rust](https://reddit.com/r/rust) - The well-moderated reddit community (quick to search. If you have a problem that will take longer than a single Discord message, post it here so that others are able to find it as well).
- [The discord community](https://discord.gg/rust) - A simple way to quickly ask other developers
- [rust by example](https://doc.rust-lang.org/rust-by-example/index.html) - The sort of thing I'd be going about in here as well, but this is just a quick short intro, that should be your go-to book if you want to learn even more.

### Getting started

Use `rustup`, as specified on [the website](https://rust-lang.org).  
To create a new project, run `cargo init <dir>` (or without `<dir>` when in empty directory).  
The starting point will then be in `src/main.rs`.  
Similar to C, the contents of the main program need to be wrapped in `main`. The difference is that here it doesn't take any arguments, and shouldn't return a number - use `std::env` namespace for that.

### Interesting things to note at the start

#### Everything is scoped

Not just variables, but you can also nest functions and `use`s inside functions and traits. Those won't be accessible outside, and won't be in the code if they're not used. *I think*.

#### Nearly everything is an expression

Not just function calls, but `if`s, `while`s and `for`s as well.

Instead of the usual ternary operator common in other languages, you can just use [`if`](#ifs) directly:

```rust
let var = if something { 1 } else { 2 };
```

Loops (`loop`) return based on `break` call. You can use that to retry an operation until it succeeds.

### Variables

Variables are declared using `let` and are scoped. Type is optional, Rust is exceptional at infering the type (much better so than Typescript).

```rust
let var: usize = 1;
```

Will define `var` of type `usize` (`usize` is a 32 or 64 bit number, depending on architecture).

You can redeclare variables, in which case the previous variable will be dropped (unless referenced, in which case there'd be only the reference and not the original variable available), and the type of the variable will  be changed.

```rust
let var = 1;
let var = "something";
```

### Functions

```rust
fn main(arg: u8) -> u8 {
    // something
    arg
}
```

Functions behave nearly identical to how I'm used to when working in JS, just that they're not actual data types (you can use lambdas for that) and have slightly different syntax.

Arguments work Similarly to Typescript, in that it's `key: type`. Returns type is specified with `->`.

What's interesting to note is that although Rust requires semicolons, if you don't put a semicolon for the last expression, it will be used as return (even without the `return` keyword).

### Ifs

```rust
if something {

} else {

} else if something_else {

}
```

Ifs are pretty basic, I don't think there's that much to explain.  
One interesting thing is that using parentheses when they're not needed is actually na error. You can still use them for explicit execution order:

```rust
if (something || something_else) && something_other {}
```

As previously stated, if can also return a value, which may be used for assignments, arguments, returns or in other places.

```rust
let var = if something { 1 } else { 2 };
```

The curly braces are required.

### Types

Types are either primitives (like numbers and str) or structs (String).  
Nearly the only difference is that primitives are just written as they are to initialize, but complex types require some kind of constructor.

#### Heap vs Stack

Heap:
- slower (still really fast)
- bigger

Stack:


#### Common primitives

Numbers:
- `i8`, `i16`, `i32`, `i64`, `i128` - signed **i**ntegers. Whole numbers, including negative one's. The number indicates it's size in bits.
- `u8`, `u16`, `u32`, `u64`, `u128` - **u**nsigned integers. Whole numbers, starting with zero. Their maximum capacity is doubled, as there's one extra bit available (normally used for sign). The number indicates it's size in bits.
- `f32` and `f64` are for floats. This is what `number` is in the javascript world.

Strings:
- `str` - a simple primitive UTF-8 string (all Rust strings are UTF-8. Invalid UTF-8 strings cannot be used and will throw/panic). Usually used as a pointer (i.e. `&str`)
- `String` - a more complex type (technically not a primitive), stored on the heap.

Arrays:
- `T[]` - arrays have a fixed length (they can have fewer elements if you use `Option<T>` type).

#### Tuples

Tuples can be used to have multiple values with different types (basically an array with multiple types and fixed size).  
Unlike array, they're accesssed directly by the dot notation, i.e. `tuple.0` will get the first item, and tuples don't have methods like `.len()`.  

```rust
let var = (1, "str");
```

An interesting quirk is that you can use `()` (empty tuple) to return "void". Functions that don't have a `return` statement and don't return a value return `()`.

#### Common structs

##### Option&amp;lt;T&amp;gt;

Is an enum (we'll get to how `enum`s work later. They're kind of different from other languages) with either **`Some(T)` or `None`** values.  
To get the value, you can use **`match`** like with other enums, or use **`.unwrap()`** (which will panic if it's `None`).

#### Result&amp;lt;T, E&amp;gt;

Similar to `Option`, but used to handle errors (commonly returned by <abbr title="Input Output">IO</abbr> methods).   
It's values are either `Ok(T)` or `Err(E)`.  
To get the value, you can again use **`match` block or `.unwrap()`**.

For easier use, when a function returns `Result<T, E>`, it can use `?` after calling methods that can return `Result<T, E>` (where `E` must be of compatible type) to return the error `E` (similar to using `.unwrap()`, but instead of panic makes the function return the error).

```rust
fn example() -> Result<(), Error> { // An Error type. For simplicity, you can use String, or you can define your own enum.
    something_that_returns_result()?;
    Ok(()) // returns empty Tuple
}
```

#### Vec&amp;lt;T&ampt;gt;

`Vec`tors are growable arrays stored on the heap.

### Namespace

You can always use the fully qualified name without any imports. Imports are sort of aliases.

```rust
std::env::args()
```

```rust
use std::env;

env::args()
```

```rust
use std::env::args;

args()
```

To select multiple "namespaces", you can use `{}` notation, like:

```rust
use std::env::{args, var};
```

You can also repeat the `use` keyword freely

```rust
use std::env;
use std::env::args;

env::var();
args()
```

Another thing of interest is that you can also use `use` inside functions. Then the library won't be imported if it's not used (i.e. if the function doesn't appear in the code path, for example if you use a mock library for tests and `use` only in tests, it won't be imported when building normally).