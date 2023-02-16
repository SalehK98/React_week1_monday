import React from 'react'
import Child from '../Child/Child'


const kids = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
]

function Mother() {
    // const [num, setNum] = useState()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            backgroundColor: "skyblue",
            width: "1000px",
            height: "500px",
            margin: "20px auto"
        }}>
            <h1>A Tale of Five Balloons</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* {() => {
                    const arr = []
                    for (let i = 0; i < kids.length; i++) {
                        arr.push(<Child title={kids[i].name} color={kids[i].color} />)

                    }
                    return arr
                }}}*/}

                {/* {kids.map((el, idx) => <Child title={el.name} color={el.color} key={idx} />)} */}

                {/* <Child title={kids[0].name} color={kids[0].color} />
                <Child title={kids[1].name} color={kids[1].color} />
                <Child title={kids[2].name} color={kids[2].color} />
                <Child title={kids[3].name} color={kids[3].color} />
                <Child title={kids[4].name} color={kids[4].color} /> */}
                {(() => {
                    const children = []
                    for (let i = 0; i < kids.length; i++) {
                        children.push(<Child title={kids[i].name} color={kids[i].color} />)
                    }
                    return children
                })()}
            </div>
        </div>
    )
}

export default Mother