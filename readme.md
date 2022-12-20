## Language Literals

Language Literal syntax highlighting support for ES6 tagged templates. This is a hard-forked variation of [vscode-comment-tagged-templates](https://github.com/mjbvz/vscode-comment-tagged-templates) that supports a couple of tag named literals opposed to comment annotated literals.

## Usage

This extension was developed for a specific use case. It's main purpose is to provide syntax highlighting, it does not support intelliSense and you will need to use it together (or not?) with a supporting module. The [language-literals](https://github.com/panoply/language-literals) module provided named export de-dentation features to string input and exists as an example of where you'd employ this solution.

```bash
pnpm add language-literals
```

<!-- prettier-ignore -->
```js
import { html, ts, md } from "language-literals";

html`
  <div>
    Hello World!
  </div>
`;

ts`
  const x: string = 'foo'
`;

md`
  # Title

  **Bold** or _italic_
`;

// etc etc

```

## Supported Languages

Below are the supported language injections:

| Language   | Literal Expression |
| ---------- | ------------------ |
| HTML       | `html\``           |
| XML        | `xml\``            |
| CSS        | `css\``            |
| SCSS       | `scss\``           |
| SASS       | `xml\``            |
| JSON       | `json\``           |
| JSONC      | `jsonc\``          |
| JavaScript | `js\``             |
| TypeScript | `ts\``             |
| YAML       | `yaml\``           |
| Markdown   | `md\``             |
| JSX        | `jsx\``            |
| TSX        | `tsx\``            |
