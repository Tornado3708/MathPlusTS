import MathPlus from "./MathPlus.js"

declare global {
  interface Window {
    MathPlus?: MathPlus
  }
}