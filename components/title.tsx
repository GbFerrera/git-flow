
interface TitleType {

    text: string
    description: string

}

export function Title({ text, description }: TitleType) {

    return (

        <div className="flex flex-col gap-2">

            <h1>{text} - esse foi o titulo recebido como prop</h1>

            <p>{description}</p>

        </div>

    )




}