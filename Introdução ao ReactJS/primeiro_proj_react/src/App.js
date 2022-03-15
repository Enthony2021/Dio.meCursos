
function soma(a,b) {
  return a+b;
}

function primeiroJSX() {
  return (
    <div>
      <h3 class="nome">Enthony Stevie - Introdução ao React</h3>
      <p>Soma: {soma(5,5)}</p>
    </div>
  );
}


function App() {
  return (
    <>
      {primeiroJSX()}
    </>
  );
}

export default App;
