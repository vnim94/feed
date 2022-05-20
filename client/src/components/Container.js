function Container({ children }) {
    return (
        <div className="flex flex-row justify-center">
            <div className="max-w-7xl grid grid-cols-[1fr_2.5fr_1.5fr]">
                {children}
            </div>
        </div>
    )
}

export default Container;