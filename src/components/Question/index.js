import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './index.css';
const Question = ({ title, info }) => {
	const [showAnswers, setShowAnswers] = useState(false);
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button onClick={() => setShowAnswers(!showAnswers)} className="btn">
					{showAnswers ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showAnswers && <p>{info}</p>}
		</article>
	);
};

export default Question;
