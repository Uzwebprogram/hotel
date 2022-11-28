import React, { useContext } from 'react'
import { Wrapper , WrapperTop , Gallerys , WrapperCard } from './index-styled'
import HotelModalFormComponent from '../../../components/admin/OurHotelComp/modal-form/index';
import HotelDeletPutComponent from '../../../components/admin/OurHotelComp/PutDeletComponent/index';
import { HotelOurContext } from '../../../context/our-hotel';

const OurHotel = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {HotelOurMap} = useContext(HotelOurContext)
  return (
    <Wrapper>
        <WrapperTop>
            <h2>Номера в нашем отеле</h2>
            <button onClick={handleOpen}> добавить</button>
        </WrapperTop>
        <HotelModalFormComponent open={open} handleClose={handleClose}/>
        
        <Gallerys>
                {HotelOurMap.map((elem , index) =>
                    <WrapperCard key={index}>
                    <img src={elem.image_galery} alt="images galery" width={450} height={300} />
                    <HotelDeletPutComponent DeleteId={elem.galery_id} PutBlog={elem.galery_id} Element={elem}/>
                    </WrapperCard>
                )}
        </Gallerys>
    </Wrapper>
   )
}

export default OurHotel