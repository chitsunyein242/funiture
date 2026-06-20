import * as React from "react"
import { Controller, type ControllerProps, type FieldPath, type FieldValues } from "react-hook-form"

import { cn } from "@/lib/utils"

// Minimal Base-UI-ish form primitives compatible with react-hook-form
// Used by src/components/news-letter.tsx

const Form = ({ ...props }: React.FormHTMLAttributes<HTMLFormElement>) => {
    return <form {...props} />
}

type FormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    control: ControllerProps<TFieldValues>["control"]
    name: TName
    render: ControllerProps<TFieldValues>["render"]
}

function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
    props: FormFieldProps<TFieldValues, TName>
) {
    const { control, name, render } = props
    return <Controller control={control} name={name} render={render} />
}

function FormItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("space-y-2", className)} {...props} />
}

function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
    return <label className={cn("text-sm font-medium leading-none", className)} {...props} />
}

function FormControl({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("grid", className)} {...props} />
}

function FormMessage({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-sm text-destructive", className)} {...props}>
            {children}
        </p>
    )
}

export { Form, FormControl, FormField, FormItem, FormLabel, FormMessage }

