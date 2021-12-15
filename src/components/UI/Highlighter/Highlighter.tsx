interface IHighlighter {
    children: string
}

export const Highlighter = ( { children }:IHighlighter ) => {
    return (
        <span
            className="
            bg-zinc-400 text-slate-700 p-1 rounded-md
        ">
            { children }
        </span>
    )
}
