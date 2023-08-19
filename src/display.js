import { useParams } from "react-router-dom"

export default function Display() {
    const { name } = useParams()

    const studentsList = [
        {
            name: "arun",
            gender: "male",
            marks: "20",
        }, {
            name: "jinusha",
            gender: "female",
            marks: "55",
        }, {
            name: "ramya",
            gender: "female",
            marks: "75",
        }, {
            name: "ajeesh",
            gender: "male",
            marks: "60",
        }, {
            name: "jaison",
            gender: "male",
            marks: "65",
        }, {
            name: "megha",
            gender: "female",
            marks: "49",
        }, {
            name: "thinushiya",
            gender: "female",
            marks: "80",
        }, {
            name: "raja",
            gender: "male",
            marks: "35",
        }, {
            name: "kumar",
            gender: "male",
            marks: "40",
        }, {
            name: "rose",
            gender: "female",
            marks: "75",
        },
        {
            name: "smith",
            gender: "male",
            marks: "90",
        }, {
            name: "warner",
            gender: "male",
            marks: "80",
        }, {
            name: "harleen deol",
            gender: "female",
            marks: "50",
        }, {
            name: "mithali",
            gender: "female",
            marks: "85",
        }, {
            name: "dhoni",
            gender: "male",
            marks: "99",
        },
    ]

    return (
        <>
            {
                studentsList.map((el, index) => {
                    return (
                        el.name === name ?
                            <ul key={index}>
                                <li>{el.name}</li>
                                <li>{el.gender}</li>
                                <li>{el.marks}</li>
                            </ul> : <></>
                    )
                })}
        </>
    )
}