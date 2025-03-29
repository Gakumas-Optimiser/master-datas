export type Rarity = "N" | "R" | "SR" | "SSR"
export type IdolClass = "Sense" | "Logic" | "Anomaly"
export type Skillcard = {
    name: string
    tags: string[]
    customize: {
        kind: string
        grades: {
            cost: number
            effect: string
        }[]
    }[]
    rarity: Rarity
    isExcludes: boolean
    isCopyLimited: boolean
} & (
    | {
          cardType: "Active" | "Mental"
          usablePlan: IdolClass | "Free"
          description: {
              [key in "base" | "plus1" | "plus2" | "plus3"]: {
                  cost: string[]
                  effect: string
              }
          }
      }
    | {
          cardType: "Trouble"
          usablePlan: "Free"
          description: {
              [key in "base"]: {
                  cost: string[]
                  effect: string
              }
          }
      }
)
