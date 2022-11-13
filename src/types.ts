interface Heading {
  depth: number
  slug: string
  text: string
}

type ToC = (Heading & { nestedList?: Heading[] })[]

export type { Heading, ToC }
