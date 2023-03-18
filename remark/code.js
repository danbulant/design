import { createRemarkPlugin } from "@atomiks/mdx-pretty-code";
import fs from "fs";

export const prettyCode = createRemarkPlugin({
    // Options passed to shiki.getHighlighter()
    shikiOptions: {
        // Link to your VS Code theme JSON file
        theme: JSON.parse(
            fs.readFileSync("./shiki/themes/OneDark.json", "utf-8")
        ),
    },
    // These are hooks which allow you to style the node. `node` is an element
    // using JSDOM, so you can apply any CSS.
    onVisitLine(node) {
        // Style a line node.
        node.innerHTML = node.innerHTML
            .replace(/{/g, "&#123;")
            .replace(/}/g, "&#125;");
        Object.assign(node.style, {
            margin: "0 -1.5rem",
            padding: "0 1.5rem",
        });
    },
    onVisitHighlightedLine(node) {
        // Style a highlighted line node.
        Object.assign(node.style, {
            backgroundColor: "rgba(0,0,0,0.1)",
        });
    },
    onVisitHighlightedWord(node) {
        // Style a highlighted word node.
        Object.assign(node.style, {
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "0.25rem",
            borderRadius: "0.25rem",
        });
    },
});
