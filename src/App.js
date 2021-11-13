import React from 'react'
import Courses from './components/Courses';

import './App.css';

const basic = {
  type: "Basic",
  courses: [
    {
      id: 1,
      title: "Object Oriented-Programming in C++",
      image: "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/bf4dca390c5742bda4dbf6344e859eb9.jpg",
      description: "The complete C++ Programing Course for Beginners.",
    },
    {
      id: 2,
      title: "Computer Communication & Network",
      image: "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/c6b8d5cfe9ff4b56887e8751d37a1c61.png",
      description: "The complete C++ Programing Course for Beginners.",
    },
    {
      id: 3,
      title: "Computer software",
      image: "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/ec5c9eda632842eb9ad3146b4521e11a.png",
      description: "The complete C++ Programing Course for Beginners.",
    },
    {
      id: 4,
      title: "Introduction to SQL",
      image: "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/adbef92753d242bcb79ca8f74cd615a5.jpg",
      description: "The complete C++ Programing Course for Beginners.",
    }
  ]
}
const advance = {

  type: "Advance",
  courses: [
    {
      id: 1,
      title: "Data Structure and Algorithms",
      image: "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/e0a85ff6c0c64720ad582bdec3741cd1.jpg",
      description: "The complete C++ Programing Course for Beginners.",
    },
    {
      id: 2,
      title: "Advanced C++",
      image: "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/37a8e25c3ada4cb0bc3b0b32a36881fe.jpg",
      description: "The complete C++ Programing Course for Beginners.",
    },
    {
      id: 3,
      title: "Advanced algorithms",
      image: "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/8396de4f1f30479aac948a0ac0ca22da.jpg",
      description: "The complete C++ Programing Course for Beginners.",
    },
    {
      id: 4,
      title: "C++ Standard Template Library",
      image: "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/7be5719f67c943288b0e601bc2f55fb6.jpg",
      description: "The complete C++ Programing Course for Beginners.",
    }
  ]
}

function App() {
  return (
    <React.Fragment>
      <Courses item={basic} name="A" />
      <Courses item={advance} />
    </React.Fragment>
  );
}

export default App;
