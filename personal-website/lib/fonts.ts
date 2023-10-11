import { Caveat, Fira_Code, Raleway, DynaPuff } from "next/font/google"

const raleway = Raleway({ subsets: ['latin'] })
const caveat = Caveat({ subsets: ['latin'] })
const fira = Fira_Code({ subsets: ['latin'] })
const dianaPuff = DynaPuff({ subsets: ['latin']})

const fonts: {
  [key: string]: string
} = {
  raleway: raleway.className,
  caveat: caveat.className,
  fira: fira.className,
  dianaPuff: dianaPuff.className,
}

export default fonts;