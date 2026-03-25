import { cva } from "class-variance-authority"

export const morphingSquareVariants = cva("flex gap-2 items-center justify-center", {
    variants: {
        messagePlacement: {
            bottom: "flex-col",
            top: "flex-col-reverse",
            right: "flex-row",
            left: "flex-row-reverse",
        },
    },
    defaultVariants: {
        messagePlacement: "bottom",
    },
})
