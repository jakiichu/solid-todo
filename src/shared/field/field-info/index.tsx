import {FieldApi} from "@tanstack/solid-form";

interface FieldInfoProps {
    field: FieldApi<any, any, any, any>
}

const FieldInfo = ({field}: FieldInfoProps) => {
    return (
        <>
            {field.state.meta.isTouched &&
            field.state.meta.errors.length ? (
                <em>{field.state.meta.errors.join(',')}</em>
            ) : null}
            {field.state.meta.isValidating ? 'Validating...' : null}
        </>
    )
}
export default FieldInfo