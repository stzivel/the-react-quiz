import {
  Header,
  Main,
  Loader,
  Error,
  StartScreen,
  Question,
  NextButton,
  Progress,
  FinishScreen,
  Footer,
  Timer,
} from "./components";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { status, questions, index } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question question={questions[index]} />

            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
