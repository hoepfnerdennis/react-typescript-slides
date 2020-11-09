import { themes } from 'mdx-deck'

export default {
  ...themes.syntaxHighlighterPrism,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#08f',
    secondary: '#f0f',
    darkgray: '#333',
  },
  styles: {
    pre: {
      bg: 'lightgray',
      padding: '2rem',
      borderRadius: '20px'
    }
  },
}