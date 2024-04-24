import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Input = React.forwardRef(({ id, label, type, ...rest }, ref) => {
	const [isFocused, setIsFocused] = React.useState(false);
	const [haveValue, setHaveValue] = React.useState(false);
	const [inputType, setInputType] = React.useState(type);
	const [show, setShow] = React.useState(!(inputType === 'password'));
	const [value, setValue] = React.useState('');

	React.useLayoutEffect(() => {
		value.length > 0 ? setHaveValue(true) : setHaveValue(false);
	}, [isFocused]);

	const showPass = () => {
		setShow(!show);
		setInputType(inputType === 'password' ? 'text' : type);
	};

	return (
		<div className='relative flex w-full max-sm:mr-0 mr-2'>
			<input
				type={inputType}
				id={id}
				{...rest}
				ref={ref}
				className='peer w-full bg-transparent border dark:focus:border-[#22C55E] rounded-md border-[#bfc4ca] dark:border-[#334155] p-2 placeholder:text-transparent outline-none  focus:border-[#22C55E]'
				placeholder=''
				value={value}
				onInput={e => setValue(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			{type === 'password' && (
				<div
					className='px-2 py-1 w-8 absolute right-1 top-2 rounded-md cursor-pointer pb-0 hover:bg-slate-100'
					onClick={showPass}
				>
					<FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
				</div>
			)}
			<label
				htmlFor={id}
				className={`absolute select-none left-1 ml-1 top-2.5 bg-white dark:bg-inDark px-1 text-[#94a3b8] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base text-xs sm:text-sm peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#22C55E] ${
					haveValue && !isFocused
						? 'text-md text-[#0ea5e9] -translate-y-5 ml-1 px-1'
						: ''
				}`}
			>
				{label}
			</label>
		</div>
	);
});

export default Input;
