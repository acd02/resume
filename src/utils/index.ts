import type { Heading, ToC } from '../types'

function makeToc(headings: Heading[]): ToC {
  return headings.slice().reduce<ToC>((acc, cur, i, self) => {
    const nextElementDepth = self.at(i + 1)?.depth ?? -1
    let nestedItemsToDelete = 0

    if (nextElementDepth > cur.depth) {
      const depth = nextElementDepth

      for (let j = i + 1; j < self.length; j++) {
        if ((self.at(j)?.depth ?? -1) >= depth) {
          nestedItemsToDelete++
        } else break
      }

      acc.push({
        ...cur,
        nestedList: makeToc(self.splice(i + 1, nestedItemsToDelete)),
      })

      return acc
    }

    acc.push(cur)

    return acc
  }, [])
}

export { makeToc }
