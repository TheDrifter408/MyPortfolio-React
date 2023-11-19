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
          <svg className="scribble" width="300px" height="300px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.06006 2.33428C3.98332 2.79741 2.63435 3.84932 1.94721 5.22359L1.05279 4.77637C1.86565 3.15065 3.41668 1.95255 4.66494 1.41565C4.9813 1.27958 5.29108 1.18022 5.57665 1.12893C5.85464 1.079 6.14804 1.06759 6.4102 1.14584C6.69332 1.23035 6.95239 1.42801 7.05474 1.76465C7.1463 2.06575 7.08315 2.38836 6.96424 2.68564C6.68147 3.39257 6.06816 4.19933 5.42689 4.9874C5.231 5.22814 5.03082 5.46905 4.83096 5.70959C4.35345 6.28428 3.87769 6.85686 3.4662 7.41996C2.87339 8.23116 2.49381 8.92111 2.42565 9.45401C2.39408 9.70085 2.43301 9.88815 2.52901 10.0424C2.62843 10.2022 2.82247 10.3799 3.19696 10.5404C4.30102 11.0135 5.74013 10.9655 7.17774 10.5684C7.22756 10.0412 7.34664 9.46675 7.51924 8.86264C8.05502 6.9874 9.27641 5.72172 10.4494 5.28183C11.0322 5.06329 11.672 5.02794 12.1919 5.33514C12.7336 5.65525 13 6.25867 13 6.99995C13 7.48007 12.8036 7.94672 12.517 8.36704C12.2279 8.79103 11.8246 9.20143 11.3528 9.58004C10.4931 10.27 9.36372 10.8882 8.15765 11.3092C8.17735 11.6365 8.24371 11.8914 8.34366 12.0807C8.46693 12.3142 8.65366 12.4742 8.94722 12.5564C9.25986 12.6438 9.71756 12.648 10.3648 12.4937C11.008 12.3403 11.8052 12.0384 12.7764 11.5528L13.2236 12.4472C12.2109 12.9536 11.339 13.2894 10.5968 13.4664C9.85861 13.6424 9.21455 13.6695 8.67783 13.5194C8.12204 13.3639 7.71182 13.0258 7.45932 12.5475C7.3099 12.2645 7.22167 11.9443 7.1803 11.6015C5.69653 11.9708 4.11599 12.0222 2.80304 11.4595C2.30253 11.245 1.91845 10.954 1.67998 10.5708C1.43809 10.1821 1.37936 9.75217 1.43373 9.32714C1.53744 8.51628 2.06411 7.64373 2.65881 6.82994C3.08968 6.24032 3.59792 5.6286 4.08371 5.0439C4.27865 4.80927 4.46998 4.57899 4.65124 4.35624C5.30684 3.55056 5.81853 2.85732 6.03576 2.31425C6.07864 2.20706 6.09255 2.13753 6.09668 2.09759C6.0354 2.08623 5.92424 2.0825 5.75343 2.11318C5.56049 2.14783 5.32496 2.22035 5.06006 2.33428ZM8.2324 10.2147C9.1842 9.83882 10.057 9.33778 10.7269 8.80014C11.1457 8.46407 11.4725 8.12386 11.6908 7.80368C11.9116 7.47984 12 7.20876 12 6.99995C12 6.49126 11.8289 6.28219 11.6831 6.19607C11.5155 6.09703 11.2178 6.06169 10.8006 6.21816C9.97359 6.52828 8.94498 7.5126 8.48076 9.13736C8.37066 9.52271 8.28757 9.88293 8.2324 10.2147Z" fill="#000000"/>
          </svg>
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
