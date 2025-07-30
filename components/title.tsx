
interface TitleType {

    text: string
    description: string

}

export function Title({ text, description }: TitleType) {

    return (

        <div className="flex flex-col gap-2 bg-red">

            <h1 className="text-2xl font-bold">{text} - esse foi o titulo recebido como prop</h1>

            <p className="font-light">{description}</p>

        </div>

    )




}