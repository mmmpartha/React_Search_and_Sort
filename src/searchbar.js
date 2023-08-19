import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import Display from "./display";

export default function Searchbar() {

  const navigate = useNavigate()

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

  const [student, setStudent] = useState(studentsList)
  const [sort, setSort] = useState("dece")

  function input(e) {
    const value = e.target.value
    if (value !== "") {
      const viewdetails = studentsList.filter((student) => {
        return student.name.toLowerCase().startsWith(value.toLowerCase())
      })
      setStudent(viewdetails)
    } else {
      setStudent(studentsList)
    }
  }

  const Table = (detail) => {
    if (sort === "dece") {
      const tableace = [...student].sort((ele1, ele2) =>
        ele1[detail].toLowerCase() > ele2[detail].toLowerCase() ? 1 : -1
      )
      setStudent(tableace)
      setSort("ace")
    } else if (sort === "ace") {
      const tabledece = [...student].sort((ele1, ele2) =>
        ele1[detail].toLowerCase() < ele2[detail].toLowerCase() ? 1 : -1
      )
      setStudent(tabledece)
      setSort("dece")
    }
  }

  return (
    <>
      <input type="search" placeholder="Search" onChange={input} />
      <table border={2}>
        <thead>
          <tr>
            <th onClick={() => Table('name')}>student Name</th>
            <th onClick={() => Table('gender')}>student Gender</th>
            <th onClick={() => Table('marks')}>student Marks</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((student, index) => {
              return (
                <tr key={index}>
                  <td onClick={() => navigate(`/display/${student.name}`)}>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.marks}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
