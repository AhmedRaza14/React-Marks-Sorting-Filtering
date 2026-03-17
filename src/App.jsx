import { useState } from "react"
import "./App.css"


function App() {
  const studentsData = [
    { name: "Ali", subject: "Math", marks: 85 },
    { name: "Sara", subject: "Physics", marks: 92 },
    { name: "Ahmed", subject: "Math", marks: 78 },
    { name: "Zain", subject: "Chemistry", marks: 88 },
    { name: "Hina", subject: "Physics", marks: 81 }
  ]

  const [student, setStudent] = useState(studentsData)

  const descending = () => {
    const sorted = [...student].sort((a, b) => b.marks - a.marks)
    setStudent(sorted)
  }

  const ascending = () => {
    const sorted = [...student].sort((a, b) => a.marks - b.marks)
    setStudent(sorted)
  }

  const filtering = () => {
    const input = prompt('Enter Subject')

    const filtered = studentsData.filter(s =>
      s.subject.toLowerCase() === input.toLowerCase()
    )

    setStudent(filtered)
  }

  return (
    <div>

    <div className="app">
      <header className="header">
        <h1>Student Marks</h1>
        <p className="subtitle">Sort and filter student marks by subject.</p>
      </header>

      <section className="card">
        <div className="table-wrapper">
          <table className="marks-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              {student.map((s, index) => (
                <tr key={index}>
                  <td>{s.name}</td>
                  <td>{s.subject}</td>
                  <td>{s.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="button-row">
          <button className="btn" onClick={filtering}>
            Filter
          </button>
          <button className="btn" onClick={descending}>
            Descending
          </button>
          <button className="btn" onClick={ascending}>
            Ascending
          </button>
        </div>
      </section>
    </div>
              </div>
  )
}

export default App