import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/index';

import App from './App.jsx';
import './index.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={client}>
				<ContextProvider>
					<App />
				</ContextProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
