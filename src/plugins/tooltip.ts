import tippy from "tippy.js";

import type { ReferenceElement, Props } from "tippy.js";
import type { Plugin } from "vue";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";
import "tippy.js/animations/shift-away.css";

// https://www.reddit.com/r/vuejs/comments/n5tu6p/comment/gx4popf/
export default {
  install(app, options: Props) {
    app.directive("tooltip", {
      beforeMount(el: ReferenceElement, binding) {
        if (el._tippy) {
          el._tippy.setContent(binding.value);
        } else {
          tippy(el, {
            ...options,
            theme: "translucent",
            animation: "shift-away",
            content: binding.value,
          });
        }
      },
    });
  },
} as Plugin;
