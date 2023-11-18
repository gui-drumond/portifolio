import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react'
type CharacterAnimationContextProps = {
  setAnimationIndex: Dispatch<SetStateAction<number>>
  setAnimations: Dispatch<SetStateAction<string[]>>
  animations: string[]
  animationIndex: number
}
const CharacterAnimationContext = createContext(
  {} as CharacterAnimationContextProps
)
type CharacterAnimationProviderProps = {
  children: ReactNode
}

export function CharacterAnimationProvider(
  props: CharacterAnimationProviderProps
) {
  const [animationIndex, setAnimationIndex] = useState(0)
  const [animations, setAnimations] = useState<string[]>([])

  return (
    <CharacterAnimationContext.Provider
      value={{ animationIndex, setAnimationIndex, animations, setAnimations }}
    >
      {props.children}
    </CharacterAnimationContext.Provider>
  )
}

export const UseCharacterAnimations = () =>
  useContext(CharacterAnimationContext)
