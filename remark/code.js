import { createRemarkPlugin } from "@atomiks/mdx-pretty-code";
import fs from "fs";

export const prettyCode = createRemarkPlugin({
    // Options passed to shiki.getHighlighter()
    shikiOptions: {
        theme: JSON.parse(
            fs.readFileSync("./shiki/themes/OneDark.json", "utf-8")
        ),
    },
    onVisitLine(node) {
        node.innerHTML = node.innerHTML
            .replace(/{/g, "&#123;")
            .replace(/}/g, "&#125;");
        Object.assign(node.style, {
            margin: "0 -1.5rem",
            padding: "0 1.5rem",
        });
    },
    onVisitHighlightedLine(node) {
        Object.assign(node.style, {
            backgroundColor: "rgba(0,0,0,0.1)",
        });
    },
    onVisitHighlightedWord(node) {
        Object.assign(node.style, {
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "0.25rem",
            borderRadius: "0.25rem",
        });
    },
});
