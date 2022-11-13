import type { Heading, ToC } from '../types'

function makeToc(headings: Heading[], nestedSections: string[]): ToC {
  const toc: ToC = []
  headings.forEach(({ depth, slug, text }, i) => {
    if (depth > 3) return
    if (nestedSections?.includes(slug)) {
      toc.push({
        depth,
        slug,
        text,
        nestedList: headings.slice(i).filter(i => i.depth > 3),
      })

      return
    } else toc.push({ depth, slug, text })
  })
  return toc
}

export { makeToc }
