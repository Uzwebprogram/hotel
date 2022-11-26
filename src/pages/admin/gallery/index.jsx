import React from 'react'
import { Wrapper , WrapperTop } from './index-styled'
import ModalFormComponent from '../../../components/admin/galleryComp/modal-form';
const Gallery = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Wrapper>
        <WrapperTop>
            <h2>Галерея</h2>
            <button onClick={handleOpen}>Галерея добавить</button>
        </WrapperTop>
        <ModalFormComponent open={open} handleClose={handleClose}/>
    </Wrapper>
   )
}

export default Gallery