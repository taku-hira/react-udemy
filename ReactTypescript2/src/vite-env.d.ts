/// <reference types="vite/client" />

import type { FC } from "react"

declare module "react" {
    type VFC<P = {}> = FC<P>
}
