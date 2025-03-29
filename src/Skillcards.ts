import { Skillcard } from "./types"

export const Skillcards = [
    {
        name: "アピールの基本",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+9"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+14"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+14"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "パラメータ+15"
            }
        },
        tags: ["パラメータ"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Free"
    },
    {
        name: "ポーズの基本",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+2\n元気+2"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+6\n元気+4"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+8\n元気+5"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+10\n元気+6"
            }
        },
        tags: ["パラメータ", "元気"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Free"
    },
    {
        name: "表現の基本",
        description: {
            base: {
                cost: [],
                effect: "元気+4\n（レッスン中1回）"
            },
            plus1: {
                cost: [],
                effect: "元気+7\n（レッスン中1回）"
            },
            plus2: {
                cost: [],
                effect: "元気+8\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "元気+10\n（レッスン中1回）"
            }
        },
        tags: ["元気"],
        customize: [],
        rarity: "N",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "気合十分！",
        description: {
            base: {
                cost: [],
                effect: "元気+2\n消費体力減少2ターン"
            },
            plus1: {
                cost: [],
                effect: "元気+2\n消費体力減少3ターン"
            },
            plus2: {
                cost: [],
                effect: "元気+4\n消費体力減少3ターン"
            },
            plus3: {
                cost: [],
                effect: "元気+6\n消費体力減少3ターン"
            }
        },
        tags: ["元気", "消費体力減少"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+6"
                    }
                ]
            },
            {
                kind: "消費体力減少+",
                grades: [
                    {
                        cost: 40,
                        effect: "消費体力減少4ターン"
                    }
                ]
            },
            {
                kind: "開始時手札に入る",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "ファーストステップ",
        description: {
            base: {
                cost: [],
                effect: "元気+3\n体力が50%以上の場合、消費体力削減1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: [],
                effect: "元気+6\n体力が50%以上の場合、消費体力削減1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: [],
                effect: "元気+8\n体力が50%以上の場合、消費体力削減1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: [],
                effect: "元気+9\n体力が50%以上の場合、消費体力削減1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+10"
                    }
                ]
            },
            {
                kind: "開始時手札に入る",
                grades: [
                    {
                        cost: 70,
                        effect: "レッスン開始時手札に入る"
                    }
                ]
            },
            {
                kind: "パラメータ追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "前途洋々",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+8\n元気+7"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+12\n元気+10"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+13\n元気+10"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+13\n元気+10"
            }
        },
        tags: ["パラメータ", "元気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+14"
                    }
                ]
            },
            {
                kind: "パラメータ上昇回数+",
                grades: [
                    {
                        cost: 100,
                        effect: "パラメータ+12(2回)"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+23"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Free"
    },
    {
        name: "アイドル宣言",
        description: {
            base: {
                cost: ["体力消費1"],
                effect: "スキルカード使用数追加+1\nスキルカードを2枚引く\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: [],
                effect: "スキルカード使用数追加+1\nスキルカードを2枚引く\n消費体力減少1ターン\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: [],
                effect: "スキルカード使用数追加+1\nスキルカードを2枚引く\n消費体力減少2ターン\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: [],
                effect: "スキルカード使用数追加+1\nスキルカードを2枚引く\n消費体力減少3ターン\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["スキルカード使用数追加", "消費体力減少"],
        customize: [
            {
                kind: "消費体力減少+",
                grades: [
                    {
                        cost: 70,
                        effect: "消費体力減少3ターン"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気＋4"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "ハイテンション",
        description: {
            base: {
                cost: [],
                effect: "元気+11\n元気増加無効2ターン\n消費体力減少3ターン\n（レッスン中1回）"
            },
            plus1: {
                cost: [],
                effect: "元気+13\n元気増加無効2ターン\n消費体力減少4ターン\n（レッスン中1回）"
            },
            plus2: {
                cost: [],
                effect: "元気+15\n元気増加無効2ターン\n消費体力減少4ターン\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "元気+17\n元気増加無効2ターン\n消費体力減少4ターン\n（レッスン中1回）"
            }
        },
        tags: ["元気", "元気増加無効", "消費体力減少"],
        customize: [
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+17"
                    }
                ]
            },
            {
                kind: "消費体力減少+",
                grades: [
                    {
                        cost: 70,
                        effect: "消費体力減少7ターン"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "テレビ出演",
        description: {
            base: {
                cost: ["体力/元気-1"],
                effect: "元気+3\n消費体力減少4ターン\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-1"],
                effect: "元気+5\n消費体力減少5ターン\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "元気+8\n消費体力減少5ターン\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+11\n消費体力減少5ターン\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気", "消費体力減少"],
        customize: [
            {
                kind: "スキルカード使用数+",
                grades: [
                    {
                        cost: 100,
                        effect: "スキルカード使用数追加+1"
                    }
                ]
            },
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "叶えたい夢",
        description: {
            base: {
                cost: ["体力消費1"],
                effect: "元気+8\n消費体力削減1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力消費1"],
                effect: "元気+9\n消費体力削減2\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力消費1"],
                effect: "元気+12\n消費体力削減2\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力消費1"],
                effect: "元気+15\n消費体力削減2\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+4\n〔2回目の元気を追加〕"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+13"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "アイドル魂",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "レッスン開始時手札に入る\n元気+6\n低下状態無効(1回)\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "レッスン開始時手札に入る\n元気+6\n低下状態無効(1回)\n次のターン、手札をすべてレッスン中強化\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "レッスン開始時手札に入る\n元気+6\n低下状態無効(1回)\n次のターン、手札をすべてレッスン中強化\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: [],
                effect: "レッスン開始時手札に入る\n元気+6\n低下状態無効(1回)\n次のターン、手札をすべてレッスン中強化\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気", "スキルカード使用数追加"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+15"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "0"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "仕切り直し",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "手札をすべて入れ替える\n消費体力減少4ターン\nスキルカード使用数追加+1\nスキルカードを2枚引く\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "手札をすべて入れ替える\n消費体力減少4ターン\nスキルカード使用数追加+1\nスキルカードを2枚引く\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "手札をすべて入れ替える\n消費体力減少4ターン\nスキルカード使用数追加+1\nスキルカードを2枚引く\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: [],
                effect: "手札をすべて入れ替える\n消費体力減少4ターン\nスキルカード使用数追加+1\nスキルカードを2枚引く\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["消費体力減少", "スキルカード使用数追加"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "0"
                    }
                ]
            },
            {
                kind: "消費体力減少+",
                grades: [
                    {
                        cost: 70,
                        effect: "消費体力減少6ターン"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Free"
    },
    {
        name: "挑戦",
        description: {
            base: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\nパラメータ+25\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\nパラメータ+37\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\nパラメータ+44\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\nパラメータ+50\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ"],
        customize: [],
        rarity: "N",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "試行錯誤",
        description: {
            base: {
                cost: ["体力/元気-7"],
                effect: "パラメータ+8(2回)\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+10(2回)\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+10(2回)\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+11(2回)\n（レッスン中1回）"
            }
        },
        tags: [],
        customize: [],
        rarity: "N",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "振る舞いの基本",
        description: {
            base: {
                cost: ["体力/元気-1"],
                effect: "元気+1\n好調2ターン"
            },
            plus1: {
                cost: ["体力/元気-1"],
                effect: "元気+1\n好調3ターン"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "元気+3\n好調3ターン"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+5\n好調3ターン"
            }
        },
        tags: ["元気", "好調"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "表情の基本",
        description: {
            base: {
                cost: ["体力/元気-1"],
                effect: "元気+1\n集中+2"
            },
            plus1: {
                cost: ["体力/元気-1"],
                effect: "元気+1\n集中+3"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "元気+3\n集中+3"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+5\n集中+3"
            }
        },
        tags: ["元気", "集中"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "軽い足取り",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+6\n好調2ターン"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+9\n好調3ターン"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+9\n好調3ターン"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+9\n好調3ターン"
            }
        },
        tags: ["パラメータ", "好調"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+15"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調4ターン"
                    }
                ]
            },
            {
                kind: "集中追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "愛嬌",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+13"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+21"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+21"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+21"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "好調追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好調2ターン"
                    }
                ]
            },
            {
                kind: "集中追加",
                grades: [
                    {
                        cost: 70,
                        effect: "集中+2"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+33"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "準備運動",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+6\n集中+2"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+9\n集中+3"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+10\n集中+3"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+10\n集中+3"
            }
        },
        tags: ["パラメータ", "集中"],
        customize: [
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中+4"
                    }
                ]
            },
            {
                kind: "パラメータ上昇回数+",
                grades: [
                    {
                        cost: 100,
                        effect: "パラメータ+9(2回)"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+15"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "ファンサ",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+10"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+16"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+19"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+22"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "好調追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好調2ターン"
                    }
                ]
            },
            {
                kind: "絶好調追加",
                grades: [
                    {
                        cost: 70,
                        effect: "絶好調2ターン"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+28"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "勢い任せ",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+6\n好調状態の場合、集中+3"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+9\n好調状態の場合、集中+4"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+10\n好調状態の場合、集中+4"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+12\n好調状態の場合、集中+4"
            }
        },
        tags: ["パラメータ", "集中"],
        customize: [
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調状態の場合、集中+5"
                    }
                ]
            },
            {
                kind: "パラメータ上昇回数+",
                grades: [
                    {
                        cost: 100,
                        effect: "パラメータ+9(2回)"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+15"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "ハイタッチ",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+17(集中効果を1.5倍適用)\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+23(集中効果を2倍適用)\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+24(集中効果を2倍適用)\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+24(集中効果を2倍適用)\n（レッスン中1回）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+29"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-2"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "トークタイム",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "好調状態の場合、使用可\nパラメータ+27\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-6"],
                effect: "好調状態の場合、使用可\nパラメータ+38\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-6"],
                effect: "好調状態の場合、使用可\nパラメータ+44\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-6"],
                effect: "好調状態の場合、使用可\nパラメータ+50\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+44"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-4"
                    }
                ]
            },
            {
                kind: "集中追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "エキサイト",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+6\n絶好調3ターン\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+10\n絶好調4ターン\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+13\n絶好調4ターン\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+17\n絶好調4ターン\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ", "絶好調"],
        customize: [
            {
                kind: "絶好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "絶好調5ターン"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+16"
                    }
                ]
            },
            {
                kind: "好調追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "バランス感覚",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "集中+3"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "元気+1\n集中+4"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+3\n集中+4"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "元気+5\n集中+4"
            }
        },
        tags: ["集中", "元気"],
        customize: [
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中+5"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+5"
                    }
                ]
            },
            {
                kind: "好調追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "楽観的",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "好調3ターン\n好調状態の場合、集中+1"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "好調4ターン\n好調状態の場合、集中+1"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "好調4ターン\n好調状態の場合、集中+1"
            },
            plus3: {
                cost: [],
                effect: "好調4ターン\n好調状態の場合、集中+1"
            }
        },
        tags: ["好調", "集中"],
        customize: [
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調状態の場合、集中+2"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調5ターン"
                    }
                ]
            },
            {
                kind: "パラメータ追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "深呼吸",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "集中+2\n集中が3以上の場合、好調3ターン"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "集中+3\n集中が3以上の場合、好調3ターン"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "集中+4\n集中が3以上の場合、好調3ターン"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "集中+4\n集中が3以上の場合、好調3ターン"
            }
        },
        tags: ["集中", "好調"],
        customize: [
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中+4"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中が3以上の場合、好調5ターン"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "ひと呼吸",
        description: {
            base: {
                cost: ["体力/元気-7"],
                effect: "好調3ターン\n集中+4\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-7"],
                effect: "好調4ターン\n集中+5\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-6"],
                effect: "好調4ターン\n集中+5\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-5"],
                effect: "好調4ターン\n集中+5\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["好調", "集中"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-5"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+9"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中+7"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "決めポーズ",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+18\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+27\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+28\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "パラメータ+29\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+33"
                    }
                ]
            },
            {
                kind: "好調追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好調2ターン"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "アドリブ",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+5\n好調3ターン"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+9\n好調4ターン"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+11\n好調4ターン"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+12\n好調4ターン"
            }
        },
        tags: ["パラメータ", "好調"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+15"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調5ターン"
                    }
                ]
            },
            {
                kind: "集中追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "情熱ターン",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "パラメータ+11\n集中+3"
            },
            plus1: {
                cost: ["体力/元気-6"],
                effect: "パラメータ+18\n集中+4"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+19\n集中+4"
            },
            plus3: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+19\n集中+4"
            }
        },
        tags: ["パラメータ", "集中"],
        customize: [
            {
                kind: "パラメータ上昇回数+",
                grades: [
                    {
                        cost: 100,
                        effect: "パラメータ+18(2回)"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中+5"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "飛躍",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+13\n集中が6以上の場合、パラメータ+15\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+13\n集中が6以上の場合、パラメータ+15\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "パラメータ+13\n集中が6以上の場合、パラメータ+15\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "パラメータ+13\n集中が6以上の場合、パラメータ+15\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+16\n集中が6以上の場合、パラメータ+18"
                    }
                ]
            },
            {
                kind: "好調追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好調2ターン"
                    }
                ]
            },
            {
                kind: "レッスン中1回の制限削除",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "祝福",
        description: {
            base: {
                cost: ["体力消費4"],
                effect: "パラメータ+26\n好調1ターン\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力消費4"],
                effect: "パラメータ+40\n好調1ターン\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力消費4"],
                effect: "パラメータ+46\n好調1ターン\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力消費4"],
                effect: "パラメータ+52\n好調1ターン\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ", "好調"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+46"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調2ターン"
                    }
                ]
            },
            {
                kind: "絶好調追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "スタートダッシュ",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+30\n元気+10\n消費体力増加2ターン\n（重複不可）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+40\n元気+10\n消費体力増加2ターン\n（重複不可）"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+45\n元気+10\n消費体力増加2ターン\n（重複不可）"
            },
            plus3: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+50\n元気+10\n消費体力増加2ターン\n（重複不可）"
            }
        },
        tags: ["パラメータ", "元気", "消費体力増加"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+46"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-3"
                    }
                ]
            },
            {
                kind: "好調追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "スタンドプレー",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+12\n元気+7\n集中+5\n消費体力増加2ターン\n（重複不可）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+12\n元気+7\n集中+7\n消費体力増加2ターン\n（重複不可）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+12\n元気+7\n集中+7\n消費体力増加2ターン\n（重複不可）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+12\n元気+7\n集中+7\n消費体力増加2ターン\n（重複不可）"
            }
        },
        tags: ["パラメータ", "元気", "集中", "消費体力増加"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+11"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-3"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 70,
                        effect: "集中+10"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "シュプレヒコール",
        description: {
            base: {
                cost: ["集中消費3"],
                effect: "パラメータ+6\n好調2ターン\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus1: {
                cost: ["集中消費2"],
                effect: "パラメータ+6\n好調3ターン\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus2: {
                cost: ["集中消費2"],
                effect: "パラメータ+12\n好調3ターン\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus3: {
                cost: ["集中消費2"],
                effect: "パラメータ+16\n好調3ターン\nスキルカード使用数追加+1\n（重複不可）"
            }
        },
        tags: ["パラメータ", "好調", "スキルカード使用数追加"],
        customize: [
            {
                kind: "集中コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "集中消費1"
                    }
                ]
            },
            {
                kind: "スキルカード強化追加",
                grades: [
                    {
                        cost: 70,
                        effect: "手札をすべてレッスン中強化"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "立ち位置チェック",
        description: {
            base: {
                cost: ["集中消費3"],
                effect: "パラメータ+25\n元気+15\n元気増加無効2ターン\n（レッスン中1回）"
            },
            plus1: {
                cost: ["集中消費3"],
                effect: "パラメータ+40\n元気+15\n元気増加無効2ターン\n（レッスン中1回）"
            },
            plus2: {
                cost: ["集中消費3"],
                effect: "パラメータ+43\n元気+17\n元気増加無効2ターン\n（レッスン中1回）"
            },
            plus3: {
                cost: ["集中消費3"],
                effect: "パラメータ+45\n元気+20\n元気増加無効2ターン\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ", "元気", "元気増加無効"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+43"
                    }
                ]
            },
            {
                kind: "パラメータ上昇回数+",
                grades: [
                    {
                        cost: 100,
                        effect: "パラメータ+40(2回)"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+28"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "眼力",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "元気+6\n集中+3\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "元気+8\n集中+4\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "元気+11\n集中+4\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "元気+14\n集中+4\n（レッスン中1回）"
            }
        },
        tags: ["元気", "集中"],
        customize: [
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+12"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 70,
                        effect: "集中+7"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "大声援",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "元気+6\n好調3ターン\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "元気+8\n好調4ターン\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "元気+11\n好調4ターン\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "元気+14\n好調4ターン\n（レッスン中1回）"
            }
        },
        tags: ["元気", "好調"],
        customize: [
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調5ターン"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+21"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "演出計画",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "絶好調3ターン\n以降、アクティブスキルカード使用時、固定元気+2\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "絶好調4ターン\n以降、アクティブスキルカード使用時、固定元気+2\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "絶好調5ターン\n以降、アクティブスキルカード使用時、固定元気+2\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "絶好調6ターン\n以降、アクティブスキルカード使用時、固定元気+2\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["絶好調", "固定元気"],
        customize: [
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            },
            {
                kind: "絶好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "絶好調5ターン"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "願いの力",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "集中+2\n以降、アクティブスキルカード使用時、集中+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "集中+3\n以降、アクティブスキルカード使用時、集中+1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "集中+4\n以降、アクティブスキルカード使用時、集中+1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "集中+5\n以降、アクティブスキルカード使用時、集中+1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["集中"],
        customize: [
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中+4"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "静かな意志",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "レッスン開始時手札に入る\n集中+3\n好調2ターン\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "レッスン開始時手札に入る\n集中+4\n好調3ターン\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "レッスン開始時手札に入る\n集中+4\n好調3ターン\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "レッスン開始時手札に入る\n集中+4\n\n好調3ターン\n（レッスン中1回）"
            }
        },
        tags: ["集中", "好調"],
        customize: [
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+9"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調4ターン"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 70,
                        effect: "集中+7"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "始まりの合図",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "好調5ターン\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "好調7ターン\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "好調7ターン\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "好調7ターン\n（レッスン中1回）"
            }
        },
        tags: ["好調"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-1"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調8ターン"
                    }
                ]
            },
            {
                kind: "パラメータ追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "意地",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "元気+3\n集中+4\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "元気+5\n集中+5\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "元気+5\n集中+5\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-0"],
                effect: "元気+5\n集中+5\n（レッスン中1回）"
            }
        },
        tags: ["元気", "集中"],
        customize: [
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中+6"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+18"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "存在感",
        description: {
            base: {
                cost: ["好調消費2"],
                effect: "集中+4\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus1: {
                cost: ["好調消費1"],
                effect: "集中+5\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus2: {
                cost: ["好調消費1"],
                effect: "集中+6\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus3: {
                cost: ["好調消費1"],
                effect: "集中+7\nスキルカード使用数追加+1\n（重複不可）"
            }
        },
        tags: ["集中", "スキルカード使用数追加"],
        customize: [
            {
                kind: "好調コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "好調消費0"
                    }
                ]
            },
            {
                kind: "スキルカード強化追加",
                grades: [
                    {
                        cost: 70,
                        effect: "手札をすべてレッスン中強化"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "成功への道筋",
        description: {
            base: {
                cost: ["好調消費2"],
                effect: "元気+2\n集中+7\n（レッスン中1回）"
            },
            plus1: {
                cost: ["好調消費2"],
                effect: "元気+4\n集中+9\n（レッスン中1回）"
            },
            plus2: {
                cost: ["好調消費2"],
                effect: "元気+5\n集中+10\n（レッスン中1回）"
            },
            plus3: {
                cost: ["好調消費2"],
                effect: "元気+6\n集中+11\n（レッスン中1回）"
            }
        },
        tags: ["元気", "集中"],
        customize: [
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 40,
                        effect: "集中+10"
                    }
                ]
            },
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+12"
                    }
                ]
            },
            {
                kind: "好調コスト値-",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "スポットライト",
        description: {
            base: {
                cost: ["体力消費3"],
                effect: "元気+7\n好調4ターン"
            },
            plus1: {
                cost: ["体力消費3"],
                effect: "元気+9\n好調5ターン"
            },
            plus2: {
                cost: ["体力消費3"],
                effect: "元気+9\n好調6ターン"
            },
            plus3: {
                cost: ["体力消費3"],
                effect: "元気+9\n好調7ターン"
            }
        },
        tags: ["元気", "好調"],
        customize: [
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 40,
                        effect: "好調6ターン"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+22"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "コール&amp;レスポンス",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "パラメータ+15\n集中が3以上の場合、パラメータ+15\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-6"],
                effect: "パラメータ+15\n集中が3以上の場合、パラメータ+34(集中効果を1.5倍適用)\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+15\n集中が3以上の場合、パラメータ+34(集中効果を1.5倍適用)\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+15\n集中が3以上の場合、パラメータ+34(集中効果を1.5倍適用)\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+21\n集中が3以上の場合、パラメータ+40(集中効果を1.5倍適用)"
                    }
                ]
            },
            {
                kind: "好調追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好調2ターン"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "バズワード",
        description: {
            base: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\nパラメータ+38\n（重複不可）"
            },
            plus1: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\nパラメータ+54\n（重複不可）"
            },
            plus2: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\nパラメータ+63\n（重複不可）"
            },
            plus3: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\nパラメータ+71\n（重複不可）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+66"
                    }
                ]
            },
            {
                kind: "集中追加",
                grades: [
                    {
                        cost: 70,
                        effect: "集中+2"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "成就",
        description: {
            base: {
                cost: ["体力/元気-10"],
                effect: "好調4ターン\n次のターン、パラメータ+32\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-10"],
                effect: "好調7ターン\n次のターン、パラメータ+40\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-9"],
                effect: "好調7ターン\n次のターン、パラメータ+44\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-8"],
                effect: "好調7ターン\n次のターン、パラメータ+46\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["好調", "パラメータ"],
        customize: [
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 70,
                        effect: "好調9ターン"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-8"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "魅惑のパフォーマンス",
        description: {
            base: {
                cost: ["体力/元気-8"],
                effect: "好調状態の場合、使用可\n絶好調2ターン\n次のターン、パラメータ+38\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\n絶好調3ターン\n次のターン、パラメータ+47\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\n絶好調3ターン\n次のターン、パラメータ+56\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-7"],
                effect: "好調状態の場合、使用可\n絶好調3ターン\n次のターン、パラメータ+65\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["絶好調", "パラメータ"],
        customize: [
            {
                kind: "絶好調+",
                grades: [
                    {
                        cost: 70,
                        effect: "絶好調5ターン"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-5"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "至高のエンタメ",
        description: {
            base: {
                cost: ["集中消費3"],
                effect: "次のターン、スキルカードを引く\n以降、アクティブスキルカード使用時、パラメータ+4\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["集中消費2"],
                effect: "次のターン、スキルカードを引く\n以降、アクティブスキルカード使用時、パラメータ+5\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["集中消費2"],
                effect: "元気+4\n次のターン、スキルカードを引く\n以降、アクティブスキルカード使用時、パラメータ+5\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["集中消費2"],
                effect: "元気+8\n次のターン、スキルカードを引く\n以降、アクティブスキルカード使用時、パラメータ+5\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "集中コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "集中消費1"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+9"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "覚醒",
        description: {
            base: {
                cost: ["好調消費1"],
                effect: "パラメータ+3(2回)\n集中+4\n（重複不可）"
            },
            plus1: {
                cost: ["好調消費1"],
                effect: "パラメータ+4(2回)\n集中+6\n（重複不可）"
            },
            plus2: {
                cost: ["好調消費1"],
                effect: "パラメータ+4(2回)\n集中+7\n（重複不可）"
            },
            plus3: {
                cost: ["好調消費1"],
                effect: "パラメータ+4(2回)\n集中+8\n（重複不可）"
            }
        },
        tags: ["集中"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+10(2回)"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+9"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Sense"
    },
    {
        name: "国民的アイドル",
        description: {
            base: {
                cost: ["好調消費1"],
                effect: "次に使用するスキルカードの効果をもう1回発動(1回)\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["好調消費1"],
                effect: "元気+8\n次に使用するスキルカードの効果をもう1回発動(1回)\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["好調消費1"],
                effect: "元気+13\n次に使用するスキルカードの効果をもう1回発動(1回)\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["好調消費1"],
                effect: "元気+16\n次に使用するスキルカードの効果をもう1回発動(1回)\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["スキルカード使用数追加", "元気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+17"
                    }
                ]
            },
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "魅惑の視線",
        description: {
            base: {
                cost: ["集中消費3"],
                effect: "絶好調4ターン\n消費体力減少2ターン\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["集中消費3"],
                effect: "絶好調5ターン\n消費体力減少5ターン\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["集中消費3"],
                effect: "絶好調6ターン\n消費体力減少5ターン\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["集中消費3"],
                effect: "絶好調7ターン\n消費体力減少6ターン\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["絶好調", "消費体力減少", "スキルカード使用数追加"],
        customize: [
            {
                kind: "集中コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "集中消費2"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+9"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "鳴り止まない拍手",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "集中+4\n好調2ターン\n消費体力減少2ターン\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "集中+5\n好調3ターン\n消費体力減少3ターン\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "集中+5\n好調3ターン\n消費体力減少3ターン\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "集中+5\n好調3ターン\n消費体力減少3ターン\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["集中", "好調", "消費体力減少"],
        customize: [
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 70,
                        effect: "集中+7"
                    }
                ]
            },
            {
                kind: "好調+",
                grades: [
                    {
                        cost: 70,
                        effect: "好調5ターン"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "天真爛漫",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "集中+1\n以降、ターン終了時集中が3以上の場合、集中+2\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "集中+1\n以降、ターン終了時集中が3以上の場合、集中+2\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+2\n集中+1\n以降、ターン終了時集中が3以上の場合、集中+2\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+2\n集中+1\n以降、ターン終了時集中が3以上の場合、集中+2\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["集中"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-1"
                    }
                ]
            },
            {
                kind: "集中+",
                grades: [
                    {
                        cost: 70,
                        effect: "集中+3"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Sense"
    },
    {
        name: "可愛い仕草",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "好印象+2\n好印象の100%分パラメータ上昇\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "好印象+3\n好印象の120%分パラメータ上昇\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "好印象+3\n好印象の120%分パラメータ上昇\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "好印象+3\n好印象の120%分パラメータ上昇\n（レッスン中1回）"
            }
        },
        tags: ["好印象"],
        customize: [],
        rarity: "N",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "気分転換",
        description: {
            base: {
                cost: ["体力消費5"],
                effect: "元気の100%分パラメータ上昇\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力消費3"],
                effect: "元気の110%分パラメータ上昇\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力消費3"],
                effect: "元気の130%分パラメータ上昇\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力消費3"],
                effect: "元気の140%分パラメータ上昇\n（レッスン中1回）"
            }
        },
        tags: [],
        customize: [],
        rarity: "N",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "目線の基本",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "元気+1\n好印象+2"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "元気+2\n好印象+3"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+4\n好印象+3"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "元気+6\n好印象+3"
            }
        },
        tags: ["元気", "好印象"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "意識の基本",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "元気+1\nやる気+2"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "元気+2\nやる気+3"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+4\nやる気+3"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "元気+7\nやる気+3"
            }
        },
        tags: ["元気", "やる気"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "今日もおはよう",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+7\n好印象+3"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+9\n好印象+4"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+12\n好印象+4"
            },
            plus3: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+16\n好印象+4"
            }
        },
        tags: ["パラメータ", "好印象"],
        customize: [
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象+5"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象の60%分のパラメータ上昇"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+21"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "ゆるふわおしゃべり",
        description: {
            base: {
                cost: ["体力消費4"],
                effect: "やる気+3\n元気の60%分パラメータ上昇\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力消費4"],
                effect: "やる気+4\n元気の80%分パラメータ上昇\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力消費4"],
                effect: "やる気+4\n元気の100%分パラメータ上昇\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力消費4"],
                effect: "やる気+4\n元気の120%分パラメータ上昇\n（レッスン中1回）"
            }
        },
        tags: ["やる気"],
        customize: [
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+4"
                    }
                ]
            },
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気+5"
                    }
                ]
            },
            {
                kind: "元気分パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気の120%分パラメータ上昇"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "もう少しだけ",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+10\nやる気+3"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+15\nやる気+4"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+19\nやる気+4"
            },
            plus3: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+22\nやる気+4"
            }
        },
        tags: ["パラメータ", "やる気"],
        customize: [
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気+5"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+21"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "手拍子",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "好印象の150%分パラメータ上昇\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "好印象の200%分パラメータ上昇\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "好印象の200%分パラメータ上昇\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "好印象の200%分パラメータ上昇\n（レッスン中1回）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "好印象分パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象の235%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-3"
                    }
                ]
            },
            {
                kind: "好印象追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "元気な挨拶",
        description: {
            base: {
                cost: ["体力消費4"],
                effect: "元気の110%分パラメータ上昇\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力消費3"],
                effect: "元気の120%分パラメータ上昇\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力消費3"],
                effect: "元気の140%分パラメータ上昇\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力消費3"],
                effect: "元気の150%分パラメータ上昇\n（レッスン中1回）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "元気分パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気の140%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "やる気分パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "やる気の110%分のパラメータ上昇"
                    }
                ]
            },
            {
                kind: "体力消費コスト値-",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "デイドリーミング",
        description: {
            base: {
                cost: ["体力消費3"],
                effect: "元気が30以上の場合、使用可\n元気+3\n以降の3ターンの間、ターン開始時、元気の60%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力消費3"],
                effect: "元気が30以上の場合、使用可\n元気+6\n以降の4ターンの間、ターン開始時、元気の60%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力消費3"],
                effect: "元気が30以上の場合、使用可\n元気+13\n以降の4ターンの間、ターン開始時、元気の60%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力消費3"],
                effect: "元気が30以上の場合、使用可\n元気+19\n以降の4ターンの間、ターン開始時、元気の60%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "体力消費コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "体力消費2"
                    }
                ]
            },
            {
                kind: "条件変更",
                grades: [
                    {
                        cost: 70,
                        effect: "元気が15以上の場合、使用可"
                    }
                ]
            },
            {
                kind: "持続効果+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気の80%分パラメータ上昇"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "リスタート",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "元気+2\n好印象+3"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "元気+2\n好印象+4"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+2\n好印象+4"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+3\n好印象+4"
            }
        },
        tags: ["元気", "好印象"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+6"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象+5"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "えいえいおー",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "元気+1\nやる気+3"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "元気+2\nやる気+4"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+4\nやる気+4"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "元気+6\nやる気+4"
            }
        },
        tags: ["元気", "やる気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+6"
                    }
                ]
            },
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気+5"
                    }
                ]
            },
            {
                kind: "やる気分パラメータ追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "リズミカル",
        description: {
            base: {
                cost: [],
                effect: "元気+6\n（レッスン中1回）"
            },
            plus1: {
                cost: [],
                effect: "元気+8\n（レッスン中1回）"
            },
            plus2: {
                cost: [],
                effect: "元気+10\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "元気+12\n（レッスン中1回）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "やる気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "やる気+2"
                    }
                ]
            },
            {
                kind: "好印象追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+2"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+16"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "思い出し笑い",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "好印象+3\n好印象が3以上の場合、やる気+2"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "好印象+4\n好印象が3以上の場合、やる気+3"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "好印象+4\n好印象が1以上の場合、やる気+3"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "好印象+4\n好印象が1以上の場合、やる気+4"
            }
        },
        tags: ["好印象", "やる気"],
        customize: [
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象+5"
                    }
                ]
            },
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象が3以上の場合、やる気+4"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "パステル気分",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "元気+5\nやる気が3以上の場合、好印象+3"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "元気+7\nやる気が3以上の場合、好印象+4"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+7\nやる気が3以上の場合、好印象+4"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+7\nやる気が3以上の場合、好印象+4"
            }
        },
        tags: ["元気", "好印象"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+11"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気が3以上の場合、好印象+5"
                    }
                ]
            },
            {
                kind: "元気分パラメータ追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "励まし",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "やる気+3\nやる気が6以上の場合、好印象+4"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "やる気+4\nやる気が6以上の場合、好印象+5"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "やる気+4\nやる気が6以上の場合、好印象+5"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "やる気+4\nやる気が6以上の場合、好印象+5"
            }
        },
        tags: ["やる気", "好印象"],
        customize: [
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気+5"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+4"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気が6以上の場合、好印象+7"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "幸せのおまじない",
        description: {
            base: {
                cost: ["体力/元気-8"],
                effect: "好印象+7\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-8"],
                effect: "好印象+9\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-7"],
                effect: "好印象+9\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-6"],
                effect: "好印象+9\n（レッスン中1回）"
            }
        },
        tags: ["好印象"],
        customize: [
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象+10"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象の60%分のパラメータ上昇"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "ラブリーウインク",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "好印象+4\n好印象の60%分パラメータ上昇"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "好印象+5\n好印象の80%分パラメータ上昇"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "好印象+5\n好印象の90%分パラメータ上昇"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "好印象+5\n好印象の100%分パラメータ上昇"
            }
        },
        tags: ["好印象"],
        customize: [
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象+6"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象の115%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "ありがとうの言葉",
        description: {
            base: {
                cost: ["体力消費3"],
                effect: "元気+9\n元気の40%分パラメータ上昇\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力消費3"],
                effect: "元気+11\n元気の70%分パラメータ上昇\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力消費3"],
                effect: "元気+14\n元気の70%分パラメータ上昇\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力消費3"],
                effect: "元気+17\n元気の70%分パラメータ上昇\n（レッスン中1回）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+15"
                    }
                ]
            },
            {
                kind: "元気分パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気の90%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "やる気分パラメータ追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "ハートの合図",
        description: {
            base: {
                cost: ["体力消費3"],
                effect: "元気を半分にして、減少前の元気の130%分パラメータ上昇\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力消費3"],
                effect: "元気を半分にして、減少前の元気の180%分パラメータ上昇\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力消費3"],
                effect: "元気を半分にして、減少前の元気の200%分パラメータ上昇\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力消費3"],
                effect: "元気を半分にして、減少前の元気の230%分パラメータ上昇\n（レッスン中1回）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "元気分パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気の210%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "体力消費コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "体力消費2"
                    }
                ]
            },
            {
                kind: "やる気分パラメータ追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "キラメキ",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "元気+5\n好印象の200%分パラメータ上昇\n消費体力増加2ターン\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "元気+5\n好印象の250%分パラメータ上昇\n消費体力増加2ターン\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+5\n好印象の250%分パラメータ上昇\n消費体力増加2ターン\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+5\n好印象の250%分パラメータ上昇\n消費体力増加2ターン\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気", "消費体力増加"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+9"
                    }
                ]
            },
            {
                kind: "好印象追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+2"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象の365%分パラメータ上昇"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "みんな大好き",
        description: {
            base: {
                cost: ["やる気消費3"],
                effect: "好印象の90%分パラメータ上昇\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus1: {
                cost: ["やる気消費2"],
                effect: "好印象の120%分パラメータ上昇\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus2: {
                cost: ["やる気消費2"],
                effect: "好印象の140%分パラメータ上昇\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus3: {
                cost: ["やる気消費2"],
                effect: "好印象の160%分パラメータ上昇\nスキルカード使用数追加+1\n（重複不可）"
            }
        },
        tags: ["スキルカード使用数追加"],
        customize: [
            {
                kind: "好印象分パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象の200%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "やる気コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気消費1"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "きらきら紙吹雪",
        description: {
            base: {
                cost: ["やる気消費3"],
                effect: "元気の110%分パラメータ上昇\n次のターン、スキルカードを引く\n（重複不可）"
            },
            plus1: {
                cost: ["やる気消費2"],
                effect: "元気の110%分パラメータ上昇\n次のターン、スキルカードを2枚引く\n（重複不可）"
            },
            plus2: {
                cost: ["やる気消費2"],
                effect: "元気の130%分パラメータ上昇\n次のターン、スキルカードを2枚引く\n（重複不可）"
            },
            plus3: {
                cost: ["やる気消費2"],
                effect: "元気の150%分パラメータ上昇\n次のターン、スキルカードを2枚引く\n（重複不可）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "やる気コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気消費1"
                    }
                ]
            },
            {
                kind: "元気分パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気の130%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "好印象追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "あふれる思い出",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "元気+2\nやる気+4"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "元気+4\nやる気+5"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "元気+8\nやる気+5"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "元気+10\nやる気+5"
            }
        },
        tags: ["元気", "やる気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+8"
                    }
                ]
            },
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気+6"
                    }
                ]
            },
            {
                kind: "やる気分パラメータ追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "ふれあい",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "元気+3\n好印象+4"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "元気+6\n好印象+5"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "元気+10\n好印象+5"
            },
            plus3: {
                cost: ["体力/元気-5"],
                effect: "元気+13\n好印象+5"
            }
        },
        tags: ["元気", "好印象"],
        customize: [
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象+6"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象の60%分のパラメータ上昇"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+19"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "幸せな時間",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "好印象+6"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "好印象+8"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "好印象+8"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "好印象+8"
            }
        },
        tags: ["好印象"],
        customize: [
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象+9"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象の60%分のパラメータ上昇"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "ファンシーチャーム",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "好印象+3\n以降、メンタルスキルカード使用時、好印象+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "好印象+5\n以降、メンタルスキルカード使用時、好印象+1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "好印象+5\n以降、メンタルスキルカード使用時、好印象+1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "好印象+5\n以降、メンタルスキルカード使用時、好印象+1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["好印象"],
        customize: [
            {
                kind: "開始時手札に入る",
                grades: [
                    {
                        cost: 70,
                        effect: "レッスン開始時手札に入る"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-2"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+9"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "ワクワクが止まらない",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "やる気+3\n以降、メンタルスキルカード使用時、やる気+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "やる気+5\n以降、メンタルスキルカード使用時、やる気+1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "やる気+6\n以降、メンタルスキルカード使用時、やる気+1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "やる気+6\n以降、メンタルスキルカード使用時、やる気+1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["やる気"],
        customize: [
            {
                kind: "開始時手札に入る",
                grades: [
                    {
                        cost: 70,
                        effect: "レッスン開始時手札に入る"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-1"
                    }
                ]
            },
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 70,
                        effect: "やる気+9"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "本番前夜",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "レッスン開始時手札に入る\n好印象+4\nやる気+3\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "レッスン開始時手札に入る\n好印象+5\nやる気+4\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "レッスン開始時手札に入る\n好印象+5\nやる気+4\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "レッスン開始時手札に入る\n好印象+5\nやる気+4\n（レッスン中1回）"
            }
        },
        tags: ["好印象", "やる気"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-3"
                    }
                ]
            },
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気+5"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+9"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "ひなたぼっこ",
        description: {
            base: {
                cost: [],
                effect: "元気+11\nやる気+5\n消費体力増加2ターン\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: [],
                effect: "元気+11\nやる気+7\n消費体力増加2ターン\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: [],
                effect: "元気+13\nやる気+7\n消費体力増加2ターン\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: [],
                effect: "元気+15\nやる気+7\n消費体力増加2ターン\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気", "やる気", "消費体力増加"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+15"
                    }
                ]
            },
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気+8"
                    }
                ]
            },
            {
                kind: "元気分パラメータ追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "イメトレ",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "元気+7\nやる気+4\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "元気+11\nやる気+5\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "元気+11\nやる気+5\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "元気+11\nやる気+5\n（レッスン中1回）"
            }
        },
        tags: ["元気", "やる気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+15"
                    }
                ]
            },
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気+6"
                    }
                ]
            },
            {
                kind: "元気分パラメータ追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "やる気は満点",
        description: {
            base: {
                cost: ["体力/元気-1"],
                effect: "元気+1\n好印象+4\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-1"],
                effect: "元気+2\n好印象+5\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "元気+4\n好印象+5\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+6\n好印象+5\n（レッスン中1回）"
            }
        },
        tags: ["元気", "好印象"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+6"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象+6"
                    }
                ]
            },
            {
                kind: "やる気追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "ゆめみごこち",
        description: {
            base: {
                cost: ["好印象消費2"],
                effect: "やる気+4\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus1: {
                cost: ["好印象消費1"],
                effect: "やる気+5\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus2: {
                cost: ["好印象消費1"],
                effect: "やる気+6\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus3: {
                cost: ["好印象消費1"],
                effect: "やる気+7\nスキルカード使用数追加+1\n（重複不可）"
            }
        },
        tags: ["やる気", "スキルカード使用数追加"],
        customize: [
            {
                kind: "好印象コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象消費0"
                    }
                ]
            },
            {
                kind: "元気分パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気の30%分のパラメータ上昇"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "止められない想い",
        description: {
            base: {
                cost: ["体力消費4"],
                effect: "やる気+3\n好印象+3\nスキルカード使用数追加+1\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力消費4"],
                effect: "やる気+4\n好印象+5\nスキルカード使用数追加+1\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力消費3"],
                effect: "やる気+4\n好印象+5\nスキルカード使用数追加+1\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力消費3"],
                effect: "元気+1\nやる気+4\n好印象+5\nスキルカード使用数追加+1\n（レッスン中1回）"
            }
        },
        tags: ["やる気", "好印象", "スキルカード使用数追加"],
        customize: [
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 70,
                        effect: "やる気+7"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+8"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "オトメゴコロ",
        description: {
            base: {
                cost: ["やる気消費3"],
                effect: "好印象+4\nスキルカード使用数追加+1\n（重複不可）"
            },
            plus1: {
                cost: ["やる気消費3"],
                effect: "好印象+5\nスキルカード使用数追加+1\n好印象が10以上の場合、好印象+2\n（重複不可）"
            },
            plus2: {
                cost: ["やる気消費3"],
                effect: "好印象+6\nスキルカード使用数追加+1\n好印象が10以上の場合、好印象+2\n（重複不可）"
            },
            plus3: {
                cost: ["やる気消費3"],
                effect: "好印象+7\nスキルカード使用数追加+1\n好印象が10以上の場合、好印象+2\n（重複不可）"
            }
        },
        tags: ["好印象", "スキルカード使用数追加"],
        customize: [
            {
                kind: "やる気コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気消費2"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+7\n好印象が10以上の場合、好印象+4"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "200%スマイル",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "好印象+5\n好印象の100%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-6"],
                effect: "好印象+6\n好印象の170%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "好印象+6\n好印象の170%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-4"],
                effect: "好印象+6\n好印象の170%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["好印象"],
        customize: [
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+9"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ+",
                grades: [
                    {
                        cost: 100,
                        effect: "好印象の330%分パラメータ上昇"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "開花",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "やる気+6\nやる気の200%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "やる気+8\nやる気の300%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "やる気+9\nやる気の300%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-5"],
                effect: "やる気+11\nやる気の300%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["やる気"],
        customize: [
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+4"
                    }
                ]
            },
            {
                kind: "やる気分パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "やる気の440%分パラメータ上昇"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "届いて！",
        description: {
            base: {
                cost: ["体力消費2"],
                effect: "元気を0にして、減少前の元気の160%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力消費2"],
                effect: "元気を0にして、減少前の元気の220%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力消費2"],
                effect: "元気を0にして、減少前の元気の250%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力消費2"],
                effect: "元気を0にして、減少前の元気の280%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "元気分パラメータ+",
                grades: [
                    {
                        cost: 100,
                        effect: "元気の320%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "体力消費コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "体力消費1"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "輝くキミへ",
        description: {
            base: {
                cost: ["やる気消費4"],
                effect: "スキルカード使用数追加+1\n以降、スキルカード使用時、好印象の30%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["やる気消費4"],
                effect: "スキルカード使用数追加+1\n以降、スキルカード使用時、好印象の50%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["やる気消費3"],
                effect: "スキルカード使用数追加+1\n以降、スキルカード使用時、好印象の50%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["やる気消費3"],
                effect: "元気+1\nスキルカード使用数追加+1\n以降、スキルカード使用時、好印象の50%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["スキルカード使用数追加"],
        customize: [
            {
                kind: "持続効果+",
                grades: [
                    {
                        cost: 100,
                        effect: "以降、スキルカード使用時、\n好印象の50%分パラメータ上昇・好印象+1"
                    }
                ]
            },
            {
                kind: "やる気コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "やる気消費3"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "あのときの約束",
        description: {
            base: {
                cost: ["好印象消費4"],
                effect: "元気+9\n元気の100%分パラメータ上昇\nやる気の150%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["好印象消費4"],
                effect: "元気+14\n元気の130%分パラメータ上昇\nやる気の200%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["好印象消費3"],
                effect: "元気+14\n元気の130%分パラメータ上昇\nやる気の200%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["好印象消費3"],
                effect: "元気+18\n元気の130%分パラメータ上昇\nやる気の200%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "やる気分パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "やる気の340%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "好印象コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象消費3"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "キセキの魔法",
        description: {
            base: {
                cost: ["体力消費5"],
                effect: "好印象の250%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力消費5"],
                effect: "好印象の340%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力消費5"],
                effect: "好印象の380%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力消費5"],
                effect: "好印象の420%分パラメータ上昇\n（レッスン中1回, 重複不可）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "好印象分パラメータ+",
                grades: [
                    {
                        cost: 100,
                        effect: "好印象の500%分パラメータ上昇"
                    }
                ]
            },
            {
                kind: "体力消費コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "体力消費4"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Logic"
    },
    {
        name: "私がスター",
        description: {
            base: {
                cost: ["好印象消費2"],
                effect: "ターン追加+1\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["好印象消費1"],
                effect: "ターン追加+1\nスキルカード使用数追加+1\nスキルカードを引く\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["好印象消費1"],
                effect: "元気+1\nターン追加+1\nスキルカード使用数追加+1\nスキルカードを引く\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["好印象消費1"],
                effect: "元気+5\nターン追加+1\nスキルカード使用数追加+1\nスキルカードを引く\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["ターン追加", "スキルカード使用数追加"],
        customize: [
            {
                kind: "好印象コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象消費0"
                    }
                ]
            },
            {
                kind: "スキルカード強化追加",
                grades: [
                    {
                        cost: 70,
                        effect: "手札をすべてレッスン中強化"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "星屑センセーション",
        description: {
            base: {
                cost: ["やる気消費3"],
                effect: "好印象+5\nスキルカード使用数追加+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["やる気消費3"],
                effect: "好印象+7\nスキルカード使用数追加+1\nスキルカードを引く\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["やる気消費3"],
                effect: "好印象+8\nスキルカード使用数追加+1\nスキルカードを引く\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["やる気消費3"],
                effect: "好印象+9\nスキルカード使用数追加+1\nスキルカードを2枚引く\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["好印象", "スキルカード使用数追加"],
        customize: [
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+10"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象の60%分のパラメータ上昇"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "ノートの端の決意",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "好印象+3\nやる気+3\n消費体力減少3ターン\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "好印象+5\nやる気+3\n消費体力減少3ターン\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "好印象+5\nやる気+3\n消費体力減少3ターン\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "好印象+5\nやる気+3\n消費体力減少3ターン\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["好印象", "やる気", "消費体力減少"],
        customize: [
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+4"
                    }
                ]
            },
            {
                kind: "好印象分パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象の60%分のパラメータ上昇"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "手書きのメッセージ",
        description: {
            base: {
                cost: ["好印象消費2"],
                effect: "元気+9\n元気+9\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["好印象消費1"],
                effect: "元気+10\n元気+10\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["好印象消費1"],
                effect: "元気+11\n元気+11\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["好印象消費1"],
                effect: "元気+13\n元気+12\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+14\n元気+14"
                    }
                ]
            },
            {
                kind: "好印象コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "好印象消費0"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "トキメキ",
        description: {
            base: {
                cost: ["体力/元気-10"],
                effect: "好印象+8\nやる気+5\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-9"],
                effect: "好印象+10\nやる気+6\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-8"],
                effect: "好印象+10\nやる気+7\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-7"],
                effect: "好印象+10\nやる気+7\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["好印象", "やる気"],
        customize: [
            {
                kind: "やる気+",
                grades: [
                    {
                        cost: 70,
                        effect: "やる気+9"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+13"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "虹色ドリーマー",
        description: {
            base: {
                cost: ["体力/元気-9"],
                effect: "好印象+1\n以降、ターン終了時好印象が3以上の場合、好印象+3\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-9"],
                effect: "好印象+4\n以降、ターン終了時好印象が3以上の場合、好印象+3\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-8"],
                effect: "好印象+5\n以降、ターン終了時好印象が3以上の場合、好印象+3\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-7"],
                effect: "好印象+5\n以降、ターン終了時好印象が3以上の場合、好印象+3\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["好印象"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-7"
                    }
                ]
            },
            {
                kind: "好印象+",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象+7"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "夢色リップ",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "元気+2\nやる気+4\nパラメータ上昇量増加10%\n好印象が15以上の場合、以降の3ターンの間、ターン開始時、好印象1.1倍\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "元気+2\nやる気+5\nパラメータ上昇量増加20%\n好印象が15以上の場合、以降の4ターンの間、ターン開始時、好印象1.1倍\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "元気+2\nやる気+5\nパラメータ上昇量増加20%\n好印象が15以上の場合、以降の4ターンの間、ターン開始時、好印象1.1倍\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "元気+2\nやる気+5\nパラメータ上昇量増加20%\n好印象が15以上の場合、以降の4ターンの間、ターン開始時、好印象1.1倍\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気", "やる気"],
        customize: [
            {
                kind: "条件変更",
                grades: [
                    {
                        cost: 70,
                        effect: "好印象が10以上の場合"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+4\n〔2回目の元気を追加〕"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Logic"
    },
    {
        name: "挨拶の基本",
        description: {
            base: {
                cost: [],
                effect: "強気に変更"
            },
            plus1: {
                cost: [],
                effect: "強気に変更\n元気+4"
            },
            plus2: {
                cost: [],
                effect: "強気に変更\n元気+5"
            },
            plus3: {
                cost: [],
                effect: "強気に変更\n元気+6"
            }
        },
        tags: ["元気"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "はげしく",
        description: {
            base: {
                cost: ["体力/元気-7"],
                effect: "強気に変更\nパラメータ+15\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-7"],
                effect: "強気に変更\nパラメータ+25\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-6"],
                effect: "強気に変更\nパラメータ+25\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-5"],
                effect: "強気に変更\nパラメータ+25\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ"],
        customize: [],
        rarity: "N",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "スパート",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "全力値+1\n温存の場合、自身を保留に移動\n全力の場合、パラメータ+25"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "全力値+1\n温存の場合、自身を保留に移動\n全力の場合、パラメータ+25"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "全力値+1\n温存の場合、自身を保留に移動\n全力の場合、パラメータ+25"
            },
            plus3: {
                cost: [],
                effect: "全力値+1\n温存の場合、自身を保留に移動\n全力の場合、パラメータ+25"
            }
        },
        tags: ["全力値", "パラメータ"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "メントレの基本",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "元気+2\n全力値+2"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "元気+3\n全力値+3"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+3\n全力値+3"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+3\n全力値+3"
            }
        },
        tags: ["元気", "全力値"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "イメージの基本",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "温存に変更\n元気+2"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "温存に変更\n元気+6"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "温存に変更\n元気+6"
            },
            plus3: {
                cost: [],
                effect: "温存に変更\n元気+6"
            }
        },
        tags: ["元気"],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "ジャストアピール",
        description: {
            base: {
                cost: ["体力/元気-7"],
                effect: "パラメータ+15\n全力値+2\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+15\n全力値+3\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+15\n全力値+3\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+15\n全力値+3\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ", "全力値"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+21"
                    }
                ]
            },
            {
                kind: "全力値+",
                grades: [
                    {
                        cost: 40,
                        effect: "全力値+4"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+6"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "スターライト",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "強気に変更\nパラメータ+9"
            },
            plus1: {
                cost: ["体力/元気-6"],
                effect: "強気に変更\nパラメータ+18"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "強気に変更\nパラメータ+18"
            },
            plus3: {
                cost: ["体力/元気-4"],
                effect: "強気に変更\nパラメータ+18"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-4"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+24"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "すべてのスキルカードの\nパラメータ値増加+2"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "一歩",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+15\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+23\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+23\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+23\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "全力値追加",
                grades: [
                    {
                        cost: 70,
                        effect: "全力値+2"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "すべてのスキルカードの\nパラメータ値増加+1"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+35"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "ラッキー♪",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+8\n強気の場合、全力値+3\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+10\n強気の場合、全力値+4\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "パラメータ+10\n強気の場合、全力値+4\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "パラメータ+10\n強気の場合、全力値+4\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ", "全力値"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+16"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "全力値+",
                grades: [
                    {
                        cost: 40,
                        effect: "強気の場合、全力値+6"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "積み重ね",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "全力値+2\n温存の場合、自身を保留に移動\n全力の場合、パラメータ+20"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "全力値+2\n温存の場合、自身を保留に移動\n全力の場合、パラメータ+35"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "全力値+2\n温存の場合、自身を保留に移動\n全力の場合、パラメータ+35"
            },
            plus3: {
                cost: [],
                effect: "全力値+2\n温存の場合、自身を保留に移動\n全力の場合、パラメータ+35"
            }
        },
        tags: ["全力値", "パラメータ"],
        customize: [
            {
                kind: "パラメータ上昇回数+",
                grades: [
                    {
                        cost: 100,
                        effect: "全力の場合、パラメータ+35(2回)"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "手札のパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "精一杯",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "強気に変更\nパラメータ+6\n(2回)\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "強気に変更\nパラメータ+7\n(2回)\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "強気に変更\nパラメータ+7\n(2回)\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "強気に変更\nパラメータ+7\n(2回)\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+10(2回)"
                    }
                ]
            },
            {
                kind: "全力値追加",
                grades: [
                    {
                        cost: 70,
                        effect: "全力値+2"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "ハッピー♪",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "温存に変更\n元気+7\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "温存に変更\n元気+10\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "温存に変更\n元気+10\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "温存に変更\n元気+10\n（レッスン中1回）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+14"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "嬉しい誤算",
        description: {
            base: {
                cost: ["体力/元気-3"],
                effect: "元気+5\n全力値+2\n全力値が1以上の場合、温存に変更\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-3"],
                effect: "元気+6\n全力値+3\n全力値が1以上の場合、温存に変更\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-2"],
                effect: "元気+6\n全力値+3\n全力値が1以上の場合、温存に変更\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "元気+6\n全力値+3\n全力値が1以上の場合、温存に変更\n（レッスン中1回）"
            }
        },
        tags: ["元気", "全力値"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+10"
                    }
                ]
            },
            {
                kind: "全力値+",
                grades: [
                    {
                        cost: 40,
                        effect: "全力値+4"
                    }
                ]
            },
            {
                kind: "保留追加",
                grades: []
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "涙の思い出",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "温存に変更\n元気+2\n強気の場合、全力値+3\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "温存に変更\n元気+4\n強気の場合、全力値+4\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "温存に変更\n元気+4\n強気の場合、全力値+4\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "温存に変更\n元気+4\n強気の場合、全力値+4\n（レッスン中1回）"
            }
        },
        tags: ["元気", "全力値"],
        customize: [
            {
                kind: "全力値+",
                grades: [
                    {
                        cost: 40,
                        effect: "強気の場合、全力値+5"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+12"
                    }
                ]
            }
        ],
        rarity: "R",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "せーのっ！",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "強気に変更\nパラメータ+12"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "強気に変更\nパラメータ+22"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "強気に変更\nパラメータ+22"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "強気に変更\nパラメータ+22"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "強気+",
                grades: [
                    {
                        cost: 70,
                        effect: "強気2段階目に変更"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+28"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "すべてのスキルカードの\nパラメータ値増加+4"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "アッチェレランド",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+10\n全力値+3"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+12\n全力値+4"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+12\n全力値+4"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "パラメータ+12\n全力値+4"
            }
        },
        tags: ["パラメータ", "全力値"],
        customize: [
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-2"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+34"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "はじけるパッション",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "いずれかの指針の場合、使用可\nパラメータ+8（2回）\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-1"],
                effect: "いずれかの指針の場合、使用可\nパラメータ+10（2回）\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "いずれかの指針の場合、使用可\nパラメータ+12（2回）\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-1"],
                effect: "いずれかの指針の場合、使用可\nパラメータ+14（2回）\n（レッスン中1回）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "温存追加",
                grades: [
                    {
                        cost: 70,
                        effect: "次のターン、温存に変更"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+13（2回）"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "すべてのスキルカードの\nパラメータ値増加+4"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "汗と成長",
        description: {
            base: {
                cost: ["体力/元気-1"],
                effect: "全力の場合、使用可\nパラメータ+37\n（レッスン中1回）"
            },
            plus1: {
                cost: [],
                effect: "全力の場合、使用可\nパラメータ+47\n（レッスン中1回）"
            },
            plus2: {
                cost: [],
                effect: "全力の場合、使用可\nパラメータ+53\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "全力の場合、使用可\nパラメータ+60\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "温存追加",
                grades: [
                    {
                        cost: 70,
                        effect: "次のターン、温存に変更"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+53"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "手札のパラメータ値増加+8"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "オープニングアクト",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "強気に変更\nパラメータ+10\n全力値+2\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "強気に変更\nパラメータ+14\n全力値+3\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "強気に変更\nパラメータ+14\n全力値+3\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "強気に変更\nパラメータ+14\n全力値+3\n（レッスン中1回）"
            }
        },
        tags: ["パラメータ", "全力値"],
        customize: [
            {
                kind: "強気+",
                grades: [
                    {
                        cost: 70,
                        effect: "強気2段階目に変更"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+20"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "強気になった時、\nこのスキルカードのパラメータ値増加+5"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "始まりの笑顔",
        description: {
            base: {
                cost: ["全力値消費2"],
                effect: "強気に変更\nパラメータ+6\n消費体力減少2ターン\n次のターン、スキルカードを引く\n（重複不可）"
            },
            plus1: {
                cost: ["全力値消費1"],
                effect: "強気に変更\nパラメータ+8\n消費体力減少2ターン\n次のターン、スキルカードを引く\n（重複不可）"
            },
            plus2: {
                cost: ["全力値消費1"],
                effect: "強気に変更\nパラメータ+11\n消費体力減少2ターン\n次のターン、スキルカードを引く\n（重複不可）"
            },
            plus3: {
                cost: ["全力値消費1"],
                effect: "強気に変更\nパラメータ+15\n消費体力減少2ターン\n次のターン、スキルカードを引く\n（重複不可）"
            }
        },
        tags: ["パラメータ", "消費体力減少"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+14"
                    }
                ]
            },
            {
                kind: "消費体力減少+",
                grades: [
                    {
                        cost: 40,
                        effect: "消費体力減少3ターン"
                    }
                ]
            },
            {
                kind: "強気+",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "理想のテンポ",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+6（2回）\n[成長]\n指針を変更するたび、このスキルカードのパラメータ値増加+2\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "パラメータ+6（2回）\n[成長]\n指針を変更するたび、このスキルカードのパラメータ値増加+4\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "パラメータ+6（2回）\n[成長]\n指針を変更するたび、このスキルカードのパラメータ値増加+4\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "パラメータ+6（2回）\n[成長]\n指針を変更するたび、このスキルカードのパラメータ値増加+4\n（レッスン中1回）"
            }
        },
        tags: ["このスキルカードのパラメータ値増加"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-3"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+9（2回）"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "トレーニングの成果",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "全力値+3\nパラメータ+9\n次のターン、温存に変更\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-5"],
                effect: "全力値+4\nパラメータ+10\n次のターン、温存2段階目に変更\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-4"],
                effect: "全力値+4\nパラメータ+10\n次のターン、温存2段階目に変更\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-3"],
                effect: "全力値+4\nパラメータ+10\n次のターン、温存2段階目に変更\n（レッスン中1回）"
            }
        },
        tags: ["全力値", "パラメータ"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 40,
                        effect: "パラメータ+16"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "手札のパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "潜在能力",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "元気+10\n全力値+3\n手札を選択し、保留に移動\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-6"],
                effect: "元気+15\n全力値+4\n手札を選択し、保留に移動\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-5"],
                effect: "元気+15\n全力値+4\n手札を選択し、保留に移動\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-4"],
                effect: "元気+15\n全力値+4\n手札を選択し、保留に移動\n（レッスン中1回）"
            }
        },
        tags: ["元気", "全力値"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+19"
                    }
                ]
            },
            {
                kind: "レッスン中1回の制限削除",
                grades: [
                    {
                        cost: 40,
                        effect: "レッスン中1回"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+8"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "カウントダウン",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "温存に変更\n元気+8\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "温存に変更\n元気+13\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "温存に変更\n元気+13\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "温存に変更\n元気+13\n（レッスン中1回）"
            }
        },
        tags: ["元気"],
        customize: [
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+17"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "温存+",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "プライド",
        description: {
            base: {
                cost: ["体力/元気-4"],
                effect: "レッスン開始時手札に入る\n温存に変更\n元気+5\n全力値+2\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "レッスン開始時手札に入る\n温存に変更\n元気+8\n全力値+3\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "レッスン開始時手札に入る\n温存に変更\n元気+8\n全力値+3\n（レッスン中1回）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "レッスン開始時手札に入る\n温存に変更\n元気+8\n全力値+3\n（レッスン中1回）"
            }
        },
        tags: ["元気", "全力値"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-2"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "すべてのスキルカードの\nパラメータ値増加+1"
                    }
                ]
            },
            {
                kind: "全力値+",
                grades: [
                    {
                        cost: 70,
                        effect: "全力値+6"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "忍耐力",
        description: {
            base: {
                cost: ["体力/元気-2"],
                effect: "温存に変更\n元気+5\n全力値+2\n（レッスン中1回）"
            },
            plus1: {
                cost: ["体力/元気-2"],
                effect: "温存2段階目に変更\n元気+5\n全力値+3\n（レッスン中1回）"
            },
            plus2: {
                cost: ["体力/元気-1"],
                effect: "温存2段階目に変更\n元気+5\n全力値+3\n（レッスン中1回）"
            },
            plus3: {
                cost: [],
                effect: "温存2段階目に変更\n元気+5\n全力値+3\n（レッスン中1回）"
            }
        },
        tags: ["元気", "全力値"],
        customize: [
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 40,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 40,
                        effect: "元気+9"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: []
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: false,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "切磋琢磨",
        description: {
            base: {
                cost: ["体力/元気-1"],
                effect: "全力値+2\n山札か捨札にあるスキルカードを選択し、保留に移動\nスキルカード使用数追加+1\n指針固定1ターン\n（重複不可）"
            },
            plus1: {
                cost: [],
                effect: "全力値+3\n山札か捨札にあるスキルカードを選択し、保留に移動\nスキルカード使用数追加+1\n指針固定1ターン\n（重複不可）"
            },
            plus2: {
                cost: [],
                effect: "元気+3\n全力値+3\n山札か捨札にあるスキルカードを選択し、保留に移動\nスキルカード使用数追加+1\n指針固定1ターン\n（重複不可）"
            },
            plus3: {
                cost: [],
                effect: "元気+5\n全力値+3\n山札か捨札にあるスキルカードを選択し、保留に移動\nスキルカード使用数追加+1\n指針固定1ターン\n（重複不可）"
            }
        },
        tags: ["全力値", "スキルカード使用数追加", "指針固定"],
        customize: [
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+5"
                    }
                ]
            },
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "手札のパラメータ値増加+5"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "タフネス",
        description: {
            base: {
                cost: ["体力/元気-5"],
                effect: "温存になった回数が2回以上の場合、使用可\n温存に変更\nスキルカード使用数追加+1\nアクティブスキルカードのパラメータ値増加+14・コスト値増加+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-4"],
                effect: "温存になった回数が2回以上の場合、使用可\n温存に変更\nスキルカード使用数追加+1\nアクティブスキルカードのパラメータ値増加+18・コスト値増加+1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-3"],
                effect: "温存になった回数が2回以上の場合、使用可\n温存に変更\nスキルカード使用数追加+1\nアクティブスキルカードのパラメータ値増加+18・コスト値増加+1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-2"],
                effect: "温存になった回数が2回以上の場合、使用可\n温存に変更\nスキルカード使用数追加+1\nアクティブスキルカードのパラメータ値増加+18・コスト値増加+1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["スキルカード使用数追加", "アクティブスキルカードのパラメータ値増加", "コスト値増加"],
        customize: [
            {
                kind: "温存+",
                grades: [
                    {
                        cost: 70,
                        effect: "温存2段階目に変更"
                    }
                ]
            },
            {
                kind: "条件変更",
                grades: [
                    {
                        cost: 70,
                        effect: "温存になった回数が1回以上の場合、使用可"
                    }
                ]
            }
        ],
        rarity: "SR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "翔び立て！",
        description: {
            base: {
                cost: ["体力/元気-6"],
                effect: "全力値+3\nパラメータ+10（このレッスン中に増加した全力値の100%分パラメータ効果量増加）\n[成長]\n全力になった時、このスキルカードのパラメータ値増加+20（レッスン中1回）\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["ｰ5"],
                effect: "全力値+4\nパラメータ+10（このレッスン中に増加した全力値の150%分パラメータ効果量増加）\n[成長]\n全力になった時、このスキルカードのパラメータ値増加+30（レッスン中1回）\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["ｰ4"],
                effect: "全力値+4\nパラメータ+10（このレッスン中に増加した全力値の150%分パラメータ効果量増加）\n[成長]\n全力になった時、このスキルカードのパラメータ値増加+30（レッスン中1回）\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["ｰ3"],
                effect: "全力値+4\nパラメータ+10（このレッスン中に増加した全力値の150%分パラメータ効果量増加）\n[成長]\n全力になった時、このスキルカードのパラメータ値増加+30（レッスン中1回）\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["全力値"],
        customize: [
            {
                kind: "温存追加",
                grades: [
                    {
                        cost: 70,
                        effect: "次のターン、温存に変更"
                    }
                ]
            },
            {
                kind: "パラメータ上昇回数+",
                grades: [
                    {
                        cost: 100,
                        effect: "パラメータ+10\n（このレッスン中に増加した全力値の150%分\nパラメータ効果量増加）\n(2回)"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "総合芸術",
        description: {
            base: {
                cost: ["体力/元気-7"],
                effect: "いずれかの指針の場合、使用可\n強気に変更\nパラメータ+7\n[成長]\n指針を変更するたび、このスキルカードのパラメータ値増加+15（レッスン中4回）\n（重複不可）"
            },
            plus1: {
                cost: ["体力/元気-7"],
                effect: "いずれかの指針の場合、使用可\n強気に変更\nパラメータ+10\n[成長]\n指針を変更するたび、このスキルカードのパラメータ値増加+20（レッスン中4回）\n（重複不可）"
            },
            plus2: {
                cost: ["体力/元気-6"],
                effect: "いずれかの指針の場合、使用可\n強気に変更\nパラメータ+10\n[成長]\n指針を変更するたび、このスキルカードのパラメータ値増加+20（レッスン中4回）\n（重複不可）"
            },
            plus3: {
                cost: ["体力/元気-5"],
                effect: "いずれかの指針の場合、使用可\n強気に変更\nパラメータ+10\n[成長]\n指針を変更するたび、このスキルカードのパラメータ値増加+20（レッスン中4回）\n（重複不可）"
            }
        },
        tags: ["パラメータ"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-5"
                    }
                ]
            },
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+22"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: false,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "心・技・体",
        description: {
            base: {
                cost: ["体力/元気-8"],
                effect: "強気2段階目に変更\nパラメータ+7\n全力値+3\n消費体力減少2ターン\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-8"],
                effect: "強気2段階目に変更\nパラメータ+16\n全力値+4\n消費体力減少4ターン\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-7"],
                effect: "強気2段階目に変更\nパラメータ+16\n全力値+4\n消費体力減少4ターン\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-6"],
                effect: "強気2段階目に変更\nパラメータ+16\n全力値+4\n消費体力減少4ターン\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["パラメータ", "全力値", "消費体力減少"],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+28"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-6"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "輝け！",
        description: {
            base: {
                cost: ["体力/元気-7"],
                effect: "全力値+3\n次のターン、温存に変更\n全力の場合、パラメータ+20（2回）\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-7"],
                effect: "全力値+4\n次のターン、温存2段階目に変更\n全力の場合、パラメータ+25（2回）\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-6"],
                effect: "全力値+4\n次のターン、温存2段階目に変更\n全力の場合、パラメータ+25（2回）\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-5"],
                effect: "全力値+4\n次のターン、温存2段階目に変更\n全力の場合、パラメータ+25（2回）\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["全力値"],
        customize: [
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "全力になった時、\nこのスキルカードのパラメータ値増加+3"
                    }
                ]
            },
            {
                kind: "レッスン中1回の制限削除",
                grades: [
                    {
                        cost: 40,
                        effect: "レッスン中1回"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "クライマックス",
        description: {
            base: {
                cost: ["体力/元気-10"],
                effect: "強気に変更\nパラメータ+14（2回）\n次のターン、温存に変更\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-10"],
                effect: "強気2段階目に変更\nパラメータ+19（2回）\n次のターン、温存2段階目に変更\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-9"],
                effect: "強気2段階目に変更\nパラメータ+19（2回）\n次のターン、温存2段階目に変更\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-8"],
                effect: "強気2段階目に変更\nパラメータ+19（2回）\n次のターン、温存2段階目に変更\n（レッスン中1回, 重複不可）"
            }
        },
        tags: [],
        customize: [
            {
                kind: "パラメータ+",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+25(2回)"
                    }
                ]
            },
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-8"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "全身全霊",
        description: {
            base: {
                cost: ["体力/元気-8"],
                effect: "強気に変更\n次に使用したスキルカードの消費体力を0にする\n(2回)\nスキルカード使用数追加+1\nスキルカードを3枚引く\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-8"],
                effect: "強気に変更\n次に使用したスキルカードの消費体力を0にする\n(2回)\nスキルカード使用数追加+2\nスキルカードを3枚引く\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-7"],
                effect: "強気に変更\n次に使用したスキルカードの消費体力を0にする\n(2回)\nスキルカード使用数追加+2\nスキルカードを3枚引く\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-6"],
                effect: "強気に変更\n次に使用したスキルカードの消費体力を0にする\n(2回)\nスキルカード使用数追加+2\nスキルカードを3枚引く\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["スキルカード使用数追加"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-6"
                    }
                ]
            },
            {
                kind: "元気追加",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+9"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Active",
        usablePlan: "Anomaly"
    },
    {
        name: "アイドルになります",
        description: {
            base: {
                cost: ["全力値消費3"],
                effect: "スキルカード使用数追加+1\n手札のパラメータ上昇回数増加+1\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["全力値消費3"],
                effect: "元気+4\n温存に変更\nスキルカード使用数追加+1\n手札のパラメータ上昇回数増加+1\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["全力値消費3"],
                effect: "元気+9\n温存に変更\nスキルカード使用数追加+1\n手札のパラメータ上昇回数増加+1\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["全力値消費3"],
                effect: "元気+14\n温存に変更\nスキルカード使用数追加+1\n手札のパラメータ上昇回数増加+1\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["スキルカード使用数追加", "手札のパラメータ上昇回数増加", "元気"],
        customize: [
            {
                kind: "全力値コスト値-",
                grades: [
                    {
                        cost: 40,
                        effect: "全力値消費2"
                    }
                ]
            },
            {
                kind: "元気+",
                grades: [
                    {
                        cost: 70,
                        effect: "元気+13"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "頂点へ",
        description: {
            base: {
                cost: ["体力/元気-9"],
                effect: "以降、ターン開始時、いずれかの指針の場合、すべてのスキルカードのパラメータ値増加+4\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力/元気-9"],
                effect: "すべてのスキルカードのパラメータ値増加+6\n以降、ターン開始時、いずれかの指針の場合、すべてのスキルカードのパラメータ値増加+4\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力/元気-8"],
                effect: "すべてのスキルカードのパラメータ値増加+6\n以降、ターン開始時、いずれかの指針の場合、すべてのスキルカードのパラメータ値増加+4\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力/元気-7"],
                effect: "すべてのスキルカードのパラメータ値増加+6\n以降、ターン開始時、いずれかの指針の場合、すべてのスキルカードのパラメータ値増加+4\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["すべてのスキルカードのパラメータ値増加"],
        customize: [
            {
                kind: "コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "-7"
                    }
                ]
            },
            {
                kind: "パラメータ追加",
                grades: [
                    {
                        cost: 70,
                        effect: "パラメータ+6"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "覚悟",
        description: {
            base: {
                cost: ["体力消費4"],
                effect: "元気+8\n全力値+5\n山札か捨札にあるスキルカードを選択し、保留に移動\n（レッスン中1回, 重複不可）"
            },
            plus1: {
                cost: ["体力消費3"],
                effect: "元気+8\n全力値+7\n山札か捨札にあるスキルカードを選択し、保留に移動\n（レッスン中1回, 重複不可）"
            },
            plus2: {
                cost: ["体力消費2"],
                effect: "元気+8\n全力値+7\n山札か捨札にあるスキルカードを選択し、保留に移動\n（レッスン中1回, 重複不可）"
            },
            plus3: {
                cost: ["体力消費1"],
                effect: "元気+11\n全力値+7\n山札か捨札にあるスキルカードを選択し、保留に移動\n（レッスン中1回, 重複不可）"
            }
        },
        tags: ["元気", "全力値"],
        customize: [
            {
                kind: "成長追加",
                grades: [
                    {
                        cost: 70,
                        effect: "保留にあるスキルカードの\nパラメータ値増加+5"
                    }
                ]
            },
            {
                kind: "体力消費コスト値-",
                grades: [
                    {
                        cost: 20,
                        effect: "体力消費2"
                    }
                ]
            }
        ],
        rarity: "SSR",
        isExcludes: true,
        isCopyLimited: true,
        cardType: "Mental",
        usablePlan: "Anomaly"
    },
    {
        name: "眠気",
        description: {
            base: {
                cost: [],
                effect: "効果なし"
            }
        },
        tags: [],
        customize: [],
        rarity: "N",
        isExcludes: false,
        isCopyLimited: false,
        cardType: "Trouble",
        usablePlan: "Free"
    }
] as const satisfies Skillcard[]
