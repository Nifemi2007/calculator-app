function button({text, dark}) {
    return <div className="button" style={{backgroundColor:dark ? "#252525":""}}>
        <p>{text}</p>
    </div>
}

export default button