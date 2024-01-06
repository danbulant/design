---
title: Rust basics, from the perspective of a high level programmer
date: 2022-03-17
author: Daniel Bulant
authorIcon: /logo.png
thumbnail: /posts/rust-basics/ferris.webp
bigThumbnail: /posts/rust-basics/ferris.webp
categories: [programming, rust]
description: Rust is a fast memory-safe low level programming language. And here's how I got started with it.
---

<script>
    import Callout from "$lib/components/posts/callout.svelte";
    import { browser } from "$app/environment";

    var story = true;
</script>

{#if browser}
    *I seem to like storytelling a bit too much.*
    <div style="display: flex; align-items: center;">
        <label for="enable_story" style="padding-right: 10px">Enable story</label>
        <input type="checkbox" style="padding: 0; margin: 0;" bind:checked={story} id="enable_story">
    </div>
{/if}

> I really do enjoy reading blog posts like these, so I figured I'd try writing few of my own as well. I hope you'll enjoy it, if so, leave a comment below.

{#if story}
    I first started programming with PHP. Some of it's syntax felt clunky and unnatural, sometimes plainly annoying (why do I have to prefix each variable with `$` when it understands constants without `$` just fine?). I don't really like the language now after learning other languages, but I do like some parts of it, like how it's easy to loop over an array or that it has multiple programming paradigms, from functional to OOP to traits (which I learnt about much later after I stopped using PHP).

    I later moved to JS which looked a lot like C, which I saw everywhere.

    I also did few projects with Java and C#, but I always returned to JS afterwards.

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
- [A gentle intro to Rust](https://stevedonovan.github.io/rust-gentle-intro/ "favicon=https://stevedonovan.github.io/rust-gentle-intro/favicon.png") - A short ``book'' that can be read in an hour or two, with a day or two worth of examples if you try them locally. Much more in-depth than this post, but still easy to grasp.
- [r/rust](https://reddit.com/r/rust) - The well-moderated reddit community (quick to search. If you have a problem that will take longer than a single Discord message, post it here so that others are able to find it as well).
- [The discord community](https://discord.gg/rust) - A simple way to quickly ask other developers
- [rust by example](https://doc.rust-lang.org/rust-by-example/index.html) - The sort of thing I'd be going about in here as well, but this is just a quick short intro, that should be your go-to book if you want to learn even more.

### Getting started

Use `rustup`, as specified on [the website](https://rust-lang.org).  
To create a new project, run `cargo init <dir>` (or without `<dir>` when in empty directory).  
The starting point will then be in `src/main.rs`.  
Similar to C, the contents of the main program need to be wrapped in `main`. The difference is that here it doesn't take any arguments, and shouldn't return a number - use `std::env` namespace for that.

Also, I recommend using CLion with the Rust extension. VSCode does have Rust extension, but it works poorly in comparison. Other JetBrains editors work as well, but CLion has some native features (like debugging) that the other editors don't. It's free for students with the GitHub education pack.

### Interesting things to note at the start

#### Everything is scoped

Not just variables, but you can also nest functions and `use{:rust}`s inside functions and traits. Those won't be accessible outside, and won't be in the code if they're not used. *Usually*.

#### Naming scheme is enforced

Variables and functions/methods need to be only lowercase letters (and numbers, but cannot start with one) with underscore (i.e. snake_case).  
Structs (and other types), enums (including enum values) and traits (but not their functions/methods) need to start with uppercase letters and cannot contain any underscore.

It's not forcibly enforced everywhere - the program will usually run, but you'll get a warning, and you generally want to avoid those (warnings are there for a reason).

#### There's no increment operator

Actually, there is: `i += 1{:rust}`. Use that. In the same way as assignment, this also returns the value post-assignment (i.e. sets i to i + 1, and then returns i).

The reason for not having fancy `i++{:js}` (or it's siblings `++i{:js}`, `i--{:js}` and `--i{:js}`) is that it's confusing.

Can you reliably tell what this does (especially when language is not specified)?
```js
a[i++ + ++i] = i++ + ++i + a[++i]
```

The thing is, until recently (or maybe even now? I just read that on SO), the actual behaviour of this was undefined, meaning it could change between different compilers (or maybe even versions of the same compiler).  
To combat that and improve readability of code (that's a big thing in Rust, often values readability and verbosity over saving keytypes), Rust only has `i += 1{:rust}`, which nearly everyone can tell will increment the variable `i` and return it's final statement.  
So you don't have to know that `i++{:js}` actually returns the original value, not the new one, and increments.

Oh and also, operator overloads are a thing using traits (for those wondering if they exist, one of the things I miss with JS). We won't get to that here though.

#### Nearly everything is an expression

Not just function calls, but [`if{:rust}`](#ifs)s, [`while{:rust}`](#while)s, [`match{:rust}`](#match)s and [`for{:rust}`](#for)s as well.

Instead of the usual ternary operator common in other languages, you can just use [`if{:rust}`](#ifs) directly:

```rust
let var = if something { 1 } else { 2 };
```

Loops (`loop{:rust}`) return based on `break{:rust}` call. You can use that to retry an operation until it succeeds.

### Variables

Variables are declared using `let{:rust}` and are scoped. Type is optional, Rust is exceptional at infering the type (it's much better at it than Typescript).

```rust
let var: usize = 1;
```

Will define `var{:rust}` of type `usize{:rust}` (`usize{:rust}` is an unsigned integer with 32 or 64 bits, depending on architecture).

You can redeclare variables, in which case the previous variable will be dropped (unless referenced, in which case there'd be only the reference and not the original variable available), and the type of the variable will  be changed.

```rust
let var = 1;
let var = "something";
```

Variables are immutable by default. If you want to change them later, use the `mut{:rust}` keyword after `let{:rust}`.

```rust
let var = 1;
var = 2; // error! cannot borrow variable muttable
// (i.e. immutable variable cannot be mutated)
```

```rust
let mut var = 1;
var = 2;
```

### Functions

```rust
fn main(arg: u8) -> u8 {
    // something
    arg
}
```

Functions behave nearly identical to how I'm used to when working in JS, just that they're not actual data types (you can use lambdas for that) and have slightly different syntax.

Arguments work Similarly to Typescript, in that it's `key: type{:rust}`. Returns type is specified with `->`.

What's interesting to note is that although Rust requires semicolons, if you don't put a semicolon for the last expression, it will be used as return (even without the `return{:rust}` keyword).

### Ifs

```rust
if something {

} else {

} else if something_else {

}
```

Ifs are pretty basic, I don't think there's that much to explain.  
One interesting thing is that using parentheses when they're not needed is actually an error. You can still use them for explicit execution order:

```rust
if (something || something_else) && something_other {}
```

As previously stated, if can also return a value, which may be used for assignments, arguments, returns or in other places.

```rust
let var = if something { 1 } else { 2 };
```

The curly braces are required.

You can combine this (stating the obvious):

```rust
fn fun(arg: bool) -> u8 {
    if arg { 1 } else { 0 }
}
```

### Types

Types are either primitives (like numbers and str) or structs (String).  
Nearly the only difference is that primitives are just written as they are to initialize, but complex types require some kind of constructor.

#### Heap vs Stack

(as half of this article, this is simplified)  
One of the weird things that I didn't have to think about before. (AFAIK every object in JS is stored on the heap, only primitives are on stack)

Heap:
- slower (still really fast)
- bigger

Stack:
- faster
- smaller

Primitives and basic [`struct{:rust}`](#declaring-structs)s are stored on the stack. To get values onto heap, you can use [`Box<T>{:rust}`](#boxlttgt). [`Vec<T>{:rust}`](#veclttgt) also puts it's values onto heap.

You may need to use heap if you're using a bit more RAM or if you need to use [`enum{:rust}`](#declaring-enums)s with values in structs (basically, if rust complains that a size is unknown at compile time, easiest option is to somehow put it onto heap).  
If you see a stackoverflow, you're using too much stack memory. Try [`box{:rust}`](#boxlttgt)ing some bigger (and perhaps rarely used) values. Note that while heap is slower, it's still plenty fast (as for example almost all JS values are stored on heap, it will always be faster with rust).

#### Common primitives

Numbers:
- `i8{:rust}`, `i16{:rust}`, `i32{:rust}`, `i64{:rust}`, `i128{:rust}` - signed **i**ntegers. Whole numbers, including negative one's. The number indicates it's size in bits.
- `u8{:rust}`, `u16{:rust}`, `u32{:rust}`, `u64{:rust}`, `u128{:rust}` - **u**nsigned integers. Whole numbers, starting with zero. Their maximum capacity is doubled, as there's one extra bit available (normally used for sign). The number indicates it's size in bits.
- `f32{:rust}` and `f64{:rust}` are for floats. This is what `number{:.entity.name.class}` is in the javascript world.

Strings:
- `str{:rust}` - a simple primitive UTF-8 string (all Rust strings are UTF-8. Invalid UTF-8 strings cannot be used and will throw/panic). Usually used as a pointer (i.e. `&str{:rust}`)
- `String{:rust}` - a more complex type (technically not a primitive), stored on the heap.

Main difference is that you can manipulate `String{:rust}`s but not `str{:rust}`s.

Arrays:
- `T[]{:rust}` - arrays have a fixed length (they can have fewer elements if you use `Option<T>{:rust}` type).

#### Tuples

Tuples can be used to have multiple values with different types (basically an array with multiple types and fixed size).  
Unlike array, they're accesssed directly by the dot notation, i.e. `tuple.0{:rust}` will get the first item, and tuples don't have methods like `.len(){:rust}`.  

```rust
let var = (1, "str");
```

An interesting quirk is that you can use `(){:rust}` (empty tuple) to return "void". Functions that don't have a `return{:rust}` statement and don't return a value return `(){:rust}`.

#### Common structs

##### Option&amp;lt;T&amp;gt;

Is an enum (we'll get to how `enum{:rust}`s work later. They're kind of different from other languages) with either **`Some(T){:rust}` or `None{:rust}`** values.  
To get the value, you can use **[`match{:rust}`](#match)** like with other enums, or use **`.unwrap(){:rust}`** (which will panic if it's `None{:rust}`).

See also [Declaring enums](#declaring-enums).

##### Result&amp;lt;T, E&amp;gt;

Similar to `Option{:rust}`, but used to handle errors (commonly returned by <abbr title="Input Output">IO</abbr> methods).  
It's values are either `Ok(T){:rust}` or `Err(E){:rust}`.  
To get the value, you can again use **[`match{:rust}`](#match) block or `.unwrap(){:rust}`**.

For easier use, when a function returns `Result<T, E>{:rust}`, it can use `?` after calling methods that can return `Result<T, E>{:rust}` (where `E{:rust}` must be of compatible type) to return the error `E{:rust}` (similar to using `.unwrap(){:rust}`, but instead of panic makes the function return the error, in a sort of bubbling manner similar to other programming languages).

```rust
fn example() -> Result<(), Error> { // An Error type. For simplicity, you can use String, or you can define your own enum.
    something_that_returns_result()?;
    Ok(()) // returns empty Tuple
}
```

If a function can error out, use `Result{:rust}` instead of `panic{:rust}`s - `panic{:rust}` cannot be easily handled and should only be used for catastrophic irrecoverable errors (or when your too lazy to implement proper error handling using `Result{:rust}` for pet projects).

##### Vec&amp;lt;T&amp;gt;

`Vec{:rust}`tors are growable arrays whose values are stored on the heap.

Common methods like `.push(){:rust}`, `.pop(){:rust}` etc. are available. See [rust doc](https://doc.rust-lang.org/std/vec/struct.Vec.html).

Javascript arrays behave sort of like `Vec{:rust}` - they have a set limit, and when you reach the limit, it grows (usually doubles the size) the array. The growing usually works by reserving new memory for the array size, copying all elements, and then `free{:rust}`ing the old memory (or `drop{:rust}` in rust terms).

`Vec` stores it's current size, it's reserved size, and an array of pointers to `Box{:rust}`ed values. Meaning, there's no need (and in fact hurts performance) to do `Vec<Box<T>>{:rust}`.

##### Box&amp;lt;T&amp;gt;

Stores `T` on heap. Useful for using [`enum`s](#declaring-enums) in structs, or to free up stack space.

See also [heap vs stack](#heap-vs-stack).

#### Declaring structs

Structs are kind of objects, except their size is static.  
Structs can be declared in a number of ways.

- use [Tuple](#tuples) as declaration (this works similar to alias of tuple)

```rust
struct Something(u8, u16); // a struct with 2 numbers, one unsigned 8 bit, the other one unsigned 16 bit
```

- use ``object'' notation (similar to how classes or objects are declared)

```rust
struct Something {
    value: u8,
    another_value: u16
}
```

- use structs as an alias

```rust
struct Something = u8; // a single value
```

As stated earlier, `struct` **sizes are static**. This means you cannot use [`enum{:rust}`s](#declaring-enums) with self-referencing (recursive) values directly in `struct{:rust}`s.  
One of possible ``workarounds'' is to use the [heap](#heap-vs-stack) for actually storing the values, for example by using [Box&amp;lt;T&amp;gt;](#boxlttgt).

```rust
struct Something {
    variable: Box<SomeEnum>
}
```

Possible reason for this is when you try to create an `enum{:rust}` whose value can be the struct defined, but then mention the `enum{:rust}` (directly or indirectly) in the struct.

```rust
struct MaybeRecursive {
    possibly_self: Option<MaybeRecursive> // error!
}
struct MaybeRecursive {
    possibly_self: Option<Box<MaybeRecursive>> // fine
}
```

{#if story}
    This is something I hit when trying to create an abstract syntax tree for my shell.

{/if}

To instantiate the struct, use the following notation (kind of similar to defining arrays in <abbr title="See sharp">C#</abbr>):

```rust
Something { variable: 1, another_variable: 1234}
```

### Declaring enums

I think an example is worth much more than text, so:

```rust
enum EnumName {
    First,
    Second
}
```

With set number (for example when serializing or deserializing number):
```rust
enum EnumName {
    First = 1,
    Second // auto incremented
}
```

Now the more powerful ones:
```rust
enum EnumName {
    WithValue(u8),
    WithMultipleValues(u8, u64, SomeStruct),
    CanBeSelf(EnumName),
    Empty
}
```

You can "extract" the values using [`match{:rust}`](#match).


### Match

*one of the most powerful features of Rust*

Matches are switches on steroids. You can use them as normal switches, with the only exception that (to prevent common bugs) all cases must be covered.

```rust
let var = 1;
match var {
    1 => println!("it's 1"),
    2 => println!("it's 2"),
    // following required if the list is not exhaustive.
    // - from type inference `var` will be u8 which has a tad more values
    _ => println!("it's not 1 or 2")
}
```

You can also match ranges

```rust
match var {
    1..=2 => println("it's between 1 and 2 (both inclusive)"),
    3..5 => println!("it's between 3 and 4 (inclusive; .. means up to the value on right)"),
    _ => println!("it's something else")
}
```

You can also do nothing (brackets are also used for multiline code in `match{:rust}`)

```rust
match var {
    _ => {}
}
```

You can use this to safely `unwrap{:rust}` [`Result<T, E>{:rust}`](#resultltt-egt)s and [`Option<T>{:rust}`](#optionlttgt)s, and to get values from other enums

```rust
let option: Option<u8> = Some(1);
match option {
    Some(i) => println!("It contains {i}"),
    None => println!("it's empty :c")
    // notice we don't need _ here, as Some and None are the only possible values of option, thus making this list exhaustive
}
```

Rust will complain if you don't use `i{:rust}` (or the other values). You can simply use `_{:rust}` in their place.

```rust
match option {
    Some(_) => println!("yes"),
    None => println!("no")
}
```

Match is also an expression:

```rust
let option: Option<u8> = Some(1);
let surely = match option {
    Some(i) => i,
    None => 0
}
println!("{surely}");
```

Although, maybe try looking into the documentation for [`Option{:rust}`](https://doc.rust-lang.org/std/option/) (or view your IDEs completions for available traits/methods) -
you might notice that you can use `.unwrap_or(val){:rust}` instead of typing this (the above match is identical to `.unwrap_or(0){:rust}`).

### Loops

The simplest of all the loops. Just use `loop{:rust}`.

```rust
loop {
    if something { break }
}
```

It will run the code until `break{:rust}` is used (or `return{:rust}` which also returns from the parent function).

### For

The fanciest of the loops. There's no classic `for{:rust}` loop like in other languages (you can do it yourself with `while{:rust}`), but it's so easy to write something like that, yet easier to understand.

```rust
for i in 1..3 {} // for(let i = 1; i < 3; i++) // i++ is not a thing, see things to note
for i in 1..=3 {} // for(let i = 1; i <= 3; i++)
for i in 1..=var {} // for(let i = 1; i <= var; i++)
for i in array_or_vec {} // for(let i of array_or_vec) in JS
// again, as most other things, uses a trait, here named "iterator"
// for some types, you need to call `.iter()` or `.into_iter()`.
// Rust compiler will usually tell you this.
for i in something.iter() {}
```

### While

Quite simple loop. Unlike other languages, there's no `do ... while{:rust}`, only the basic `while{:rust}`.

```rust
while condition {
    looped();
}
```

Syntax is the same as for [if](#ifs), just that the contents are looped.

<Callout color="#139ab4" closed>
    <span slot="title">There is a <span style="color:#C678DD">`do ... while`</span> pattern</span>

You can (ab)use Rusts syntax to have the pattern of `do ... while{:rust}`:

```rust
while {
   println!("doing while true");
   i -= 1;
   i < 5
} {}
```

This uses the fact that `{}` code blocks are in fact expressions.  
And when you don't have `;` at the last line, it's used as the result value of the expression.

So, this all runs in the "check" phase of while, but only the last line is used as a boolean whether to run it again.  
The actual code of while loop is empty - so it will just run the check again.

This has a slight issue with using `break{:rust}` or `continue{:rust}`, in that you can't use them.
But fear not! You can abuse the syntax even more:

```rust
while ({|| {
   printn!("while with continue/break");
   if should_break { return false }; 
   if should_continue { return true };
   something();
   check()
})() {}
```

`||` is a lambda (ha I didn't get to those in the original blog post at all) definition. Add a couple of brackets to run the lambda inline.  
You can read more about them in the rust book - for a JS dev, the following is equivalent:

| js | rust |
| -- | ---- |
| `() => {}{:js}` | `\|\| {}{:rust}` |
| `() => 1{:js}` | `\|\| 1{:rust}` |
| `a => a{:js}` | `\|a\| a{:rust}`|

Please not that I don't recommend using this syntax as it's kinda confusing. Use `loop{:rust}` with `if{:rust}` instead.

</Callout>

### Printing

For printing, you can use `print!{:rust}` and `println!{:rust}`.  
The `!{:.entity.name.function}` means it's a macro (i.e. a shortcut that expands to something), but you don't really need to think about that much. Another common macro is `vec![]{:rust}` which creates a [`Vec<T>{:rust}`](#veclttgt) from an array (values between `[]{:rust}`).

Those macros have a simple template system.

- To simply print a new line, write `println!(){:rust}`.
- To print a single static string, write `print!("something"){:rust}`. `ln{:.entity.name.function}` in `println!{:rust}` means line, so it adds a newline (`\n`) symbol. `console.log(){:js}` adds that newline by default.
- To print a variable which implements the `Display{:rust}` trait (most primitives do so), use `print!("{variable}"){:rust}`.
- To print a variable which implements the `Debug{:rust}` trait (can be derived more easily than Display), use `print!("{variable:?}"){:rust}`.
- To print something more complex which implements `Display{:rust}` trait, use `print!("{}", variable){:rust}`.
- To print something more complex which implements `Debug{:rust}` trait, use `print!("{:?}", variable){:rust}`.

### Traits

Oh, the holy trait system.  
*Wait even [PHP has this](https://www.php.net/manual/en/language.oop5.traits.php)?*

Traits are one of the hardest ideas in Rust to grasp, yet one of the most powerful ones.  
Instead of being inheritance based (like [<abbr title="Object Oriented Programming">OOP</abbr>](https://www.wikipedia.com/en/Object-oriented_programming), or JavaScript's prototype oriented programming), Rust throws it all out and instead embraces [duck typing](https://www.wikipedia.com/en/Duck_typing) (i.e. if it quacks it's a duck).

For every type, there can be exactly one 'default' (or nameless) trait, which can be implemented only in the same module. Those are usually unique methods for that type.  
For everything else, there are named traits. Example:

```rust
trait Duck {
    fn quack(&self) -> String;
    /// returns if the duck can jump
    fn can_jump(&self) -> bool { // default trait implementation. Code cannot have any assumptions about the type of self.
        false // by default duck cannot jump
    }
}

struct Dog(); // a struct with empty tuple

impl Dog { // a nameless default trait. 
    fn bark(&self) -> String { String::from("bark!") }
}

impl Duck for Dog { // implement Duck trait for Dog type (struct)
    fn quack(&self) -> String { String::from("quark!") } // dog kind of quacks differently
}

let dog = Dog {};
dog.bark();
dog.quack();
```

First, we define the trait (Interface from the <abbr title="Object Oriented Programming">OOP</abbr> language, except only methods/functions).  
Then we can implement the trait for the given type (`Dog{:rust}` in our case).

Some traits can be implemented automatically for you. Common example is `Display{:rust}` and `Debug{:rust}` traits. Their requirement is that the types used in the struct have to implement `Display{:rust}` and `Debug{:rust}` respectively.

```rust
#[derive(Display,Debug)]
struct Something {
    var: u8
}

println!("{:?}", Something { var: 1 });
```

#### Scopes

Traits are scoped, and are scoped independently of the type it implements. Meaning you can use a type, but not a trait implementation (for example if said implementation is coming from another library than the type itself). You can then `use{:rust}` the implementation.


#### The self

`self{:rust}` in traits refers to the type it implements.  
**`&self{:rust}` is an alias to `self: &Self{:rust}`**, where **`Self{:rust}` refers to the type** (so `self: &Dog{:rust}` in the case above).  
`self{:rust}` is also an alias to `self: Self{:rust}`, but the difference is that this moves the variable (consumes it, and the variable is no longer available outside).  

When there function definiton doesn't start with `self{:rust}`, `&self{:rust}` or `&mut self{:rust}` (`&mut self{:rust}` is the same as `&self{:rust}` except with mutable reference), it's considered a static method.  
Traits can still define and implement static methods like any other methods.  
A common static method is `new{:rust}`, which is used to create a new instance of the type/struct:

```rust
impl Something {
    fn new() -> Something {
        Something { x: 1 }
    }
}

...

let var = Something::new();
```

See also [Declaring structs](#declaring-structs)

### Pointers

*and the important magic of Rust.*

Pointers are actually pretty easy to understand, even if coming from higher level languages. I still do make mistakes with them, a lot.

`&A{:rust}` points to `A{:rust}`, and I can use it quite similarly, I just have to make sure that `A{:rust}` exists for as long as `&A{:rust}` exists, since a pointer to nowhere is not a good idea.

Rust prevents that by statically checking at compile time if the use is valid. It automatically frees variables that are out of scope, and doesn't allow pointers to outlive the original variable.  
Another safety guarantee is that **only one mutable pointer can exist (and no other pointer can exist)** at a time.

This means that this (in my eyes valid) code is invalid:
```rust
let a = 1;
let b = &a;
let c = &mut a;
println!("{b}"); // Error! there can only be one mutable pointer
c = 1;
```

That's kinda all there is to it. Just that the **original variable must always be in scope for the pointers to be accessible**.  
Using pointers in structs are kind of problematic as the compiler generally doesn't like it (because structs often outlive the original variable). I usually just either **transfer ownership or clone** (`.clone(){:rust}`, part of `Clone{:rust}` trait. Can be `derived{:rust}`.).  
Sometimes, some functions require only pointers and not ownership. You can just prepend the value with `&{:rust}` (or `&mut{:rust}`) to make it work.

```rust
something(&a);
```

There can also be double, triple and... pointers, but those are rare and generally just make it harder to work with.

You also don't need to care about freeing the variable, rust frees it for you when it's out of scope.

### Namespace

You can always use the fully qualified name without any imports. Imports are sort of aliases.

```rust
std::env::args()
```
---
```rust
use std::env;

env::args()
```
---
```rust
use std::env::args;

args()
```

To select multiple "namespaces", you can use `{}` notation, like:

```rust
use std::env::{args, var};
```

You can also repeat the `use{:rust}` keyword freely

```rust
use std::env;
use std::env::args;

env::var();
args()
```

Another thing of interest is that you can also use `use{:rust}` inside functions. Then the library won't be imported if it's not used (i.e. if the function doesn't appear in the code path, for example if you use a mock library for tests and `use{:rust}` only in tests, it won't be imported when building normally).

```rust
fn test() {
    use std::env;
    env::var();
}
```

I don't recommend using that for normal code paths though, use global imports instead for readability.

### Publicity

Now that we've talked about namespaces, let's talk publicity.

Essentially, everything's private by default to the file it's created in.
- traits, including their methods
- structs, including their members
- enums (their members inherit the publicity of the enum, which kind of makes sense, see [Match](#match))
- functions
- trait implementations depend on the trait and struct it implements, i.e. if both of them are public then it's public as well.

To make them public (i.e. accessible outside the file), use `pub{:rust}` keyword.

```rust
pub struct Something {
    pub letter: char
}
pub trait CustomTrait { ... }
pub fn method() {}
```

### Using multiple files

Oh well, I do sometimes miss the ol' `require("./file"){:js}`.

To "import" a file, use the `mod{:rust}` directive. Crates downloaded via `cargo` are imported automatically.

`main.rs`
```rust
mod my;

fn main() {
    my::function();
    // or
    use my::function;
    function();
}
```
`my.rs`
```rust
pub fn function() {
    println!("function");
}
```

You can also re-export a file using `pub mod{:rust}`. Most existing rust code does this to support folders:

`main.rs`
```rust
mod my;
use my::file;

fn main() {
    file::function();
}
```

`my/mod.rs` - the `mod.rs` name is special, kind of like `index.js`
```rust
pub mod file;
```

`my/file.rs`
```rust
pub fn function() {
    println!("function");
}
```

For how `println!{:rust}` works, see [printing](#printing).

### Writing documentation

To write documentation, simply use three `/`. In some IDEs, they'll get highlighted differently (my CLion setup has it slightly brighter).  
Works kind of similarly to JSDoc, except that types cannot be annotated explicitly, as they're set in code anyway.  
They must preceed the thing you want to document. You can have multiple lines.

```rust
/// a description of var
let var = "something";
```

---

Thanks for reading this {story ? "little story (with some documentation)" : "post"}. Hope that you learned something (which I did, even during writing of this post).

*no crabs were harmed in the making of this post. I'm not affiliated with any of the mentioned products or companies.*
