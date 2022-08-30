import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../../App.tsx';
import '../../index.css';

const root = document.createElement('div') as HTMLDivElement;
root.id = 'crx-root';
document.body.append(root);
createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
