import React, {createContext} from "react"

type PageFocusType = {
    pageFocus: string | null,
    setPageFocus: React.Dispatch<React.SetStateAction<string | null>>
}

const PageFocusState = {
    pageFocus: null,
    setPageFocus: () => {}
}

const PageFocus = createContext<PageFocusType>(PageFocusState)

export default PageFocus