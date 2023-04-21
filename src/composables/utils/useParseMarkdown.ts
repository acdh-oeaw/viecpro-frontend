import { marked } from 'marked';
import type { Ref } from 'vue';

export default function useParseMarkdown(filepath: string, ref: Ref<string>) {
  fetch(filepath)
    .then((result) => {
      return result.text();
    })
    .then((text) => {
      console.log('raw text', text);
      const replaced_text = text.replace('{', '[').replace('}', ']');
      console.log('replaced text', replaced_text);
      return replaced_text;
    })
    // .then((text) => {})
    .then((res) => {
      ref.value = marked.parse(res);
    });
}
