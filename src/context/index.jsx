import { createContext, useState } from 'react';

export const Context = createContext({
	ids: [],
	setIds: () => {},
	selectAll: false,
	setSelectAll: () => {},
	deletePath: '',
	setDeletePath: () => {},
	modalOpen: false,
	setModalOpen: () => {},
	isAuthentificated: false,
	setIsAuthentificated: () => {},
});

export const ContextProvider = ({ children }) => {
	const [ids, setIds] = useState([]);
	const [selectAll, setSelectAll] = useState(false);
	const [deletePath, setDeletePath] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [isAuthentificated, setIsAuthentificated] = useState(false);
	return (
		<Context.Provider
			value={{
				ids,
				setIds,
				selectAll,
				setSelectAll,
				deletePath,
				setDeletePath,
				modalOpen,
				setModalOpen,
				isAuthentificated,
				setIsAuthentificated,
			}}
		>
			{children}
		</Context.Provider>
	);
};
