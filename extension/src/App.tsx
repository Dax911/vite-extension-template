import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from './packages/components/buttons/Button';
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={chrome.runtime.getURL('/vite.svg')} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={chrome.runtime.getURL(reactLogo)} className="logo react" alt="React logo" />
				</a>
				<Button label="Test" />
			</div>
			<h1>Vite + React + ACME!</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default App
