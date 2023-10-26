
import Api from './Api.js'

function Data() {

    const[data, setData] = useState(Api)
    return (
        <div className="Data">
            {data && data.map((x)=>{
                return(
                    <div>
                        <h3>{x.length} birthdays today</h3>
                    
                        <section key={x.id}>
                            <p></p>
                        </section>

                        <button onClick={() => setData([])}>Clear</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Data
