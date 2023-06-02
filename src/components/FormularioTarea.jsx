import { Button, Form } from 'react-bootstrap';
import React from 'react'
import ListaTareas from './ListaTareas'
import { useState, useEffect } from 'react';

const FormularioTarea = () => {
	const tareasDelLocalStotage = JSON.parse(localStorage.getItem('listaTareas'))
	const [tarea, setTarea] = useState('')
	const [ListadoTareas, setListadoTareas] = useState(tareasDelLocalStotage || [])

	const handleSubmit = (e) => {
		e.preventDefault()
		setListadoTareas([...ListadoTareas, tarea])
		setTarea('')
	}

	const borrarTarea = (nombreTarea) => {
		let copiaListaTareas = ListadoTareas.filter(itemTarea => itemTarea !== nombreTarea)
		setListadoTareas(copiaListaTareas)
	}

	useEffect(()=> localStorage.setItem('listaTareas', JSON.stringify(ListadoTareas)), [ListadoTareas])

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3 d-flex" controlId="tarea">
					<Form.Control type="text" className='me-3' placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
					<Button variant='primary'>Agregar</Button>
				</Form.Group>
			</Form>
			<ListaTareas tareas = {ListadoTareas} borrarTarea = {borrarTarea}></ListaTareas>
		</>
	);
};

export default FormularioTarea;