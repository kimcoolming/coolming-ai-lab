import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#4f46e5",
          secondary: "#64748b",
          background: "#f6f7fb",
          surface: "#ffffff",
          "surface-variant": "#eef2ff",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#8b5cf6",
          secondary: "#94a3b8",
          background: "#0b1220",
          surface: "#111827",
          "surface-variant": "#1e293b",
        },
      },
    },
  },
});
