import styled from 'styled-components'
import useNote from '../../hooks/useNote'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useHistory } from 'react-router'

const NoteFormStyled = styled.form`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  background: ${(props) => (props.width ? props.width : '100%')};
  box-shadow: 0 12px 26px 0px rgba(16, 30, 115, 0.06);
  h2 {
    font-size: 20px;
  }
  input, textarea, button {
    width: 100%;
    border-radius: 8px 8px 0 0;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 3px solid #04091E;
    resize: none;
  }
  button {
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  button:hover {
    background-color: #04091E;
    color: white;
  }
  .error {
    border: 1px solid #ff0000ad;
    border-bottom: 3px solid #04091E;
  }
`
const NoteForm = ({ noteToEdit }) => {
  const history = useHistory()
  const isEdit = noteToEdit ? true : false
  const { noteList, addNote, updateNote } = useNote()
  const formik = useFormik({
    initialValues: {
      title: `${isEdit ? noteToEdit.title : ''}`,
      text: `${isEdit ? noteToEdit.text : ''}`
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Obligatorio'),
      text: Yup.string()
    }),
    onSubmit: (note) => {
      if(isEdit) {
        note['id'] = noteToEdit.id;
        updateNote(note)
        history.goBack()
      } else {
        note['id'] = noteList.length + 1;
        addNote(note)
      }
      formik.resetForm()
    }
  })
  return (
    <NoteFormStyled onSubmit={formik.handleSubmit} isEdit={isEdit}>
      <h2>{isEdit ? `Editando Nota #${noteToEdit.id}` : 'Registrar Nota'}</h2>
      <input
        placeholder="Title"
        type="text"
        name="title"
        className={`${formik.errors.title ? 'error' : ''}`}
        onChange={formik.handleChange}
        value={formik.values.title}
        error={formik.errors.title}
      />
      <textarea
        placeholder="Text"
        type="text"
        name="text"
        onChange={formik.handleChange}
        value={formik.values.text}
        rows="8"
      ></textarea>

      <button type="submit">{isEdit ? 'Editar' : 'Guardar'}</button>
    </NoteFormStyled>
  )
}

export default NoteForm
