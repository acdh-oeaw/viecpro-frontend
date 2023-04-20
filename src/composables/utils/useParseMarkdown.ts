import { marked } from 'marked';
import type { Ref } from 'vue';

export default function useParseMarkdown(filepath: string, ref: Ref<string>) {
  fetch(filepath)
    .then((result) => result.text())
    .then((text) => (ref.value = marked.parse(text)));
}
