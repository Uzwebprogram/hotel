import { GlobalStyle, WrapperContainer} from "../../../App-styled"
import {Wrapper,Bigdiv, First,Second,Smaller,Smallest,Text} from "./styled-index"
import { useTranslation } from "react-i18next"

function Terms() {
    const { t, i18n } = useTranslation()
    return (
        <>
          <Wrapper>
            <WrapperContainer>
                        <h3>Условия проживания</h3>
                    <Bigdiv>
                        <First>
                            <p>Правила проживания в отеле являются общими и могут меняться 
                          в зависимости от выбранного типа размещения.Разрешается проживание детей любого возраста. Дети в возрасте 12 лет и старше считаются взрослыми.Допускается размещение домашних животных. Данная услуга может быть платной.</p>
                            <h5>Правила отмены бронирования</h5>
                           <p>Правила отмены бронирования и предоплаты зависят от выбранного тарифного плана.Пожалуйста, введите даты проживания и ознакомтесь с условиями бронирования.Базовый тарифный план:Вы можете бесплатно отменить бронирование в срок до 24 часов до заезда.Невозвратный тарифный план:Вы вносите предоплату в размере полной стоимости проживания в день бронирования.В случае отмены бронирования, предоплата не возвращается.</p>
                        </First>
                        <Second>
                        <Smaller>
                        <h5>Регистрация заезда</h5>
                          <h6>14:00</h6>
                        </Smaller>
                        <Smallest>
                            <h5>Регистрация выезда</h5>
                            <h6>12:00</h6>
                        </Smallest>
                        <Text>
                        <h5>Правила и условия</h5>
                        <p>Правила отмены бронирования и предоплаты зависят от выбранного тарифного плана.Пожалуйста, введите даты проживания и ознакомтесь 
с условиями бронирования.Базовый тарифный план:Вы можете бесплатно отменить бронирование в срок до 24 часов до заезда.Невозвратный тарифный план:Вы вносите предоплату в размере полной стоимости проживания в день бронирования.В случае отмены бронирования, предоплата не возвращается.</p>
                        </Text> 

                        </Second>

                        </Bigdiv>
                      
            </WrapperContainer>
            </Wrapper>
        </>
    )
}
export default Terms