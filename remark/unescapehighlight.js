import { visit } from "unist-util-visit"

// Allows having highlight in blog posts.

// Very fun, debugging this stuff..
// Dirty, but it works.

// It has the unescape characters because sveltemdx escapes them. It doesn't do that when we use their highlighter - but that
// one doesn't support inline code.
// So we have to unescape those characters back to how they were before, but then escape them again because svelte
// would understand certain characters (namely {}. For some reason, `<>` was fine.) as svelte code.

export function remarkUnescapeHighlight() {
    return (tree, file) => {
        visit(tree, ["code"], (node) => {
            node.value = node.value
                .replace(/&#123;/g, "{")
                .replace(/&#125;/g, "}")
                .replace(/&gt;/g, ">")
                .replace(/&lt;/g, "<")
        });
        visit(tree, ["inlineCode"], (node) => {
            node.value = node.value
                .replace(/&#123;/g, "{")
                .replace(/&#125;/g, "}")
                .replace(/&gt;/g, ">")
                .replace(/&lt;/g, "<")
        });
    }
}

export function remarkEscapeInlineCode() {
    return (tree, file) => {
        visit(tree, ["inlineCode"], (node) => {
            node.value = node.value
                .replace(/{/g, "&#123;")
                .replace(/}/g, "&#125;")
                .replace(/>/g, "&gt;")
                .replace(/</g, "&lt;")
        });
    }
}

export function rehypeEscapeHighlight() {
    function visit(node) {
        if(
            (node.type === "raw" && node.value.startsWith("<pre><code")) ||
            (node.type === "element" && node.tagName === "Components.code") ||
            (node.type === "raw" && node.value.startsWith("<span data-mdx-pretty-code"))) {
            if(node.value) {
                node.value = node.value
                    .replace(/{/g, "&#123;")
                    .replace(/}/g, "&#125;")
            } else {
                node.children.forEach((child) => {
                    if(child.value) {
                        child.value = child.value
                            .replace(/{/g, "&#123;")
                            .replace(/}/g, "&#125;")
                    }
                })
            }
        } else if(node.children) node.children.forEach(visit)
        
        if (node.type === "raw") {
            node.value = node.value
                .replace(/<span style="color:#ABB2BF"> <\/span>/g , " ");
        }
    }

    return (tree, file) => {
        visit(tree);
    }
}