import { visit } from "unist-util-visit"

export function remarkUnescapeHighlight() {
    return (tree, file) => {
        console.log(1, file.filename, tree);
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
        console.log(2, file.filename, tree);
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
        console.log(3, file.filename, tree);
        visit(tree);
    }
}