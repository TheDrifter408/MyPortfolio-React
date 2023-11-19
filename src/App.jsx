import { useRef, useEffect } from 'react'
import Header from './components/Header'
import content from './content.json';
import Card from './components/Card';
import './App.css'
import Footer from './components/Footer';
function App() {
  {/* To capture multiple dom elements an array is used */}
  const myRefs = useRef([]);
  myRefs.current = [];
  {/* Therefor a function is required to input the selected elements in to the array */}
  const inputRef = (el) => {
    if(el && !myRefs.current.includes(el)){
      myRefs.current.push(el)
    }
  };
  console.log(myRefs.current);
  {/* useEffect has to be used when an element's property changes */}
  useEffect(()=> {
    {/*This callback function is used to use the IntersectionObserver API to add classes for animation in the DOM*/}
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add("show");
          }
        })
      }
    );
    myRefs.current.forEach(
      (element) => observer.observe(element)
      );
  },[])

  let career = content.filter((content) => content.id === "career");
  let education = content.filter((content) => content.id === "education");
  let loveDoing = content.filter((content) => content.id === "loveDoing");
  let skills = content.filter((content) => content.id === "skills");
  return (
    <>
     <Header />
     <main>
      <section>
        <div className="greeting-image-container">
          <img className="pencil" src="/pencil-svg.svg" alt="" />
          <img className="scribble" src="/scribble-svg.svg" alt="" />
        </div>
        <h1>
          Hi, My Name is <span>Noor Ullah Al Noor</span>
        </h1>
      </section>
      <Card ref={inputRef} images={career[0].img} content={career[0]} />
      <Card ref={inputRef} images={education[0].img} content={education[0]} />
      <Card ref={inputRef} images={loveDoing[0].img} content={loveDoing[0]} />
      <Card ref={inputRef} images={skills[0].img} content={skills[0]} />
     </main>
     <Footer />
    </>
  )
}

export default App
