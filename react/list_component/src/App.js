// import logo from './logo.svg';
import './App.css';
// import MovieComponent from './MovieComponent';
// import TodoComponent from './TodoComponent';
// import PriceComponent from './PriceComponent';

function App() {
  // const movieList = [
  //   { title: "기생충", open: "2019.10.11", poster: "https://i.namu.wiki/i/CQUpS9jx-Wxnvq-r7to8bl4Ly9-KMmR119Ztxs-M8yHcWe3rxmQIAvyiScHGREhtt0en67gfPzSMHBIdmouG4P2gNqeocodl0xH3zqzGdQr1_8sUIOKyvJWWldUeI3mZjzxralF86IjMjMIimfSsDg.webp", posterAlt: "기생충 포스터" },
  //   { title: "에이리언", open: "2024.08.14", poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg", posterAlt: "에이리언 포스터" },
  //   { title: "트위스터스", open: "2024.08.14", poster: "https://img.megabox.co.kr/SharedImg/2024/07/12/vnc6yDiS1ll8qlhyqSBD9vAqISkyRez3_420.jpg", posterAlt: "트위스터스 포스터" },
  // ];

  // const todoList = [
  //     {taskName: "공부하기", finished: false},
  //     {taskName: "운동하기", finished: true},
  // ];

  // const priceList = [1000, 2000, 3000, 4000, 5000];

  const LangList = ["JavaScript", "Python", "Java", "C++", "C#"];

  return (
    <div>
      {/* {
        movieList.map(movie =>
          <MovieComponent title={movie.title} open={movie.open} poster={movie.poster} posterAlt={movie.posterAlt}/>)
      } */}

      {/* {
        todoList.map(todo =>
          <TodoComponent taskName={todo.taskName} finished={todo.finished}/>)
      } */}

      {/* <h1>가격 목록</h1>
      {
        priceList.map((price, index) =>
          <PriceComponent price={price} key={index}/>
        )
      } */}

      {
        LangList.map((lang, index) =>
          // 왜 key를 li가 아닌 ul에 넣어야 하는가?
          // ul이 반복되는 요소이기 때문에 ul에 key를 넣어야 한다.
          // li에 key를 넣으면 li가 반복되는 요소가 되기 때문에 에러가 발생한다.
          <ul key={index}>
            <li>{lang}</li>
          </ul>
        )
      }

    </div>
  );
}

export default App;
