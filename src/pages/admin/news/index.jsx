import React, { useContext } from 'react'
import { Wrapper , WrapperTop , Gallerys , WrapperCard } from './index-styled'
import HotelModalFormComponent from '../../../components/admin/OurHotelComp/modal-form/index';
import HotelDeletPutComponent from '../../../components/admin/OurHotelComp/PutDeletComponent/index';
import { HotelOurContext } from '../../../context/our-hotel';
import NewsModalFormComponent from '../../../components/admin/NewsComp/modal-form';
import NewsDeletPutComponent from '../../../components/admin/NewsComp/PutDeletComponent';

const News = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {HotelOurMap} = useContext(HotelOurContext)
  return (
    <Wrapper>
        <WrapperTop>
            <h2>Отзывы посетителей</h2>
            <button onClick={handleOpen}> добавить</button>
        </WrapperTop>
        <NewsModalFormComponent open={open} handleClose={handleClose}/>
        
        <Gallerys>
                {HotelOurMap.map((elem , index) =>
                    <WrapperCard key={index}>
                        <li>
                          <img  src={elem.image_room} width={300} height={380} alt="room" />
                          <h3>{elem.title_room}</h3>
                          <p>Площадь: {elem.area_room}</p>
                          <p>Количество гостей: {elem.number_guests}</p>
                          <p>Стоимость за 1 ночь: {elem.cost_night}</p>
                        </li>
                    <NewsDeletPutComponent DeleteId={elem.rooms_id} PutBlog={elem.rooms_id} Element={elem}/>
                    </WrapperCard>
                )}
        </Gallerys>
    </Wrapper>
   )
}

export default News