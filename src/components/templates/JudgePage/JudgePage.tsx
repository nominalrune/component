import { JudgeForm, SelectSchoolForm } from '../..'
import { useState } from 'react'

export default function JudgePage() {
	const [book, setBook] = useState<book>();
	return (
		<>
			<SelectSchoolForm setBook={setBook} />
			{!!book && <JudgeForm book={book} />}
		</>
	)
}