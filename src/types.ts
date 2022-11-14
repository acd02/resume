interface Heading {
  depth: number
  slug: string
  text: string
}

type ToC = (Heading & { nestedList?: ToC })[]

export type { Heading, ToC }
