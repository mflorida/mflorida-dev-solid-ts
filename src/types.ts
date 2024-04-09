import { JSX } from 'solid-js';

export type JSXElement =
  | JSX.Element
  | Element
  | DocumentFragment
  | string
  | undefined
  | null

export type Header = {
  name: JSXElement,
  role: JSXElement,
  tooltip?: string,
}
