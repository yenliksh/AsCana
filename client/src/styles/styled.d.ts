// src/styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      // Add other colors if needed
    };
    spacing: {
      s: number;
      m: number;
      l: number;
    };
    fontSizes: {
      small: number;
      medium: number;
      large: number;
    };
    borderRadius: {
      s: number;
      m: number;
      l: number;
    };
  }
}
