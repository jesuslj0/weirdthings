import { ReactNode } from "react"
import { Router } from "../App.router"

interface Props {
    children?: ReactNode
}

export const Providers = ({children}: Props) => {

    return <Router>{children}</Router>;
}