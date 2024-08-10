import dayjs from "dayjs";
import Calendar from "./Calendar";

function App() {
	return (
		<div className="App">
			<Calendar value={dayjs("2024-8-10")} locale="en-US"></Calendar>
		</div>
	);
}

export default App;
