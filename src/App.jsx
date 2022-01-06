import Board from './components/Board';

function App (props) {
  return (
    <section>
      <Board rows={5} cols={5}/>
    </section>
  );
}

export default App;
